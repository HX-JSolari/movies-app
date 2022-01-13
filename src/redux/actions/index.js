import {GET_TITLES, GET_FAVORITES, DELETE_FAVS, SORT} from '../constants/index'
import axios from 'axios'
const API_KEY = '583cf928' 

export const getTittles = (tittle) => {
    return async function(dispatch){
        return await axios(`https://omdbapi.com/?s=${tittle}&plot=full&apikey=${API_KEY}`)
        .then(json => {
            dispatch({
                type: GET_TITLES,
                payload: json.data.Search
            })
        })
    }
};

export const getFavorite = (id) => {
    return function(dispatch) {
        dispatch({
            type: GET_FAVORITES,
            payload: id
        })
    }
}

export const deleteFavorites = (id) => {
    return function(dispatch){
        dispatch({
            type: DELETE_FAVS,
            payload: id
        })
    }
}

export const sortByYear = () => {
    return function(dispatch){
        dispatch({
            type: SORT
        })
    }
}


