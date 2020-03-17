import { ToastAndroid } from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

const baseURL = 'https://buku-saku-glints.herokuapp.com/api/v1';

export const setAuthLoading = value => {
    return async dispatch => {
        dispatch({ type: "SHOW_AUTH_LOADING", payload: value })
    }
}

export const setLoginModal = value => {
    return dispatch => {
        dispatch({
            type: "SHOW_LOGIN",
            payload: value
        })
    }
}

export const setRegisterModal = value => {
    return dispatch => {
        dispatch({
            type: "SHOW_REGISTER",
            payload: value
        })
    }
}

export const getToken = () => {
    return async dispatch => {
        try {
            const userToken = await AsyncStorage.getItem('token')
            console.log('token', userToken)
            dispatch({type: "GET_TOKEN", payload: userToken})
        } catch (error) {
            console.log("error", error)
            dispatch({type: "ERROR"})
        }
    }
}

export const login = (email, password) => {
    return async dispatch => {
        dispatch(setAuthLoading(true))
        try {
            const res = await axios.post(
                baseURL + '/user/login',
                {
                    email: email,
                    password: password
                }
            )
            await AsyncStorage.setItem('token', res.data.data.token)
            ToastAndroid.show('Login Success', ToastAndroid.SHORT)
            dispatch(setAuthLoading(false))
            // console.log("response ", res.data.data)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data})
            dispatch(setLoginModal(false))
        } catch (error) {
            ToastAndroid.show('Failed to Login', ToastAndroid.SHORT)
            dispatch(setAuthLoading(false))
            console.log("error ", error)
            dispatch({ type: "ERROR" })
        }
    }
}

export const register = (name, email, password, password_confirmation) => {
    return async dispatch => {
        dispatch(setAuthLoading(true))
        try {
            const res = await axios.post(
                baseURL + '/user/register',
                {
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: password_confirmation
                }
            )
            ToastAndroid.show('Register Success', ToastAndroid.SHORT)
            console.log('response ', res)
            dispatch(setAuthLoading(false))
            dispatch(setRegisterModal(false))
            dispatch({ type: "REGISTER_SUCCESS" })
        } catch (error) {
            ToastAndroid.show('Failed to Register', ToastAndroid.SHORT)
            dispatch(setAuthLoading(false))
            console.log("error ", error)
            dispatch({ type: "ERROR" })
        }
    }
}

export const forgotPass = email => {
    return async dispatch => {
        try {
            const res = await axios.post(
                baseURL + '/user/forgotPassword'
            )
        } catch (error) {
            
        }
    }
}