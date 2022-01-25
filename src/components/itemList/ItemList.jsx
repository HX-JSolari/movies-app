import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {getFavorite} from '../../redux/actions/index';
import './itemList.css'

const ItemList = ({movis}) => {

    const {Title, Year, imdbID, Poster} = movis;
    const dispatch = useDispatch()
    
    const favsM = useSelector(state => state.favsMovies)
    console.log('soy favs movies', favsM)
    const [check, setCheck] = useState(favsM.map(e => e.imdbID).includes(imdbID))

    useEffect(() => {
     setCheck(favsM.map(e => e.imdbID).includes(imdbID))
     console.log('soy CHEK DE EFFECT', check)
    }, [favsM])
    
    const handleFav = (e) => {
        e.preventDefault()
        dispatch(getFavorite(imdbID))
    }

    
    return (
            <div className="movi-container">
                <div className="img-div">
                    <img className='movi-img' src={Poster}/>
                </div>
                <div className="data-container">
                            <h2>{Title}</h2>
                <div className="fav-container">
                        <p>Year: {Year}</p>
                        <span className={check? "favOk" : "notFav"} onClick={(e) => handleFav(e)}><FavoriteIcon/></span>
                </div>
                </div>
            </div>
    )
}

export default ItemList

