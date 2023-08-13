import React from 'react';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Framed() {
  return (
    <div className='Framed-Main'>
        <div className='Framed-Content'>
            <img className='framed-image' src="https://cdn-icons-png.flaticon.com/512/4029/4029243.png" alt="framed image" />
            <h3>Заказ успешно оформлен!</h3>
            <a href="/"><Button  sx={{position:"absolute", left:"42px", top:"450px", width:"270px", height:"44px",borderRadius:"14px" ,'&:hover': {
          backgroundColor: 'rgb(168, 168, 168)',
        }, '&:active': {
          backgroundColor: 'rgb(255, 255, 54)', color:"black",
        }, backgroundColor:"grey"}} variant="contained"><KeyboardBackspaceIcon /> Вернуться назад</Button></a>
        </div>
    </div>
  )
}

export default Framed;