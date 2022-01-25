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
            // i need all this things, because if the user has maked two searchs, whitout THIS the first one(search) will dissapear.
            let movies = state.titles.filter(m => m.imdbID === action.payload)
            if(state.favsMovies.length === 0){
                return {
                    ...state,
                    favsMovies: [...state.favsMovies, ...movies]
                } 
            } else {
                for(let i = 0; i < state.favsMovies.length; i++){
                    if(state.favsMovies[i]?.imdbID === action.payload) {
                        return {
                            ...state,
                            favsMovies: state.favsMovies.filter(favs => favs.imdbID !== action.payload)
                        }
                    }
                }
                return {
                    ...state,
                    favsMovies: [...state.favsMovies, ...movies]
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