import React from 'react';
import '../App.css'; 

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';



export default function MediaCard({ title, price, image, defaultChecked, onAdd, addToFavorite, carInfo, setIsVisibleFooter  }) {
  const onHandleAdd = () => {
    addToFavorite({ title, price, image, carInfo });
    // onAdd({title, price, image})
  }


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Card className='card'  sx={{ maxWidth: 210, color:"grey", borderRadius:"30px" }}>
      <Link onClick={() => setIsVisibleFooter(false)} to='/Inside/Card/info'>
      <CardMedia
        onClick={() => setIsVisibleFooter(false)}
        sx={{ height: 120 }}
        image={image}
        title="green iguana"
      />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {carInfo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{color:"black"}}  size="small">
          <Checkbox   onClick={onHandleAdd} {...label} sx={{ position:"relative", color:"grey" }} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"grey"}} />} />
          </Button>
        <Button sx={{color:"black"}} size="small">Цена:<span style={{color:"grey"}}>{price}</span></Button>
      </CardActions>
    </Card>
  );
}
