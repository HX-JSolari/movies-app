import React, {useRef, useState} from "react";
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
  const [slideNumber, setSlideNumber] = useState(0)
  const [isMoved, setIsMoved] = useState(false)
  const [loader, setLoader] = useState(false)

  const listRef = useRef()

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    if(direction === "left" && slideNumber > 0){
      setSlideNumber(slideNumber - 1)
      if(slideNumber === 1){
        listRef.current.style.transform = `translateX(1px)`
        setIsMoved(false)
      }
    listRef.current.style.transform = `translateX(${266 + distance}px)`
    }
    if(direction === "right" && slideNumber < 6){
      setSlideNumber(slideNumber + 1) 
      listRef.current.style.transform = `translateX(${-266 + distance}px)`
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setTittle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoader(true)
    dispatch(getTittles(tittle)) 
    setTimeout(() => {
      setLoader(false)
    }, 1500);
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
        { loader ? 
        <span>Searching your movies, friend...</span> 
        :
         movies.length > 1 ?
          <div className="container-ul">
          <div className="wrapper">
          <MdOutlineArrowBackIosNew 
          className="arrowLeft" 
          onClick={() => handleClick("left")}
          style={{display: !isMoved && "none"}}
          />
           <div className="container-li" ref={listRef}>  
                { movies?.map((movis, i) => 
                    <ItemList key={i} movis={movis}/>
                  )}
            </div> 
          <MdArrowForwardIos 
          className="arroRigth" 
          onClick={() => handleClick("right")}
          style={{display: slideNumber === 6 && "none"}}
          />  
          </div>
        </div> : null
        }
      </div>
  )
}

export default Buscador

