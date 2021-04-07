import React from 'react';
import TextField from "@material-ui/core/TextField";
import {Card, CardBody, CardHeader, Button,FormSelect, Collapse } from "shards-react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import { TestProps } from '../../utils/interfaces';
import Delete from '../svg/Delete';
import MultiSelect from '../svg/MultiSelect';
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

const MultiOption = ({text,selected,idx,setOptionText,numOfQuestions,changeSelection,removeOption}) => (
    <p className="d-flex align-items-center justify-content-between">
    <MultiSelect click={() => changeSelection(idx)} active={selected} />
    <TextField
        id="outlined-search"
        label={`Варіант відповіді ${idx + 1}`}
        onChange={e => setOptionText(e.target.value,idx)}
        value={text}
        type="text"
        variant="outlined"
        size="small"
    />
        { numOfQuestions > 3 && <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Видалити варіант відповіді</Tooltip>}>
            <Delete click={() => removeOption(idx)} />
    </OverlayTrigger>}
</p>


)


export default function CreateMultiAnswer({test,removeTest,changeCollapseState,testIndex,changeExplanation,changeTitle, changeMode, tests, updateTests }:TestProps):JSX.Element {
    const classes = useStyles();

    const toggle = () => {
       changeCollapseState(test.id)
    }

    const deleteTest = () => removeTest(test.id)
    const changeTestTitle = (title: string) => changeTitle(test.id, title)
    const changeTestExplanation = (explanation: string) => changeExplanation(test.id, explanation)
    const handleOptionTextUpdate = (text:string,qIdx:number) => {
        let newTests = [...tests]
        const testToUpdateQuestions = newTests[testIndex].content.options
        const updatedTestQuestions = testToUpdateQuestions.map((q, idx) => qIdx === idx ? ({ ...q, text }) : q)
        newTests[testIndex].content.options = updatedTestQuestions
        updateTests(newTests)
    }


    const handleOptionSelectionUpdate = (qIdx: number) => {
        let newTests = [...tests]
        const testToUpdateQuestions = newTests[testIndex].content.options
        const updatedTestQuestions = testToUpdateQuestions.map((q, idx) => ({ ...q, selected: qIdx === idx ? !q.selected : q.selected }))
        newTests[testIndex].content.options = updatedTestQuestions
        updateTests(newTests)
    }

    const handleDeleteOption = (qIdx: number) => {
        let newTests = [...tests]
        const testToUpdateQuestions = newTests[testIndex].content.options
        const optionText = newTests[testIndex].content.options[qIdx].text
        const updatedTestQuestions = testToUpdateQuestions.filter((_, idx) => qIdx !== idx)
        newTests[testIndex].content.options = updatedTestQuestions
        updateTests(newTests)

    }

    const handleAddOption = () => {
        let newTests = [...tests]
        console.log('tests',newTests,testIndex)
        newTests[testIndex].content.options.push({ text: '', selected: false })
        updateTests(newTests)
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
                    {
                        test.content.options.map(
                            ({ text, selected }, idx, array) =>
                                <MultiOption
                                    idx={idx}
                                    text={text}
                                    selected={selected}
                                    setOptionText={handleOptionTextUpdate}
                                    numOfQuestions={array.length}
                                    changeSelection={handleOptionSelectionUpdate}
                                    removeOption={handleDeleteOption}
                                />
                        )
                    }
                    </div>
                    <Button onClick={handleAddOption} className="btn-add d-flex align-items-center" theme="light">
                        <svg className="mr-2" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.05209 0C6.4272 0 5.92063 0.506569 5.92063 1.13145V5H1.26336C0.711071 5 0.263355 5.44771 0.263355 6C0.263355 6.55228 0.711071 7 1.26336 7H5.92063V10.8685C5.92063 11.4934 6.4272 12 7.05209 12C7.67697 12 8.18354 11.4934 8.18354 10.8685V7H12.8408C13.3931 7 13.8408 6.55228 13.8408 6C13.8408 5.44772 13.3931 5 12.8408 5H8.18354V1.13145C8.18354 0.50657 7.67697 0 7.05209 0Z" fill="#567BF3"/>
                        </svg>
                        Додати ще один варіант
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
