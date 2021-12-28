import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Buscador from '../components/Buscador/Buscador'

const BuscadorP = () => {
    return (
        <div className='container-pages'>
            <div className="page-navBar">
                <NavBar/>
            </div>
            <div className="page-forComponent">
                <Buscador/>
            </div>
        </div>
    )
}

export default BuscadorP
