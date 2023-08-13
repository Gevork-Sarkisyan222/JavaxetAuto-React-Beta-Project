import './App.css';
import AppBar from './components/AppBar';
import Cards from './components/Cards';
import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';



import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import Category from './components/Category';
import Cart from './components/Cart';
import CartCards from './components/CartCards';
import Skeletons from './components/Skeletons';
import Input from './components/SearchInput';

// pages route
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login'
import Registration from './pages/Registration';
import FirstRegEmNumb from './pages/FirstRegEmNumb';
import AddBalance from './pages/AddBalance';
import SuccessesBalance from './pages/SuccessesBalance';
import Favorite from './pages/Favorite';
import VideoBlog from './pages/VideoBlog';

import Footer from './components/Footer';
import InsideCard from './pages/InsideCard/InsideCard';





function App() {

  const [openBgBlack, setOpenBgBlack] = useState(false);
  const [find, setFind] = React.useState('');
  const [openCategory, setOpenCategory] = useState(false);
  const [cardsIsLoading, setCardsIsLoading] = useState(true);
  const [isVisibleFooter, setIsVisibleFooter] = useState(true);


  const [favoriteItems, setFavoriteItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [changeAddMoney, setChangeAddMoney] = useState('');

  const onChangeAddMoney = (event) => {
    setChangeAddMoney(event.target.value);
  }

  const handleOpen = () => {
    setOpenCategory(!openCategory)
  }

  const [open, setOpen] = useState(false);

  const updateOpenState = (newOpenState) => {
    setOpen(newOpenState);
  };

  const arr = [
    "hello world"
  ]

  useEffect(() => {
    setTimeout(() => {
      setCardsIsLoading(false)
    }, 4000)
  }, []);

    // axios.delete(`https://64d2050ef8d60b1743614902.mockapi.io/Favorite/${id}`);
    // setFavoriteItems((prev) => prev.filter(item => item.id !== id));


  return (
    <div className="App">
     
     <div className='Changed-Main'>
      <AppBar setOpen={setOpen} changeAddMoney={changeAddMoney}  cartItems={cartItems} setCartItems={setCartItems} setIsVisibleFooter={setIsVisibleFooter} arr={arr} openBgBlack={openBgBlack} setOpenBgBlack={setOpenBgBlack}/>


     </div>

     <div className='render-pages'>
      <Routes>
       <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} favoriteItems={favoriteItems} setFavoriteItems={setFavoriteItems} setIsVisibleFooter={setIsVisibleFooter} />} />
       <Route path="*" element={<NotFound />} />
       <Route path="/login" element={<Login setIsVisibleFooter={setIsVisibleFooter} />} />
       <Route path="/registration" element={<FirstRegEmNumb setIsVisibleFooter={setIsVisibleFooter}  />} />
       <Route path="/registration-main" element={<Registration setIsVisibleFooter={setIsVisibleFooter} />} />
       <Route path="/Add-Balance-Money" element={<AddBalance onChangeAddMoney={onChangeAddMoney} changeAddMoney={changeAddMoney} setChangeAddMoney={setChangeAddMoney} />} />
       <Route path="/Succsess-Balance" element={<SuccessesBalance />} />
       <Route path="/Favorite" element={<Favorite favoriteItems={favoriteItems} setFavoriteItems={setFavoriteItems} cartItems={cartItems} setCartItems={setCartItems} items={favoriteItems} />} />
       <Route path="/Video-Blog" element={<VideoBlog />} />
       <Route path="/Inside/Card/info" element={<InsideCard />} />
      </Routes>
     </div>

     {isVisibleFooter && <Footer open={open} setOpen={setOpen} openBgBlack={openBgBlack} setOpenBgBlack={setOpenBgBlack} />}
     

    </div>
  );
}

export default App;
