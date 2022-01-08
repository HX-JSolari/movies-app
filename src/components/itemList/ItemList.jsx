import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {getFavorite, deleteFavorites} from '../../redux/actions/index';
import './itemList.css'

const ItemList = ({movis}) => {

    const {Title, Year, imdbID, Type, Poster} = movis;
    const dispatch = useDispatch()
    
    const favsM = useSelector(state => state.favsMovies)
    const [check, setCheck] = useState(favsM.includes(imdbID))

    useEffect(() => {
     setCheck(favsM.includes(imdbID))
     console.log('favs ESTOY EN HANDLE USEFF', check)
    }, [favsM])
    
    const handleFav = (e) => {
        e.preventDefault()
        dispatch(getFavorite(imdbID))
    }

    
    return (
        <li className='list-item'>
            <div className="movi-container">
                <div className="img-container">
                    <img className='movi-img' src={movis.Poster}/>
                    </div>
                        <div className="data-container">
                            <h2>{movis.Title}</h2>
                        <p>Year: {movis.Year}</p>
                    <span /* className={check? "favOk" : "notFav"} */ onClick={(e) => handleFav(e)}><FavoriteIcon/></span>
                </div>
            </div>
        </li>
    )
}

export default ItemList

