import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

import asidepic1 from '../../../../img/casestudio/hetrix2.webp'
import asidepic2 from '../../../../img/casestudio/venom2.webp'
import asidepic3 from '../../../../img/casestudio/zume2.webp'
import asidepic4 from '../../../../img/casestudio/trenfinance2.webp'

import mainPicture1 from '../../../../img/casestudio/hetrix.webp'
import mainPicture2 from '../../../../img/casestudio/venom.webp'
import mainPicture3 from '../../../../img/casestudio/zume.webp'
import mainPicture4 from '../../../../img/casestudio/trenfinance.webp'

import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import TitleComponent from '../../../General/TitleAnimation/TitleComponent';


export default function Casestudies(props) {
   const linkHandler = ()=>{
      props.sishvr(false)
      window.scrollTo(0, 0);
   }
   const [scrollPosition, setScrollPosition] = useState(0);
   const [transformed, setTransformed] = useState(0); // Changed to a number to represent the transformation level
   const blocks = [1, 2, 3, 4]; // Array of block numbers
 
   const casestudioList = [
    {
       mainPicture: mainPicture1,
       title: 'Hetrix',
       list: ['Branding','Corporate Identity'],
       link: 'hetrix',
       asideText: "We've elevated Hetrix's presence in the gaming industry, capturing their essence and vision in every design detail. Click for more info.",
       asidePicture: asidepic1,
    },
    {
       mainPicture: mainPicture2,
       title: 'Venom Foundation',
       list: ['Web Design','Brand Guidelines'],
       link: 'venom',
       asideText: "Venom, a layer one blockchain, where we crafted a cutting-edge website and distinctive branding to reflect their innovative technology and forward-thinking ethos. Click for more info.",
       asidePicture: asidepic2,
    },
    {
       mainPicture: mainPicture3,
       title: 'Zume',
       list: ['Corporate Identity','Templates'],
       link: 'zume',
       asideText: "Our collaborative efforts have propelled Zume towards achieving their marketing goals and standing out in the competitive industry. Click for more info.",
       asidePicture: asidepic3,
    },      {
       mainPicture: mainPicture4,
       title: 'TrenFinance',
       list: ['Branding','Platform UI'],
       link: 'trenfinance',
       asideText: "As their trusted branding agency, we've meticulously crafted a compelling vision for Tren Finance, positioning them as leaders in the rapidly evolving DeFi landscape. From conceptualizing their brand identity to designing an intuitive platform UI, we've done it all.",
       asidePicture: asidepic4,
    },
 ]
 
 
   useEffect(() => {
     const handleScroll = () => {
       const currentPosition = window.scrollY;
       setScrollPosition(currentPosition);
     };
 
     window.addEventListener('scroll', handleScroll);
 
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
 
   useEffect(() => {
      const mainContent = document.querySelector('.main-content');
      const mainContentTop = mainContent.getBoundingClientRect().top + window.scrollY;
      const mainContentHeight = mainContent.clientHeight / 1.2;
    
      const quarterHeight = mainContentTop + mainContentHeight / 4; // Calculate quarter height
    
      const halfHeight = mainContentTop + mainContentHeight / 2;
      const threeQuarterHeight = mainContentTop + mainContentHeight * 3 / 4;
    
      const handleScroll = () => {
        const currentPosition = window.scrollY;
        if (currentPosition >= quarterHeight && currentPosition < halfHeight) {
          setTransformed(1);
        } else if (currentPosition >= halfHeight && currentPosition < threeQuarterHeight) {
          setTransformed(2);
        } else if (currentPosition >= threeQuarterHeight) {
          setTransformed(3);
        } else {
          setTransformed(0);
        }
      };
    
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
 
   const mainContentHeight = (casestudioList.length * window.innerHeight) / 1.2; // Calculate main content height
  return (
   <section id='Work' className='home__casestudies casestudies'>
   {/* Main content section */}
   <div className='casestudies__container'>
   
      <div className="main-content" style={{ height: mainContentHeight}}>
      <div className="border-block__area">
            <div className="border-block__aside"></div>
            <div className="border-block__middle"></div>
            <div className="border-block__right"></div>
         </div>
        {/* Wrapper div for all blocks */}
        <div className="blocks-outer-wrapper casestudies__section-block section-block">
         
        <div className="section-block__head">
         <TitleComponent text={"Case Studies"}/>
               <Link to={'https://cal.com/proyect/discovery'} target="_blank" className="button casestudies__button">
                  <div className="button__text">Book a Call</div>
                  <i className="button__icon">
                     <FaArrowRight />
                  </i>
               </Link>
            </div>
          <div className={`blocks-wrapper section-block__body ${transformed ? `transformed-${transformed}00vh` : ''}`}>
            {/* Render blocks */}
               {
                  casestudioList.map((item,i)=>{
                     return <div key={i} className={`casestudies__row casestudies__row_${item.link}`}>
                     <div className='casestudies__row_inner-block'>
                        <div className="casestudies__content">
                            <Link to={item.link} className="casestudies__picture -ibg" onMouseEnter={()=> {props.sishvr(true)}} onClick={()=>{props.sishvr(false)}} onMouseLeave={()=>{props.sishvr(false)}}>
                               <img src={item.mainPicture} alt="picture" />
                               <div className="noise"></div>
                            </Link>
                           <div className="casestudies__body casestudies-body">
                              <div className="casestudies-body__title">{item.title}</div>
                              <div className="casestudies-body__labels">
                                 {
                                    item.list.map((item,i)=>{
                                       return <div key={i} className="casestudies-body__label label">{item}</div>
                                    })
                                 }
                              </div>
                              <Link to={item.link} className='link'>
                                 <span className="link__text">View work</span>
                                 <HiArrowLongRight />
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  })
               }
          </div>
          <div className={`casestudies__aside casestudies-aside ${transformed ? `transformed transformed-${transformed+1}` : ''}`}>
          {
            casestudioList.map((item,i)=>{
               return <div key={i} className={`casestudies-aside__item casestudies-aside__item-${i+1}`}>
                  <div className="casestudies-aside__text">{item.asideText}</div>
                  <div className="casestudies-aside__picture -ibg">
                     <img src={item.asidePicture} alt="picture" />
                  </div>
               </div>
            
            })
          }
          </div>
        </div>
      </div>
      <div className="main-content">
      <div className="border-block__area">
            <div className="border-block__aside"></div>
            <div className="border-block__middle"></div>
            <div className="border-block__right"></div>
         </div>
        {/* Wrapper div for all blocks */}
        <div className="casestudies__section-block section-block">
         
        <div className="section-block__head">
               <TitleComponent text={"Case Studies"}/>
               <button className="button casestudies__button">
                  <div className="button__text">Book a Call</div>
                  <i className="button__icon">
                     <FaArrowRight />
                  </i>
               </button>
            </div>
          <div className={`blocks-wrapper section-block__body`}>
            {/* Render blocks */}
               {
                  casestudioList.map((item,i)=>{
                     return <div key={i} className='casestudies__row'>
                     <div className='casestudies__row_inner-block'>
                        <div className="casestudies__content">
                            <Link to={item.link} className="casestudies__picture -ibg" >
                               <img src={item.mainPicture} alt="picture" />
                               <div className="noise"></div>
                            </Link>
                           <div className="casestudies__body casestudies-body">
                              <div className="casestudies-body__title">{item.title}</div>
                              <div className="casestudies-body__labels">
                                 {
                                    item.list.map((item,i)=>{
                                       return <div key={i} className="casestudies-body__label label">{item}</div>
                                    })
                                 }
                              </div>
                              <Link to={item.link} className='link'>
                                 <span className="link__text">View work</span>
                                 <HiArrowLongRight />
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  })
               }
                     
          </div>
        </div>
      </div>
   </div>

 </section>
  )
}
