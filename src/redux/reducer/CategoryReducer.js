const initialState = {
    details: {
        id: '',
        image: '',
        category: '',
    },
    detailModal: false,
    detailLoading: false
}

export const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CATEGORY_DETAILS":
            return {...state, details: action.payload }
        case "SHOW_CATEGORY_DETAILS":
            return { ...state, detailModal: action.payload }
        case "LOADING_DETAILS":
            return { ...state, detailLoading: action.payload }
        case "ERROR":
            return { ...state }
        default:
            return { ...state }
    }
}