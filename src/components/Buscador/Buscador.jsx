import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getTittles } from "../../redux/actions/index";
import {ArrowBackIosNew, ArrowForwardIos} from "@mui/icons-material"
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
        <span><SortIcon/></span> : null}
        { movies.length > 1 ?
          <div className="container-ul">
          <div className="wrapper">
          <ArrowBackIosNew className="arrow left"/>
            <div className="container-li">  
                { movies?.map((movis, i) => 
                    <ItemList key={i} movis={movis}/>
                  )}
            </div>
          <ArrowForwardIos className="arrow rigth"/>  
          </div>
        </div> : null}
      </div>
  )
}

export default Buscador

