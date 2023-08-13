import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

function FirstRegEmNumb({ setIsVisibleFooter }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const navigate = useNavigate();

  const handleClickEnterSubmitForm = (event) => {
    event.preventDefault();
    if (phoneNumber.trim().length === 9 && !emailError) {
      console.log('Navigating to /registration-main...');
      navigate('/registration-main');
      setIsVisibleFooter(false);
    } else if (phoneNumber.trim().length !== 9) {
      console.log('Please enter a valid phone number (9 digits required).');
      setNumberError(true);
    } else {
      console.log('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError(!validateEmail(emailValue));
  };

  const handleNumberChange = (e) => {
    const phoneValue = e.target.value;
    setPhoneNumber(phoneValue);
    setNumberError(phoneValue.trim().length !== 9);
  };

  return (
    <div className='Reg-Em-Num-Main'>
      <form className='form-main' onSubmit={handleClickEnterSubmitForm}>
        <div>
          <Link to='/Login'>
            <img
              alt='back-svg-for-register'
              className='back-svg-first-registration'
              onClick={() => setIsVisibleFooter(true)}
              src='https://react-sneakers-five.vercel.app/images/go-back-arrow.svg'
            />
          </Link>
        </div>

        <h2 className='number-title'>Телефонный номер</h2>
        <TextField
          autoFocus
          required
          className='media-number-input'
          sx={{ top: '100px', left: '153px', width: '270px' }}
          InputProps={{
            startAdornment: <InputAdornment position='start'>+995</InputAdornment>,
          }}
          id='phone-number-input'
          type='number'
          label='Номер-Телефона'
          variant='filled'
          value={phoneNumber}
          onChange={handleNumberChange}
          inputProps={{
            pattern: '[0-9]{9}',
          }}
          error={numberError}
          helperText={numberError ? 'Введите 9 цифр' : ''}
        />

        <h2 className='email-title'>Электронная почта</h2>
        <TextField
          required
          className='media-email-input'
          sx={{ top: '218px', left: '-118px', width: '270px' }}
          id='email-input'
          type='email'
          label='Электронная почта'
          variant='filled'
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? 'Введите правильный адрес электронной почты' : ''}
        />

        <Button
          type='submit'
          className='media-continiue-button'
          sx={{
            backgroundColor: 'yellow',
            color: 'black',
            width: '270px',
            height: '45px',
            left: '151px',
            top: '233px',
            '&:hover': {
              backgroundColor: 'rgb(168, 168, 168)',
            },
          }}
        >
          Далее
        </Button>
      </form>
    </div>
  );
}

export default FirstRegEmNumb;
