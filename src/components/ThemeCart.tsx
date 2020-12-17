import React from "react";
import { Link } from "react-router-dom";
import {
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
} from "shards-react";

export default function ThemeCart():JSX.Element {
    return (
        <Col lg="3" className="my-3">
            <Card className="mt-3">
                <CardHeader>Card header</CardHeader>
                <CardImg src="https://source.unsplash.com/user/erondu/300x200" className="img-fluid" />
                <CardBody>
                    <CardTitle>Lorem Ipsum</CardTitle>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button>
                        <Link to="/test/2">
                            Пройти Тест
                        </Link>
                    </Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
            </Card>
        </Col>
    );
}
