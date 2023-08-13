import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import '../App.css'


export default function MediaCard(props) {
  const { onAddToCart, obj, title, price, image, carInfo, onRemoveFromFavorite,  handleRemoveFromCartMainToFavorite } = props;
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  const [isHidden, setIsHidden] = React.useState(false);

  const handleAddCartMain = (obj) => {
    onAddToCart({ title, price, image });
  }

  const handleClick = () => {
    // setIsHidden(true);
    setIsHidden(!isHidden);
  };





  return (
    <Card className='Favorite-Cards' sx={{ maxWidth: 210,  color:"grey", borderRadius:"30px" }}>
      <CardMedia
        sx={{ height: 120 }}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.carInfo}
        </Typography>
      </CardContent>
      <CardActions>

    {/* add into cart */}
      {!isHidden ? (
    <div className='Add-Icon'>
       <AddCircleOutlineOutlinedIcon onClickCapture={handleAddCartMain} onClick={handleClick} fontSize="large" /> 
     </div>
      ) : (
     <div className='Done-Icon'>
        <CheckCircleOutlineOutlinedIcon onClick={handleClick} onClickCapture={handleRemoveFromCartMainToFavorite} fontSize="large" sx={{positon:"absolute"}} />
    </div>
      )}


      {/* <div className='Add-Icon'>
        <AddCircleOutlineOutlinedIcon fontSize="large" /> 
     </div>

        <div className='Done-Icon'>
         <CheckCircleOutlineOutlinedIcon fontSize="large" sx={{positon:"absolute"}} />
        </div> */}



       <div className='Card-down-content'>
        <Button size="small">
     <Checkbox onClick={onRemoveFromFavorite}  defaultChecked {...label} sx={{ position:"relative", color:"grey", top:"-7px" }} icon={<FavoriteBorder />} checkedIcon={<Favorite   sx={{color:"grey"}} />} />
        </Button>
        <Button sx={{color:"black", position:"relative", top:"-6px"}} size="small">Цена:<span style={{color:"grey"}}>{props.price}</span></Button>
        </div>
      </CardActions>
    </Card>
  );
}