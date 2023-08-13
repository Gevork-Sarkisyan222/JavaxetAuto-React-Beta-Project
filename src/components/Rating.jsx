import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import '../App.css';

export default function HalfRating() {
  return (
    <Stack className='media-rating' sx={{position:'absolute', top:"159px", left:"1075px"}} spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
  );
}