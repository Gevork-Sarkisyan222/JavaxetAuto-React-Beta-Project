import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


function SuccessesBalance() {
  return (
    <div className='Succsess-Balance-Main'>
      <div className='Succsess-Balance-border-content'>
        <div className='succsess-balance-content'>
          
          <img alt='succsess-balance icon' className='succsess-balance-image' src="https://media.istockphoto.com/id/1202132559/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B8-%D1%83%D1%82%D0%B2%D0%B5%D1%80%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%B7%D0%BD%D0%B0%D0%BA-%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0-%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9-%D1%82%D0%B8%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B0%D0%BA%D1%86%D0%B8%D0%B9.jpg?b=1&s=170x170&k=20&c=eSYjN8dAZYwemRG2vkhS8r_UUxy9kLN3x9e-VxJp-Bs=" />
          <h1 className='succsess-balance-text'>Баланс успешно пополнен</h1>
        <Link to="/">
         <Button sx={{color:"black"}} className="Go-into-home-buttton-successes" variant="text">Перейти на главную страницу</Button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default SuccessesBalance