import { AuthActionType } from "../actions/action";
import axios from 'axios'

const authState = {
    isLoggedIn: false,
    user: {
        email: "",
        password: "",
        phone: "",
        referral: "",
        role: [
            ""
        ],
        username: ""
    }

}

const getAuthState = () => {
    const auth = localStorage.getItem("auth");
    try {
        const authobj = JSON.parse(auth);
        const { expires_at, jwttoken } = authobj.user;
        if (new Date(expires_at) > new Date()) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${jwttoken}`;
            return authobj;
        }
        return authState;
    } catch (error) {
        return authState;
    }
};
const newAuth = getAuthState();



const authReducer = (state = newAuth, action) => {
    switch (action.type) {
        case AuthActionType.REGISTER_SUCCESS:
            return {
                isLoggedIn: true,
                user: action.payload
            }
            // const newAuthState = {
            //     isLoggedIn: true,
            //     user: action.payload,
            // };
            // axios.defaults.headers.common[
            //     "Authorization"
            //     ] = `Bearer ${action.payload.jwttoken}`;
            // localStorage.setItem("auth", JSON.stringify(newAuthState));
            // return newAuthState;

        case AuthActionType.LOGOUT_SUCCESS:
            localStorage.removeItem("auth");
            return authState;

        case AuthActionType.LOGIN_SUCCESS:
            const loginAuthState = {
                isLoggedIn: true,
                user: action.payload,
            };
            axios.defaults.headers.common[
                "Authorization"
                ] = `Bearer ${action.payload.jwttoken}`;
            localStorage.setItem("auth", JSON.stringify(loginAuthState));
            return loginAuthState;

        default:
            return state;
    }
};

export default authReducer;
