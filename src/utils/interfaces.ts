export interface AuthResponse {
  token: string,
  id: number,
  email: string,
  username: string,
  roles:string[]
  
}

export interface RegisterBody{
  email: string,
  password: string,
  phone: string,
  referral?: string,
  role?: string[],
  username:string
}


export interface LoginBody{
  username: string,
  password:string
}


export interface CheckResponse {
  valid:boolean
}

export interface SmsResponse {
  code: string
}

export interface StateHadnlers {
  error: string | null,
  loading: boolean
}

export interface Validation {
  emailValid: boolean,
  phoneValid: boolean,
  usernameValid: boolean,
  emailError: string | null,
  phoneError: string | null,
  usernameError: string | null,
  loading:boolean
}