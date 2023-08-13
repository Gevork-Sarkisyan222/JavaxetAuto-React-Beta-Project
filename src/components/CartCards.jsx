import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
 
  
  return (
    <Card className='Cart-Cards-Main-Cards' sx={{ maxWidth: 200, height:'199px', boxShadow:"5px 10px 11px 5px black", marginLeft:"19px", marginTop:"55px", position:"relative", top:"40px", borderRadius:"30px"   }}>
      <CardMedia
        sx={{ height: 80 }}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Цена:{props.price}
        </Typography>
        <img  className='remove-cart-card' onClick={props.onRemoveFromCart} src="https://react-sneakers-five.vercel.app/images/btn-remove.svg" alt="remove-cart-card" />
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}