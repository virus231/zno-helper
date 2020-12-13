import React, {useRef, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
// import { Swiper, SwiperSlide } from 'swiper/react';
import Swiper from 'react-id-swiper';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import ch from '../assets/images/chemistry mini.png'
import en from '../assets/images/english.png'
import ph from '../assets/images/physics.png'

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Subjects():JSX.Element {
    const [swiper, setSwiper] = useState<any>(null);

    const ref = useRef<any>(null);

    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            swiper.slidePrev();
        }
    };
    // const params = {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     centeredSlides: true,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     }
    // }

    return (
        <section className="subjects pt-5">
            <Container>
                <Row className="text-center">
                    <Col xs="12">
                        <h3>Username вибери предмети для складання ЗНО</h3>
                        <p>Ти будеш готуватись по цим предметах</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Swiper ref={ref} >
                                <div className="text-uppercase d-flex flex-column align-items-center">
                                        <span className="">Xімія</span>
                                        <img className="img-fluid" src={ch} alt="Chemistry"/>
                                    </div>
                                <div className="text-uppercase d-flex flex-column align-items-center">
                                        <span className="">Анг.мова</span>
                                        <img className="img-fluid" src={en} alt="Chemistry"/>
                                    </div>
                                <div className="text-uppercase d-flex flex-column align-items-center">
                                        <span className="">Фізика</span>
                                        <img className="img-fluid" src={en} alt="Chemistry"/>
                                    </div>
                                <div className="text-uppercase d-flex flex-column align-items-center">
                                        <span className="">Анг.мова</span>
                                        <img className="img-fluid" src={en} alt="Chemistry"/>
                                    </div>
                                <div className="text-uppercase d-flex flex-column align-items-center">
                                        <span className="">Анг.мова</span>
                                        <img className="img-fluid" src={en} alt="Chemistry"/>
                                    </div>
                        </Swiper>
                        <button onClick={goPrev}>Prev</button>
                        <button onClick={goNext}>Next</button>
                        {/*       )}*/}
                        {/*    </SwiperSlide>*/}
                        {/*    <SwiperSlide>*/}
                        {/*        {({isActive}) => (*/}
                        {/*            // <div>Current slide is {isActive ? 'active' : 'not active'}</div>*/}
                        {/*            <div className="text-uppercase d-flex flex-column align-items-center">*/}
                        {/*                <span className={isActive ? 'active-subject text-uppercase p-0' : 'text-uppercase'}>Анг.мова</span>*/}
                        {/*                <img className="img-fluid" src={en} alt="Chemistry"/>*/}
                        {/*            </div>*/}
                        {/*        )}*/}
                        {/*    </SwiperSlide>*/}
                        {/*    <SwiperSlide>*/}
                        {/*        {({isActive}) => (*/}
                        {/*            // <div>Current slide is {isActive ? 'active' : 'not active'}</div>*/}
                        {/*            <div className="text-uppercase d-flex flex-column align-items-center">*/}
                        {/*                <span className={isActive ? 'active-subject text-uppercase p-0' : 'text-uppercase'}>Фізика</span>*/}
                        {/*                <img className="img-fluid" src={ch} alt="Chemistry"/>*/}
                        {/*            </div>*/}
                        {/*        )}*/}
                        {/*    </SwiperSlide>*/}
                        {/*    <SwiperSlide>*/}
                        {/*        {({isActive}) => (*/}
                        {/*            <div className="text-uppercase d-flex flex-column align-items-center">*/}
                        {/*                <span className={isActive ? 'active-subject text-uppercase p-0' : 'text-uppercase'}>Фізика</span>*/}
                        {/*                <img src={ch} alt="Chemistry"/>*/}
                        {/*            </div>*/}
                        {/*        )}*/}
                        {/*    </SwiperSlide>*/}
                        {/*    <SwiperSlide>*/}
                        {/*        {({isActive}) => (*/}
                        {/*            <div className="text-uppercase d-flex flex-column align-items-center">*/}
                        {/*                <span className={isActive ? 'active-subject text-uppercase p-0' : 'text-uppercase'}>Фізика</span>*/}
                        {/*                <img src={ch} alt="Chemistry"/>*/}
                        {/*            </div>*/}
                        {/*        )}*/}
                        {/*    </SwiperSlide>*/}
                        {/*    <SwiperSlide>*/}
                        {/*    {({isActive}) => (*/}
                        {/*        <div className="text-uppercase d-flex flex-column align-items-center">*/}
                        {/*            <span className={isActive ? 'active-subject text-uppercase p-0' : 'text-uppercase'}>Фізика</span>*/}
                        {/*            <img src={ch} alt="Chemistry"/>*/}
                        {/*        </div>*/}
                        {/*    )}*/}
                        {/*</SwiperSlide>*/}
                        {/*</Swiper>*/}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Subjects
