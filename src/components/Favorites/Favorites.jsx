import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import ItemList from "../itemList/ItemList";
import './Favorites.css';

const Favorites = () => {

  const favoritas = useSelector(state => state.favsMovies)
  console.log()

  return (
      <div className="favs-container">
        <h2>Películas Favoritas</h2>
        <div className="container-favs">
          {favoritas?.map((e, i) => 
            <ItemList key={i} movis={e}/>
          )}
        </div>
      </div>
  )
}

export default Favorites



