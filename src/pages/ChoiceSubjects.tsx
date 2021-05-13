import React, { useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux'
import { authSelector } from "../store/selectors";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import ch from '../assets/images/chemistry mini.png'
import en from '../assets/images/english.png'
import ph from '../assets/images/physics.png'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


function Subjects():JSX.Element {
    const {username} = useSelector(authSelector)

    return (
        <section className="subjects pt-5">
            <Container>
                <Row className="text-center">
                    <Col xs="12">
                        <h3>{username} вибери предмети для складання ЗНО</h3>
                        <p>Ти будеш готуватись по цим предметах</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <div className="text-uppercase d-flex flex-column align-items-center">
                                    <span className="">Xімія</span>
                                    <img className="img-fluid" src={ch} alt="Chemistry"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-uppercase d-flex flex-column align-items-center">
                                    <span className="">Анг.мова</span>
                                    <img className="img-fluid" src={en} alt="Chemistry"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>

                                <div className="text-uppercase d-flex flex-column align-items-center">
                                    <span className="">Фізика</span>
                                    <img className="img-fluid" src={en} alt="Chemistry"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-uppercase d-flex flex-column align-items-center">
                                    <span className="">Анг.мова</span>
                                    <img className="img-fluid" src={en} alt="Chemistry"/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className="d-flex justify-content-center text-center align-items-center mt-5">
                        <div>
                            <p>Вибрано 5/6</p>
                            <Link to="/" className="btn btn-primary btn-continue px-5 ">
                                Продовжити
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Subjects
