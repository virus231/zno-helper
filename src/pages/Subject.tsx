import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";
import {getUserStatistics, getStatisticBySubject, getTestsBySubject } from '../api/testsApi';
import { getAllStats, getStatsBySubject } from '../store/actions/statistics.actions';
import { authSelector, statisticsSelector } from '../store/selectors';
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgress } from '@material-ui/core';



function Subject({match:{params}}) {
    const { token } = useSelector(authSelector)
    const { stats } = useSelector(statisticsSelector)

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [allTests, setAllTests] = useState([])
    const [tests, setTests] = useState([])
    const [totalQuestions, setTotalQuestions] = useState(0)
    const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0)

    const getStatistic = async () => {
        setLoading(true)
        console.log(params.id.toUpperCase())
        const res = await getStatisticBySubject(params.id.toUpperCase())
        const totalQuestions = res.reduce((prev, cur) => prev + cur.total, 0);
        const totalCorrectAnswers = res.reduce((prev, cur) => prev + cur.correct,0)
        setTotalQuestions(totalQuestions)
        setTotalCorrectAnswers(totalCorrectAnswers)
        setAllTests(res)
        setLoading(false)
        console.log("statisctic for diagram", res)
    }

    const getTests = async () => {
        setLoading(true)
        const testsResponse = await getTestsBySubject(params.id.toUpperCase());
        // @ts-ignore
        setTests(testsResponse)
        setLoading(false)
    }


    React.useEffect(() => {
        if(token)
            dispatch(getAllStats())
            dispatch(getStatsBySubject(params.id.toUpperCase()))
        getStatistic()
        getTests()
    }, [dispatch,token])

    const percentage = Number(((totalCorrectAnswers/ totalQuestions) * 100).toFixed(0));

    return (
        <section className="subjects mt-5">
            <Container>
                <Row>
                    <Col lg="4">
                        <h3>
                            {params.id.toUpperCase()}
                        </h3>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg="4">
                        <Link to={`/tests/${params.id}`}>
                            <Card>
                                <CardImg top src="https://source.unsplash.com/user/erondu/300x200" />
                                <CardBody className="text-center">
                                    <p>Всі Тести</p>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>

                    <Col lg="4">
                        <Card>
                            <CardImg top src="https://source.unsplash.com/300x200/?nature,water" />
                            <CardBody className="text-center">
                                <p>Мої тести</p>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Link to={`/create-test/${params.id}`}>
                            <Card>
                                <CardImg top src="https://source.unsplash.com/300x200/?nature" />
                                <CardBody className="text-center">
                                    <p>Створити тест</p>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>

                </Row>
                <Row>
                    <Col lg={9}>
                        {
                            loading  ?
                                <CircularProgress color="secondary" /> :
                                <Card>
                                    <div className="d-flex justify-content-around align-items-center p-3">
                                        <span className="d-flex flex-column align-items-center">
                                            <CircularProgressbar
                                                value={isNaN(percentage) ? 0 : percentage}
                                                text={`${isNaN(percentage) ? 0 : percentage}%`} />
                                            <p>Правильних відповідей в тестах</p>
                                        </span>
                                        <span className="d-flex flex-column align-items-center">
                                            <CircularProgressbar
                                                value={isNaN(percentage) ? 0 : percentage}
                                                text={`${isNaN(percentage) ? 0 : percentage}%`} />
                                            <p>Пройдених тестів</p>
                                        </span>
                                    </div>
                                </Card>
                        }

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Subject
