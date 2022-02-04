import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../redux/actions/index'
import NavBar from '../NavBar/NavBar';
import './detail.css';

const Detail = () => {

    const dispatch = useDispatch();
    const detail = useSelector(state => state.details)

    const {id} = useParams()
   
    useEffect(() => {
        dispatch(getDetail(id))
    }, [detail])

  return (
    
      <div className='detail-container'>
        <NavBar/>
          <div className="detail-container">
            {detail.Title? detail.Title
            :
            <h2 style={{color:'yellow', fontSize:'100px'}}> Espera lo estamos buscando</h2>
            }
          </div>
      </div>
   
  );
};

export default Detail;
