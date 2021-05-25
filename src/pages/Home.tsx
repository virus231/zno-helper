import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {SubjectCart} from "../components/SubjectCart";
import {Card, CardBody } from "shards-react";
import { getSubjects } from '../store/actions/subjects.actions';
import { useDispatch, useSelector } from 'react-redux';
import { subjectSelector } from '../store/selectors';
import { getAllSubject } from '../api/subjectApi';
import CircularProgress from '@material-ui/core/CircularProgress'

// const subjects = [
//     {name: "Історія України", img: "https://source.unsplash.com/user/erondu/300x200"},
//     {name: "Укр. література та мова", img: "https://source.unsplash.com/user/erondu/300x200"},
//     {name: "Математика", img: "https://source.unsplash.com/user/erondu/300x200"},
//     {name: "Біологія", img: "https://source.unsplash.com/user/erondu/300x200"},
//     {name: "Фізика", img: "https://source.unsplash.com/user/erondu/300x200"}
// ]

export const Home = () => {
    const dispatch = useDispatch()
    // const {subjects} = useSelector(subjectSelector)
    const [loading, setLoading] = React.useState(false)

    const [subjects, setSubjects] = React.useState([])

    React.useEffect(() => {
        const getSubject = async () => {
            setLoading(true)
            const subjectResponse = await getAllSubject();
            // @ts-ignore
            setSubjects(subjectResponse)
            setLoading(false)
        }
        getSubject()
    },[])

    console.log(subjects)




    return (
        <section className="home my-5">
            <Container className="">
                <Row>
                    <Col lg={4}>
                        <h2>Предмети</h2>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between flex-wrap mt-5">
                    {
                        subjects &&
                        !loading ? subjects.map((subject, index) => {
                            return (
                                <SubjectCart key={`${subject}_${index}`} subject={subject}/>
                            )
                        }) : <CircularProgress color="secondary" />
                    }
                    {/*<Col lg={4}>*/}
                    {/*    <Card className="mt-3 h-100">*/}
                    {/*        <div>*/}
                    {/*            <p className="wrap">*/}
                    {/*                <svg className="add" width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                    <circle cx="51" cy="51" r="51" fill="#567BF3" fill-opacity="0.1"/>*/}
                    {/*                    <path fillRule="evenodd" clipRule="evenodd" d="M50.4499 35.7002C49.3454 35.7002 48.4499 36.5956 48.4499 37.7002V48.4502H37.6999C36.5954 48.4502 35.6999 49.3456 35.6999 50.4502V51.5502C35.6999 52.6548 36.5954 53.5502 37.6999 53.5502H48.4499V64.3002C48.4499 65.4048 49.3454 66.3002 50.4499 66.3002H51.5499C52.6545 66.3002 53.5499 65.4048 53.5499 64.3002V53.5502H64.2999C65.4045 53.5502 66.2999 52.6548 66.2999 51.5502V50.4502C66.2999 49.3456 65.4045 48.4502 64.2999 48.4502H53.5499V37.7002C53.5499 36.5956 52.6545 35.7002 51.5499 35.7002H50.4499Z" fill="#567BF3"/>*/}
                    {/*                </svg>*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*        <CardBody className="text-center">*/}
                    {/*            <h5>Додати Предмет</h5>*/}
                    {/*        </CardBody>*/}
                    {/*    </Card>*/}
                    {/*</Col>*/}
                </Row>
            </Container>
        </section>
    )
}
