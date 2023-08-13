import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../App.css';
import { NavLink, Link } from 'react-router-dom';

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import CircularProgress from '@mui/joy/CircularProgress';
import LinearProgress from '@mui/joy/LinearProgress';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import Warning from '@mui/icons-material/Warning';
import Alert from '@mui/joy/Alert';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import LoginButton from './LoginButton';

function Login({ setIsVisibleFooter }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickEnterSubmitForm = (event) => {
    event.preventDefault();
    if (username.trim() !== '' && password.trim() !== '') {
      console.log('Logging in...');
      setOpen(true);
    } else {
      console.log('Username and password are required.');
    }
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/home', '_blank');
  };

  const handlePrinterestClick = () => {
    window.open('https://www.pinterest.com/', '_blank');
  };

  const handleAppleClick = () => {
    window.open('https://www.apple.com/', '_blank');
  };

  const handleGoogleClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  return (
    <div className='Login-Main'>
      <form className='Login-Form'>
        <a href='/'>
          <img className='back-icon-login' src="https://icon-library.com/images/back-icon-png/back-icon-png-25.jpg" />  
        </a> 
        <h1 className='Login-Title'>Авторизация на <span>JavaxetAuto</span></h1>
        <TextField
          autoFocus
          required
          className='input-#1'
          sx={{ position: "absolute", zIndex: "2", width: "250px" }}
          id="outlined-basic"
          label="Логин"
          variant="outlined"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          required
          className='input-#2'
          sx={{ position: "absolute", zIndex: "2", top: "75px", width: "250px" }}
          type="password"
          id="outlined-basic"
          label="Пароль"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <React.Fragment>
          <Button
            type="submit"
            className='media-login-button'
            onClick={handleClickEnterSubmitForm}
            sx={{
              position: "absolute",
              zIndex: "2",
              top: "140px",
              width: "248px",
              height: "42px",
              left: "377px",
              '&:hover': {
                backgroundColor: 'rgb(255, 255, 54)',
              },
              backgroundColor: "yellow",
              color: "black"
            }}
            variant="contained"
            onClickCapture={() => setIsVisibleFooter(true)}
          >
            Войти
          </Button>
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Sheet
              variant="outlined"
              sx={{
                maxWidth: 500,
                borderRadius: 'md',
                p: 3,
                boxShadow: 'lg',
              }}
            >
              <Stack spacing={2} sx={{ maxWidth: 400 }}>
                <Alert
                  size="lg"
                  color="warning"
                  variant="solid"
                  invertedColors
                  startDecorator={
                    <AspectRatio
                      variant="solid"
                      ratio="1"
                      sx={{
                        minWidth: 40,
                        borderRadius: '50%',
                        boxShadow: '0 2px 12px 0 rgb(0 0 0/0.2)',
                      }}
                    >
                      <div>
                        <Check fontSize="xl2" />
                      </div>
                    </AspectRatio>
                  }
                  endDecorator={
                    <IconButton
                      variant="plain"
                      sx={{
                        '--IconButton-size': '32px',
                        transform: 'translate(0.5rem, -0.5rem)',
                      }}
                    >
                      <Close />
                    </IconButton>
                  }
                  sx={{ alignItems: 'flex-start', overflow: 'hidden' }}
                >
                  <Box>
                    <Typography level="body1" fontWeight="lg">
                      Вы успешно вошли на свой аккаунт
                    </Typography>
                    <Typography level="body3">
                      <LoginButton />
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="soft"
                    vue={40}
                    sx={(theme) => ({
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      color: `rgb(${theme.vars.palette.success.lightChannel} / 0.72)`,
                      '--LinearProgress-radius': '0px',
                    })}
                  />
                </Alert>
              </Stack>
            </Sheet>
          </Modal>
        </React.Fragment>

        <NavLink onClick={() => setIsVisibleFooter(false)} className='reg-text' to="/registration">
          <p onClick={() => setIsVisibleFooter(false)}>Регистрация</p>
        </NavLink>

        <div className='social-icons'>
          <img onClick={handleFacebookClick} src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-75-189796.png" alt='facebook icon' />
          <img onClick={handleTwitterClick} src="https://cdn.iconscout.com/icon/free/png-256/free-twitter-53-189787.png" alt='twitter icon' />
          <img onClick={handlePrinterestClick} src="https://cdn.iconscout.com/icon/free/png-256/free-pinterest-46-189745.png" alt='pinterest icon' />
          <img onClick={handleAppleClick} src="https://cdn.iconscout.com/icon/free/png-256/free-apple-609-434762.png" alt='apple icon' />
          <img onClick={handleGoogleClick} src="https://cdn.iconscout.com/icon/free/png-256/free-google-152-189813.png" alt='google icon' />
        </div>

        <div className='Form-border'>
        </div>

      </form>
    </div>
  )
}

export default Login;
