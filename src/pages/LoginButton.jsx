import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClickToReload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div>
      <a href='/'>
    <Button
        variant="contained"
        sx={{
            color: "white",
            marginLeft: "76px",
            marginTop: "17px",
            backgroundColor: "rgb(125, 78, 0)",
            '&:hover': {
            backgroundColor: 'rgb(173, 109, 2)',
            }
        }}
        onClick={handleOpen}
        onClickCapture={handleClickToReload}
        >
        Далее
    <ArrowRightAltIcon />
    </Button>
     </a>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}