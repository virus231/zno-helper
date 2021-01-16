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

export default function CreateBooleanAnswer(props):JSX.Element {
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
                    <form className="boolean-answer d-flex justify-content-around">
                        <div>
                            <input type="radio" id="test_option_1" className="boolean"
                                   name="boolean" value="true"/>
                            <label htmlFor="test_option_1" className="p-4">
                                Твердження вірне
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="test_option_2" className="boolean"
                                   name="boolean" value="false"/>
                            <label htmlFor="test_option_2" className="p-4">
                                Твердження не вірне
                            </label>
                        </div>
                    </form>
                </div>

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
