import React from "react";
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {Container, Row, Col} from 'react-bootstrap';
import './main.css'
import {register} from '../redux/actions/action'

interface FormValues {
    firstName: string;
    number: string;
    email: string;
    password: string;
    confirmPassword: string
}

function SignUp() {
    const initialValues: FormValues = {
        firstName: '',
        number: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const dispatch = useDispatch()
    const onRegisterUser = (fields) => dispatch(register(fields))

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
                        <h3>Реєстрація</h3>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={Yup.object().shape({
                                firstName: Yup.string()
                                    .required('First Name is required'),
                                email: Yup.string()
                                    .email('Email is invalid')
                                    .required('Email is required'),
                                number: Yup.string()
                                    .max(11)
                                    .min(3)
                                    // .test('Phone test', 'Phone number must be valid', (val) => {
                                    //     val = val.replace(/[\s\-]/g, '');
                                    //     return val.match(/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/) != null;
                                    // })
                                    .required('Required'),
                                password: Yup.string()
                                    .min(6, 'Password must be at least 6 characters')
                                    .required('Password is required'),
                                confirmPassword: Yup.string()
                                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                                    .required('Confirm Password is required')
                            })}
                            onSubmit={onRegisterUser}
                            render={({ errors, status, touched }) => (
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="firstName">Ім’я користувача</label>
                                        <Field
                                            name="firstName"
                                            type="text"
                                            className={`form-control ${errors.firstName && touched.firstName && 'is-invalid'}`}/>
                                        <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Електронна пошта</label>
                                        <Field
                                            name="email"
                                            type="text"
                                            className={`form-control ${errors.email && touched.email && 'is-invalid'}`}/>
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="number">Номер телефону</label>
                                        <Field
                                            name="number"
                                            type="number"
                                            className={`form-control ${errors.number && touched.number && 'is-invalid'}`}/>
                                        <ErrorMessage name="number" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field
                                            name="password"
                                            type="password"
                                            className={`form-control ${errors.password && touched.password && 'is-invalid'}`}/>
                                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <Field
                                            name="confirmPassword"
                                            type="password"
                                            className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                        <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary mr-2">Register</button>
                                        <button type="reset" className="btn btn-secondary">Reset</button>
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


export default SignUp
