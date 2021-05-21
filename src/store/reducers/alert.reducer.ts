import {createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { showAlert } from "../actions/alerts.actions";

interface AlertType {
    text: string,
    type: string
}

interface InfoAlert {
    alerts: AlertType | null,
    visible: boolean,
    error: boolean | null
}

const initialState: InfoAlert = {
    alerts: {text:'',type:''},
    visible: false,
    error: null
}

export const defaultError = 'Something went wrong!'
export const resetError = createAction('clearError')
export const hideAlert = createAction('hideAlert')

export default createReducer(initialState, builder =>
    builder.addCase(showAlert, (state,action) => {
        console.log('showAlert', action)
        state.alerts = action.payload
        state.visible = true
        console.log('state', state)
    }).addCase(hideAlert, (state) => {
        console.log('reset errr', state)
        state.error = null
        state.visible = false
    }).addCase(resetError, (state) => {
        console.log('reset errr', state)
        state.error = null
        state.alerts = null
        state.visible = false
    })

)