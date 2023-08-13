import React, { useMemo } from 'react';
import axios from 'axios';
import '../App.css';
import FavoriteCards from './FavoriteCards';
import { Link } from 'react-router-dom';

function Favorite({ items = [], onRemoveFavoriteItems, cartItems, setCartItems, favoriteItems, setFavoriteItems }) {
  const ClickAddToCartFn = (obj) => {
    axios.post('https://64d2050ef8d60b1743614902.mockapi.io/Cart', obj);
    setCartItems([...cartItems, obj]);
  }

  // const handleRemoveFromFavoriteMain = (obj) => {
  //   axios.delete(`https://64d2050ef8d60b1743614902.mockapi.io/Favorite/${obj.id}`);
  //   const updatedFavoriteItems = favoriteItems.filter(item => item.id !== obj.id);
  //   setFavoriteItems(updatedFavoriteItems);
  // };

  const handleRemoveFromFavoriteMain = (obj) => {
      console.log("Deleting favorite with ID:", obj.id, obj);
      axios.delete(`https://64d2050ef8d60b1743614902.mockapi.io/Favorite/${obj.id}`)
        .then(response => {
          console.log("Favorite deleted:", response.data);
          const updatedFavoriteItems = favoriteItems.filter(item => item.id !== obj.id);
          setFavoriteItems(updatedFavoriteItems);
        })
        .catch(error => {
          console.error("Error deleting favorite:", error);
        });
    };

  // const handleRemoveFromCartMainToFavorite = (obj) => {
  //   const updatedFavoriteItems = [...cartItems];
  //   updatedFavoriteItems.splice(obj, 1);
  //   setCartItems(updatedFavoriteItems);
  // };

  const handleRemoveFromCartMainToFavorite = async (obj) => {
    try {
      await axios.delete(`https://64d2050ef8d60b1743614902.mockapi.io/Cart/${obj.id}`);
  
      const updatedCartItems = cartItems.filter(item => item.id !== obj.id);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div className='Favorite-Main-Wrapper'>
      <div className='favorite-content'>
        <Link to='/'>
          <img className="Go-Back-Svg" src="https://react-sneakers-five.vercel.app/images/go-back-arrow.svg" alt="Go back icon" />
        </Link>
        <h1 className='favorite-title'>Мои закладки</h1>

        {items.length > 0 ? (
          <div className='favorite-cards-content'>
            {items.map((obj) => (
              <FavoriteCards
                key={obj.id}
                onAddToCart={() => ClickAddToCartFn(obj)}
                onRemoveFromFavorite={() => {
                  console.log(obj);
                  handleRemoveFromFavoriteMain(obj)
                }}
                handleRemoveFromCartMainToFavorite={() => handleRemoveFromCartMainToFavorite(obj)}
                title={obj.title}
                price={obj.price}
                image={obj.image}
                carInfo={obj.carInfo}
                obj={obj}
              />
            ))}
          </div>
        ) : (
          <div className='Empty-Favorite'>
            <img className='empty-favorite-icon' src="https://cdn-icons-png.flaticon.com/512/6578/6578446.png" alt='empty-favorite icon' />
            <h2 className='empty-favorite-text'>Закладки пустые</h2>
            <p className='empty-favorite-info-text'>Добавьте хотя бы пару машин, чтобы сделать заказы</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorite;
