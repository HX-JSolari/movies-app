import React from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import getTittles from "../../redux/actions";
import './Buscador.css';


const Buscador = () => {

  /* onChange={(e) => handleChange(e)} */
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getTittles(e.target.value))
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
              value={}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
     
        </ul>
      </div>
  )
}

export default Buscador

