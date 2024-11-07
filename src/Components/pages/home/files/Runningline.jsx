import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Swiper,SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const InfiniteRunningImages = ({ images, directionRight }) => {
   const breakpoints = {
      320: {
         slidesPerView: 1.2,
      },
      479: {
         slidesPerView: 1.6,
      },
      600: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 2.5,
      },
      992: {
         slidesPerView: 3,
      },
      1200: {
         slidesPerView: 3.2,
      },
      1500: {
         slidesPerView: 3.7,
      },
      1700: {
         slidesPerView: 4.2,
      },
   }
   const emptyArray = Array.from({ length: 3 });
  return (
   // style={{width: images.length * 484+'px',}}
   <>
    <div className='works__wrapper' >
         {images.map((item,i)=>{
               return <div key={i} className='works__link -ibg'>
                        {
                           item.video ?
                           <div className="head__video" dangerouslySetInnerHTML={{ __html: `
                           <video
                           loop
                           muted
                           autoPlay
                           playsInline
                           src="${item.video}"
                           ></video>
                     ` }}></div>
                     :  <img
                     src={item.image}
                     alt='picture'
                     />
                  }
                     <div className="noise"></div>
               </div>
         })}
    </div>
    <div className='works__wrapper' >
         {images.map((item,i)=>{
               return <div key={i} className='works__link -ibg'>
                        {
                           item.video ?
                           <div className="head__video" dangerouslySetInnerHTML={{ __html: `
                           <video
                           loop
                           muted
                           autoPlay
                           playsInline
                           src="${item.video}"
                           ></video>
                     ` }}></div>
                     :  <img
                     src={item.image}
                     alt='picture'
                     />
                  }
                     <div className="noise"></div>
               </div>
         })}
    </div>
    </>
  );
};

export default InfiniteRunningImages;
