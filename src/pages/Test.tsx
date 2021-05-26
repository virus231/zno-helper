import CircularProgress from '@material-ui/core/CircularProgress'
import React, { useState, useEffect } from 'react'
import {withRouter} from "react-router-dom"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {fetchQuizQuestions, getTestsBySubject } from '../api/testsApi'
import AnswerCard from '../components/AnswerCard'
import Question from '../components/Question'
import { Spinner } from '../components/Spinner'
import background from '../assets/images/test-bg.jpg'
import {Difficulty,QuestionState, TestWrap} from '../utils/interfaces'


export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

function Test({match: {params: {subject}}}) {
    const [loading, setLoading] = useState(false)
    const [tests, setTests] = useState<TestWrap[]>([])
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
    const [score, setScore ] = useState(0)
    const [number, setNumber] = useState(0)

    const [gameOver, setGameOver] = useState(true)

    useEffect(() => {
        const getTests = async () => {
            setLoading(true)
            const testsResponse = await getTestsBySubject(subject);
            console.log(testsResponse)
            // @ts-ignore
            testsResponse.map(({tests}) => {
                setTests(tests)
            })
            setLoading(false)
        }
        getTests()
        
    },[])

    if(!tests) {
        return (
            <p>Loading</p>
        )
    }


    const startTrivial = async () => {
        setLoading(true)
        setGameOver(false)

        const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)

        setQuestions(newQuestions)
        setScore(0)
        setUserAnswers([])
        setNumber(0)
        setLoading(false)
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(!gameOver) {
            // Users answer
            const answer = e.currentTarget.value
            // Check answer against correct answer
            const correct = questions[number].correct_answer === answer
            // Add score if answer is correct
            if (correct) setScore(prev => prev + 1)
            // Save answer in the array for user answers
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            }
            setUserAnswers(prev => [...prev, answerObject])
        }
    }

    const nextQuestion = () => {
        // Move on to the next question if not the last question
        const nextQuestion = number + 1

        if(nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true)
        } else {
            setNumber(nextQuestion)
        }
    }

    


    return (
        <section style={{ backgroundImage: `url(${background})` }} className="test d-flex align-items-center justify-content-center">
            <Container>
                <Row>
                    <Col lg={{ span: 10, offset: 2}}>
                        <div className="text-center wrapper-test p-5">
                            
                            <h1 className="text-white">Питання</h1>
                            <h3 className="text-white">Тест по:</h3>
                            {userAnswers.length === TOTAL_QUESTIONS ? "Вже 10 питання": ""}
                            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                                <button
                                    className="btn btn-primary"
                                    onClick={startTrivial}
                                >
                                    Розпочати
                                </button>
                            ) : null}

                            {!gameOver ? <p className="score text-white">Балів: {score} </p> : null }
                            {loading ? <CircularProgress color="secondary" /> : null}
                            { !loading && !gameOver && (
                                <AnswerCard
                                    question={tests}
                                />) }
                            { !gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                                <button
                                    className="btn btn-primary mt-5"
                                    onClick={nextQuestion}
                                >
                                    Наступне запитання
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
