import {GET_TITLES, GET_FAVORITES, GET_DETAILS, SORT} from '../constants/index'
import axios from 'axios'
const API_KEY = '583cf928' 

// API - Request's
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

export const getDetail = (id) => {
    return async function(dispatch){
        return await axios(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${API_KEY}`)
        .then(json => {
            dispatch({
                type: GET_DETAILS,
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

export const sortByYear = () => {
    return function(dispatch){
        dispatch({
            type: SORT
        })
    }
}


