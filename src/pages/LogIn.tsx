import React from "react";
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {Container, Row, Col, InputGroup, Form} from 'react-bootstrap';
import MaskedInput from "react-text-mask";

interface FormValues {
    number: string;
    password: string;
}

const phoneNumberMask = [
    "(",
    /[1-10]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
];


export const LogIn = ():JSX.Element => {
    const dispatch = useDispatch()
    // const onLogInUser = (fields) => dispatch(LoginAuthAction(fields))

    const initialValues: FormValues = {
        number: '',
        password: '',
    };

    const userSchema = Yup.object({
        number: Yup.string().max(11).min(3)
            // .test('Phone test', 'Phone number must be valid', (val) => {
            //     val = val.replace(/[\s\-]/g, '');
            //     return val.match(/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/) != null;
            // })
            .required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    })

    type User = Yup.InferType<typeof userSchema>;

    function onLogInUser(e) {
        e.preventDefault()
    }

    return (
        <section className="signup promo d-flex justify-content-center align-items-start pt-5">
            <Container>
                <Row className="">
                    <Col lg={8} className="promo-col">
                        <p>
                            <Link to="/">
                                Z-Helper
                            </Link>
                        </p>
                    </Col>
                    <Col lg={4} className="pt-5 mt-5">
                        <h1 className="mb-5">Вхід</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={userSchema}
                            onSubmit={onLogInUser}
                            render={({ errors, status, values, touched, handleChange }) => (
                                <Form noValidate>
                                    <Form.Row>
                                        <Form.Group as={Col} md="12" controlId="validationFormikPhone">
                                            <Form.Label>Номер телефону</Form.Label>
                                            <InputGroup>
                                                <div className="d-flex w-100 ">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="inputGroupPrepend3">
                                                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clip-path="url(#clip0)">
                                                                    <path d="M21.2012 1.15363L16.7325 0.0286319C16.2469 -0.0932431 15.7485 0.183319 15.5508 0.680194L13.4883 5.93019C13.3079 6.38957 13.4282 6.92863 13.7848 7.24269L16.3887 9.56769C14.8419 13.163 12.1391 16.1536 8.77467 17.8739L6.64342 15.0333C6.35123 14.6443 5.86138 14.513 5.44029 14.7099L0.627791 16.9599C0.168026 17.1802 -0.0854899 17.7239 0.0262288 18.2536L1.05748 23.1286C1.1649 23.6349 1.5774 24.0005 2.06295 24.0005C13.0672 24.0005 22.0004 14.2739 22.0004 2.25051C22.0004 1.72551 21.6696 1.27082 21.2012 1.15363Z" fill="#929292" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0">
                                                                        <rect width="22" height="24" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <MaskedInput
                                                        mask={phoneNumberMask}
                                                        id="phone"
                                                        className="input-number"
                                                        aria-describedby="inputGroupPrepend3"
                                                        placeholder="Ваш номер"
                                                        type="tel"
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} md="12" controlId="validationFormikPassword">
                                            <Form.Label>Пароль</Form.Label>
                                            <InputGroup>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Ваш пароль"
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.password}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.password}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                            <p>
                                                <Link to="/reset">Відновити пароль</Link>
                                            </p>
                                        </Form.Group>
                                    </Form.Row>
                                    <div className="form-group text-center">
                                        <button type="submit" className="btn btn-primary btn-register mr-2 py-2 px-5">Увійти</button>
                                        <p>Ще не маєш профілю?
                                            <Link to="/" className="ml-2">
                                                Створити
                                            </Link>
                                        </p>
                                    </div>
                                </Form>
                            )}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LogIn;
