import {GET_TITTLES, GET_FAVORITES, DELETE_FAVS} from '../constants/index'


const initialState = {
    tittles: [],
    favsMovies: [],
    detail: {}
}

export default function reducer(state = initialState, action) {
    console.log('Action t', action.payload)
    switch(action.type) {
        case GET_TITTLES: 
            return {
                ...state,
                tittles: action.payload
            }
        case GET_FAVORITES:
            return {
                ...state,
                favsMovies: [...state.favsMovies, action.payload]
            }
        case DELETE_FAVS:
            return {
                ...state,
                favsMovies: state.favsMovies.filter(movie => movie !== action.payload)
            }
        default: 
            return state
    }
}