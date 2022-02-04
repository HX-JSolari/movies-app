import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../redux/actions/index'
import NavBar from '../NavBar/NavBar';
import './detail.css';

const Detail = () => {

    const dispatch = useDispatch();
    const detail = useSelector(state => state.details)
    const [loader, setLoader] = useState(false)

    const {id} = useParams()
   
    useEffect(() => {
        dispatch(getDetail(id))
        setLoader(true)
        setTimeout(() => {
          setLoader(false)
        }, 1500);
    }, [])

  return (
    
      <div className='detail-container'>
        <NavBar/>
          <div className="detail-container">
            {loader? <h2 style={{color:'yellow', fontSize:'100px'}}> Espera lo estamos buscando</h2>
            :
            <h1 style={{color:'yellow', fontSize:'100px'}}>{detail.Title}</h1>
            }
          </div>
      </div>
   
  );
};

export default Detail;
