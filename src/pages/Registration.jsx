import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Alert from '@mui/joy/Alert';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import CircularProgress from '@mui/joy/CircularProgress';
import LinearProgress from '@mui/joy/LinearProgress';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import Warning from '@mui/icons-material/Warning';
import Input from '@mui/joy/Input';
import Checkbox from '@mui/joy/Checkbox';
import LoginButton from './LoginButton';
import RadioButton from './RadioButton';
import SliderBankImage from './SliderBankImage';
import { Link } from 'react-router-dom';
import '../App.css';

function Registration({ setIsVisibleFooter }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('http://st.depositphotos.com/2101611/3925/v/950/depositphotos_39258205-stock-illustration-businessman-avatar-profile-picture.jpg');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [countryCity, setCountryCity] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [gender, setGender] = useState('мужской');
  const [formError, setFormError] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    if (!gender) {
      setFormError('Пожалуйста, выберите ваш пол.');
      return false;
    } else {
      setFormError(''); // Clear the error message if gender is selected
    }

    // Other validations
    if (name.trim().length < 5) {
      setFormError('Имя и Фамилия должно содержать не менее 5 символов.');
      return false;
    } else if (lastName.trim().length < 5) {
      setFormError('Фамилия должна содержать не менее 5 символов.');
      return false;
    } else if (countryCity.trim() === '' || password.trim() === '' || repeatPassword.trim() === '') {
      setFormError('Пожалуйста, заполните все поля.');
      return false;
    } else if (password !== repeatPassword) {
      setFormError('Пароли не совпадают.');
      return false;
    }

    return true;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setOpen(true);
      setIsVisibleFooter(true);
    }
  };

  const bankCardAlert = () => {
    alert("Сначала создайте аккаунт!!");
  }

  return (
    // <div className='Registration-Main'>
      <>
      <form className='Registration-Form' onSubmit={handleFormSubmit}>
        <div className='registration-content'>
          <div className='registration-inside-content'>
            <Link to="/registration">
              <img className='back-svg-registration' onClick={() => setIsVisibleFooter(false)} src="https://react-sneakers-five.vercel.app/images/go-back-arrow.svg" alt='back-svg-registration' />
            </Link>

            <h1 className='registration-text'>Регистрация на </h1>

            {/* <div className='border-for-reg-select-image'> */}
            <img className='registration-avatar' src={selectedImage} alt='Avatar-for-registration'/>

            <div className='avatar-text'>
              <label htmlFor='upload-button'>
                <Button
                  sx={{ color: 'black', width:'162px', backgroundColor:"yellow", '&:hover': {backgroundColor: 'grey',}, }}
                  className='select-photo-text'
                  variant='contained'
                  component='span'
                >
                  Выбрать аватарку
                </Button>
              </label>
              <input
                type='file'
                id='upload-button'
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
            </div>
            <div className='Radio-Button-Gender-Wrapper'>
            <RadioButton gender={gender} setGender={setGender} formError={formError} />
            </div>
            <Input
            className='media-registration-data'
            sx={{position:"absolute", left:"641px", top:'234px'}}
            type="date"
            value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            slotProps={{
              input: {
                min: '2018-06-07T00:00',
                max: '2018-06-14T00:00',
              },
            }}
            />
            <h3 className='remember-text'>Запомнить</h3>
            <Checkbox className="media-remember-checkbox" sx={{position:"abosolute", left:"757px", top:"247px"}} color="neutral" defaultChecked />

            {/* </div> */}

            <div className='registration-inputs-contents'>
              <TextField
                sx={{ width: '300px' }}
                id='filled-basic-name'
                label='Имя'
                variant='filled'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                error={formError && name.trim().length < 5}
                helperText={formError && name.trim().length < 5 ? formError : ''}
              />
              <TextField
                sx={{ width: '300px' }}
                id='filled-basic-lastName'
                label='Фамилия'
                variant='filled'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                error={formError && lastName.trim().length < 5}
                helperText={formError && lastName.trim().length < 5 ? formError : ''}
              />
              {/* <TextField
                sx={{ width: '300px' }}
                id='filled-basic-age'
                label='Возраст'
                type='number'
                variant='filled'
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              /> */}
              <TextField
                sx={{ width: '300px' }}
                id='filled-basic-countryCity'
                label='Страна/Город'
                variant='filled'
                value={countryCity}
                onChange={(e) => setCountryCity(e.target.value)}
                autoFocus required
              />
              <TextField
                required
                sx={{ width: '300px' }}
                id='filled-basic-password'
                label='Придумайте пароль'
                type='password'
                variant='filled'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                required
                sx={{ width: '300px' }}
                id='filled-basic-repeatPassword'
                label='Повторите пароль'
                type='password'
                variant='filled'
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />

            <Button
              className='media-submit-button'
              type="submit"
              sx={{
                // zIndex: '3',
                position: 'relative',
                // display: "flex",
                // top: formError && (name.trim().length < 5 || lastName.trim().length < 5) ? '-182px' : '-18px',
                // left: '418px',
                top: '-18px',
                width: '300px',
                marginTop:"20px",
                height: '51px',
                backgroundColor: 'yellow',
                '&:hover': {
                  backgroundColor: 'rgb(255, 255, 54)',
                },
                color: 'black',
                borderRadius: '11px',
              }}
              variant='contained'
              color='success'
              endIcon={<SendIcon />}
            >
              Отправить
            </Button>

            </div>

            

            <React.Fragment>
              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
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
                        Вы успешно создали свой аккаунт!!
                      </Typography>
                      <Typography level="body3">
                        <LoginButton />
                        {/* Ожидайте ваш заказ под номером #{randomNum} скоро приедет к вам */}
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
              </Modal>
            </React.Fragment>
          </div>
        </div>
      </form>
      <div className='registration-left-svg'>
        <img src='https://cdn-icons-png.flaticon.com/512/2718/2718413.png' />
      </div>
      <SliderBankImage bankCardAlert={bankCardAlert} />
      </>
  );
}

export default Registration;
