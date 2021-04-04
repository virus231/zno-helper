import React from 'react';
import TextField from "@material-ui/core/TextField";
import {Card, CardBody, CardHeader,FormSelect, Collapse } from "shards-react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import { TestProps } from '../../utils/interfaces';
import Delete from '../svg/Delete';
import TypePicker from './template-components/TypePicker';

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

export default function CreateBooleanAnswer({test,removeTest,changeCollapseState,testIndex,changeExplanation,changeTitle, changeMode, tests, updateTests }:TestProps):JSX.Element {
    const classes = useStyles();

    const toggle = () => {
        changeCollapseState(test.id)
    }
    const changeTestTitle = (title: string) => changeTitle(test.id, title)
    const changeTestExplanation = (explanation: string) => changeExplanation(test.id, explanation)
    const changeTestState = (value: boolean) => {
        let newTests = [...tests]
        tests[testIndex].content.answer = value
        updateTests(newTests)
    }
    const deleteTest = () => removeTest(test.id)

    return (
        <Card>
            <CardHeader>
                <div className="d-flex align-items-baseline justify-content-between">
                    <div>
                        <h5>
                            <svg onClick={toggle} style={{cursor: 'pointer'}} className="mr-3" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0L15.7942 13.5L0.205771 13.5L8 0Z" fill="#DADADA"/>
                            </svg>
                            Запитання {testIndex + 1}
                        </h5>
                    </div>
                    <div className="d-flex align-items-baseline justify-content-between">
                    <TypePicker
                        changeMode={changeMode}
                            currentType={test.content.type}
                            testIndex={testIndex}
                        />

                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Видалити Запитання {testIndex + 1}</Tooltip>}>
                            <p className="ml-3 delete">
                            <Delete click={deleteTest} />          
                            </p>
                        </OverlayTrigger>

                    </div>

                </div>
            </CardHeader>
            <Collapse open={test.collapsed}>
                <CardBody className="question-input">
                    <div className="w-100">
                        <TextField
                            className="d-flex"
                            id="outlined-search"
                            label="Напишіть ваше запитанння тут"
                            onChange={e => changeTestTitle(e.target.value)}
                            type="text"
                            variant="outlined"
                        />
                    </div>
                </CardBody>
                <CardBody className="question-input">
                    <div className={classes.root}>
                        <form className="boolean-answer d-flex justify-content-around">
                            <div onClick={ () => changeTestState(true)}>
                                <input type="radio" id="test_option_1" className="boolean"
                                       name="boolean" value="true"/>
                                <label htmlFor="test_option_1" className="p-4">
                                    Твердження вірне
                                </label>
                            </div>
                            <div onClick={() => changeTestState(false)}>
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
                            onChange={e => changeTestExplanation(e.target.value)}
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
