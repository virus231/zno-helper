import React, { useState } from 'react';
import {Button, Col, Container, Jumbotron, Row} from 'react-bootstrap';
import "./Duel.scss"

import {SingleAnswer} from "./test_templates/SingleAnswer";
import {MultiAnswer} from "./test_templates/MultiAnswer";
import {Boolean} from "./test_templates/Boolean";

function DuelTest():JSX.Element {
    return (
        <section className="duel">
            <Container className="main_container_850">
                <div className="header_div">
                     <h1 className="duel_h1">Що спричиняє заболочування на великих площах у басейні річки Амазонки?</h1>
                </div>

                {/* <SingleAnswer /> */}

                {/* <MultiAnswer /> */}

                <Boolean />

                <Button  className="button_main">Далі</Button>

            </Container>
        </section>
    )
}

export default DuelTest;
