import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import getTittles from "../../redux/actions";
import './Buscador.css';


const Buscador = () => {

  const dispatch = useDispatch()

  const movies = useSelector((state) => state.tittles)
  

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
        <h2>Buscador</h2>
       <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={tittle}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
           { movies?.map((movis, i) => 
                <li key={i}>
                  <h1>{movis?.Title}</h1>
                </li> 
            )}
        </ul>
      </div>
  )
}

export default Buscador

