import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img   src="https://pc-rk.ru//wp-content/uploads/2016/10/treyd_in.jpg" alt='slider-img' />
      </div>
      <div>
      <img   src="https://pc-rk.ru//wp-content/uploads/2016/10/treyd_in.jpg" alt='slider2-img' />
      </div>
      <div>
      <img   src="https://pc-rk.ru//wp-content/uploads/2016/10/treyd_in.jpg" alt='slider3-img'/>
      </div>
    </Slider>
  );
}

export default ImageSlider;
