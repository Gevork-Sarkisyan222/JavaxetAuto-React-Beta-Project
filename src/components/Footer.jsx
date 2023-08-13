import React from 'react';
import '../App.css';
import Cart from './Cart';
import Favorite from '../pages/Favorite';
import '../pages/VideoBlog';
import Rating from './Rating';
import { NavLink } from 'react-router-dom';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Alert from '@mui/joy/Alert';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import LinearProgress from '@mui/joy/LinearProgress';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import Warning from '@mui/icons-material/Warning';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

function Footer({ openBgBlack, setOpenBgBlack, open, setOpen }) {
  // const [open, setOpen] = React.useState(false);
  const [openSecondModal, setOpenSecondModal] = React.useState(false);
  const textRef = React.useRef(null);

  const [email, setEmail] = React.useState('');
  const [question, setQuestion] = React.useState('');

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (email && question) {
      setOpenSecondModal(true);
    }

    setOpen(false);
  };


  const handleTextClick = () => {
    window.scrollTo({
      top: 430,
      behavior: 'smooth'
    });
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/home', '_blank');
  };

  const handlePrinterestClick = () => {
    window.open('https://www.pinterest.com/', '_blank');
  };

  const handleAppleClick = () => {
    window.open('https://www.apple.com/', '_blank');
  };

  const handleGoogleClick = () => {
    window.open('https://www.google.com', '_blank');
  };



  const handlePlayMarketClick = () => {
    window.open('https://play.google.com/store/apps?hl=ru&gl=US&pli=1', '_blank');
  };
  const handleAppStoreClick = () => {
    window.open('https://www.apple.com/app-store/', '_blank');
  };

  // help
  const handleQuestions = () => {
    prompt("Напишите какой вопрос вас интересует?");
    alert("Спасибо администратор ответит вам!!");
  }

  const handleAppEmailClick = () => {
    window.open('https://gmail.com/', '_blank');
  };
  const handleAppNumberClick = () => {
    window.open('https://globfone.com/call-phone/', '_blank');
  };

  return (
    <footer className='Footer-Main'>
      <div className='footer-content'>
        <h2 className='Contact-with-us-tilte'>Свяжется с нами</h2>
      <div className='footer-social-icons'>
       <img onClick={handleFacebookClick} src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-75-189796.png" alt="facebook-icon"/>
       <img onClick={handleTwitterClick} src="https://cdn.iconscout.com/icon/free/png-256/free-twitter-53-189787.png" alt="twitter-icon"/>
       <img onClick={handlePrinterestClick} src="https://cdn.iconscout.com/icon/free/png-256/free-pinterest-46-189745.png" alt="pinterest-icon" />
       <img onClick={handleAppleClick} src="https://cdn.iconscout.com/icon/free/png-256/free-apple-609-434762.png" alt="apple-icon"/>
       <img onClick={handleGoogleClick} src="https://cdn.iconscout.com/icon/free/png-256/free-google-152-189813.png" alt="google-icon"/>
     </div>
     <div className='line-for-footer'></div>
      <div className='avilable-icons'>
        <img onClick={handlePlayMarketClick} src="https://families.google.com/familylink/static/img/google-play/googleplay.ru_ALL.png?cache=c73dc84" alt="play-market-icon"/>
        <img onClick={handleAppStoreClick} src="https://travel24.online/wp-content/uploads/2021/05/app-store-travel24-optimized.png" alet="app-store-icon" />
      </div>
     <div className='left-inside-content'>
        <section className='help-section'>
       <h2 className='help-title'>Помощь</h2>
        <article className='help-servises-content'>
           <p onClick={() => setOpen(true)}>Задайте какой то вопрос</p>
           <p onClick={handleAppEmailClick}>Отправить сообщение в соц сети</p>
           <p onClick={() => setOpenBgBlack(true)}>Заказать</p>
           <p onClick={handleAppNumberClick}>+995568303655</p>
           <p onClick={handleAppEmailClick}>javaxetauto@email.com</p>
       </article>
       <React.Fragment>
       <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{ maxWidth: 500 }}
          >
            <Typography id="basic-modal-dialog-title" component="h2">
              Вопросы
            </Typography>
            <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
              Напишите какой вопрос вас интересует?
            </Typography>
            <form onSubmit={handleSubmitForm}>
              <Stack spacing={2}>
                <FormControl>
                  <FormLabel>Эл почта</FormLabel>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus required />
                </FormControl>
                <FormControl>
                  <FormLabel>Вопрос</FormLabel>
                  <Input value={question} onChange={(e) => setQuestion(e.target.value)} required />
                </FormControl>
                <Button sx={{ backgroundColor: 'yellow', color: 'black', '&:hover': { backgroundColor: 'rgb(168, 168, 168)' } }} type="submit">Отправить</Button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
        </React.Fragment>

        {/* Second Modal */}
        <React.Fragment>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={openSecondModal}
          onClose={() => setOpenSecondModal(false)}
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
    <div>
       <Alert
        variant="soft"
        color="warning"
        invertedColors
        startDecorator={
          <CircularProgress size="lg">
            <HourglassBottomIcon />
          </CircularProgress>
        }
        sx={{ alignItems: 'flex-start', '--Alert-gap': '1rem' }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ mt: 2 }}>
            Спасибо администратор ответит вам!!
          </Typography>
          <Typography sx={{fontSize:"13px"}}>
            проверьте вашу электронную почту
          </Typography>
          {/* <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button variant="outlined" size="sm">
              Open network setting
            </Button>
            <Button variant="soft" size="sm">
              Okay
            </Button>
          </Box> */}
        </Box>
      </Alert>
   </div>

            {/* <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              Спасибо администратор ответит вам!!
            </Typography> */}
          </Sheet>
        </Modal>
        </React.Fragment>

        </section>
        <section className='buyer-section'>
       <h2 className='buyer-title'>Покупателям</h2>
        <article className='buyer-services-content'>
         <p onClick={() => setOpen(true)}>Поддержка</p>
         <p ref={textRef} onClick={handleTextClick}>Распродажи</p>
         <NavLink className="navlink-footer-blog-cars-info" to='/Favorite'><p>Журнал для покупателей</p></NavLink>
         <NavLink className="navlink-footer-blog-cars-info" to='/Video-Blog'><p>Новые и Качественные машины</p></NavLink>
        </article>
        </section>
        <a className='a-last-title-footer-info-title' href='/'> 
          <h5 className='footer-info-title-last'>2015-2023 © JavaxetAuto Ахалцихе</h5>
          <Rating />
        </a>
     </div>
      </div>

    </footer>
  )
}

export default Footer;