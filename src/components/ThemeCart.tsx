import React from "react";
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
        <Col lg="3" className="">
            <Card className="mt-3">
                <CardHeader>Card header</CardHeader>
                <CardImg src="https://source.unsplash.com/user/erondu/300x200" className="img-fluid" />
                <CardBody>
                    <CardTitle>Lorem Ipsum</CardTitle>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button>Read more &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
            </Card>
        </Col>
    );
}
