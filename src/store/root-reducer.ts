import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./reducers/alert.reducer";
import authReducer from "./reducers/auth.reducer";
import testsReducer from "./reducers/tests.reducer";
import validationReducer from "./reducers/validation.reducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    validation: validationReducer,
    alert: alertReducer,
    tests: testsReducer
})
