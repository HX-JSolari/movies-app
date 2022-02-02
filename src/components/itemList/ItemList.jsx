import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFavorite, getDetail } from '../../redux/actions/index';
import { NavLink } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './itemList.css'

const ItemList = ({movis}) => {

    const {Title, Year, imdbID, Poster} = movis;
    const dispatch = useDispatch()
    
    const favsM = useSelector(state => state.favsMovies)
    const [check, setCheck] = useState(false)

    useEffect(() => {
     setCheck(favsM.map(e => e.imdbID).includes(imdbID))
    }, [favsM])
    
    const handleFav = (e) => {
        e.preventDefault()
        dispatch(getFavorite(imdbID))
    }
    const handleDetail = (e) => {
        e.preventDefault()
        dispatch(getDetail(imdbID))
    }

    
    return (
            <div className="movi-container">
                <div className="img-div">
                    <img className='movi-img' src={Poster}/>
                </div>
                <div className="data-container">
                    <NavLink exact to='/details' onClick={(e) => handleDetail(e)}>
                            <h2 /* onClick={e => handleDetail(e)} */>{Title}</h2>
                    </NavLink>
                <div className="fav-container">
                        <p>Year: {Year}</p>
                        <span className={check? "favOk" : "notFav"} onClick={(e) => handleFav(e)}><FavoriteIcon/></span>
                </div>
                </div>
            </div>
    )
}

export default ItemList

