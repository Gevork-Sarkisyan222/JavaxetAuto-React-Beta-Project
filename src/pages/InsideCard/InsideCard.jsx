import React from 'react';
import './InsideCard.css';
import InsideCardSlider from './InsideCardSlider';
import BuyModalCard from './BuyModalCard';
import { Link } from 'react-router-dom';

function InsideCard() {
  return (
    <div className='Inside-Card-Main'>
      <div className='cards-info-content'>
        <Link to='/'>
          <img className='inside-card-back' src="https://react-sneakers-five.vercel.app/images/go-back-arrow.svg" />
        </Link>
        <h2 className='inside-card-title'>Mersedes-s550</h2>
        <InsideCardSlider />
        <div className='charateristics-of-car-main'>
          <div className='charateristics-car-text'>
            <p>Производитель</p>
            <p>модель</p>
            <p>год</p>
            <p>категория</p>
            <p>тип топлива</p>
            <p>Мощность двигателя</p>
            <p>цвет</p>
          </div>
          <div className='charateristics-car-second-text'>
            <p>Mersedes</p>
            <p>Mersedes s550</p>
            <p>2021</p>
            <p>седан</p>
            <p>бензин</p>
            <p>4.6 и 388 лс</p>
            <p>белый</p>
          </div>
          <BuyModalCard />
        </div>
      </div>
    </div>
  )
}

export default InsideCard;