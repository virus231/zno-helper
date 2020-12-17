import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik, FormikValues} from "formik";
import * as Yup from "yup";


interface FormValues {
    email: string;
}


function ResetPassword():JSX.Element {

    const initialValues: FormValues = {
        email: '',
    };

    const userSchema = Yup.object({
        email: Yup.string().email('Email is invalid').required('Email is required'),
    })

    type User = Yup.InferType<typeof userSchema>;

    function onReset(values: FormikValues) {
        console.log(values)
    }

    return (
        <section className="reset d-flex justify-content-center align-items-start pt-5">
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
                        <h3 className="reset-title">Відновлення паролю</h3>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={userSchema}
                            onSubmit={(values, actions) => {
                                onReset(values)
                            }}
                            render={({ errors, status, touched, handleChange, handleSubmit,
                                         handleBlur, values }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="form-group mt-5">
                                        <label htmlFor="email">Електронна пошта</label>
                                        <Field
                                            name="email"
                                            type="text"
                                            value={values.email}
                                            onChange={handleChange}
                                            className={`form-control ${errors.email && touched.email && 'is-invalid'}`}/>
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="submit" className="btn btn-primary btn-register mr-2 px-5">Надіслати</button>
                                        <p>
                                            Згадав пароль?
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

export default ResetPassword
