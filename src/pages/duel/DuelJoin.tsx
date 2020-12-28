import React, { useState } from 'react';
import {Button, Col, Container, Jumbotron, Row} from 'react-bootstrap';
import {makeStyles} from "@material-ui/core/styles";
import { Card, CardBody, Badge, Alert  } from 'shards-react'
import "./Duel.scss"


const useStyles = makeStyles((theme) => ({
    root: {

        textAlign: "center",
        '& .btn-copy': {
            background: "#EEF2FE",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            borderRadius: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "22px",
            outline: "none",
            color: "#567BF3"
        },
        '& .info-result': {
            position: 'fixed',
            top: '0',
            right: '0'
        }

    },
}));

function DuelJoin():JSX.Element {
    const classes = useStyles();

    return (
        <section className="duel">
            <Container className="main_container_600">
                <div className="header_div">
                     <h1 className="duel_h1">Географія як наука, розвиток географічних досліджень</h1>
                </div>

                <div className="invite_by">Запросив у дуель: <span>Sviatosss</span></div>

                <input className="participant_name" name="participant" type="text" placeholder="Введіть ваше ім’я"/>

                <Button disabled className="button_main">Долучитись</Button>

            </Container>
        </section>

    )
}

export default DuelJoin;
