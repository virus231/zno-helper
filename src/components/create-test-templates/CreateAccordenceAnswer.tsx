import React from 'react';
import TextField from "@material-ui/core/TextField";
import {CardBody,Button} from 'shards-react'
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

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

    console.log(props)

    return (
        <>
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
        </>
    )
}
