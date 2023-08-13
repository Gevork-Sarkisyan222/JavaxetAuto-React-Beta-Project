import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='Not-Found-Main'>
     <div className='Not-Found-content'>
       <span>😞</span>
      <h1>Ничего не найдено 404</h1>
      <p>К сожалению у нас отсутствует данная страница в интернет-магазине</p>
      <Link to='/'>
        <Button className='media-notFound-button' sx={{marginTop:"113px", width:"311px", height:"44px", borderRadius:"26px", backgroundColor:"grey", '&:hover': {
          backgroundColor: 'rgb(168, 168, 168)',
        }, '&:active': {
          backgroundColor: 'rgb(168, 168, 168)'}}} variant="contained">Вернуться назад</Button>
      </Link>
      
     </div>
    </div>
  )
}

export default NotFound;