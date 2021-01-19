import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import MaskedInput from "react-text-mask";
import CodeInput from '../components/CodeInput'
import {checkEmail, checkUsername, register} from "./styles/auth/thunks";
import { RegisterBody } from '../utils/interfaces'


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

function SignUp(): JSX.Element {
    const dispatch = useDispatch()
    const state = useSelector(state => state.auth)


    const [activeReferal, setActiveReferal] = useState(false)
    const onRegisterUser = (values) => dispatch(register(values))

    const initialValues: RegisterBody = {
        username: '',
        email: '',
        phone: '',
        password: ''
    };

    const userSchema = Yup.object({
        username: Yup.string().required('FirstName is required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Введи 6 символів').required('Password is required')
    })

    type User = Yup.InferType<typeof userSchema>;

    const validateUsername = (e: React.ChangeEvent<HTMLInputElement>, handleChange) => {
        const username = e.target.value
        dispatch(checkUsername(username))
        handleChange(e)
    }

    const validateEmail = (e: React.ChangeEvent<HTMLInputElement>, handleChange) => {
        const email = e.target.value
        dispatch(checkEmail(email))
        handleChange(e)
    }

    const validUsername = useSelector((state) => state.validation.usernameValid)
    console.log(validUsername)

    const showReferal = () => {
        setActiveReferal(!activeReferal)
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
                        <Formik
                            initialValues={initialValues}
                            validationSchema={userSchema}
                            onSubmit={(values, actions) => {
                                onRegisterUser(values)
                            }}
                            render={({ errors, status, touched, handleChange, handleSubmit,
                                handleBlur, values }) => (
                                <>
                                    <Form noValidate onSubmit={handleSubmit} className="">
                                        <h1>Реєстрація</h1>
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                                <Form.Label>Ім’я користувача</Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="inputGroupPrepend">
                                                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clip-path="url(#clip0)">
                                                                    <path d="M7.7 12C10.1303 12 12.1 9.31406 12.1 6C12.1 2.68594 10.1303 0 7.7 0C5.26969 0 3.3 2.68594 3.3 6C3.3 9.31406 5.26969 12 7.7 12ZM10.78 13.5H10.2059C9.44281 13.9781 8.59375 14.25 7.7 14.25C6.80625 14.25 5.96063 13.9781 5.19406 13.5H4.62C2.06938 13.5 0 16.3219 0 19.8V21.75C0 22.9922 0.739062 24 1.65 24H11.0997C11.0172 23.6812 10.9828 23.3438 11.0103 23.0016L11.2441 20.1469L11.2853 19.6266L11.5569 19.2562L14.2141 15.6328C13.3719 14.3344 12.1516 13.5 10.78 13.5ZM12.3372 20.3109L12.1034 23.1703C12.0656 23.6484 12.3613 24.0516 12.7084 23.9953L14.8019 23.6766L19.5422 17.2125L17.0775 13.8516L12.3372 20.3109ZM21.7594 12.6047L20.4566 10.8281C20.1369 10.3922 19.6144 10.3922 19.2947 10.8281L17.9953 12.6L17.8544 12.7922L20.3225 16.1531L21.7594 14.1937C22.0791 13.7531 22.0791 13.0453 21.7594 12.6047Z" fill="#929292" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0">
                                                                        <rect width="22" height="24" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Ваше ім'я"
                                                        aria-describedby="inputGroupPrepend"
                                                        name="username"
                                                        value={values.username}
                                                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => validateUsername(e, handleChange)}
                                                        isInvalid={!!errors.username}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.username}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationFormikEmail">
                                                <Form.Label>Електронна пошта</Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="inputGroupPrepend2">
                                                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M21.5832 8.94375C21.7508 8.79844 22 8.93437 22 9.16406V18.75C22 19.9922 21.0762 21 19.9375 21H2.0625C0.923828 21 0 19.9922 0 18.75V9.16875C0 8.93438 0.244922 8.80312 0.416797 8.94844C1.3793 9.76406 2.65547 10.8 7.03828 14.2734C7.94492 14.9953 9.47461 16.5141 11 16.5047C12.534 16.5188 14.0937 14.9672 14.966 14.2734C19.3488 10.8 20.6207 9.75938 21.5832 8.94375ZM11 15C11.9969 15.0188 13.432 13.6313 14.1539 13.0594C19.8559 8.54531 20.2898 8.15156 21.6047 7.02656C21.8539 6.81562 22 6.4875 22 6.14062V5.25C22 4.00781 21.0762 3 19.9375 3H2.0625C0.923828 3 0 4.00781 0 5.25V6.14062C0 6.4875 0.146094 6.81094 0.395312 7.02656C1.71016 8.14687 2.14414 8.54531 7.84609 13.0594C8.56797 13.6313 10.0031 15.0188 11 15Z" fill="#929292" />
                                                            </svg>
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Ваш email"
                                                        aria-describedby="inputGroupPrepend2"
                                                        name="email"
                                                        value={values.email}
                                                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => validateEmail(e, handleChange)}
                                                        isInvalid={!!errors.email}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.email}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form.Row>
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
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="Referal">
                                                <p className="referal" onClick={showReferal}>
                                                    {activeReferal ? 'Реферал' : 'Вказати реферала'}
                                                </p>
                                                <InputGroup className={activeReferal ? 'd-flex' : 'd-none'}>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Реферал"
                                                        name="referral"
                                                        value={values.referral}
                                                        onChange={handleChange}
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Form.Row>
                                        <div className="form-group text-center">
                                            <button type="submit" className="btn btn-primary btn-register mr-2 px-5">Зареєструватися</button>
                                            <p>Вже маєш профіль?
                                            <Link to="/login" className="ml-2">
                                                    Увійти
                                            </Link>
                                            </p>
                                        </div>
                                    </Form>


                                    <Form className="d-none">
                                        <h3>Верифікація телефону</h3>
                                        <Form.Row className="mt-5">
                                            <Form.Group as={Col} md="12" controlId="validationFormikPhone">
                                                <Form.Label>Номер телефону</Form.Label>
                                                <InputGroup>
                                                    <div className="d-flex w-100">
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
                                                            aria-describedby="inputGroupPrepend3"
                                                            placeholder="Ваш номер"
                                                            type="tel"
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="form-group mt-3 text-center">
                                                        <p>Код підтеврдження</p>
                                                        <CodeInput />
                                                        <button type="button" className="text-center btn">Надіслати код ще раз</button>
                                                    </div>
                                                    <Form.Control.Feedback type="invalid">
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form.Row>
                                        <div className="text-center">
                                            <button className="btn px-5 btn-verification">
                                                Верифікація
                                            </button>
                                        </div>
                                    </Form>
                                </>
                            )}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default SignUp
