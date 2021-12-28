import {GET_TITTLES, GET_FAVORITES, DELETE_FAVS} from '../constants/index'
import axios from 'axios'
const API_KEY = '583cf928' 

export default function getTittles(tittle) {
    console.log('PASS', API_KEY)
    return async function(dispatch){
        return await axios(`https://omdbapi.com/?s=${tittle}&plot=full&apikey=${API_KEY}`)
        .then(json => {
            dispatch({
                type: GET_TITTLES,
                payload: json.data.Search
            })
        })
    }
};

