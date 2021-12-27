import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Favorites from '../components/Favorites/Favorites'


const Favoritos = () => {
    return (
        <div className='container-pages'>
            <div className="page-navBar">
                <NavBar/>
            </div>
            <div className="page-forComponent">
                <Favorites />
            </div>
        </div>
    )
}

export default Favoritos
