import React from 'react'
import ReactCodeInput from 'react-verification-code-input';

function CodeInput({code}):JSX.Element {
    return (
        <ReactCodeInput values={code.toString().split('')} />
    )
}

export default CodeInput;
