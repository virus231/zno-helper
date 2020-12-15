import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import SideBar from '../components/SideBar'
import SubjectCart from "../components/SubjectCart";

function Home():JSX.Element {

    return (
        <section className="home d-flex">
            <SideBar/>
            <Container>
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
                <Row className="justify-content-between mt-3">
                    <SubjectCart/>
                    <SubjectCart/>
                    <SubjectCart/>
                </Row>
            </Container>
        </section>
    )
}


export default Home
