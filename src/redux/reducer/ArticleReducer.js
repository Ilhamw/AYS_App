const initialState = {
    list: '',
    categories: [
        {
            id: 1,
            image: require('../../../assets/panik.png'),
            category: 'Marketplace'
        },
        {
            id: 2,
            image: require('../../../assets/panik.png'),
            category: 'Agriculture'
        },
        {
            id: 3,
            image: require('../../../assets/panik.png'),
            category: 'Health'
        },
        {
            id: 4,
            image: require('../../../assets/kalm.png'),
            category: 'Education'
        },
        {
            id: 5,
            image: require('../../../assets/kalm.png'),
            category: 'Finance'
        },
        {
            id: 6,
            image: require('../../../assets/kalm.png'),
            category: 'Logistics'
        },
    ],
    details: {
        id: '',
        image: '',
        category: '',
    },
    name: 'asd',
    detailModal: false,
    detailLoading: false,
}

export const ArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TEST":
            return {...state, list: action.payload}
        case "SHOW_ARTICLE_DETAIL":
            return {...state, detailModal: action.payload}
        case "SHOW_LOADING_DETAIL":
            return {...state, detailLoading: action.payload}
        default:
            return {...state}
    }
}