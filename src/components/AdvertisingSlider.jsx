import React, { useState, useEffect } from 'react';
import '../App.css';

const ImageSlider = () => {
  const images = [ 
    'https://pc-rk.ru//wp-content/uploads/2016/10/treyd_in.jpg',
    'https://finfocus.today/wp-content/uploads/kak-zarabotat-na-reklame-na-mashine.png',
    'https://img.freepik.com/premium-psd/car-rental-promotional-social-media-post-or-instagram-square-banner-template_504779-158.jpg',
    'https://img.freepik.com/free-psd/car-rental-and-automotive-facebook-cover-template_106176-2469.jpg?w=2000',
    'https://s.tmimgcdn.com/scr/800x500/258100/prokat-avtomobilej-instagram-post-i-dizajn-sablona-veb-bannera_258106-original.jpg',
    'https://thumbs.dreamstime.com/b/%D1%81%D0%BA%D0%B8%D0%B4%D0%BA%D0%B0-%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82-%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%8B-%D1%88%D0%B8%D0%BD%D1%8B-%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-%D1%80%D0%B5%D0%B7%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D1%88%D0%B8%D0%BD%D0%B0-%D0%BA%D0%BE%D0%BB%D0%B5%D1%81%D0%BE-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D1%8B-%D0%B4%D0%B8%D1%81%D0%BA%D0%B0-177674055.jpg?w=1600',
    'https://img.freepik.com/premium-psd/car-rental-sale-horizontal-banner-or-facebook-cover-advertising-template_177160-638.jpg?w=2000',
    'https://img.freepik.com/free-psd/car-rental-and-automotive-facebook-cover-template_106176-2471.jpg?w=2000',
    'https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Rent-a-Car-Professional-Web-Banner-Design-scaled.jpg',
    'https://img.freepik.com/premium-psd/car-rental-sale-horizontal-banner-or-facebook-cover-advertising-template_177160-633.jpg?w=2000',
    'https://img.freepik.com/premium-vector/car-rental-promotion-banner-template_488814-167.jpg?w=2000',
    'https://avatars.dzeninfra.ru/get-zen-pub-og/2978046/pub_5f5232624330f118aa18c021_6037adf98f576a40a24d11b4/fb',
    'https://s12.stc.yc.kpcdn.net/share/i/12/9669091/cr-1200-630.wm-asnplfru-100-tr-0-0.t-13-3370841-ttps-54-14-0083CD-1010-l-85-b-42.t-13-3370841-ttps-54-14-FFF-1010-l-85-b-42.t-207-36-asb-37-10-FFF-788-l-370-t-68.m2016-03-14T18-40-54.jpg',
    'https://img.freepik.com/premium-vector/car-sale-and-rent-facebook-cover-banner-template_416835-530.jpg?w=2000',
    'https://img.freepik.com/free-vector/car-rental-service-webinar-template_23-2150461693.jpg?w=2000',
    'https://img.freepik.com/premium-psd/car-rental-sell-promotion-social-media-post-web-banner-template-background_502896-114.jpg?w=2000',
    'https://img.freepik.com/premium-psd/banner-transport-template-design_23-2149084182.jpg?w=2000',
    'https://img.freepik.com/premium-vector/car-rental-social-media-facebook-cover-banner-design-template_751855-6.jpg?w=2000',
    'https://img.freepik.com/free-psd/driving-school-banner-template_23-2148618495.jpg?w=2000',
    'https://pc-rk.ru//wp-content/uploads/2016/10/treyd_in.jpg',
    'https://img.freepik.com/premium-psd/car-rent-banner-modern-web-template-premium_194059-92.jpg?w=2000',
    'https://img.freepik.com/premium-psd/car-rental-sale-horizontal-banner-or-facebook-cover-advertising-template_177160-1050.jpg?w=2000',
    'https://img.freepik.com/premium-vector/car-for-rent-special-discount-sale-banner-template-for-web-cover_480837-60.jpg?w=2000',
    'https://img.freepik.com/premium-psd/car-rent-promotion-web-banner-template_159024-205.jpg?w=2000',
    'https://img.freepik.com/premium-psd/off-road-adventure-flyer-and-facebook-cover-banner-template_584197-322.jpg?w=2000',
    'https://img.freepik.com/premium-vector/need-a-car-or-car-for-rent-promotion-instagram-and-facebook-social-media-post-banner-template-design_653289-36.jpg?w=2000',
    'https://img.freepik.com/free-psd/car-rental-and-automotive-facebook-cover-template_106176-2471.jpg?w=2000',
    'https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Rent-a-Car-Professional-Web-Banner-Design-scaled.jpg',
    'https://img.freepik.com/premium-psd/car-rental-sale-horizontal-banner-or-facebook-cover-advertising-template_177160-633.jpg?w=2000',
    'https://img.freepik.com/premium-vector/car-rental-promotion-banner-template_488814-167.jpg?w=2000',
    'https://avatars.dzeninfra.ru/get-zen-pub-og/2978046/pub_5f5232624330f118aa18c021_6037adf98f576a40a24d11b4/fb',
    'https://s12.stc.yc.kpcdn.net/share/i/12/9669091/cr-1200-630.wm-asnplfru-100-tr-0-0.t-13-3370841-ttps-54-14-0083CD-1010-l-85-b-42.t-13-3370841-ttps-54-14-FFF-1010-l-85-b-42.t-207-36-asb-37-10-FFF-788-l-370-t-68.m2016-03-14T18-40-54.jpg',
    'https://img.freepik.com/premium-vector/car-sale-and-rent-facebook-cover-banner-template_416835-530.jpg?w=2000',
    'https://img.freepik.com/premium-psd/car-rental-promotional-social-media-post-or-instagram-square-banner-template_504779-158.jpg',
    'https://avatars.dzeninfra.ru/get-zen-pub-og/2978046/pub_5f5232624330f118aa18c021_6037adf98f576a40a24d11b4/fb',
    'https://s12.stc.yc.kpcdn.net/share/i/12/9669091/cr-1200-630.wm-asnplfru-100-tr-0-0.t-13-3370841-ttps-54-14-0083CD-1010-l-85-b-42.t-13-3370841-ttps-54-14-FFF-1010-l-85-b-42.t-207-36-asb-37-10-FFF-788-l-370-t-68.m2016-03-14T18-40-54.jpg',
    'https://img.freepik.com/premium-vector/car-sale-and-rent-facebook-cover-banner-template_416835-530.jpg?w=2000',
    'https://img.freepik.com/free-vector/car-rental-service-webinar-template_23-2150461693.jpg?w=2000',
    'https://img.freepik.com/premium-psd/car-rental-sell-promotion-social-media-post-web-banner-template-background_502896-114.jpg?w=2000',
    'https://img.freepik.com/premium-psd/banner-transport-template-design_23-2149084182.jpg?w=2000',
    'https://s.tmimgcdn.com/scr/800x500/258100/prokat-avtomobilej-instagram-post-i-dizajn-sablona-veb-bannera_258106-original.jpg',
    'https://thumbs.dreamstime.com/b/%D1%81%D0%BA%D0%B8%D0%B4%D0%BA%D0%B0-%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82-%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%8B-%D1%88%D0%B8%D0%BD%D1%8B-%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-%D1%80%D0%B5%D0%B7%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D1%88%D0%B8%D0%BD%D0%B0-%D0%BA%D0%BE%D0%BB%D0%B5%D1%81%D0%BE-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D1%8B-%D0%B4%D0%B8%D1%81%D0%BA%D0%B0-177674055.jpg?w=1600',
    'https://img.freepik.com/premium-psd/car-rental-sale-horizontal-banner-or-facebook-cover-advertising-template_177160-638.jpg?w=2000',
    'https://img.freepik.com/free-psd/car-rental-and-automotive-facebook-cover-template_106176-2471.jpg?w=2000',
    'https://pc-rk.ru//wp-content/uploads/2016/10/treyd_in.jpg',
    'https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Rent-a-Car-Professional-Web-Banner-Design-scaled.jpg',
    'https://img.freepik.com/premium-psd/car-rental-sale-horizontal-banner-or-facebook-cover-advertising-template_177160-633.jpg?w=2000',
    'https://img.freepik.com/premium-vector/car-rental-promotion-banner-template_488814-167.jpg?w=2000',
    'https://avatars.dzeninfra.ru/get-zen-pub-og/2978046/pub_5f5232624330f118aa18c021_6037adf98f576a40a24d11b4/fb',
    'https://img.freepik.com/premium-vector/car-rental-promotion-banner-template_488814-167.jpg?w=2000',
    'https://img.freepik.com/free-vector/car-rental-service-webinar-template_23-2150461693.jpg?w=2000',
    'https://avatars.dzeninfra.ru/get-zen-pub-og/2978046/pub_5f5232624330f118aa18c021_6037adf98f576a40a24d11b4/fb',
    'https://s12.stc.yc.kpcdn.net/share/i/12/9669091/cr-1200-630.wm-asnplfru-100-tr-0-0.t-13-3370841-ttps-54-14-0083CD-1010-l-85-b-42.t-13-3370841-ttps-54-14-FFF-1010-l-85-b-42.t-207-36-asb-37-10-FFF-788-l-370-t-68.m2016-03-14T18-40-54.jpg',
    'https://img.freepik.com/premium-vector/car-sale-and-rent-facebook-cover-banner-template_416835-530.jpg?w=2000',
    'https://img.freepik.com/premium-psd/car-rental-promotional-social-media-post-or-instagram-square-banner-template_504779-158.jpg',
    'https://avatars.dzeninfra.ru/get-zen-pub-og/2978046/pub_5f5232624330f118aa18c021_6037adf98f576a40a24d11b4/fb',
    'https://s12.stc.yc.kpcdn.net/share/i/12/9669091/cr-1200-630.wm-asnplfru-100-tr-0-0.t-13-3370841-ttps-54-14-0083CD-1010-l-85-b-42.t-13-3370841-ttps-54-14-FFF-1010-l-85-b-42.t-207-36-asb-37-10-FFF-788-l-370-t-68.m2016-03-14T18-40-54.jpg',
    'https://img.freepik.com/premium-vector/car-sale-and-rent-facebook-cover-banner-template_416835-530.jpg?w=2000',
    'https://img.freepik.com/free-vector/car-rental-service-webinar-template_23-2150461693.jpg?w=2000',
    'https://img.freepik.com/premium-psd/car-rental-sell-promotion-social-media-post-web-banner-template-background_502896-114.jpg?w=2000',
    'https://img.freepik.com/premium-psd/banner-transport-template-design_23-2149084182.jpg?w=2000',
    'https://img.freepik.com/premium-psd/car-rental-sale-horizontal-banner-or-facebook-cover-advertising-template_177160-638.jpg?w=2000',
    'https://img.freepik.com/free-psd/car-rental-and-automotive-facebook-cover-template_106176-2471.jpg?w=2000',
    'https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Rent-a-Car-Professional-Web-Banner-Design-scaled.jpg',
    'https://img.freepik.com/premium-psd/car-rental-sale-horizontal-banner-or-facebook-cover-advertising-template_177160-633.jpg?w=2000',
    'https://img.freepik.com/premium-vector/car-rental-promotion-banner-template_488814-167.jpg?w=2000',
    'https://avatars.dzeninfra.ru/get-zen-pub-og/2978046/pub_5f5232624330f118aa18c021_6037adf98f576a40a24d11b4/fb',
    'https://img.freepik.com/free-vector/car-rental-service-webinar-template_23-2150461693.jpg?w=2000',
     
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
      <img className='advertising-image' src={images[currentImageIndex]} style={{ maxWidth: '1047px', maxHeight: '469px', width:"940px", height:"384px", borderRadius:"2px", cursor:"pointer" }} alt="Slider-image" />
    </div>
  );
};

export default ImageSlider;
