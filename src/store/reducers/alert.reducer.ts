import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { showAlert } from "../actions/alerts.actions";


const initialState: any = {
    alerts: []
}

export const defaultError = 'Something went wrong!'

export default createReducer(initialState, builder =>
    builder.addCase(showAlert, (state, action) => {
        const {text, type} = action.payload
        state.alerts = action.payload
    })
)