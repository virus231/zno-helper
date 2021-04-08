import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import validationReducer from "./reducers/validation.reducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    validation: validationReducer
})
