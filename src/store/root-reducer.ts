import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../pages/styles/auth/auth.reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  
})