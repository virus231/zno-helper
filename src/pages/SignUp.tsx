import React from "react";
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {Container, Row, Col} from 'react-bootstrap';
import './main.css'
import MaskedInput from "react-text-mask";
import {RegisterAuthAction} from '../redux/actions/action'


interface FormValues {
    firstName: string;
    email: string;
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

function SignUp() {
    const {user} = useSelector(state =>  ({
        user: state
    }))
    console.log(user)
    const dispatch = useDispatch()
    const onRegisterUser = (values) => dispatch(RegisterAuthAction(values))

    const initialValues: FormValues = {
        firstName: '',
        email: '',
        password: ''
    };

    const userSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Введи 6 символів').required('Password is required')
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
                        <h3>Реєстрація</h3>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={userSchema}
                            onSubmit={(values, actions) => {
                                onRegisterUser(values)
                            }}
                            render={({ errors, status, touched, handleChange, handleSubmit,
                                         handleBlur, values }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="firstName">Ім’я користувача</label>
                                        <Field
                                            name="firstName"
                                            type="text"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            className={`form-control ${errors.firstName && touched.firstName && 'is-invalid'}`}/>
                                        <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Електронна пошта</label>
                                        <Field
                                            name="email"
                                            type="text"
                                            value={values.email}
                                            onChange={handleChange}
                                            className={`form-control ${errors.email && touched.email && 'is-invalid'}`}/>
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group d-flex flex-column">
                                        <label htmlFor="number">Номер телефону</label>
                                        <Field
                                            name="phone"
                                            // value={values.number}
                                            onChange={handleChange}
                                            render={({ field }) => (
                                                <MaskedInput
                                                    {...field}
                                                    mask={phoneNumberMask}
                                                    id="phone"
                                                    placeholder="Ваш номер"
                                                    type="text"
                                                    onChange={handleChange}
                                                />

                                            )}

                                        />
                                        <ErrorMessage name="number" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Пароль</label>
                                        <Field
                                            name="password"
                                            type="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            className={`form-control ${errors.password && touched.password && 'is-invalid'}`}/>
                                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    </div>
                                    {/*<div className="form-group">*/}
                                    {/*    <label htmlFor="confirmPassword">Confirm Password</label>*/}
                                    {/*    <Field*/}
                                    {/*        name="confirmPassword"*/}
                                    {/*        type="password"*/}
                                    {/*        className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />*/}
                                    {/*    <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />*/}
                                    {/*</div>*/}
                                    <div className="form-group text-center">
                                        <button type="submit" className="btn btn-primary btn-register mr-2 px-5">Зареєструватися</button>
                                        {/*<button type="reset" className="btn btn-secondary">Reset</button>*/}
                                        <p>
                                            Вже маєш профіль?
                                            <Link to="/login" className="ml-2">
                                                Увійти
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


export default SignUp
