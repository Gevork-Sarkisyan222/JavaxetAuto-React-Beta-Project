import React, { useState, useEffect } from 'react';
import '../App.css';

const SliderBankImage = ({ bankCardAlert }) => {
  const images = [ 
    'https://freesvg.org/img/Muga_Golden_Credit_Card.png',
    'https://freesvg.org/img/1325432106.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(changeImage, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img onClick={bankCardAlert} className='bank-card-movement' src={images[currentImageIndex]} alt="card-image"/>
    </div>
  );
};

export default SliderBankImage;
