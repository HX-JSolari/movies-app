import React from "react";
import { Route, Routes } from "react-router-dom";
import Favorites from './components/Favorites/Favorites.jsx'
import Buscador from './components/Buscador/Buscador.jsx'
import Detail from './components/Detail/Detail.jsx'
import './App.css'


function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Buscador/>} />
          <Route exact path="/favs" element={<Favorites />} />
          <Route exact path="/details/:id" element={<Detail />} />
        </Routes>
      </div>    
  );
}

export default App;
