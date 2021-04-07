import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkValidity, loginUser, registerUser, sendSms, validateSms } from "../../../api/authApi";
import { transformPhone } from "../../../helpers/authHelpers";
import { AuthResponse, CheckCode, CheckResponse, LoginBody, RegisterBody, SmsResponse } from "../../../utils/interfaces";


export const register = createAsyncThunk<AuthResponse, RegisterBody>('register', (data) =>  {
    return registerUser(data)
})

export const login = createAsyncThunk<AuthResponse, LoginBody>(
    'login',
    (data) => loginUser(data)
)

export const checkEmail = createAsyncThunk<CheckResponse,string>('checkEmail',
    (email) => checkValidity('email',email)
)
export const checkPhone = createAsyncThunk<CheckResponse,string>('checkPhone', (phone) => {
        return checkValidity('phone',transformPhone(phone))
    }
)

export const checkUsername = createAsyncThunk<CheckResponse,string>('checkUsername',
    (username) => checkValidity('username', username)
)

export const sendSmsToPhone = createAsyncThunk<SmsResponse,string>('getSms',
   async (phone) =>await  sendSms(phone.replace(/[-\s.,$_)(]/g, '').toString().substring(1))
)

export const validateCode = createAsyncThunk<CheckCode, object>('validateCode',
    (response) => validateSms(response)
)
