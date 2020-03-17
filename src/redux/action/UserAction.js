import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

const baseURL = 'https://buku-saku-glints.herokuapp.com/api/v1';

export const setProfileModal = value => {
    return dispatch => {
        dispatch({
            type: "SHOW_PROFILE",
            payload: value
        })
    }
}