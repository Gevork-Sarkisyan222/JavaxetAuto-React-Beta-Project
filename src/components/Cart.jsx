import React from 'react';
import CartCards from './CartCards';
import Framed from '../pages/Framed';
import axios from 'axios';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Cart({ openBgBlck, setOpenBgBlack, handleShowScroll, itemsForCart = [], setCartItems }) {
  const [openFramed, setOpenFramed] = React.useState(false);

  const handleCartMainsClose = () => {
    setOpenBgBlack(false);
    setOpenFramed(false);
  }

  // const deleteAllInCartFramed = async () => {
  //   try {
  //     await axios.delete(`https://64d2050ef8d60b1743614902.mockapi.io/Cart`);
  //     setCartItems([]);
  //   } catch (error) {
  //     console.error("Error deleting all items from cart:", error);
  //   }
  // }

  // remove cart cards
  // const handleRemoveFromCart = (obj) => {
  //   axios.delete(`https://64d2050ef8d60b1743614902.mockapi.io/Cart/${obj.id}`);
  //   const updatedCartItems = [...itemsForCart];
  //   updatedCartItems.splice(obj, 1);
  //   setCartItems(updatedCartItems);
  // };

  const handleRemoveFromCart = async (obj) => {
    try {
      await axios.delete(`https://64d2050ef8d60b1743614902.mockapi.io/Cart/${obj.id}`);
      const updatedCartItems = itemsForCart.filter(item => item.id !== obj.id);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };
  

  return (
    <div className='Cart-Main'>
      <div className='cart-items'>
        <h2 className='cart-title'>Корзина🛒</h2>
        <img className='cart-cancel-svg' onClickCapture={handleShowScroll} onClick={() => setOpenBgBlack(false)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQiq19q6s-AEA6jGOM9EprQvkvtEps00x15OgOAXfmQA&s" alt="cart-cancel icon" />

        {itemsForCart.length > 0 ? (
          <div>
            <div className='Cart-render-place'>
              <div className='Cart-Cards'>
                {itemsForCart.map((obj, index) => (
                  <CartCards  
                    key={index}
                    title={obj.title}
                    image={obj.image}
                    price={obj.price}
                    onRemoveFromCart={() => handleRemoveFromCart(obj)}
                  /> 
                ))}
              </div>
            </div>

            <div className='down-cart-content'>
              <h2 id="media-price-main-text" className='price-text' style={{position:"absolute", left:"26px", top:"550px", fontSize:"21px"}}>Итого: <span>Купить всё</span></h2>
              <Button onClick={() => setOpenFramed(true)}  sx={{position:"absolute", top:"616px", left:"23px", width:"220px", borderRadius:"14px" ,'&:hover': {
                backgroundColor: 'rgb(168, 168, 168)',
              }, '&:active': { 
                backgroundColor: 'rgb(255, 255, 54)', color:"black",
              }, backgroundColor:"grey"}} variant="contained">Оформить заказ</Button>

              {/* for mobile */}
              <Button className='media-buy-cart-button'  onClick={() => setOpenFramed(true)} sx={{position:"absolute", top:"616px", left:"23px", width:"220px", borderRadius:"14px" ,'&:hover': {
                backgroundColor: 'rgb(168, 168, 168)',
              }, '&:active': { 
                backgroundColor: 'rgb(255, 255, 54)', color:"black",
              }, backgroundColor:"grey"}} variant="contained">Оформить заказ</Button>
              
            </div>
          </div>
        ) : (
          <div className='Empty-cart-content'>
            <img className='empty-cart-image' src="https://media.istockphoto.com/id/532469469/photo/3d-yellow-open-box-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=cR34Swg1kwo4KwMRJTZ6aI95nOaY0xbKxes68q1jzv4=" alt="empty-cart big icon"/>
            <h3 className='empty-cart-text'>Корзина пустая</h3>

              <Button className='media-cart-button-back' onClickCapture={handleShowScroll} onClick={handleCartMainsClose} sx={{position:"absolute", left:"43px", top:"427px", height:"42px", width:"240px", borderRadius:"14px" ,'&:hover': {
                backgroundColor: 'rgb(168, 168, 168)',
              }, '&:active': { 
                backgroundColor: 'rgb(255, 255, 54)', color:"black",
              }, backgroundColor:"grey"}} variant="contained"><ArrowBackIcon />Назад</Button> 
          </div>
        )}
      </div>

      {openFramed && <Framed />}
    </div>
  );
}

export default Cart;
