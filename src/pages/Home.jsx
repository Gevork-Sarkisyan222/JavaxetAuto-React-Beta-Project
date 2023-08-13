import Cards from '../components/Cards';
import React, {useState, useEffect, useRef} from 'react';
import '../App.css';
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

import Category from '../components/Category';
import Cart from '../components/Cart';
import CartCards from '../components/CartCards';
import Skeletons from '../components/Skeletons';
import Input from '../components/SearchInput';
import Pagination from '../components/Pagination';
import AdvertisingSlider from  '../components/AdvertisingSlider';
import SkeletonAdvertising from '../components/SkeletonAdvertising';



function Home(props) {
  const [cardDatas, setCardDatas] = useState([]); 
  const [SecondcardDatas, setSecondCardDatas] = useState([]); 
  const { favoriteItems, setFavoriteItems, setCartItems, setIsVisibleFooter } = props;
  const [openBgBlack, setOpenBgBlack] = useState(false);
  const [find, setFind] = React.useState('');
  const [openCategory, setOpenCategory] = useState(false);
  const [cardsIsLoading, setCardsIsLoading] = useState(true);

  const [showSkeleton, setShowSkeleton] = useState(true);


  useEffect((arr) => {
    axios.get('https://64d0e995ff953154bb79b2ed.mockapi.io/Cards').then((res) => {
      setCardDatas(res.data);
    })

    axios.get('https://64d2050ef8d60b1743614902.mockapi.io/Favorite').then((res) => {
      setFavoriteItems(res.data);
    });

    axios.get('https://64d2050ef8d60b1743614902.mockapi.io/Cart').then((res) => {
      setCartItems(res.data);
    });
  }, [])

  useEffect((arr) => {
    axios.get('https://64d0e995ff953154bb79b2ed.mockapi.io/SecondCards').then((res) => {
      setSecondCardDatas(res.data);
    })

    axios.get('https://64d2050ef8d60b1743614902.mockapi.io/Favorite').then((res) => {
      setFavoriteItems(res.data);
    });

    axios.get('https://64d2050ef8d60b1743614902.mockapi.io/Cart').then((res) => {
      setCartItems(res.data);
    });
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  

  const findText = (event) => {
    setFind(event.target.value);
  }

  const [isHidden, setIsHidden] = useState(false);
  const handleClickClearCards = () => {
    setIsHidden(!isHidden);
  };


  const handleOpen = () => {
    setOpenCategory(!openCategory)
  }

  // const newAddToFavorite = async (obj) => {
  //   const { data } = axios.post('https://64d2050ef8d60b1743614902.mockapi.io/Favorite', obj);
  //   setFavoriteItems([...favoriteItems, data]);
  // }

  const newAddToFavorite = async (obj) => {
    const res = await axios.post('https://64d2050ef8d60b1743614902.mockapi.io/Favorite', obj);
    setFavoriteItems([...favoriteItems, res.data]);
  }
  

  // const onRemoveFavoriteItems = (id) => {
  //   axios.delete(`https://64d2050ef8d60b1743614902.mockapi.io/Favorite/${id}`);
  //   setFavoriteItems([...favoriteItems, obj]);
  // }

  useEffect(() => {
    setTimeout(() => {
      setCardsIsLoading(false);
    }, 3000)
  }, [])

  
  return (
    <div className='Home-Page'> 
  <Input find={find} setFind={setFind}/>
  {find && <img onClick={() => setFind('')} className='remove-input-value-icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdrS5eVv2jQ9x-EM_NN-jSER5HfW2m2_19SdVqelpzm0B_BYBncEKKy_HvlGMWZfgl8g&usqp=CAU" alt='remove-input-icon '/>}
  
  

     <div className='main-center'>
   <div className='cards-box'>
    
   {showSkeleton ? (
         <SkeletonAdvertising />
      ) : (
        <div className='AdvertisingSlider-ps-absolute'>
        <AdvertisingSlider />
        </div>
      )}
         {/* <SkeletonAdvertising /> */}

     {/* <AdvertisingSlider /> */}
  


     <h2 className='category-text' onClick={handleOpen}>{find ? `Поиск по запросу: "${find}"` : "Выбрать по категорию"}</h2>
   {
     openCategory && (
       <Category />
     )
   }
     
    

   <div className={`Render-cards ${isHidden ? 'hidden' : ''}`}>
   {
      cardsIsLoading ? (
        Array.from({ length: 32 }).map((_, index) => <Skeletons key={index} />)
      ) : cardDatas.filter(cardDatas => cardDatas.title.toLowerCase().includes(find.toLowerCase())).length > 0 ? (
        cardDatas.filter(cardDatas => cardDatas.title.toLowerCase().includes(find.toLowerCase())).map((obj, index) => (
          <Cards
            setIsVisibleFooter={setIsVisibleFooter}
            addToFavorite={async (obj) => await newAddToFavorite(obj)}
            key={index}
            title={obj.title}
            image={obj.image}
            price={obj.price}
            carInfo={obj.carInfo}
            onAdd={(obj) => console.log(obj)}
          />
        ))
      ) : (
        <div className='Not-found-card'>
          <img className='not-found-card-image' src='https://cdn-icons-png.flaticon.com/512/6214/6214232.png' />
          <h2 className='not-found-card-text'>По вашему запросу ничего не найдено</h2>
        </div>
      )
}


  

   </div>
   <div className='Second-Render-place'>

   {
    isHidden ? (
      SecondcardDatas.filter(obj => obj.title.toLowerCase().includes(find.toLowerCase())).length > 0 ? (
        SecondcardDatas.filter(obj => obj.title.toLowerCase().includes(find.toLowerCase())).map((obj, index) => (
          <Cards
            setIsVisibleFooter={setIsVisibleFooter}
            addToFavorite={async (obj) => await newAddToFavorite(obj)}
            onAdd={(obj) => console.log(obj)}
            key={index}
            title={obj.title}
            price={obj.price}
            image={obj.image}
            carInfo={obj.carInfo}
          />
        ))
      ) : (
        <div className='Not-found-card'>
          <img className='not-found-card-image' src='https://cdn-icons-png.flaticon.com/512/6214/6214232.png' />
          <h2 className='not-found-card-text'>По вашему запросу ничего не найдено</h2>
        </div>
      )
    ) : null
}




  </div>



  <div className='Second-Cards'>
    
  </div>

  {/* pagination */}
   <Pagination handleClickClearCards={handleClickClearCards}/>
    

     </div>
  </div>

  
   </div>  
  )
}

export default Home;