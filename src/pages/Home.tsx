import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import SubjectCart from "../components/SubjectCart";
import {Card, CardBody, CardImg } from "shards-react";
import history from "../assets/images/history.png";

function Home():JSX.Element {

    return (
        <section className="">
            <Container className="">
                <Row>
                    <Col lg={4}>
                        <h2>Предмети</h2>
                    </Col>
                </Row>
                <Row className="justify-content-between mt-5">
                    <SubjectCart/>
                    <SubjectCart/>
                    <SubjectCart/>
                </Row>
                <Row className="d-flex justify-content-between mt-3">
                    <SubjectCart/>
                    <SubjectCart/>
                    <Col>
                        <Card>
                            <CardBody>
                                <p className="wrap">
                                    <svg className="add" width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="51" cy="51" r="51" fill="#567BF3" fill-opacity="0.1"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M50.4499 35.7002C49.3454 35.7002 48.4499 36.5956 48.4499 37.7002V48.4502H37.6999C36.5954 48.4502 35.6999 49.3456 35.6999 50.4502V51.5502C35.6999 52.6548 36.5954 53.5502 37.6999 53.5502H48.4499V64.3002C48.4499 65.4048 49.3454 66.3002 50.4499 66.3002H51.5499C52.6545 66.3002 53.5499 65.4048 53.5499 64.3002V53.5502H64.2999C65.4045 53.5502 66.2999 52.6548 66.2999 51.5502V50.4502C66.2999 49.3456 65.4045 48.4502 64.2999 48.4502H53.5499V37.7002C53.5499 36.5956 52.6545 35.7002 51.5499 35.7002H50.4499Z" fill="#567BF3"/>
                                    </svg>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Home
