import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { Link } from 'react-router-dom';
import ItemList from "../itemList/ItemList";
import './Favorites.css';

const Favorites = () => {

  const favoritas = useSelector(state => state.favsMovies)
  const movies = useSelector(state => state.titles)

  let filterMovies = favoritas.map(favs => movies.filter(movie => movie.imdbID === favs))
  
  console.log('peliculas favoritas', favoritas)
  console.log('movies', movies)
  console.log('filterMovies', filterMovies)

  return (
      <div className="favs-container">
        <NavBar/>
        <h2>Películas Favoritas</h2>
        <div className="container-favs">
          {filterMovies.length > 0 ? 
            filterMovies?.map((e, i) =>
              <div className="items-favs">
                <ItemList key={i} movis={e[0]}/>
              </div>
          ) : 
          <div className="notFavoYet">
            <h2>You dont have movies yet, go back and search for those!</h2>
            </div>}
        </div>
      </div>
  )
}

export default Favorites



