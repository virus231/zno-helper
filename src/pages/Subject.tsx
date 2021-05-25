import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";



function Subject({match:{params}}) {




    return (
        <section className="subjects mt-5">
            <Container>
                <Row>
                    <Col lg="4">
                        <h3>
                            {params.id}
                        </h3>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg="4">
                        <Link to={`/tests/${params.id}`}>
                            <Card>
                                <CardImg top src="https://place-hold.it/300x200" />
                                <CardBody className="text-center">
                                    <p>Всі Тести</p>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>

                    <Col lg="4">
                        <Card>
                            <CardImg top src="https://place-hold.it/300x200" />
                            <CardBody className="text-center">
                                <p>Мої тести</p>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Link to={`/create-test/${params.id}`}>
                            <Card>
                                <CardImg top src="https://place-hold.it/300x200" />
                                <CardBody className="text-center">
                                    <p>Створити тест</p>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Subject
