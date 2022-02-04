import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFavorite, getDetail } from '../../redux/actions/index';
import { Link } from 'react-router-dom';
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
                    <Link to={`/details/${imdbID}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <h2 className='link-h2'>{Title}</h2>
                    </Link>
                <div className="fav-container">
                        <p>Year: {Year}</p>
                        <span className={check? "favOk" : "notFav"} onClick={(e) => handleFav(e)}><FavoriteIcon/></span>
                </div>
                </div>
            </div>
    )
}

export default ItemList

