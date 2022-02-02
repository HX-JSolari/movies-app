import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import './detail.css';

const Detail = () => {

    const detail = useSelector(state => state.details)
    console.log(detail)

  return (
    <div /* className='detail-container' */>
    <NavBar />

  </div>
  );
};

export default Detail;
