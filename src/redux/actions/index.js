import {GET_TITTLES, GET_FAVORITES, DELETE_FAVS} from '../constants/index'
import axios from 'axios'

const { API_KEY } = process.env

export default function getTittles(tittle) {
    return function(dispatch){
        return axios(`https://omdbapi.com/?s=${tittle}&plot=full&apikey=${API_KEY}`)
        .then(dat => dat.json())
        .then(json => {
            dispatch({
                type: GET_TITTLES,
                payload: json
            })
        })
    }
};

