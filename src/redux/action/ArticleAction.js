import axios from 'axios'

const baseURL = 'https://buku-saku-glints.herokuapp.com/api/v1';
const token = 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTZkMTA2ZTFjOWQ0NDAwMDA1MGMxODUiLCJpYXQiOjE1ODQyMDYzODJ9.tMDW2Ko1FpuQ_OWYNzcrp8PCfMG5-ljOLT2yCx8Fv9s'

export const setDetailModal = value => {
    return dispatch => {
        dispatch({
            type: "SHOW_ARTICLE_DETAIL",
            payload: value
        })
    }
}

export const testFunction = () => {
    return dispatch => {
        const list = [
            {
                category: 'Finance',
                title: 'Airy dan komitmennya bbermanin di busis htiel bidget',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                image: 'https://i.kym-cdn.com/entries/icons/original/000/028/924/cover2.jpg',
                bookmark: false
            },
            {
                category: 'Marketplace',
                title: 'Memprediksi trwn bisnis fashion commesrxe di indonesia',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                image: 'https://i.kym-cdn.com/entries/icons/original/000/028/924/cover2.jpg',
                bookmark: false
            },
            {
                category: 'Health',
                title: 'Memprediksi trwn bisnis fashion commesrxe di indonesia',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                image: 'https://i.kym-cdn.com/entries/icons/original/000/028/924/cover2.jpg',
                bookmark: false
            },
        ]
        // console.log('response ', list)
        dispatch({ type: "TEST", payload: list })
    }
}

export const bookmark = () => {
    return async dispatch => {
        try {
            console.log("bookmark")
            dispatch({ type: "BOOKMARK_ SUCCESS" })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getDetails = () => {
    return async dispatch => {
        dispatch({type: "SHOW_ARTICLE_DETAIL", payload: true})
        dispatch({type: "SHOW_DETAIL_LOADING", payload: true})
        try {
            
        } catch (error) {
            
        }
    }
}