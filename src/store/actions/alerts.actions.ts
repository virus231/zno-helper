import { createAction } from "@reduxjs/toolkit";

export const showAlert = createAction('showAlert', (text, type) => {
    return{
        payload: {text, type}
    }
});