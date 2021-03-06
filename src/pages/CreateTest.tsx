import React from 'react';
import {OverlayTrigger, Row, Col, Tooltip, Container} from 'react-bootstrap';
import { FormInput, Card, CardBody, CardHeader, CardFooter, FormSelect,  Button, InputGroup, InputGroupAddon} from "shards-react";

function CreateTest():JSX.Element {
    return (
        <Container>
            <Row>
                <Col lg={{ span: 8}}>
                    <Card className="my-4">
                        <CardHeader>
                            <div className="d-flex align-items-baseline justify-content-between">
                                <div>
                                    <h5>
                                        Запитання 1
                                    </h5>
                                </div>
                                <div className="d-flex align-items-baseline justify-content-between">
                                    <FormSelect className="ml-3 w-100">
                                        <option value="first">Одна відповідь</option>
                                        <option value="second">Кілька відповідей</option>
                                        <option value="third">
                                            Вірно чи ні
                                        </option>
                                        <option value="four">
                                            Відповідність
                                        </option>
                                    </FormSelect>

                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Видалити Запитання 1</Tooltip>}>
                                        <p className="ml-3 delete">
                                            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0)">
                                                    <path d="M16.9583 24.9998H5.04167C3.77758 24.9998 2.75 23.8311 2.75 22.3957V7.81234C2.75 7.52484 2.95533 7.2915 3.20833 7.2915H18.7917C19.0447 7.2915 19.25 7.52484 19.25 7.81234V22.3957C19.25 23.8311 18.2224 24.9998 16.9583 24.9998ZM3.66667 8.33317V22.3957C3.66667 23.2571 4.28358 23.9582 5.04167 23.9582H16.9583C17.7164 23.9582 18.3333 23.2571 18.3333 22.3957V8.33317H3.66667Z" fill="#F44336"/>
                                                    <path d="M20.6251 8.33333H1.37508C1.12208 8.33333 0.916748 8.1 0.916748 7.8125V5.72917C0.916748 4.29375 1.94433 3.125 3.20842 3.125H18.7917C20.0558 3.125 21.0834 4.29375 21.0834 5.72917V7.8125C21.0834 8.1 20.8781 8.33333 20.6251 8.33333ZM1.83341 7.29167H20.1667V5.72917C20.1667 4.86771 19.5498 4.16667 18.7917 4.16667H3.20842C2.45033 4.16667 1.83341 4.86771 1.83341 5.72917V7.29167Z" fill="#F44336"/>
                                                    <path d="M14.2083 4.16667H7.79159C7.53859 4.16667 7.33325 3.93333 7.33325 3.64583V1.5625C7.33325 0.701042 7.95017 0 8.70825 0H13.2916C14.0497 0 14.6666 0.701042 14.6666 1.5625V3.64583C14.6666 3.93333 14.4613 4.16667 14.2083 4.16667ZM8.24992 3.125H13.7499V1.5625C13.7499 1.275 13.5437 1.04167 13.2916 1.04167H8.70825C8.45617 1.04167 8.24992 1.275 8.24992 1.5625V3.125Z" fill="#F44336"/>
                                                    <path d="M6.87508 20.8335C6.62208 20.8335 6.41675 20.6002 6.41675 20.3127V11.9793C6.41675 11.6918 6.62208 11.4585 6.87508 11.4585C7.12808 11.4585 7.33342 11.6918 7.33342 11.9793V20.3127C7.33342 20.6002 7.12808 20.8335 6.87508 20.8335Z" fill="#F44336"/>
                                                    <path d="M11.0001 20.8335C10.7471 20.8335 10.5417 20.6002 10.5417 20.3127V11.9793C10.5417 11.6918 10.7471 11.4585 11.0001 11.4585C11.2531 11.4585 11.4584 11.6918 11.4584 11.9793V20.3127C11.4584 20.6002 11.2531 20.8335 11.0001 20.8335Z" fill="#F44336"/>
                                                    <path d="M15.1251 20.8335C14.8721 20.8335 14.6667 20.6002 14.6667 20.3127V11.9793C14.6667 11.6918 14.8721 11.4585 15.1251 11.4585C15.3781 11.4585 15.5834 11.6918 15.5834 11.9793V20.3127C15.5834 20.6002 15.3781 20.8335 15.1251 20.8335Z" fill="#F44336"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0">
                                                        <rect width="22" height="25" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </OverlayTrigger>

                                </div>

                            </div>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg={{ span: 4 }}>
                    <Card>
                        <CardHeader className="d-flex justify-content-between align-items-center">
                            Опублікувати
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0L15.7942 13.5L0.205771 13.5L8 0Z" fill="#DADADA"/>
                            </svg>
                        </CardHeader>
                        <CardBody>
                            <ul className="pl-0">
                                <li className="my-3 d-flex justify-content-between align-items-center">
                                    <svg className="mr-3" width="35" height="35" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5775 1.28613L0 12.8637V15.4877H2.624L14.2016 3.91017L11.5775 1.28613ZM2.16288 14.3745H1.11328V13.3249L11.5776 2.86057L12.6272 3.91017L2.16288 14.3745Z" fill="#222E34"/>
                                        <path d="M19 16.6011H0V17.7144H19V16.6011Z" fill="#222E34"/>
                                        <path d="M19 14.3745H5.56641V15.4878H19V14.3745Z" fill="#222E34"/>
                                    </svg>
                                    Статус:
                                    <FormSelect className="ml-3">
                                        <option value="first">Чернетка</option>
                                        <option value="second">This is the second option.</option>
                                        <option value="third" disabled>
                                            This option is disabled.
                                        </option>
                                    </FormSelect>
                                </li>
                                <li className="my-3 d-flex justify-content-between align-items-center">
                                    <svg className="mr-3" width="34" height="35" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.892 8.64983C16.7401 8.42986 13.1215 3.26367 8.49992 3.26367C3.87833 3.26367 0.259583 8.42986 0.107877 8.64962C-0.0359591 8.85831 -0.0359591 9.14135 0.107877 9.35004C0.259583 9.57001 3.87833 14.7362 8.49992 14.7362C13.1215 14.7362 16.7401 9.56998 16.892 9.35022C17.036 9.14156 17.036 8.85831 16.892 8.64983ZM8.49992 13.5494C5.09563 13.5494 2.14715 10.1205 1.27434 8.99953C2.14602 7.87759 5.08832 4.45048 8.49992 4.45048C11.904 4.45048 14.8523 7.87878 15.7255 9.00034C14.8538 10.1222 11.9115 13.5494 8.49992 13.5494Z" fill="black"/>
                                        <path d="M8.49986 5.43945C6.64573 5.43945 5.13721 7.03671 5.13721 8.99991C5.13721 10.9631 6.64573 12.5604 8.49986 12.5604C10.354 12.5604 11.8625 10.9631 11.8625 8.99991C11.8625 7.03671 10.354 5.43945 8.49986 5.43945ZM8.49986 11.3735C7.2637 11.3735 6.25811 10.3087 6.25811 8.99991C6.25811 7.69107 7.26374 6.62629 8.49986 6.62629C9.73598 6.62629 10.7416 7.69107 10.7416 8.99991C10.7416 10.3087 9.73601 11.3735 8.49986 11.3735Z" fill="black"/>
                                    </svg>
                                    Видимість:

                                    <FormSelect className="ml-3">
                                        <option value="first">Публічно</option>
                                        <option value="second">Пример</option>
                                    </FormSelect>
                                </li>
                            </ul>
                        </CardBody>
                        <CardFooter>
                            <div className="d-flex justify-content-between align-items-center">
                                <Button outline pill theme="danger">
                                    Видалити
                                </Button>
                                <Button pill>Опублікувати</Button>
                            </div>
                        </CardFooter>
                    </Card>

                    <Card className="mt-4">
                        <CardHeader className="d-flex justify-content-between align-items-center">
                            Теги до тесту
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0L15.7942 13.5L0.205771 13.5L8 0Z" fill="#DADADA"/>
                            </svg>
                        </CardHeader>
                        <CardBody>
                            <InputGroup>
                                <FormInput placeholder="Введіть назву тега..." />
                                <InputGroupAddon type="append">
                                    <Button theme="secondary">Додати</Button>
                                </InputGroupAddon>
                            </InputGroup>
                            <div>
                                <span className="font-italic">Розділіть теги комами</span>
                                <p>
                                <span className="tag">
                                    Назва тегу
                                    <svg className="ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 14C3.14005 14 0 10.86 0 7C0 3.14005 3.14005 0 7 0C10.86 0 14 3.14005 14 7C14 10.86 10.86 14 7 14ZM7 0.875C3.62251 0.875 0.875 3.62251 0.875 7C0.875 10.3775 3.62251 13.125 7 13.125C10.3775 13.125 13.125 10.3775 13.125 7C13.125 3.62251 10.3775 0.875 7 0.875Z" fill="#222E34"/>
                                        <path d="M4.83473 9.60263C4.72269 9.60263 4.61064 9.56012 4.52551 9.47435C4.35461 9.30345 4.35461 9.02638 4.52551 8.85548L8.85672 4.52417C9.02773 4.35327 9.30479 4.35327 9.47569 4.52417C9.64659 4.69507 9.64659 4.97214 9.47569 5.14314L5.14438 9.47435C5.05808 9.56012 4.94614 9.60263 4.83473 9.60263Z" fill="#222E34"/>
                                        <path d="M9.1653 9.60256C9.05337 9.60256 8.94132 9.56005 8.85619 9.47428L4.52498 5.1436C4.35398 4.97271 4.35398 4.69564 4.52498 4.52474C4.69588 4.35373 4.97295 4.35373 5.14385 4.52474L9.47506 8.85595C9.64606 9.02685 9.64606 9.30392 9.47506 9.47481C9.3894 9.56005 9.27735 9.60256 9.1653 9.60256Z" fill="#222E34"/>
                                    </svg>
                                </span>
                                </p>
                            </div>

                        </CardBody>
                    </Card>

                    <Card className="mt-4">
                        <CardHeader className="d-flex justify-content-between align-items-center">
                            Зображення - обкладинка
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0L15.7942 13.5L0.205771 13.5L8 0Z" fill="#DADADA"/>
                            </svg>
                        </CardHeader>
                        <CardBody>
                            <label className="custom-file-upload py-5">
                                <input type="file" className="" />
                                <svg className="mr-3" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 0L7.85718 3.14284H10.2143V7.85713H11.7858V3.14284H14.1429L11 0Z" fill="#567BF3"/>
                                    <path d="M11 22.0002L14.1429 18.8574H11.7858V14.1431H10.2143V18.8574H7.85718L11 22.0002Z" fill="#567BF3"/>
                                    <path d="M22 10.9998L18.8571 7.85693V10.2141H14.1428V11.7855H18.8571V14.1426L22 10.9998Z" fill="#567BF3"/>
                                    <path d="M0 10.9998L3.14284 14.1426V11.7855H7.85713V10.2141H3.14284V7.85693L0 10.9998Z" fill="#567BF3"/>
                                </svg>

                                Перетягніть зображення сюди
                            </label>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default CreateTest;
