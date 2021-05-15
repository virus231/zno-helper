import React from "react";
import {useDispatch} from 'react-redux';
import copy from "copy-to-clipboard";
import { showAlert } from "../store/actions/alerts.actions";

export default function useCopyToClipboard(resetInterval): any {
    const [isCopied, setCopied] = React.useState(false);
    const dispatch = useDispatch()

    const handleCopy = React.useCallback((text) => {
        if (typeof text === "string" || typeof text == "number") {
            console.log(text)
            copy(text.toString());
            setCopied(true);
            dispatch(showAlert({text:"Успішно скопійовано",type: "success"}))
        } else {
            setCopied(false);
            dispatch(showAlert({text:"Виникла помилка",type: "error"}))

        }
    }, []);

    React.useEffect(() => {
        let timeout;
        if (isCopied && resetInterval) {
            timeout = setTimeout(() => setCopied(false), resetInterval);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [isCopied, resetInterval]);

    return [isCopied, handleCopy];
}