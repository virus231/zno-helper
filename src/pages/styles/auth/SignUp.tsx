import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import MaskedInput from "react-text-mask";
import CodeInput from '../../../components/CodeInput'
import {checkEmail, checkUsername, checkPhone, register, sendSmsToPhone, validateCode} from "./thunks";
import { RegisterBody } from '../../../utils/interfaces'
import { transformPhone } from "../../../helpers/authHelpers";
import { sendSms } from "../../../api/authApi";


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

    const [username, setUserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [verif, setVerif] = useState<boolean>(true)
    const [authTemp, setAuthTemp] = useState<RegisterBody>({
        email: '',
        otpnum: 0,
        password: '',
        phone: '',
        username:''
    })
    const [smsCode, setSmsCode] = useState(0)
    const state = useSelector((state:RootStateOrAny) => state.auth)
    const [activeReferal, setActiveReferal] = useState(false)

    const onRegisterUser = async (values) => {
        try {
            console.log('values', { values })
            values.phone = transformPhone(values.phone)
            // dispatch(register(values))
            const smsCode = await sendSms(values.phone)
            values.otpnum = smsCode.code
            setAuthTemp(values)
            setVerif(false)      
        } catch (error) {
            console.log('error registering user',values)
        }
      
    }

    const initialValues: RegisterBody = {
        username: '',
        email: '',
        phone: '',
        password: '',
        otpnum:0
    };

    const userSchema = Yup.object({
        // phone: Yup.number().min(9).required('Введи валідний телефон'),
        username: Yup.string().required('FirstName is required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Введи 6 символів').required('Password is required')
    })

    type User = Yup.InferType<typeof userSchema>;

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => setUserName(e.target.value)
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)
    const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>): void => setPhone(e.target.value)


    const validateUsername = (e: React.ChangeEvent<HTMLInputElement>, handleChange) => {
        dispatch(checkUsername(username))
        handleChange(e)
    }

    const validateEmail = (e: React.ChangeEvent<HTMLInputElement>, handleChange) => {
        dispatch(checkEmail(email))
        handleChange(e)
    }

    const validatePhone = (e: React.ChangeEvent<HTMLInputElement>, handleChange) => {
        dispatch(checkPhone(phone))
        handleChange(e)
    }

    const validUsername = useSelector((state:RootStateOrAny) => state.validation.usernameValid)

    const showReferal = () => {
        setActiveReferal(!activeReferal)
    }

    const checkCode = (values) => {
        // const response = {
        //     deviceId: Math.floor(Math.random() * 16) + 5,
        //     phone: phone.replace(/[-\s.,$_)(]/g, '').toString().substring(1),
        //     code: "559071"
        // }
        // dispatch(validateCode(response))
        // values.phone = values.phone.replace(/[-\s.,$_)(]/g, '').toString().substring(1)

        dispatch(register(authTemp))
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
                        <h1 className="mb-5">Реєстрація</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={userSchema}
                            onSubmit={(values, actions) => {
                                onRegisterUser(values);
                            }}
                            render={({ errors, status, touched, handleChange, handleSubmit,
                                         handleBlur, values }) => (
                                <>
                                    {
                                        verif ? (
                                            <Form noValidate onSubmit={handleSubmit} className="d-block">
                                                <Form.Row>
                                                    <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                                        <Form.Label>Ім’я користувача</Form.Label>
                                                        <InputGroup>
                                                            <InputGroup.Prepend>
                                                                <InputGroup.Text id="inputGroupPrepend">
                                                                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g clip-path="url(#clip0)">
                                                                            <path d="M9.8 12C12.8931 12 15.4 9.31406 15.4 6C15.4 2.68594 12.8931 0 9.8 0C6.70688 0 4.2 2.68594 4.2 6C4.2 9.31406 6.70688 12 9.8 12ZM13.72 13.5H12.9894C12.0181 13.9781 10.9375 14.25 9.8 14.25C8.6625 14.25 7.58625 13.9781 6.61063 13.5H5.88C2.63375 13.5 0 16.3219 0 19.8V21.75C0 22.9922 0.940625 24 2.1 24H14.1269C14.0219 23.6812 13.9781 23.3438 14.0131 23.0016L14.3106 20.1469L14.3631 19.6266L14.7088 19.2562L18.0906 15.6328C17.0187 14.3344 15.4656 13.5 13.72 13.5V13.5ZM15.7019 20.3109L15.4044 23.1703C15.3563 23.6484 15.7325 24.0516 16.1744 23.9953L18.8387 23.6766L24.8719 17.2125L21.735 13.8516L15.7019 20.3109V20.3109ZM27.6937 12.6047L26.0356 10.8281C25.6287 10.3922 24.9637 10.3922 24.5569 10.8281L22.9031 12.6L22.7238 12.7922L25.865 16.1531L27.6937 14.1937C28.1006 13.7531 28.1006 13.0453 27.6937 12.6047V12.6047Z" fill="#929292"/>
                                                                        </g>
                                                                        <defs>
                                                                            <clipPath id="clip0">
                                                                                <rect width="28" height="24" fill="white"/>
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
                                                                value={username}
                                                                onFocus={(e: React.ChangeEvent<HTMLInputElement>): void => validateUsername(e, handleChange)}
                                                                onBlur={(e: React.ChangeEvent<HTMLInputElement>): void => validateUsername(e, handleChange)}
                                                                onChange={onChangeName}
                                                                autoComplete="off"
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
                                                                value={email}
                                                                autoComplete="off"

                                                                onFocus={(e: React.ChangeEvent<HTMLInputElement>): void => validateEmail(e, handleChange)}
                                                                onBlur={(e: React.ChangeEvent<HTMLInputElement>): void => validateEmail(e, handleChange)}
                                                                onChange={onChangeEmail}
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
                                                                    name="phone"
                                                                    className="input-number"
                                                                    aria-describedby="inputGroupPrepend3"
                                                                    placeholder="Ваш номер"
                                                                    type="tel"
                                                                    autoComplete="off"

                                                                    value={phone}
                                                                    onFocus={(e: React.ChangeEvent<HTMLInputElement>): void => validatePhone(e, handleChange)}
                                                                    onBlur={(e: React.ChangeEvent<HTMLInputElement>): void => validatePhone(e, handleChange)}
                                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangePhone(e)}
                                                                    isInvalid={!!errors.phone}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.phone}
                                                                </Form.Control.Feedback>
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
                                                                autoComplete="off"
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
                                                        <p className="referal text-center" onClick={showReferal}>
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
                                                <div className="mt-5 text-center">
                                                    <button type="submit" className="btn btn-primary btn-register mr-2">
                                                        Зареєструватися
                                                    </button>
                                                    <p className="mt-3">
                                                        Продовжуючи, ти погоджуєшся з

                                                        <Link to="/">
                                                            Політикою конфідеційності
                                                        </Link>
                                                        <span className="mx-2">
                                                    та
                                                </span>
                                                        <Link to="/">
                                                            Умовами використання
                                                        </Link>
                                                        <br/>

                                                    </p>
                                                    <p>
                                                        Вже маєш профіль?
                                                        <Link to="/login" className="ml-2">
                                                            Увійти
                                                        </Link>
                                                    </p>
                                                </div>
                                            </Form>
                                        ) : (
                                            <Form noValidate onSubmit={handleSubmit} className="d-block">
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
                                                                    name="phone"
                                                                    className="input-number"
                                                                    aria-describedby="inputGroupPrepend3"
                                                                    placeholder="Ваш номер"
                                                                    type="tel"
                                                                    autoComplete="off"

                                                                    value={phone}
                                                                    onFocus={(e: React.ChangeEvent<HTMLInputElement>): void => validatePhone(e, handleChange)}
                                                                    onBlur={(e: React.ChangeEvent<HTMLInputElement>): void => validatePhone(e, handleChange)}
                                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangePhone(e)}
                                                                    isInvalid={!!errors.phone}
                                                                />
                                                            </div>
                                                            <div className="form-group mt-3 text-center">
                                                                <p>Код підтеврдження</p>
                                                                <CodeInput code={authTemp?.otpnum} />
                                                                <button type="button" className="text-center btn">Надіслати код ще раз</button>
                                                            </div>
                                                            <Form.Control.Feedback type="invalid">
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Form.Row>
                                                <div className="text-center">
                                                    <button type="button" onClick={checkCode} className="btn px-5 btn-verification">
                                                        Верифікація
                                                    </button>
                                                </div>
                                            </Form>
                                        )
                                    }

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