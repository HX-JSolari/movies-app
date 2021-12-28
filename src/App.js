import React from "react";
import { Route, Routes } from "react-router-dom";
import Favoritos from "./pages/Favoritos.jsx";
import BuscadorP from "./pages/BuscadorP.jsx";
import Detalle from "./pages/Detalle.jsx";
import './App.css'

function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<BuscadorP />} />
          <Route exact path="/favs" element={<Favoritos />} />
          <Route exact path="/movie/:id" element={<Detalle />} />
        </Routes>
      </div>    
  );
}

export default App;
