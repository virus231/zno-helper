import React from 'react'
import {Col, Container, Row} from 'react-bootstrap';
import { FormInput, Card, CardBody, CardHeader, CardFooter, FormSelect,  Button, InputGroup, InputGroupAddon} from "shards-react";
import {Link} from "react-router-dom";


function CreateTests(props):JSX.Element {
    const [active, setActive] = React.useState<boolean>(false)

    console.log(props)

    function showAnswer() {
        setActive(!active)
    }

    return (
        <Container>
            <Row className="my-5">
                <Col md={{ span: 4 }}>
                    <h3>Створення тесту</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 12 }}>
                    <div className="mb-3">
                        <FormInput placeholder="Назва тесту..." />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <p className="text-center">Вибиріть один з видів для створення запитання: </p>
                </Col>
            </Row>
            <Row >
                <Col lg={3}>
                    <Link to="/create-test/single-answer">

                        <div className="variation-block py-4 d-flex flex-column text-center align-items-center justify-content-between">
                            <span>
                                <svg width="62" height="82" viewBox="0 0 72 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M64.2749 22.166C63.5444 22.166 62.9522 22.7582 62.9522 23.4887V82.8664C62.9522 82.9166 62.9115 82.9574 62.8612 82.9574H16.2079C15.4774 82.9574 14.8852 83.5496 14.8852 84.2801C14.8852 85.0106 15.4774 85.6028 16.2079 85.6028H62.8612C64.3702 85.6028 65.5976 84.3753 65.5976 82.8664V23.4887C65.5976 22.7582 65.0054 22.166 64.2749 22.166Z" fill="#567BF3"/>
                            <path d="M68.516 6.61531H56.3401L51.9009 2.17611C51.117 1.39218 50.0749 0.960449 48.9663 0.960449H3.48399C1.97504 0.960449 0.747559 2.18793 0.747559 3.69688V82.8662C0.747559 84.3751 1.97504 85.6026 3.48399 85.6026H6.40242V88.521C6.40242 90.03 7.6299 91.2575 9.13885 91.2575H68.516C70.0249 91.2575 71.2524 90.03 71.2524 88.521V9.35192C71.2524 7.84297 70.0249 6.61531 68.516 6.61531ZM50.0463 4.06265L62.4951 16.5115H50.1373C50.087 16.5115 50.0463 16.4708 50.0463 16.4205V4.06265ZM68.607 88.5212C68.607 88.5715 68.5662 88.6122 68.516 88.6122H9.13885C9.08859 88.6122 9.04785 88.5715 9.04785 88.5212V85.6028H10.5522C11.2827 85.6028 11.8749 85.0106 11.8749 84.2801C11.8749 83.5496 11.2827 82.9574 10.5522 82.9574H3.48399C3.43372 82.9574 3.39298 82.9166 3.39298 82.8664V3.69688C3.39298 3.64661 3.43372 3.60588 3.48399 3.60588H47.4009V16.4205C47.4009 17.9294 48.6284 19.1569 50.1373 19.1569H64.2748C65.0053 19.1569 65.5975 18.5647 65.5975 17.8342V17.5917C65.5975 16.4833 65.1658 15.441 64.3819 14.6571L58.9855 9.26074H68.516C68.5662 9.26074 68.607 9.30148 68.607 9.35174V88.5212Z" fill="#567BF3"/>
                            <path d="M27.0391 16.0709C26.5225 15.5544 25.685 15.5544 25.1686 16.0709L17.6857 23.5538C17.6501 23.5892 17.5924 23.5892 17.557 23.5538L14.574 20.5708H16.8702C17.6007 20.5708 18.1929 19.9786 18.1929 19.2481C18.1929 18.5176 17.6007 17.9254 16.8702 17.9254H13.38C12.9571 17.9254 12.5578 18.0247 12.1998 18.1968L11.4878 17.4848C10.9713 16.9683 10.1337 16.9683 9.61735 17.4848C9.10079 18.0014 9.10079 18.8389 9.61735 19.3553L10.6572 20.3951C10.6487 20.4828 10.6438 20.5717 10.6438 20.6616V29.1441C10.6438 30.653 11.8713 31.8805 13.3802 31.8805H21.8627C23.3716 31.8805 24.5991 30.653 24.5991 29.1441V20.3814L27.0391 17.9414C27.5556 17.4249 27.5556 16.5873 27.0391 16.0709ZM21.9537 29.1443C21.9537 29.1945 21.9129 29.2353 21.8627 29.2353H13.3802C13.3299 29.2353 13.2892 29.1945 13.2892 29.1443V23.0268L15.6865 25.4241C16.22 25.9576 16.9207 26.2244 17.6215 26.2244C18.3222 26.2244 19.0229 25.9576 19.5564 25.4241L21.9537 23.0268V29.1443Z" fill="#567BF3"/>
                            <path d="M21.8626 36.304H13.3801C11.8712 36.304 10.6437 37.5315 10.6437 39.0404V47.5229C10.6437 49.0318 11.8712 50.2593 13.3801 50.2593H21.8626C23.3716 50.2593 24.5991 49.0318 24.5991 47.5229V39.0404C24.5991 37.5316 23.3716 36.304 21.8626 36.304ZM21.9536 47.5229C21.9536 47.5731 21.9129 47.6139 21.8626 47.6139H13.3801C13.3299 47.6139 13.2891 47.5731 13.2891 47.5229V39.0404C13.2891 38.9902 13.3299 38.9494 13.3801 38.9494H21.8626C21.9129 38.9494 21.9536 38.9902 21.9536 39.0404V47.5229Z" fill="#567BF3"/>
                            <path d="M21.8626 54.6826H13.3801C11.8712 54.6826 10.6437 55.91 10.6437 57.419V65.9015C10.6437 67.4104 11.8712 68.6379 13.3801 68.6379H21.8626C23.3716 68.6379 24.5991 67.4102 24.5991 65.9015V57.419C24.5991 55.91 23.3716 54.6826 21.8626 54.6826ZM21.9536 65.9015C21.9536 65.9517 21.9129 65.9925 21.8626 65.9925H13.3801C13.3299 65.9925 13.2891 65.9516 13.2891 65.9015V57.419C13.2891 57.3687 13.3299 57.328 13.3801 57.328H21.8626C21.9129 57.328 21.9536 57.3687 21.9536 57.419V65.9015Z" fill="#567BF3"/>
                            <path d="M43.0688 20.7528H30.3451C29.6146 20.7528 29.0224 21.345 29.0224 22.0755C29.0224 22.806 29.6145 23.3982 30.3451 23.3982H43.0688C43.7992 23.3982 44.3915 22.806 44.3915 22.0755C44.3915 21.345 43.7992 20.7528 43.0688 20.7528Z" fill="#567BF3"/>
                            <path d="M54.3787 26.4079H30.3451C29.6146 26.4079 29.0224 27.0002 29.0224 27.7306C29.0224 28.4611 29.6145 29.0534 30.3451 29.0534H54.3787C55.1091 29.0534 55.7014 28.4611 55.7014 27.7306C55.7014 27.0002 55.1093 26.4079 54.3787 26.4079Z" fill="#567BF3"/>
                            <path d="M43.0688 39.1314H30.3451C29.6146 39.1314 29.0224 39.7236 29.0224 40.4541C29.0224 41.1846 29.6145 41.7768 30.3451 41.7768H43.0688C43.7992 41.7768 44.3915 41.1846 44.3915 40.4541C44.3915 39.7236 43.7992 39.1314 43.0688 39.1314Z" fill="#567BF3"/>
                            <path d="M54.3787 44.7864H30.3451C29.6146 44.7864 29.0224 45.3786 29.0224 46.1091C29.0224 46.8396 29.6145 47.4318 30.3451 47.4318H54.3787C55.1091 47.4318 55.7014 46.8396 55.7014 46.1091C55.7014 45.3786 55.1093 44.7864 54.3787 44.7864Z" fill="#567BF3"/>
                            <path d="M43.0688 57.5099H30.3451C29.6146 57.5099 29.0224 58.1021 29.0224 58.8326C29.0224 59.5631 29.6145 60.1553 30.3451 60.1553H43.0688C43.7992 60.1553 44.3915 59.5631 44.3915 58.8326C44.3915 58.1021 43.7992 57.5099 43.0688 57.5099Z" fill="#567BF3"/>
                            <path d="M54.3787 63.1649H30.3451C29.6146 63.1649 29.0224 63.7571 29.0224 64.4876C29.0224 65.2181 29.6145 65.8103 30.3451 65.8103H54.3787C55.1091 65.8103 55.7014 65.2181 55.7014 64.4876C55.7014 63.7571 55.1093 63.1649 54.3787 63.1649Z" fill="#567BF3"/>
                        </svg>
                            </span>
                            <p className="variation-block__name mt-2">
                                Одна відповідь
                            </p>
                        </div>
                    </Link>

                </Col>
                <Col lg={3}>
                    <div className="variation-block py-4 d-flex flex-column align-items-center justify-content-between">
                                        <span>
                                            <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M78.6402 28.041C78.3286 27.2973 77.7458 26.7193 76.9996 26.4143L71.7294 24.2578C70.9838 23.9528 70.1629 23.9558 69.4191 24.268C68.6748 24.5802 68.0974 25.163 67.7918 25.9086L61.7923 40.5722V16.6104C61.7923 16.2994 61.6687 16.0005 61.4487 15.7805L46.0112 0.343552C45.7912 0.123558 45.4929 0 45.1819 0H1.1735C0.525574 0 0 0.525574 0 1.1735V10.2282C0 10.8761 0.525574 11.4017 1.1735 11.4017C1.82143 11.4017 2.3464 10.8761 2.3464 10.2282V2.3464H44.0078V16.6104C44.0078 17.2583 44.5333 17.7833 45.1813 17.7833H59.4459V46.3077L54.2733 58.9486C54.2082 59.1078 54.1787 59.2795 54.1877 59.4513L54.7398 70.495C54.7627 70.9494 55.046 71.3496 55.4673 71.522C55.6108 71.5811 55.7615 71.6094 55.9115 71.6094C56.2008 71.6094 56.4853 71.5027 56.7059 71.2996L59.4453 68.7778V76.6536H2.3464V14.9216C2.3464 14.2737 1.82143 13.7481 1.1735 13.7481C0.525574 13.7481 0 14.2737 0 14.9216V77.8265C0 78.4744 0.525574 79 1.1735 79H60.6188C61.2667 79 61.7923 78.4744 61.7923 77.8265V66.6177L64.8415 63.8108C64.968 63.6939 65.0669 63.551 65.1326 63.3919L70.4516 50.3912C70.6969 49.7915 70.4094 49.1062 69.8097 48.8609C69.2106 48.6156 68.5253 48.9025 68.28 49.5022L63.4046 61.4174L56.8891 58.7515L66.901 34.2828L73.4164 36.9487L69.9622 45.391C69.7169 45.9907 70.0038 46.676 70.6041 46.9213C71.2038 47.1666 71.8885 46.8797 72.1338 46.28L78.651 30.3519C78.956 29.6057 78.9524 28.7848 78.6402 28.041ZM46.3548 4.00509L57.7866 15.4375H46.3548V4.00509ZM56.6233 61.1775L61.8942 63.334L56.9585 67.878L56.6233 61.1775ZM76.4788 29.4629L74.3048 34.7765L67.7894 32.1106L69.9634 26.797C70.0315 26.6313 70.1605 26.5017 70.3262 26.4324C70.4926 26.3625 70.6752 26.3613 70.841 26.4294L76.1112 28.5859C76.2769 28.6534 76.4065 28.7824 76.4758 28.9481C76.5457 29.1145 76.5469 29.2971 76.4788 29.4629Z" fill="#567BF3"/>
                                            <path d="M39.045 12.8091H24.4971C23.8491 12.8091 23.3236 13.334 23.3236 13.982C23.3236 14.6299 23.8491 15.1555 24.4971 15.1555H39.045C39.6929 15.1555 40.2185 14.6299 40.2185 13.982C40.2185 13.334 39.6929 12.8091 39.045 12.8091Z" fill="#567BF3"/>
                                            <path d="M9.07396 38.5417H18.3499C18.9978 38.5417 19.5228 38.0161 19.5228 37.3682V29.059L21.2737 26.8302C21.6739 26.3209 21.5853 25.5831 21.076 25.1829C20.5667 24.7827 19.8289 24.8713 19.4287 25.3806L18.2197 26.9194H9.07396C8.42603 26.9194 7.90046 27.4443 7.90046 28.0923V37.3682C7.90046 38.0161 8.42603 38.5417 9.07396 38.5417ZM10.2469 29.2658H16.3759L14.5087 31.6423L13.2032 30.3362C12.7451 29.8781 12.002 29.8781 11.5439 30.3362C11.0858 30.7949 11.0858 31.5374 11.5439 31.9955L13.7848 34.2364C14.0054 34.457 14.3044 34.58 14.6142 34.58C14.6377 34.58 14.6612 34.5794 14.6847 34.5782C15.0192 34.5583 15.3296 34.3955 15.537 34.1316L17.1764 32.0455V36.1953H10.2469V29.2658Z" fill="#567BF3"/>
                                            <path d="M51.5586 28.7415H26.4522C25.8043 28.7415 25.2787 29.2671 25.2787 29.915C25.2787 30.563 25.8043 31.0885 26.4522 31.0885H51.5586C52.2072 31.0885 52.7321 30.563 52.7321 29.915C52.7321 29.2671 52.2072 28.7415 51.5586 28.7415Z" fill="#567BF3"/>
                                            <path d="M26.4522 36.7198H46.6314C47.2793 36.7198 47.8043 36.1942 47.8043 35.5463C47.8043 34.8983 47.2793 34.3734 46.6314 34.3734H26.4522C25.8043 34.3734 25.2787 34.8983 25.2787 35.5463C25.2787 36.1942 25.8043 36.7198 26.4522 36.7198Z" fill="#567BF3"/>
                                            <path d="M7.90046 52.776C7.90046 53.4239 8.42603 53.9495 9.07396 53.9495H18.3499C18.9978 53.9495 19.5228 53.4239 19.5228 52.776V44.4669L21.2737 42.238C21.6739 41.7287 21.5853 40.991 21.076 40.5908C20.5667 40.1906 19.8289 40.2792 19.4287 40.7885L18.2197 42.3272H9.07396C8.42603 42.3272 7.90046 42.8522 7.90046 43.5001V52.776ZM10.2469 44.6736H16.3759L14.5087 47.0501L13.2032 45.744C12.7451 45.286 12.002 45.286 11.5439 45.744C11.0858 46.2027 11.0858 46.9453 11.5439 47.4033L13.7848 49.6443C14.0054 49.8648 14.3044 49.9878 14.6142 49.9878C14.6377 49.9878 14.6612 49.9872 14.6847 49.986C15.0192 49.9661 15.3296 49.8034 15.537 49.5394L17.1764 47.4534V51.6031H10.2469V44.6736Z" fill="#567BF3"/>
                                            <path d="M51.5586 44.1493H26.4522C25.8043 44.1493 25.2787 44.6749 25.2787 45.3229C25.2787 45.9708 25.8043 46.4958 26.4522 46.4958H51.5586C52.2072 46.4958 52.7321 45.9708 52.7321 45.3229C52.7321 44.6749 52.2072 44.1493 51.5586 44.1493Z" fill="#567BF3"/>
                                            <path d="M26.4522 52.1276H33.9609C34.6089 52.1276 35.1338 51.602 35.1338 50.9541C35.1338 50.3062 34.6089 49.7812 33.9609 49.7812H26.4522C25.8043 49.7812 25.2787 50.3062 25.2787 50.9541C25.2787 51.602 25.8043 52.1276 26.4522 52.1276Z" fill="#567BF3"/>
                                            <path d="M7.90046 68.1842C7.90046 68.8321 8.42603 69.3577 9.07396 69.3577H18.3499C18.9978 69.3577 19.5228 68.8321 19.5228 68.1842V58.9089C19.5228 58.2609 18.9978 57.7354 18.3499 57.7354H9.07396C8.42603 57.7354 7.90046 58.2609 7.90046 58.9089V68.1842ZM10.2469 60.0818H17.1764V67.0107H10.2469V60.0818Z" fill="#567BF3"/>
                                            <path d="M52.7321 60.7307C52.7321 60.0828 52.2072 59.5572 51.5586 59.5572H26.4522C25.8043 59.5572 25.2787 60.0828 25.2787 60.7307C25.2787 61.3786 25.8043 61.9036 26.4522 61.9036H51.5586C52.2072 61.9036 52.7321 61.3786 52.7321 60.7307Z" fill="#567BF3"/>
                                            <path d="M26.4522 65.1887C25.8043 65.1887 25.2787 65.7143 25.2787 66.3622C25.2787 67.0101 25.8043 67.5357 26.4522 67.5357H47.8043C48.4528 67.5357 48.9778 67.0101 48.9778 66.3622C48.9778 65.7143 48.4528 65.1887 47.8043 65.1887H26.4522Z" fill="#567BF3"/>
                                        </svg>
                                        </span>
                        <p className="variation-block__name mt-2">
                            Кілька відповідей
                        </p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="variation-block py-4 d-flex flex-column align-items-center justify-content-between">
                                        <span>
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.5905 31.5702C33.3 31.2796 32.8969 31.1124 32.4859 31.1124C32.075 31.1124 31.6719 31.2796 31.3813 31.5702C31.0906 31.8609 30.9234 32.264 30.9234 32.6749C30.9234 33.0859 31.0905 33.489 31.3813 33.7796C31.6719 34.0702 32.075 34.2374 32.4859 34.2374C32.8969 34.2374 33.3 34.0702 33.5905 33.7796C33.8811 33.489 34.0484 33.0859 34.0484 32.6749C34.0484 32.264 33.8813 31.8609 33.5905 31.5702Z" fill="#567BF3"/>
                                            <path d="M58.7853 33.341C57.8633 33.341 56.9953 33.577 56.2386 33.9916C55.4719 31.9944 53.535 30.5724 51.2711 30.5724C50.2947 30.5724 49.3798 30.838 48.5923 31.2989C47.7509 29.4678 45.9006 28.1927 43.757 28.1927C42.9747 28.1927 42.232 28.3638 41.5625 28.6683V18.5938C41.5625 15.6606 39.1762 13.2742 36.243 13.2742C33.3097 13.2742 30.9234 15.6606 30.9234 18.5938V26.5625C30.9234 27.4255 31.6231 28.125 32.4859 28.125C33.3487 28.125 34.0484 27.4255 34.0484 26.5625V18.5938C34.0484 17.3836 35.033 16.3992 36.243 16.3992C37.4529 16.3992 38.4375 17.3836 38.4375 18.5938V43.2463C38.4375 44.1092 39.1372 44.8088 40 44.8088C40.8628 44.8088 41.5625 44.1092 41.5625 43.2463V33.5122C41.5625 32.302 42.547 31.3177 43.757 31.3177C44.967 31.3177 45.9515 32.302 45.9515 33.5122V43.2461C45.9515 44.1091 46.6512 44.8086 47.514 44.8086C48.3769 44.8086 49.0765 44.1091 49.0765 43.2461V35.8919C49.0765 34.6817 50.0611 33.6974 51.2711 33.6974C52.4812 33.6974 53.4658 34.6817 53.4658 35.8919V37.672C53.4658 37.7916 53.4804 37.9074 53.5058 38.0192C53.4803 38.2297 53.4658 38.4435 53.4658 38.6606V43.2464C53.4658 44.1094 54.1654 44.8089 55.0283 44.8089C55.8911 44.8089 56.5908 44.1094 56.5908 43.2464V38.6606C56.5908 37.4505 57.5753 36.4661 58.7853 36.4661C59.9953 36.4661 60.9798 37.4505 60.9798 38.6606V51.845C60.9798 55.3583 60.4469 58.8396 59.3954 62.1917L57.5348 68.125H52.1094C51.2465 68.125 50.5469 68.8245 50.5469 69.6875C50.5469 70.5505 51.2465 71.25 52.1094 71.25H58.9486V76.875H30.8236V71.25H39.2187C40.0815 71.25 40.7812 70.5505 40.7812 69.6875C40.7812 68.8245 40.0815 68.125 39.2187 68.125H33.2795L28.1439 61.0972C26.7062 59.1299 25.6873 56.9313 25.1158 54.5622L22.2553 42.7056C21.9928 41.6174 22.5075 40.505 23.5072 40.0008C24.6756 39.4114 26.0772 39.8517 26.6989 41.0028L31.1112 49.1733C31.4511 49.8027 32.1756 50.1206 32.8689 49.9456C33.5625 49.7702 34.0486 49.1463 34.0486 48.4308V38.9063C34.0486 38.0433 33.3489 37.3438 32.4861 37.3438C31.6233 37.3438 30.9236 38.0433 30.9236 38.9063V42.2492L29.4486 39.518C28.0172 36.8674 24.7892 35.8541 22.0997 37.2108C19.7983 38.3717 18.6133 40.9327 19.2178 43.4386L22.0783 55.2952C22.7469 58.0669 23.9389 60.6394 25.6209 62.9411L29.4089 68.125H29.2611C28.3983 68.125 27.6986 68.8245 27.6986 69.6875V78.4375C27.6986 79.3005 28.3983 80 29.2611 80H60.5111C61.3739 80 62.0736 79.3005 62.0736 78.4375V69.6875C62.0736 68.9238 61.5253 68.2891 60.8012 68.153L62.3773 63.1266C63.5236 59.4714 64.1048 55.6756 64.1048 51.8449V38.6605C64.1048 35.7274 61.7184 33.341 58.7853 33.341Z" fill="#567BF3"/>
                                            <path d="M46.417 68.5828C46.1266 68.2922 45.7234 68.125 45.3125 68.125C44.9016 68.125 44.4984 68.2922 44.2078 68.5828C43.9172 68.8734 43.75 69.2766 43.75 69.6875C43.75 70.0984 43.917 70.5016 44.2078 70.7922C44.4986 71.0828 44.9016 71.25 45.3125 71.25C45.7234 71.25 46.1266 71.0828 46.417 70.7922C46.7077 70.5016 46.875 70.0984 46.875 69.6875C46.875 69.2766 46.7078 68.8734 46.417 68.5828Z" fill="#567BF3"/>
                                            <path d="M14.0625 0C6.30844 0 0 6.30844 0 14.0625C0 21.8166 6.30844 28.125 14.0625 28.125C21.8166 28.125 28.125 21.8166 28.125 14.0625C28.125 6.30844 21.8166 0 14.0625 0ZM14.0625 25C8.03156 25 3.125 20.0934 3.125 14.0625C3.125 8.03156 8.03156 3.125 14.0625 3.125C20.0934 3.125 25 8.03156 25 14.0625C25 20.0934 20.0934 25 14.0625 25Z" fill="#567BF3"/>
                                            <path d="M16.2697 14.0606L19.2427 11.0876C19.8533 10.4774 19.8533 9.48806 19.243 8.87774C18.6327 8.26759 17.6436 8.26759 17.0331 8.87774L14.0603 11.8507L11.0875 8.8779C10.4773 8.26774 9.48828 8.26774 8.87766 8.8779C8.2675 9.48806 8.2675 10.4774 8.87766 11.0876L11.8506 14.0606L8.87766 17.0335C8.2675 17.6437 8.2675 18.6331 8.87766 19.2432C9.18281 19.5484 9.58265 19.7009 9.9825 19.7009C10.3823 19.7009 10.7822 19.5482 11.0873 19.2432L14.0602 16.2702L17.033 19.2432C17.3381 19.5484 17.738 19.7009 18.1378 19.7009C18.5377 19.7009 18.9375 19.5482 19.2427 19.2432C19.8528 18.6331 19.8528 17.6437 19.2427 17.0335L16.2697 14.0606Z" fill="#567BF3"/>
                                            <path d="M73.2102 8.82868C72.5999 8.21868 71.6108 8.21868 71.0003 8.82868L63.8475 15.9816L60.8747 13.0087C60.2644 12.3985 59.2753 12.3985 58.6649 13.0087C58.0547 13.6188 58.0547 14.6082 58.6649 15.2185L62.7427 19.2963C63.0478 19.6013 63.4477 19.754 63.8475 19.754C64.2474 19.754 64.6472 19.6013 64.9524 19.2963L73.2102 11.0385C73.8203 10.4284 73.8203 9.43899 73.2102 8.82868Z" fill="#567BF3"/>
                                            <path d="M65.9375 0C58.1834 0 51.875 6.30844 51.875 14.0625C51.875 21.8166 58.1834 28.125 65.9375 28.125C73.6916 28.125 80 21.8166 80 14.0625C80 6.30844 73.6916 0 65.9375 0ZM65.9375 25C59.9066 25 55 20.0934 55 14.0625C55 8.03156 59.9066 3.125 65.9375 3.125C71.9684 3.125 76.875 8.03156 76.875 14.0625C76.875 20.0934 71.9684 25 65.9375 25Z" fill="#567BF3"/>
                                        </svg>
                                        </span>
                        <p className="variation-block__name mt-2">
                            Вірно чи ні
                        </p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="variation-block px-4 py-4 d-flex flex-column align-items-center justify-content-between">
                                        <span>
                                            <svg width="98" height="79" viewBox="0 0 98 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.2799 4.7417H1.1735C0.525574 4.7417 0 5.26727 0 5.9152C0 6.56313 0.525574 7.0887 1.1735 7.0887H26.2799C26.9284 7.0887 27.4534 6.56313 27.4534 5.9152C27.4534 5.26727 26.9284 4.7417 26.2799 4.7417Z" fill="#567BF3"/>
                                            <path d="M1.1735 12.7199H21.3526C22.0006 12.7199 22.5255 12.1944 22.5255 11.5464C22.5255 10.8985 22.0006 10.3735 21.3526 10.3735H1.1735C0.525574 10.3735 0 10.8985 0 11.5464C0 12.1944 0.525574 12.7199 1.1735 12.7199Z" fill="#567BF3"/>
                                            <path d="M96.2799 5H71.1735C70.5256 5 70 5.52558 70 6.17351C70 6.82144 70.5256 7.34641 71.1735 7.34641H96.2799C96.9284 7.34641 97.4534 6.82144 97.4534 6.17351C97.4534 5.52558 96.9284 5 96.2799 5Z" fill="#567BF3"/>
                                            <path d="M71.1735 12.9782H78.6822C79.3301 12.9782 79.8551 12.4527 79.8551 11.8047C79.8551 11.1568 79.3301 10.6318 78.6822 10.6318H71.1735C70.5256 10.6318 70 11.1568 70 11.8047C70 12.4527 70.5256 12.9782 71.1735 12.9782Z" fill="#567BF3"/>
                                            <path d="M27.4534 1.1735C27.4534 0.525574 26.9284 0 26.2799 0H1.1735C0.525574 0 0 0.525574 0 1.1735C0 1.82143 0.525574 2.3464 1.1735 2.3464H26.2799C26.9284 2.3464 27.4534 1.82143 27.4534 1.1735Z" fill="#567BF3"/>
                                            <path d="M71.1735 0C70.5256 0 70 0.525574 70 1.1735C70 1.82143 70.5256 2.347 71.1735 2.347H92.5255C93.1741 2.347 93.699 1.82143 93.699 1.1735C93.699 0.525574 93.1741 0 92.5255 0H71.1735Z" fill="#567BF3"/>
                                            <path d="M37.5905 30.5702C37.3 30.2796 36.8969 30.1124 36.4859 30.1124C36.075 30.1124 35.6719 30.2796 35.3813 30.5702C35.0906 30.8609 34.9234 31.264 34.9234 31.6749C34.9234 32.0859 35.0905 32.489 35.3813 32.7796C35.6719 33.0702 36.075 33.2374 36.4859 33.2374C36.8969 33.2374 37.3 33.0702 37.5905 32.7796C37.8811 32.489 38.0484 32.0859 38.0484 31.6749C38.0484 31.264 37.8813 30.8609 37.5905 30.5702Z" fill="#567BF3"/>
                                            <path d="M62.7853 32.341C61.8633 32.341 60.9953 32.577 60.2386 32.9916C59.4719 30.9944 57.535 29.5724 55.2711 29.5724C54.2947 29.5724 53.3798 29.838 52.5923 30.2989C51.7509 28.4678 49.9006 27.1927 47.757 27.1927C46.9747 27.1927 46.232 27.3638 45.5625 27.6683V17.5938C45.5625 14.6606 43.1762 12.2742 40.243 12.2742C37.3097 12.2742 34.9234 14.6606 34.9234 17.5938V25.5625C34.9234 26.4255 35.6231 27.125 36.4859 27.125C37.3487 27.125 38.0484 26.4255 38.0484 25.5625V17.5938C38.0484 16.3836 39.033 15.3992 40.243 15.3992C41.4529 15.3992 42.4375 16.3836 42.4375 17.5938V42.2463C42.4375 43.1092 43.1372 43.8088 44 43.8088C44.8628 43.8088 45.5625 43.1092 45.5625 42.2463V32.5122C45.5625 31.302 46.547 30.3177 47.757 30.3177C48.967 30.3177 49.9515 31.302 49.9515 32.5122V42.2461C49.9515 43.1091 50.6512 43.8086 51.514 43.8086C52.3769 43.8086 53.0765 43.1091 53.0765 42.2461V34.8919C53.0765 33.6817 54.0611 32.6974 55.2711 32.6974C56.4812 32.6974 57.4658 33.6817 57.4658 34.8919V36.672C57.4658 36.7916 57.4804 36.9074 57.5058 37.0192C57.4803 37.2297 57.4658 37.4435 57.4658 37.6606V42.2464C57.4658 43.1094 58.1654 43.8089 59.0283 43.8089C59.8911 43.8089 60.5908 43.1094 60.5908 42.2464V37.6606C60.5908 36.4505 61.5753 35.4661 62.7853 35.4661C63.9953 35.4661 64.9798 36.4505 64.9798 37.6606V50.845C64.9798 54.3583 64.4469 57.8396 63.3954 61.1917L61.5348 67.125H56.1094C55.2465 67.125 54.5469 67.8245 54.5469 68.6875C54.5469 69.5505 55.2465 70.25 56.1094 70.25H62.9486V75.875H34.8236V70.25H43.2187C44.0815 70.25 44.7812 69.5505 44.7812 68.6875C44.7812 67.8245 44.0815 67.125 43.2187 67.125H37.2795L32.1439 60.0972C30.7062 58.1299 29.6873 55.9313 29.1158 53.5622L26.2553 41.7056C25.9928 40.6174 26.5075 39.505 27.5072 39.0008C28.6756 38.4114 30.0772 38.8517 30.6989 40.0028L35.1112 48.1733C35.4511 48.8027 36.1756 49.1206 36.8689 48.9456C37.5625 48.7702 38.0486 48.1463 38.0486 47.4308V37.9063C38.0486 37.0433 37.3489 36.3438 36.4861 36.3438C35.6233 36.3438 34.9236 37.0433 34.9236 37.9063V41.2492L33.4486 38.518C32.0172 35.8674 28.7892 34.8541 26.0997 36.2108C23.7983 37.3717 22.6133 39.9327 23.2178 42.4386L26.0783 54.2952C26.7469 57.0669 27.9389 59.6394 29.6209 61.9411L33.4089 67.125H33.2611C32.3983 67.125 31.6986 67.8245 31.6986 68.6875V77.4375C31.6986 78.3005 32.3983 79 33.2611 79H64.5111C65.3739 79 66.0736 78.3005 66.0736 77.4375V68.6875C66.0736 67.9238 65.5253 67.2891 64.8012 67.153L66.3773 62.1266C67.5236 58.4714 68.1048 54.6756 68.1048 50.8449V37.6605C68.1048 34.7274 65.7184 32.341 62.7853 32.341Z" fill="#567BF3"/>
                                            <path d="M50.417 67.5828C50.1266 67.2922 49.7234 67.125 49.3125 67.125C48.9016 67.125 48.4984 67.2922 48.2078 67.5828C47.9172 67.8734 47.75 68.2766 47.75 68.6875C47.75 69.0984 47.917 69.5016 48.2078 69.7922C48.4986 70.0828 48.9016 70.25 49.3125 70.25C49.7234 70.25 50.1266 70.0828 50.417 69.7922C50.7077 69.5016 50.875 69.0984 50.875 68.6875C50.875 68.2766 50.7078 67.8734 50.417 67.5828Z" fill="#567BF3"/>
                                        </svg>
                                        </span>
                        <p className="variation-block__name mt-2">
                            Відповідність
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateTests;
