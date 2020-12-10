import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkValidity, loginUser, registerUser, sendSms } from "../../../api/authApi";
import { AuthResponse, CheckResponse, LoginBody, RegisterBody, SmsResponse } from "../../../utils/interfaces";


export const register = createAsyncThunk<AuthResponse, RegisterBody>(
  'register',
  (data) =>  registerUser(data),
)

export const login = createAsyncThunk<AuthResponse, LoginBody>(
  'login',
  (data) => loginUser(data)
)


export const checkEmail = createAsyncThunk<CheckResponse,string>('checkEmail',
  (email) => checkValidity('email',email)
)
export const checkPhone = createAsyncThunk<CheckResponse,string>('checkPhone',
  (phone) => checkValidity('phone',phone)
)

export const checkUsername = createAsyncThunk<CheckResponse,string>('checkUsername',
  (username) => checkValidity('username', username)
)

export const sendSmsToPhone = createAsyncThunk<SmsResponse,string>('getSms',
  (phone) => sendSms(phone)
)
