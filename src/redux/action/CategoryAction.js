import axios from 'axios'

const baseURL = 'https://buku-saku-glints.herokuapp.com/api/v1';
const token = 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTZkMTA2ZTFjOWQ0NDAwMDA1MGMxODUiLCJpYXQiOjE1ODQyMDYzODJ9.tMDW2Ko1FpuQ_OWYNzcrp8PCfMG5-ljOLT2yCx8Fv9s'

export const setDetailModal = value => {
    return dispatch => {
        dispatch({
            type: "SHOW_CATEGORY_DETAILS",
            payload: value
        })
    }
}

export const getCategoryDetails = item => {
    return async dispatch => {
        dispatch({ type: "SHOW_CATEGORY_DETAILS", payload: true })
        dispatch({ type: "LOADING_DETAILS", payload: true })
        try {
            await console.log('response', item)
            dispatch({ type: "CATEGORY_DETAILS", payload: item })
            dispatch({ type: "LOADING_DETAILS", payload: false })
        } catch (error) {
            console.log(error)
            dispatch({ type: "ERROR" })
        }
    }
}