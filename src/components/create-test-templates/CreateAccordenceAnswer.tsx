import React from 'react';
import TextField from "@material-ui/core/TextField";
import {Card, CardBody, CardHeader, Button,FormSelect,Collapse } from "shards-react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
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

export default function CreateaccordanceAnswer({test,removeTest,changeCollapseState,testIndex, changeExplanation, changeTitle, changeMode,tests, updateTests  }:TestProps):JSX.Element {
    const classes = useStyles();
    console.log('test from acc',test)
    const toggle = () => {
        changeCollapseState(test.id)
    }
    const changeTestTitle = (title: string) => changeTitle(test.id, title)
    const changeTestExplanation = (explanation: string) => changeExplanation(test.id, explanation)
    const handleAddAccordance = () => {
        let newTests = [...tests]
        newTests[testIndex].content.accordancies[0].push('')
        newTests[testIndex].content.accordancies[1].push('')
        updateTests(newTests)
    }

    const handleSetAccordance = (text:string,col:number,idx:number) => {
        let newTests = [...tests]
        newTests[testIndex].content.accordancies[col][idx] = text
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
                        <form className=" d-flex justify-content-around">
                            <div>
                                {
                                    test?.content?.accordancies[0]?.map(
                                        (el, idx) => <TextField
                                        key={idx+''}
                                        id="outlined-search"
                                        onChange={(e) => handleSetAccordance(e.target.value,0,idx)}
                                        label={`Відповідність ${idx + 1}`}
                                        type="text"
                                        value={el}
                                        variant="outlined"
                                        size="small"
                                    />
                                    )
                                }
                            </div>

                            <div>
                            {
                                    test?.content?.accordancies[1]?.map(
                                        (el,idx) =>  <TextField
                                        id="outlined-search"
                                        key={idx+''}
                                        onChange={(e) => handleSetAccordance(e.target.value,1,idx)}
                                        label={`Відповідність ${idx + 1}`}
                                        type="text"
                                        value={el}
                                        variant="outlined"
                                        size="small"
                                    />
                                    )
                                }

                            </div>
                        </form>
                    </div>
                    <Button onClick={handleAddAccordance} className="btn-add mt-3 d-flex align-items-center" theme="light">
                        <svg className="mr-2" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.05209 0C6.4272 0 5.92063 0.506569 5.92063 1.13145V5H1.26336C0.711071 5 0.263355 5.44771 0.263355 6C0.263355 6.55228 0.711071 7 1.26336 7H5.92063V10.8685C5.92063 11.4934 6.4272 12 7.05209 12C7.67697 12 8.18354 11.4934 8.18354 10.8685V7H12.8408C13.3931 7 13.8408 6.55228 13.8408 6C13.8408 5.44772 13.3931 5 12.8408 5H8.18354V1.13145C8.18354 0.50657 7.67697 0 7.05209 0Z" fill="#567BF3"/>
                        </svg>
                        Додати ще одну відповідність
                    </Button>

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
