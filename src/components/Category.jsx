import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import '../App.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import CategoryInputs from './CategoryInputs';




export default function DiscreteSliderSteps() {
    
 const [age, setAge] = React.useState('');

 const handleChange = (event) => {
   setAge(event.target.value);
  };    
  
  
 const [motor, setMotor] = React.useState('');

 const handleChangeMotor = (event) => {
    setMotor(event.target.value);
  };       
  
 const [year, setYear] = React.useState('');

 const handleChangeAge = (event) => {
    setYear(event.target.value);
  };     
  
 const upadateClick = () => {
   window.location.reload();
 }
  
  

  function valuetext(value) {
    return `${value}₾`;
  }
  return (
    <div className='Category-Main'>

    <img className='select-loop-image' src="https://cdn-icons-png.flaticon.com/256/751/751463.png" alt="select-loop icon"/>
    <div className='Select-Content'>
    <h3 className='select-price'>Выбрать цену</h3>
    <Box className="Category-Line" sx={{ width: 300 }}>
      <Slider sx={{color:"#5d5d5d"}}
        aria-label="Temperature"
        defaultValue={0}
        valueLabelDisplay="auto"
        step={1000}
        marks
        min={1500}
        max={500000}
        valueLabelFormat={valuetext}
      />
    </Box>
    
    <FormControl sx={{ m: 1, minWidth: 120, marginLeft:"-3px" }}>
        <Select
          sx={{width:"100px"}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Марка</em>
          </MenuItem>
          <MenuItem value={10}>Bmw</MenuItem>
          <MenuItem value={20}>Lada</MenuItem>
          <MenuItem value={30}>Mersedes</MenuItem>
          <MenuItem value={40}>Opel</MenuItem>
          <MenuItem value={50}>Mazda</MenuItem>
          <MenuItem value={60}>Audi</MenuItem>
        </Select>
        <FormHelperText>Марка</FormHelperText>
      </FormControl>
    <FormControl sx={{ m: 1, minWidth: 120, marginLeft:"8px" }}>
        <Select
          sx={{width:"100px"}}
          value={motor}
          onChange={handleChangeMotor}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Двигатель</em>
          </MenuItem>
          
          <MenuItem value={10}>0.5</MenuItem>
          <MenuItem value={20}>1.5</MenuItem>
          <MenuItem value={30}>2.0</MenuItem>
          <MenuItem value={40}>2.5</MenuItem>
          <MenuItem value={50}>3.0</MenuItem>
          <MenuItem value={60}>4.0</MenuItem>
          <MenuItem value={60}>5.0</MenuItem>
          <MenuItem value={60}>5.5</MenuItem>
          <MenuItem value={60}>6.0</MenuItem>
          <MenuItem value={60}>7.0</MenuItem>
          <MenuItem value={60}>8.5</MenuItem>
          <MenuItem value={60}>9.5</MenuItem>
          <MenuItem value={60}>10.0</MenuItem>
          <MenuItem value={60}>11.7</MenuItem>
          <MenuItem value={60}>13.0</MenuItem>
        </Select>
        <FormHelperText>Двигатель</FormHelperText>
      </FormControl>

    <FormControl sx={{ m: 1, minWidth: 120, marginLeft:"6px" }}>
        <Select
          sx={{width:"100px"}}
          value={year}
          onChange={handleChangeAge}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Год</em>
          </MenuItem>
          
          <MenuItem value={10}>1975</MenuItem>
        <MenuItem value={20}>1976</MenuItem>
        <MenuItem value={30}>1977</MenuItem>
        <MenuItem value={40}>1978</MenuItem>
        <MenuItem value={50}>1979</MenuItem>
        <MenuItem value={60}>1980</MenuItem>
        <MenuItem value={70}>1981</MenuItem>
        <MenuItem value={80}>1982</MenuItem>
        <MenuItem value={90}>1983</MenuItem>
        <MenuItem value={100}>1984</MenuItem>
        <MenuItem value={110}>1985</MenuItem>
        <MenuItem value={120}>1986</MenuItem>
        <MenuItem value={130}>1987</MenuItem>
        <MenuItem value={140}>1988</MenuItem>
        <MenuItem value={150}>1989</MenuItem>
        <MenuItem value={160}>1990</MenuItem>
        <MenuItem value={170}>1991</MenuItem>
        <MenuItem value={180}>1992</MenuItem>
        <MenuItem value={190}>1993</MenuItem>
        <MenuItem value={200}>1994</MenuItem>
        <MenuItem value={210}>1995</MenuItem>
        <MenuItem value={220}>1996</MenuItem>
        <MenuItem value={230}>1997</MenuItem>
        <MenuItem value={240}>1998</MenuItem>
        <MenuItem value={250}>1999</MenuItem>
        <MenuItem value={260}>2000</MenuItem>
        <MenuItem value={270}>2001</MenuItem>
        <MenuItem value={280}>2002</MenuItem>
        <MenuItem value={290}>2003</MenuItem>
        <MenuItem value={300}>2004</MenuItem>
        <MenuItem value={310}>2005</MenuItem>
        <MenuItem value={320}>2006</MenuItem>
        <MenuItem value={330}>2007</MenuItem>
        <MenuItem value={340}>2008</MenuItem>
        <MenuItem value={350}>2009</MenuItem>
        <MenuItem value={360}>2010</MenuItem>
        <MenuItem value={370}>2011</MenuItem>
        <MenuItem value={380}>2012</MenuItem>
        <MenuItem value={390}>2013</MenuItem>
        <MenuItem value={400}>2014</MenuItem>
        <MenuItem value={410}>2015</MenuItem>
        <MenuItem value={420}>2016</MenuItem>
        <MenuItem value={430}>2017</MenuItem>
        <MenuItem value={440}>2018</MenuItem>
        <MenuItem value={450}>2019</MenuItem>
        <MenuItem value={460}>2020</MenuItem>
        <MenuItem value={470}>2021</MenuItem>
        <MenuItem value={480}>2022</MenuItem>
        <MenuItem value={490}>2023</MenuItem>

        </Select>
        <FormHelperText>Год</FormHelperText>
      </FormControl>

      <div className='Inputs-d-flex'>
        <CategoryInputs 
         title="Топливо"
         type="Бензин"
         type2="Дизельное топливо"
         type3="Электричество"
         type4="Пропан/бутан"
         type5="Газ"
         type6="Метан"
         type7="Этан"
         type8="Биотопливо"
         type9="Биотопливо"
          />
        <CategoryInputs 
        title="Категория"
        type="Седан"
        type2="Хэтчбек"
        type3="Купе"
        type4="Универсал"
        type5="Минивэн"
        type6="Спорткар"
        type7="Пикап"
        type8="Автобус"
        type9="Грузовик"
        
        
        />
        <CategoryInputs
         title="Тип Сделки"
         type="Онлайн"
         type2="Аренда"
         type3="Реставрация"
         type4="Лизинг"
         type5="Выкуп автомобиля"
         type6="Спорткар"
         type7="Субаренда"
         type8="Обмен"
         type9="Написать продавцу-договарная"
         
         />


      </div>
      <Button onClick={upadateClick} sx={{backgroundColor:"yellow", '&:hover': {
          backgroundColor: 'rgb(255, 255, 54)',
        }, color:"black", marginLeft:"-5px", width:"370px", height:"40px", borderRadius:"10px"}} variant="contained">Найти</Button>

    </div>


    </div>
  );
}