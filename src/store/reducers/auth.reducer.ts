import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse, StateHadnlers } from "../../utils/interfaces";
import { checkEmail, login, register, sendSmsToPhone } from "../actions/thunks";

const initialState: AuthResponse & StateHadnlers = {
    email: '',
    id: 0,
    roles: [],
    token: '',
    username: '',
    error: null,
    loading: false
}


export const defaultError = 'Somthing went wrong!'

export default createReducer(initialState, builder =>
    builder.addCase(register.pending, (state) => {
        state.loading = true
        state.error = null
    })
        .addCase(register.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
            // state = { ...action.payload, ...state }
            console.log('Registered',action.payload)
            const { token, id, email, username, roles } = action.payload
            state.loading = false
            state.error = null
            // state.token = token
            state.username = username
        })
        .addCase(register.rejected, (state, { error }) => {
            state.loading = false
            state.error = error.message ?? defaultError
        })
        .addCase(login.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(login.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
            // state = { ...action.payload, ...state }
            // state.loading = false
            // state.error = null
        })
        .addCase(login.rejected, (state, { error }) => {
            state.loading = false
            state.error = error.message ?? defaultError
        })
        .addCase(sendSmsToPhone.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(sendSmsToPhone.fulfilled, (state, action: PayloadAction<any>) => {
            // state = { ...action.payload, ...state }
            // state.loading = false
            // state.error = null
        })
        .addCase(sendSmsToPhone.rejected, (state, { error }) => {
            state.loading = false
            state.error = error.message ?? defaultError
        })


)
