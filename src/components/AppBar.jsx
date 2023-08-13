import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AddMoney from './AddMoney';
import Favorite from '../pages/Favorite';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LanguageIcon from '@mui/icons-material/Language';
import Languages from './Languages';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import QuizIcon from '@mui/icons-material/Quiz';





import '../App.css';

const pages = ['Корзина'];
const settings = ['Выйти с аккаунта'];

function ResponsiveAppBar(props) {
  const { setIsVisibleFooter, cartItems, setCartItems, setOpen } = props;
  const [hiddenFavorite, setHiddenFavorite] = useState(true);
  const [hiddenCart, setHiddenCart] = useState(true);
  const [hiddenBlog, setHiddenBlog] = useState(true);
  const [hiddenBalance, setHiddenBalance] = useState(true);

  const [showAvatar, setShowAvatar] = useState(true);

  

  const hiddenAppBarConentFuncAndCloseFooterInLoginFn = () => {
    setHiddenFavorite(false);
    setHiddenCart(false);
    setHiddenBlog(false);
    setHiddenBalance(false);
    setIsVisibleFooter(false);
    setShowAvatar(false);
  }


  const [isScrollHidden, setScrollHidden] = useState(false);

  const handleClick = () => {
    setScrollHidden(!isScrollHidden);
  };

  const handleShowScroll = () => {
    setScrollHidden(false);
  };

  useEffect(() => {
    if (isScrollHidden) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isScrollHidden]);


  const {openBgBlack, setOpenBgBlack} = props;
  const [addMoney, setAddMoney] = useState(false);

  const addMoneyFunc = () => {
    setAddMoney(!addMoney);
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [openLanguagesMain, setOpenLanguagesMain] = useState(false);

  const onOpenLanguages = () => {
    setOpenLanguagesMain(!openLanguagesMain);
  }


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='App-Bar' position="fixed" sx={{backgroundColor:"grey", color:"black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img style={{width:"40px"}} src="https://img.icons8.com/?size=512&id=1zIQe-xeo7Rf&format=png" alt='yellow-car icon' />
          <Typography

            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },    
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              color:"yellow"
            }}
          >
            JavaxetAuto.ge
          </Typography>

          <IconButton className="media-questions-quiz-button-main" onClick={() => setOpen(true)} sx={{position:"absolute", left:"862px", top:"17px", color:"white"}}>
            <QuizIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1, color:"yellow", display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="yellow"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              
                {/* {hiddenCart && pages.map((page) => ( */}
                  
                    <MenuItem sx={{display:"flex", flexDirection:"column", gap:"18px"}} onClick={handleCloseNavMenu}>   
                    <Link to='/Favorite' className='media-links'>
                      <Typography>Закладки</Typography>
                    </Link>
                      <Typography  onClick={handleClick} onClickCapture={() => setOpenBgBlack(true)}>Корзина</Typography>
                    <Link to='Video-Blog' className='media-links'>
                      <Typography>Блог</Typography>    
                    </Link>
                      <Typography onClick={() => setOpen(true)}>Вопрос</Typography>
                      <Link to='/Add-Balance-Money' className='media-links'>
                      <Typography>Кошелёк</Typography>   
                      </Link>
                    </MenuItem>
                  
                {/* ))} */}
      
            </Menu>
         
         
          </Box>
          <Typography
            className='App-bar-title-media'
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             JavaxetAuto
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {hiddenCart && pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display: 'block', marginLeft:"125px" }}
                onClickCapture={() => setOpenBgBlack(true)}
              >
                {page}
                <ShoppingCartIcon sx={{position:"absolute", top:"6px", left:"78px"}} />
              </Button>
            ))}
          </Box>

       {
          openBgBlack && (
        <div className='black-background'>
           <Cart itemsForCart={cartItems} setCartItems={setCartItems}  handleShowScroll={handleShowScroll} openBgBlack={openBgBlack} setOpenBgBlack={setOpenBgBlack} />
        </div>
       
     )
      }
    
      
          <Box sx={{ flexGrow: 0 }}>
            <div className='Avatar-Header'>
            <Tooltip title="Ваш Аккаунт">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {showAvatar && <Avatar  alt="Remy Sharp" src="https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRMG0uIFN1Lr-vh2_om97xeQ"/>}
              {!showAvatar && <Avatar  alt="Remy Sharp" src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"/>}
                {/* <Avatar  alt="Remy Sharp" src="https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRMG0uIFN1Lr-vh2_om97xeQ" /> */}
              </IconButton>
            </Tooltip>
            </div>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
              <Link to="/login"> <MenuItem key={setting} onClickCapture={hiddenAppBarConentFuncAndCloseFooterInLoginFn} onClick={handleCloseUserMenu}>
                  <Typography  textAlign="center">{setting}</Typography>
                 </MenuItem> 
                </Link> 
              ))}
            </Menu>
          </Box>
        
        {hiddenFavorite &&  
        <Link to="/Favorite">
          <Button variant="text" className="first-favorite-title" sx={{color:"white", position:"absolute", left:"276px", top:"17px"}}>Закладки<FavoriteIcon /></Button>
        </Link>
        }
        
        
        <Button className='media-language-icon' onClick={onOpenLanguages}  variant="text" sx={{color:"white", position:"absolute", left:"760px", top:"17px"}}><LanguageIcon /></Button>
       

       {hiddenBlog && 
        <div className='Video-Svg'>
          <Link to="/Video-Blog">
          <Button className='Video-Svg' variant="text" sx={{color:"white", position:"absolute", left:"760px", top:"17px"}}><VideoLibraryIcon /></Button>
          </Link>
        </div>
      }

        {
          openLanguagesMain && (
            <Languages />
          )
        }

   

        {/* <img className='Russia-icon' src="https://w7.pngwing.com/pngs/811/0/png-transparent-russia-asia-circle-country-flag-nation-national-o-shaped-flag-icon.png" /> */}
          {hiddenBalance && 
           <section className='balance-content'>
           <span className='balance-icon'>
            <AccountBalanceWalletIcon className='media-add-money-icon' onClick={addMoneyFunc} />
           </span>
            <h4 className='Balance-Text'>{props.changeAddMoney ? `${props.changeAddMoney}₾` : '62,914₾'}</h4>
            </section>
          }

            {/* add money component */}

            {
              addMoney && (
                <AddMoney />
              )
            }

        </Toolbar>
      </Container>

      

    </AppBar>
  );
}
export default ResponsiveAppBar;