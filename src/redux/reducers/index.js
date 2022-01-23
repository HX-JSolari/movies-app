import {GET_TITLES, GET_FAVORITES, DELETE_FAVS, SORT} from '../constants/index'


const initialState = {
    titles: [],
    favsMovies: [],
    detail: {}
}

export default function reducer(state = initialState, action) {
    console.log('Action t', action.payload)
    switch(action.type) {
        case GET_TITLES: 
            return {
                ...state,
                titles: action.payload
            }
        case GET_FAVORITES:
            if(!state.favsMovies.includes(action.payload)) {
                return {
                    ...state,
                    favsMovies: [...state.favsMovies, action.payload]
                }
            } else {
                return {
                    ...state,
                    favsMovies: state.favsMovies.filter(favs => favs !== action.payload)
                }
            }
        case SORT:
            return {
                ...state,
                titles: [...state.titles].sort((a, b) => a.Year < b.Year ? -1 : 1)
            }
        default: 
            return state
    }
}