import {createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { showAlert } from "../actions/alerts.actions";

interface InfoAlert {
    alerts: {
        text: string,
        type: string,
    }
    error: boolean | null
}

const initialState: InfoAlert = {
    alerts: {text:'',type:''},
    error:null
}

export const defaultError = 'Something went wrong!'
export const resetError = createAction('clearError')

export default createReducer(initialState, builder =>
    builder.addCase(showAlert, (state,action) => {
        console.log('showAlert',state)
        state.alerts = action.payload
        state.error = true
        console.log('state', state)
    }).addCase(resetError, (state) => {
        console.log('reset errr', state)
        state.error = null
    })

)