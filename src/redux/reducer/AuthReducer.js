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

const authReducer = (state = authState, action) => {
    return state
}

export default authReducer;
