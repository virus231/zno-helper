import { axios } from "../utils/axios"
import { AuthResponse, CheckCode, CheckResponse, CurrentUser, LoginBody, RegisterBody, SmsResponse } from "../utils/interfaces"
export const registerUser = async (body: RegisterBody): Promise<AuthResponse> => {
    return axios.post('/auth/sign-up', body)
}

export const loginUser = async (body: LoginBody): Promise<AuthResponse> => axios.post('/auth/sign-in', body)
export const checkValidity = async (mode: string, value: string): Promise<CheckResponse> => axios.get(`/auth/check/${mode}/${value}`)
export const sendSms = async (phone: string): Promise<SmsResponse> => axios.get(`/auth/send-sms/${phone}`)
export const validateSms = async (response): Promise<CheckCode> => axios.get(`/auth/validation/${response.deviceId}/${response.phone}/${response.code}`)
export const getCurrentUser = async (): Promise<CurrentUser> => axios.get('/user/current')