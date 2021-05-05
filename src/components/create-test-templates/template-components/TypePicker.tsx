import React from 'react'
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import {FormSelect } from "shards-react";
import { testTypes } from '../../../utils/constants';

const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }),
)(InputBase);


function TypePicker({changeMode,currentType,testIndex}) {
    const [age, setAge] = React.useState<string>('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

    return (
        <>
            <FormControl >
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    onChange={e => {
                        changeMode(testIndex, e.target.value)
                    }}
                    value={currentType}
                    input={<BootstrapInput />}
                >
                    <MenuItem value={testTypes.SINGLE_ANSWER}>
                        Одна відповідь
                    </MenuItem>
                    <MenuItem value={testTypes.MULTI_ANSWER}>Кілька відповідей</MenuItem>
                    <MenuItem value={testTypes.BOOLEAN}>Вірно чи ні</MenuItem>
                    <MenuItem value={testTypes.ACCORDANCE}>Відповідність</MenuItem>
                </Select>
            </FormControl>
            {/*<FormSelect onChange={e => {*/}
            {/*    changeMode(testIndex, e.target.value)*/}
            {/*}}*/}
            {/*            value={currentType}*/}
            {/*            className="ml-3 w-100">*/}
            {/*    <option value={testTypes.SINGLE_ANSWER}>Одна відповідь</option>*/}
            {/*    <option value={testTypes.MULTI_ANSWER}>Кілька відповідей</option>*/}
            {/*    <option value={testTypes.BOOLEAN}>*/}
            {/*        Вірно чи ні*/}
            {/*    </option>*/}
            {/*    <option value={testTypes.ACCORDANCE}>*/}
            {/*        Відповідність*/}
            {/*    </option>*/}
            {/*</FormSelect>*/}
        </>

    )
}

export default TypePicker
