import CircularProgress from '@material-ui/core/CircularProgress'
import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchQuizQuestions, getTestsBySubject } from '../api/testsApi'
import AnswerCard from '../components/AnswerCard'
import Question from '../components/Question'
import { Spinner } from '../components/Spinner'
import background from '../assets/images/test-bg.jpg'
import { Difficulty, QuestionState, TestWrap } from '../utils/interfaces'


export type AnswerObject = {
    question: string;
    answer: any;
    correct: boolean;
    correctAnswer: any;
}

// const TOTAL_QUESTIONS = 10;

function Test({ match: { params: { subject, theme } } }) {
    const [loading, setLoading] = useState(false)
    const [tests, setTests] = useState<QuestionState[]>([])
    // const [questions, setQuestions] = useState<QuestionState[]>([])
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
    const [score, setScore] = useState(0)
    const [number, setNumber] = useState(0)

    const [gameOver, setGameOver] = useState(true)


    useEffect(() => {
        const getTests = async () => {
            setLoading(true)
            const testsResponse = await getTestsBySubject(subject);
            console.log(testsResponse)
            // @ts-ignore
            testsResponse.map(({ tests }) => {
                setTests(tests)
            })
            setLoading(false)
        }
        getTests()

    }, [])


    const startTrivial = async () => {
        setLoading(true)
        setGameOver(false)
        // const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
        // setQuestions(newQuestions)
        setScore(0)
        setUserAnswers([])
        setNumber(0)
        setLoading(false)
        console.log(tests)
    }

    const checkAnswer = (e: React.MouseEvent<HTMLElement>) => {
        if (!gameOver) {
            // Users answer
            const answer = e
            // Check answer against correct answer
            console.log(e)
            // console.log(tests[number].content.answer === answer)
            // @ts-ignore
            const correct = tests[number].content.answer === answer
            // Add score if answer is correct
            if (correct) setScore(prev => prev + 1)
            // Save answer in the array for user answers
            const answerObject = {
                question: tests[number].title,
                answer,
                correct,
                correctAnswer: tests[number].content.answer
            }
            setUserAnswers(prev => [...prev, answerObject])
        }
    }

    const nextQuestion = () => {
        // Move on to the next question if not the last question
        const nextQuestion = number + 1

        if (nextQuestion === tests.length) {
            setGameOver(true)
        } else {
            setNumber(nextQuestion)
        }
    }

    return (
        <section style={{ backgroundImage: `url(${background})` }} className="test d-flex align-items-center justify-content-center">
            <Container>
                <Row>
                    <Col lg={{ span: 10, offset: 2 }}>
                        <div className="text-center wrapper-test p-5">

                            <h1 className="text-white">Питання</h1>
                            <h3 className="text-white">Тест по: {theme}</h3>
                            {/*{userAnswers.length === tests.length ? "Вже 10 питання" : ""}*/}
                            {gameOver || userAnswers.length === tests.length ? (
                                <button
                                    className="btn btn-primary"
                                    onClick={startTrivial}
                                >
                                    Розпочати
                                </button>
                            ) : null}

                            <div className="d-flex my-3 justify-content-around">
                                {!gameOver ? <h4 className="score text-white">Балів: {score} </h4> : null}
                                {!gameOver ? <h4 className="text-white">
                                    <span>
                                     Запитання: {number + 1} / {tests.length}
                                    </span>
                                </h4> : null}
                            </div>
                            {loading ? <CircularProgress color="secondary" /> : null}
                            {!loading && !gameOver && (
                                <AnswerCard
                                    totalQuestions={tests.length}
                                    question={tests[number].title}
                                    answers={tests[number].content}
                                    callback={checkAnswer}
                                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                                />)}
                            {!gameOver && !loading && userAnswers.length === number + 1 && number !== tests.length - 1 ? (
                                <button  className='btn btn-secondary' onClick={nextQuestion}>
                                    Next Question
                                </button>
                            ) : null}
                        </div>


                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default withRouter(Test)
