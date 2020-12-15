import React from 'react';
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";

import history from '../assets/images/history.png'

function SubjectCart():JSX.Element {

    return (
        <Col>
            <Card>
                <CardBody>
                    <h3>History</h3>
                </CardBody>
                <CardImg bottom src={history} className="" />
                <div className="d-none hover-block">
                    <p>Пройти тест</p>
                    <p>Видалити предмет</p>
                </div>
            </Card>
        </Col>
    )
}

export default SubjectCart
