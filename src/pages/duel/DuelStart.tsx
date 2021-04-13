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
    main_container:{
        top: "162px",
        width: "600px",
        left: "660px",
    },
    header_div:{
        position: "relative",
        height: "auto",
        background: "#FFFFFF",
        boxShadow: "0px 2px 6px rgba(61, 61, 61, 0.04)",
        borderRadius: "15px",
        padding: "10px 15px",
        borderLeft: "3px solid #567BF3",
        marginBottom: "50px"
    },
    duel_h1:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "36px",
        lineHeight: "44px",
        color: "#6B8CBE",
    },
    button_copy: {
        padding: "15px 45px",
        textAlign: "center",
        margin: "0 auto",
        display: "block",
        background: "#EEF2FE",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        fontWeight: 500,
        fontSize: "22px",
        color: "#567BF3",
        marginBottom: "50px"
    },
    button_main: {
        padding: "15px 45px",
        borderRadius: "15px",
        fontSize: "26px",
        color: "#fff",
        textAlign: "center",
        margin: "0 auto",
        display: "block",
    },
    convas:{
        marginTop: "100px",
        background: "rgba(8, 142, 167, 0.8)",
        boxShadow: "0px 2px 6px rgba(61, 61, 61, 0.04)",
        borderRadius:" 15px",
        width: "100%",
        height: "200px",
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: "36px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    convas_body: {
        flex: "none",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    participant: {
        background: "rgba(238, 242, 254, 0.8)",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        borderRadius: "10px",
        fontSize: "20px",
        color: "#567BF3",
        padding: "10px 20px",
        margin: "5px",
        display: "flex",
        "&:hover": {
            background: "#EEF2FE",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            color: "#F44336",
            textDecoration: "none"
        },
    }
}));

function DuelStart():JSX.Element {
    const classes = useStyles();
    const [copySuccess, setCopySuccess] = useState<string>('');


    const copyLink = () => {
        const link = navigator.clipboard.writeText('Copy this text to clipboard')
        // setCopySuccess(link)
    };

    return (
        <section className="duel">
            <Container className={classes.main_container}>
                <div className={classes.header_div}>
                     <h1 className={classes.duel_h1}>Географія як наука, розвиток географічних досліджень</h1>
                </div>

                <button className={classes.button_copy} onClick={copyLink}>
                    Копіювати посилання для дуелі
                </button>

                <Button className={classes.button_main}>Розпочати Дуель</Button>

                <Row>
                    <Card className={classes.convas}>
                            <CardBody className={classes.convas_body}>
                                <p hidden={false}>Очікуються інші учасники...</p>
                                {/*<a className={classes.participant}  href={"http://localhost:3000/duel/remove"}>Vasia Petrovych</a>*/}
                                {/*<a className={classes.participant} href={"http://localhost:3000/duel/remove"}>Vasia Petrovych</a>*/}
                                {/*<a className={classes.participant} href={"http://localhost:3000/duel/remove"}>Vasia Petrovych</a>*/}
                                {/*<a className={classes.participant} href={"http://localhost:3000/duel/remove"}>Vasia Petrovych</a>*/}
                            </CardBody>
                    </Card>
                </Row>

                {/*<Row>*/}
                {/*    <Col lg={{span: 10 }}>*/}
                {/*        <Jumbotron className={classes.root}>*/}
                {/*            <h1>Географія як наука, розвиток географічних досліджень</h1>*/}
                {/*            <p>*/}
                {/*                <button*/}
                {/*                    className="btn-copy p-3"*/}
                {/*                    onClick={copyLink}*/}
                {/*                >*/}
                {/*                    Копіювати посилання для дуелі*/}
                {/*                </button>*/}
                {/*            </p>*/}
                {/*            <p>*/}
                {/*                <Button disabled variant="primary">Розпочати Дуель</Button>*/}
                {/*            </p>*/}
                {/*            /!*<span>{copySuccess}</span>*!/*/}
                {/*            {copySuccess && "Есть"}*/}
                {/*        </Jumbotron>*/}
                {/*    </Col>*/}
                {/*</Row>*/}

                {/*<Row>*/}
                {/*    <Col lg={{span: 6, offset: 2 }}>*/}
                {/*        <Card className="text-center">*/}
                {/*            <CardBody>*/}
                {/*                Очікуються інші учасники...*/}
                {/*            </CardBody>*/}
                {/*        </Card>*/}
                {/*    </Col>*/}
                {/*</Row>*/}

                {/*<Row className={classes.root}>*/}
                {/*    <Col className="text-center" lg={{span: 6, offset: 2}}>*/}
                {/*        <QuestionCard/>*/}
                {/*        <Button className="mt-3">Далі</Button>*/}
                {/*    </Col>*/}
                {/*    <div className="info-result">*/}
                {/*        <Card>*/}
                {/*            <CardBody>*/}
                {/*                <Alert theme="warning">*/}
                {/*                    Sviatossss:*/}
                {/*                    4*/}
                {/*                </Alert>*/}
                {/*                <Alert theme="info">*/}
                {/*                    Vladoss:*/}
                {/*                    3*/}
                {/*                </Alert>*/}
                {/*                <Alert theme="dark">*/}
                {/*                    Yurets:*/}
                {/*                    2*/}
                {/*                </Alert>*/}
                {/*            </CardBody>*/}
                {/*        </Card>*/}
                {/*    </div>*/}

                {/*</Row>*/}

            </Container>
        </section>

    )
}

export default DuelStart;
