import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Alert from '@mui/joy/Alert';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import LinearProgress from '@mui/joy/LinearProgress';
import Stack from '@mui/joy/Stack';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import Warning from '@mui/icons-material/Warning';
import './InsideCard.css';

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const randomNum = Math.floor(Math.random() * 100) + 20

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className='Buy-Modal-Card'>
    <React.Fragment>
      <Button onClickCapture={handleClick} sx={{backgroundColor:"yellow", borderRadius:"40px"}} className="buy-car-button" variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Купить цена:<span style={{color:"grey"}}> 22,704₾</span>
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
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
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
            Автомобиль приобретен
          </Typography>
          <Typography level="body3">
            Ожидайте ваш заказ под номером #{randomNum} скоро приедет к вам
          </Typography>
        </Box>
        <LinearProgress
          variant="soft"
          value={40}
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
    </div>
  );
}