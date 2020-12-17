import React from 'react';
import {Container, Row} from "react-bootstrap";
import ThemeCart from '../components/ThemeCart';

function Tests():JSX.Element {
    return (
        <section className="tests">
            <Container>
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
