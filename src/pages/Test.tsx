import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Answer from '../components/Answer'
import Question from '../components/Question'

function Test() {
    return (
        <section className="test d-flex align-items-center justify-content-center">
            <Container>
                <Row>
                    <Col lg={{ span: 10, offset: 2}}>
                        <div className="text-center wrapper-test p-5">
                            <h1>Питання</h1>
                            <h3>Тест по:</h3>
                            <button className="btn btn-primary">
                                Розпочати
                            </button>
                            <Question />
                            <Answer />
                            <button className="NextStep">
                                Next
                                </button>
                            <div className="finalPage">
                                <h1>You have completed the quiz!</h1>
                                <p>Your score is: </p>
                                <p>Thank you!</p>
                            </div>
                        </div>

                        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Test
