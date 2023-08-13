import React, {useState} from 'react';
import '../App.css';
import AddMoneyInput from './AddMoneyInput';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';


function AddBalance({ changeAddMoney, setChangeAddMoney, onChangeAddMoney }) {

  return (
    <div className='Add-Balance-border-main'>
       <div className='Add-Balance-Content'>
        <section className='Add-Balance-Money-content'>
         <div className='Add-balance-inside-content'>
        <Link to="/">
          <img className="Go-Back-Svg-Add-Balance" src="https://react-sneakers-five.vercel.app/images/go-back-arrow.svg" alt="go-back icon" />
        </Link>  
        <h2 className='add-money-title-text'>Пополнить свой баланс 💳</h2>
        <TextField sx={{width:"250px"}} className='Add-Card-input' id="filled-basic" type="number" label="Номер карты" variant="filled" />

        <h2 className='write-money-title-text'>Введите сумму пополнения</h2>
        <AddMoneyInput changeAddMoney={changeAddMoney} onChangeAddMoney={onChangeAddMoney}  />
         
         <Link to="/Succsess-Balance">
          
        <Button className='media-add-money-button' sx={{color:"black", backgroundColor:"yellow",
         position:"absolute", left:"227px", top:"178px" , width:"250px", height:"45px",    
          '&:hover': {
          backgroundColor: 'rgb(168, 168, 168)',
        },}} variant="contained">Пополнить <AddIcon />
        </Button>

         </Link>
         </div>
        </section>
            {/* content tir */}
       </div>
    </div>
  )
}

export default AddBalance;