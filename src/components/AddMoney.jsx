import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import AddBalance from '../pages/AddBalance';

function AddMoney() {
  return (
    <div className='Add-Money-Section'>
    <Link className='Add-Link' to="/Add-Balance-Money">
       <p>Пополнить счет</p>
    </Link>
    </div>
  )
}

export default AddMoney