import axios from 'axios';

export const AuthActionType = {
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAIL: "REGISTER_FAIL",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_FAIL: "LOGOUT_FAIL",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
};

const RegisterAuthAction = (values, history, setErrorHandler) => {
    return async (dispatch) => {
        // console.log(values)
        try {
            const res = await axios.post("https://z-helper1.herokuapp.com/api/v1/auth/sign-up", values);
            // const { data } = res;
            console.log(res)
            dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: res });
            history.push("/");
        } catch (error) {
            console.log(error)
        }
    };
};

const LoginAuthAction = (loginState, history, setErrorHandler) => {
    return async (dispatch) => {
        try {
            // const res = await axios.post("/authenticate", loginState);
            // const { data } = res;
            // dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
            history.push("/");
        } catch (error) {
            if (error.response) {
                dispatch({
                    type: AuthActionType.LOGIN_FAIL,
                    payload: error.response.data.message,
                });
            }
            setErrorHandler({ hasError: true, message: error.response.data.message });
        }
    };
};

export {
    RegisterAuthAction,
    LoginAuthAction
};
