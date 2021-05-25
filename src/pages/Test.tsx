import CircularProgress from '@material-ui/core/CircularProgress'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {fetchQuizQuestions } from '../api/testsApi'
import AnswerCard from '../components/AnswerCard'
import Question from '../components/Question'
import { Spinner } from '../components/Spinner'
import background from '../assets/images/test-bg.jpg'
import {Difficulty,QuestionState} from '../utils/interfaces'


export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

function Test() {
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [number, setNumber] = useState(0)
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
    const [score, setScore ] = useState(0)
    const [gameOver, setGameOver] = useState(true)


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
                                    questionNumber={number + 1}
                                    totalQuestions={TOTAL_QUESTIONS}
                                    question={questions[number].question}
                                    answers={questions[number].answers}
                                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                                    callback={checkAnswer}
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

export default Test
