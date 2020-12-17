import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ThemeCart from '../components/ThemeCart';

function Tests():JSX.Element {
    return (
        <section className="tests mt-5">
            <Container className="mt-5">
                <Row>
                    <Col lg={4}>
                        <h3>Тести</h3>
                    </Col>
                </Row>

                <Row>
                    <ThemeCart/>
                    <ThemeCart/>
                    <ThemeCart/>
                    <ThemeCart/>
                    <ThemeCart/>

                </Row>
            </Container>
        </section>
    )
}

export default Tests;
