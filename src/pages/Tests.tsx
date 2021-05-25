import React from 'react';
import {withRouter} from 'react-router-dom'
import {Col, Container, Row} from "react-bootstrap";
import {ThemeCart} from '../components/ThemeCart';
import { getTestsBySubject } from '../api/testsApi';
import CircularProgress from '@material-ui/core/CircularProgress'

// const themes = [
//     {title: "title", descr: "опис", img: "https://source.unsplash.com/user/erondu/300x200"},
//     {title: "title", descr: "опис", img: "https://source.unsplash.com/user/erondu/300x200"},
//     {title: "title", descr: "опис", img: "https://source.unsplash.com/user/erondu/300x200"},
//     {title: "title", descr: "опис", img: "https://source.unsplash.com/user/erondu/300x200"},
//     {title: "title", descr: "опис", img: "https://source.unsplash.com/user/erondu/300x200"}
// ]

function Tests({match: {params: {id}}}){
    const [tests, setTests] = React.useState([])
    const [loading, setLoading] = React.useState(false)


    React.useEffect(() => {
        const getTests = async () => {
            setLoading(true)
            const testsResponse = await getTestsBySubject(id);
            // @ts-ignore
            setTests(testsResponse)
            setLoading(false)

        }
        getTests()
    },[])


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
                        tests &&
                        !loading ? tests.map((theme, index) => {
                            return (
                                <ThemeCart theme={theme}/>
                            )
                        }) : <CircularProgress color="secondary" />
                    }
                    {!tests ? "Ще немає нічого" : null}
                </Row>
            </Container>
        </section>
    )
}

export default withRouter(Tests)
