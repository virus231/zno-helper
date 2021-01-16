import React, {FC} from "react";
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

interface Props {
    theme: any
}

export const ThemeCart:FC<Props> = ({theme}) => {
    return (
        <Col lg="3" className="my-3">
            <Card className="mt-3">
                <CardImg src="https://source.unsplash.com/user/erondu/300x200" className="img-fluid" />
                <CardBody>
                    <CardTitle>{theme.title}</CardTitle>
                    <p>{theme.descr}</p>
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
