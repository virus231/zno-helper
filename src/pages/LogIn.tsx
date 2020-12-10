import React from "react";
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {Container, Row, Col} from 'react-bootstrap';
import './main.css'
import {LoginAuthAction} from "../redux/actions/action";

interface FormValues {
    number: string;
    password: string;
}

function LogIn() {
    const dispatch = useDispatch()
    const onLogInUser = (fields) => dispatch(LoginAuthAction(fields))

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

    return (
        <section className="signup promo d-flex justify-content-center align-items-start pt-5">
            <Container>
                <Row className="">
                    <Col lg={8} className="promo-col">
                        <p>
                            <Link to="/signup">
                                Z-Helper
                            </Link>
                        </p>
                    </Col>
                    <Col lg={4} className="pt-5 mt-5">
                        <h3>Вхід</h3>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={userSchema}
                            onSubmit={onLogInUser}
                            render={({ errors, status, touched }) => (
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="number">Номер телефону</label>
                                        <Field
                                            name="number"
                                            type="number"
                                            className={`form-control ${errors.number && touched.number && 'is-invalid'}`}/>
                                        <ErrorMessage name="number" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Пароль</label>
                                        <Field
                                            name="password"
                                            type="password"
                                            className={`form-control ${errors.password && touched.password && 'is-invalid'}`}/>
                                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="submit" className="btn btn-primary mr-2 px-5 btn-login">Увійти</button>
                                        <p>
                                            Ще не маєш профілю?
                                            <Link to="/signup" className="ml-2">
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
