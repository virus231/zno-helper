import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse, StateHadnlers } from "../../utils/interfaces";
import { checkEmail, getUser, login, register, sendSmsToPhone } from "../actions/thunks";

const initialState: AuthResponse & StateHadnlers = {
    email: '',
    id: 0,
    roles: [],
    token: '',
    username: '',
    error: null,
    loading: false
}


export const defaultError = 'Something went wrong!'
export const logoutUser = createAction('logout')

export default createReducer(initialState, builder =>
    builder.addCase(register.pending, (state) => {
        state.loading = true
        state.error = null
    })
        .addCase(register.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
            // state = { ...action.payload, ...state }
            const { token, id, email, username, roles } = action.payload
            state.loading = false
            state.error = null
            state.token = token
            state.email = email
            localStorage.setItem('userData', JSON.stringify({ token }))
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
            const { token, email, username } = action.payload
            state.token = token
            state.email = email
            state.username = username
            state.loading = false
            state.error = null
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
        }).addCase(logoutUser, state => {
            state.email = ''
            state.error = null
            state.id = 0
            state.token = ''
            state.roles = []
            state.loading = false
            localStorage.removeItem('userData')
        }).addCase(getUser.fulfilled, (state, { payload }) => {
            console.log("getUser", payload)
        }).addCase(getUser.rejected, (state, { error }) => {
            console.log("getUser", error)
        }).addCase(getUser.pending, (state) => {
            console.log("getUser", state)
        })
)
