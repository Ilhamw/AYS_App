const initialState = {
    token: "",
    info: "",
    loginModal: false,
    registerModal: false,
    isLoading: false,
};

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_AUTH_LOADING":
            return { ...state, isLoading: action.payload }
        case "SHOW_LOGIN":
            return { ...state, loginModal: action.payload }
        case "SHOW_REGISTER":
            return { ...state, registerModal: action.payload }
        case "REGISTER_SUCCESS":
            return { ...state, info: "success" }
        case "LOGIN_SUCCESS":
            return { ...state, info: "success", token: action.payload.token }
        case "FORGOT_PASSWORD":
            return { ...state }
        case "GET_TOKEN":
            return { ...state, token: action.payload }
        case "ERROR":
            return { ...state }
        default:
            return { ...state };
    }
};
