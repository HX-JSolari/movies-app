import React, {useRef, useState} from 'react'
import {MdOutlineArrowBackIosNew, MdArrowForwardIos} from "react-icons/md"
import SortIcon from '@mui/icons-material/Sort';
import ItemList from "../itemList/ItemList";

const Slider = ({movies}) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false)
  
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
    
    return (
        <div className='slider-container'>
           {movies.length > 1 ?
        <div className="sort-tittle">
          <span className="titleS">Movies</span>
          <span><SortIcon/></span> 
        </div> : null}
        { movies.length > 1 ?
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
        </div> : null} 
        </div>
    )
}

export default Slider
