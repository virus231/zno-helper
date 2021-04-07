import React from 'react'
import {FormSelect } from "shards-react";
import { testTypes } from '../../../utils/constants';
function TypePicker({changeMode,currentType,testIndex}) {
    return (
        <FormSelect onChange={e => {
            changeMode(testIndex, e.target.value)
        }}
            value={currentType}
            className="ml-3 w-100">
            <option value={testTypes.SINGLE_ANSWER}>Одна відповідь</option>
            <option value={testTypes.MULTI_ANSWER}>Кілька відповідей</option>
            <option value={testTypes.BOOLEAN}>
                Вірно чи ні
                        </option>
            <option value={testTypes.ACCORDANCE}>
                Відповідність
                        </option>
        </FormSelect>
    )
}

export default TypePicker
