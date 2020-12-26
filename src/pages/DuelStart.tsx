import React, { useState } from 'react';
import {Button, Col, Container, Jumbotron, Row} from 'react-bootstrap';
import {makeStyles} from "@material-ui/core/styles";
import { Card, CardBody, Badge, Alert  } from 'shards-react'
import "./Duel.scss"
import QuestionCard from "../components/QuestionCard";


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

    }
}));

function DuelStart():JSX.Element {
    const classes = useStyles();
    const [copySuccess, setCopySuccess] = useState<string>('');


    const copyLink = () => {
        const link = navigator.clipboard.writeText('Copy this text to clipboard')
        // setCopySuccess(link)
    }

    return (
        <section className="duel">
            <Container>
                <Row>
                    <Col lg={{span: 10 }}>
                        <Jumbotron className={classes.root}>
                            <h1>Географія як наука, розвиток географічних досліджень</h1>
                            <p>
                                <button
                                    className="btn-copy p-3"
                                    onClick={copyLink}
                                >
                                    Копіювати посилання для дуелі
                                </button>
                            </p>
                            <p>
                                <Button disabled variant="primary">Розпочати Дуель</Button>
                            </p>
                            {/*<span>{copySuccess}</span>*/}
                            {copySuccess && "Есть"}
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col lg={{span: 6, offset: 2 }}>
                        <Card className="text-center">
                            <CardBody>
                                Очікуються інші учасники...
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className={classes.root}>
                    <Col className="text-center" lg={{span: 6, offset: 2}}>
                        <QuestionCard/>
                        <Button className="mt-3">Далі</Button>
                    </Col>
                    <div className="info-result">
                        <Card>
                            <CardBody>
                                <Alert theme="warning">
                                    Sviatossss:
                                    4
                                </Alert>
                                <Alert theme="info">
                                    Vladoss:
                                    3
                                </Alert>
                                <Alert theme="dark">
                                    Yurets:
                                    2
                                </Alert>
                            </CardBody>
                        </Card>
                    </div>

                </Row>

            </Container>
        </section>

    )
}

export default DuelStart;
