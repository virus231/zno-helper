import React from 'react';
import TextField from "@material-ui/core/TextField";
import {Card, CardBody, CardHeader, Button,FormSelect,Collapse } from "shards-react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                // display: 'block',
                margin: '5px 0',
                width: '90%',
                '& .MuiInputBase-root': {
                    // display: 'block',

                    '& .MuiOutlinedInput-input': {
                        // padding: '20px 0px 15px 15px',
                    }
                }
            }
        }
    }),
);

export default function CreateAccordenceAnswer(props):JSX.Element {
    const classes = useStyles();
    const [collapse, setCollapse] = React.useState<boolean>(true)

    const toggle = () => {
        setCollapse(!collapse)
    }

    return (
        <Card>
            <CardHeader>
                <div className="d-flex align-items-baseline justify-content-between">
                    <div>
                        <h5>
                            <svg onClick={toggle} style={{cursor: 'pointer'}} className="mr-3" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0L15.7942 13.5L0.205771 13.5L8 0Z" fill="#DADADA"/>
                            </svg>
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
                                    <g clip-path="url(#clip0)">
                                        <path d="M16.9583 24.9998H5.04167C3.77758 24.9998 2.75 23.8311 2.75 22.3957V7.81234C2.75 7.52484 2.95533 7.2915 3.20833 7.2915H18.7917C19.0447 7.2915 19.25 7.52484 19.25 7.81234V22.3957C19.25 23.8311 18.2224 24.9998 16.9583 24.9998ZM3.66667 8.33317V22.3957C3.66667 23.2571 4.28358 23.9582 5.04167 23.9582H16.9583C17.7164 23.9582 18.3333 23.2571 18.3333 22.3957V8.33317H3.66667Z" fill="#F44336" />
                                        <path d="M20.6251 8.33333H1.37508C1.12208 8.33333 0.916748 8.1 0.916748 7.8125V5.72917C0.916748 4.29375 1.94433 3.125 3.20842 3.125H18.7917C20.0558 3.125 21.0834 4.29375 21.0834 5.72917V7.8125C21.0834 8.1 20.8781 8.33333 20.6251 8.33333ZM1.83341 7.29167H20.1667V5.72917C20.1667 4.86771 19.5498 4.16667 18.7917 4.16667H3.20842C2.45033 4.16667 1.83341 4.86771 1.83341 5.72917V7.29167Z" fill="#F44336" />
                                        <path d="M14.2083 4.16667H7.79159C7.53859 4.16667 7.33325 3.93333 7.33325 3.64583V1.5625C7.33325 0.701042 7.95017 0 8.70825 0H13.2916C14.0497 0 14.6666 0.701042 14.6666 1.5625V3.64583C14.6666 3.93333 14.4613 4.16667 14.2083 4.16667ZM8.24992 3.125H13.7499V1.5625C13.7499 1.275 13.5437 1.04167 13.2916 1.04167H8.70825C8.45617 1.04167 8.24992 1.275 8.24992 1.5625V3.125Z" fill="#F44336" />
                                        <path d="M6.87508 20.8335C6.62208 20.8335 6.41675 20.6002 6.41675 20.3127V11.9793C6.41675 11.6918 6.62208 11.4585 6.87508 11.4585C7.12808 11.4585 7.33342 11.6918 7.33342 11.9793V20.3127C7.33342 20.6002 7.12808 20.8335 6.87508 20.8335Z" fill="#F44336" />
                                        <path d="M11.0001 20.8335C10.7471 20.8335 10.5417 20.6002 10.5417 20.3127V11.9793C10.5417 11.6918 10.7471 11.4585 11.0001 11.4585C11.2531 11.4585 11.4584 11.6918 11.4584 11.9793V20.3127C11.4584 20.6002 11.2531 20.8335 11.0001 20.8335Z" fill="#F44336" />
                                        <path d="M15.1251 20.8335C14.8721 20.8335 14.6667 20.6002 14.6667 20.3127V11.9793C14.6667 11.6918 14.8721 11.4585 15.1251 11.4585C15.3781 11.4585 15.5834 11.6918 15.5834 11.9793V20.3127C15.5834 20.6002 15.3781 20.8335 15.1251 20.8335Z" fill="#F44336" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="22" height="25" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                        </OverlayTrigger>

                    </div>

                </div>
            </CardHeader>

            <Collapse open={collapse}>
                <CardBody className="question-input">
                    <div className="w-100">
                        <TextField
                            className="d-flex"
                            id="outlined-search"
                            label="Напишіть ваше запитанння тут"
                            type="text"
                            variant="outlined"
                        />
                    </div>
                </CardBody>
                <CardBody className="question-input">
                    <div className={classes.root}>
                        <form className=" d-flex justify-content-around">
                            <div>
                                <TextField
                                    id="outlined-search"
                                    label="Відповідність 1"
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                />
                                <TextField
                                    id="outlined-search"
                                    label="Відповідність 2"
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                />
                                <TextField
                                    id="outlined-search"
                                    label="Відповідність 3"
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                />
                            </div>

                            <div>
                                <TextField
                                    id="outlined-search"
                                    label="Відповідність 1"
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                />
                                <TextField
                                    id="outlined-search"
                                    label="Відповідність 2"
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                />
                                <TextField
                                    id="outlined-search"
                                    label="Відповідність 3"
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                />

                            </div>
                        </form>
                    </div>
                    <Button className="btn-add mt-3 d-flex align-items-center" theme="light">
                        <svg className="mr-2" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.05209 0C6.4272 0 5.92063 0.506569 5.92063 1.13145V5H1.26336C0.711071 5 0.263355 5.44771 0.263355 6C0.263355 6.55228 0.711071 7 1.26336 7H5.92063V10.8685C5.92063 11.4934 6.4272 12 7.05209 12C7.67697 12 8.18354 11.4934 8.18354 10.8685V7H12.8408C13.3931 7 13.8408 6.55228 13.8408 6C13.8408 5.44772 13.3931 5 12.8408 5H8.18354V1.13145C8.18354 0.50657 7.67697 0 7.05209 0Z" fill="#567BF3"/>
                        </svg>
                        Додати ще одну відповідність
                    </Button>

                </CardBody>
                <CardBody>
                    <div className={classes.root} >
                        <TextField
                            id="outlined-multiline-static"
                            label="Напишіть пояснення"
                            multiline
                            rows={2}
                            variant="outlined"
                        />
                    </div>
                </CardBody>
            </Collapse>
        </Card>
    )
}
