import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { CheckResponse, Validation } from "../../../utils/interfaces";
import { checkEmail, checkPhone, checkUsername } from "./thunks";
import { defaultError } from './auth.reducer'
const initialState: Validation = {
    emailValid: true,
    phoneValid: true,
    usernameValid: true,
    emailError: null,
    phoneError: null,
    usernameError: null,
    loading: true
}


export default createReducer(initialState, builder =>
    builder
        .addCase(checkEmail.pending, state => {
            state.loading = true
        })
        .addCase(checkEmail.fulfilled, (state, action: PayloadAction<CheckResponse>) => {
            const {valid} = action.payload
            state.emailValid = valid
        })
        .addCase(checkEmail.rejected, (state, { error }) => {
            state.emailError = error.message ?? defaultError
            state.loading = false
        })

        .addCase(checkPhone.pending, state => {
            state.loading = true
        })
        .addCase(checkPhone.fulfilled, (state, action: PayloadAction<CheckResponse>) => {
            const {valid} = action.payload
            state.phoneValid = valid
        })
        .addCase(checkPhone.rejected, (state, { error }) => {
            state.phoneError = error.message ?? defaultError
            state.loading = false
        })

        .addCase(checkUsername.pending, state => {
            state.loading = true
        })
        .addCase(checkUsername.fulfilled, (state, action: PayloadAction<CheckResponse>) => {
            const { valid } = action.payload
            state.usernameValid = valid
        })
        .addCase(checkUsername.rejected, (state, { error }) => {
            state.usernameError = error.message ?? defaultError
            state.loading = false
        })
)
