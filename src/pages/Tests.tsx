import React from 'react';
import {withRouter} from 'react-router-dom'
import {Col, Container, Row} from "react-bootstrap";
import {ThemeCart} from '../components/ThemeCart';

const themes = [
    {title: "title", descr: "опис", img: "https://source.unsplash.com/user/erondu/300x200"},
    {title: "title", descr: "опис", img: "https://source.unsplash.com/user/erondu/300x200"},
    {title: "title", descr: "опис", img: "https://source.unsplash.com/user/erondu/300x200"},
    {title: "title", descr: "опис", img: "https://source.unsplash.com/user/erondu/300x200"},
    {title: "title", descr: "опис", img: "https://source.unsplash.com/user/erondu/300x200"}
]

function Tests(props: any){
    console.log(props)
    return (
        <section className="tests mt-5">
            <Container className="mt-5">
                <Row>
                    <Col lg={4}>
                        <h3>
                            Тести
                        </h3>
                    </Col>
                </Row>

                <Row>
                    {
                        themes &&
                        themes.map((theme, index) => {
                            return (
                                <ThemeCart theme={theme}/>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default withRouter(Tests)
