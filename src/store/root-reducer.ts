import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../pages/styles/auth/auth.reducer";
import validationReducer from "../pages/styles/auth/validation.reducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    validation: validationReducer
})
