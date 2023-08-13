import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function Input(props) {
  const {find, setFind} = props;

  return (
    <div>
    <Paper
      className='Search-Input'
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 450, zIndex:"50" }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        value={find}
        onChange={(e) => setFind(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Найти машину"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
    
    </div>
  )
}

export default Input