import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom';
import { getTittles } from "../../redux/actions/index";
import {MdOutlineArrowBackIosNew, MdArrowForwardIos} from "react-icons/md"
import SortIcon from '@mui/icons-material/Sort';
import ItemList from "../itemList/ItemList";
import './Buscador.css';


const Buscador = () => {

  const dispatch = useDispatch()

  const movies = useSelector((state) => state.titles)

  const [tittle, setTittle] = useState('')

  

  const handleChange = (e) => {
    e.preventDefault()
    setTittle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getTittles(tittle))
  }

  return (
      <div className="container-buscador">
        <NavBar/>
       <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
            <label className="label" htmlFor="title">Type for a title: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={tittle}
              onChange={(e) => handleChange(e)}
            />
          <button type="submit">SEARCH</button>
        </form>
        {movies.length > 1 ?
        <div className="sort-tittle">
          <span className="titleS">Movies</span>
          <span><SortIcon/></span> 
        </div> : null}
        { movies.length > 1 ?
          <div className="container-ul">
          <div className="wrapper">
          <MdOutlineArrowBackIosNew className="arrowLeft"/>
           <div className="container-li">  
                { movies?.map((movis, i) => 
                    <ItemList key={i} movis={movis}/>
                  )}
            </div> 
          <MdArrowForwardIos className="arroRigth"/>  
          </div>
        </div> : null}
      </div>
  )
}

export default Buscador

