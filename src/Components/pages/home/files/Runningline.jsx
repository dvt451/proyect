import React from 'react';

const InfiniteRunningImages = ({ images, directionRight }) => {
  return (
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
