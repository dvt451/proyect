import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

import asidepic1 from '../../../../img/usecases/hetrix/image2.webp'
import asidepic2 from '../../../../img/casestudio/venom2.webp'
import asidepic3 from '../../../../img/usecases/zume/image6.webp'
import asidepic4 from '../../../../videos/tren use case post 2.webm'
import asidepic5 from '../../../../img/usecases/t3lab/image13.webp'
import asidepic6 from '../../../../img/usecases/pixelbros/image4.webp'
import asidepic7 from '../../../../img/usecases/notelix/image8.webp'
import asidepic8 from '../../../../img/usecases/voltix/image11.webp'

import mainPicture1 from '../../../../img/casestudio/hetrix.webp'
import mainPicture2 from '../../../../img/casestudio/venom.webp'
import mainPicture3 from '../../../../img/usecases/zume/head.webp'
import mainPicture4 from '../../../../img/usecases/trenfinance/picture1.webp'
import mainPicture5 from '../../../../img/usecases/t3lab/image1.webp'
import mainPicture6 from '../../../../img/usecases/pixelbros/video/video2.webm'
import mainPicture7 from '../../../../img/usecases/notelix/image16.webp'
import mainPicture8 from '../../../../img/usecases/voltix/image1.webp'

import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import TitleComponent from '../../../General/TitleAnimation/TitleComponent';
import { useTranslation } from 'react-i18next';

export default function Casestudies(props) {
   const { t } = useTranslation();
 
   const casestudioList = [
      {
         mainPicture: mainPicture1,
         title: t('homepage.case-studies.item_1.title'),
         list: [t('homepage.case-studies.item_1.work_type.item_1'),t('homepage.case-studies.item_1.work_type.item_1')],
         link: 'hetrix',
         asideText: t('homepage.case-studies.item_1.description'),
         asidePicture: asidepic1,
      },
      {
         mainPicture: mainPicture2,
         title: t('homepage.case-studies.item_2.title'),
         list: [t('homepage.case-studies.item_2.work_type.item_1'),t('homepage.case-studies.item_2.work_type.item_1')],
         link: 'venom',
         asideText: t('homepage.case-studies.item_2.description'),
         asidePicture: asidepic2,
      },
      {
         mainPicture: mainPicture3,
         title: t('homepage.case-studies.item_3.title'),
         list: [t('homepage.case-studies.item_3.work_type.item_1'),t('homepage.case-studies.item_3.work_type.item_1')],
         link: 'zume',
         asideText: t('homepage.case-studies.item_3.description'),
         asidePicture: asidepic3,
      },
      {
         mainPicture: mainPicture4,
         title: t('homepage.case-studies.item_4.title'),
         list: [t('homepage.case-studies.item_4.work_type.item_1'),t('homepage.case-studies.item_4.work_type.item_1')],
         link: 'trenfinance',
         asideText: t('homepage.case-studies.item_4.description'),
         asideVideo: asidepic4,
      },
      {
         mainPicture: mainPicture5,
         title: "T3LABS",
         list: ['Branding',t('homepage.case-studies.item_3.work_type.item_1')],
         link: 't3lab',
         asideText: t('homepage.case-studies.item_3.description'),
         asidePicture: asidepic5,
      },
      {
         mainVideo: mainPicture6,
         title: "Pixelbros",
         list: ['Branding',t('homepage.case-studies.item_3.work_type.item_1')],
         link: 't3lab',
         asideText: t('homepage.case-studies.item_3.description'),
         asidePicture: asidepic6,
      },
      {
         mainPicture: mainPicture7,
         title: "Notelix",
         list: ['Branding',t('homepage.case-studies.item_3.work_type.item_1')],
         link: 't3lab',
         asideText: t('homepage.case-studies.item_3.description'),
         asidePicture: asidepic7,
      },
      {
         mainPicture: mainPicture8,
         title: "Voltix",
         list: ['Branding',t('homepage.case-studies.item_3.work_type.item_1')],
         link: 't3lab',
         asideText: t('homepage.case-studies.item_3.description'),
         asidePicture: asidepic8,
      },
   ]
   const mainContentHeight = casestudioList.length * (window.innerHeight/2); // Calculate main content height
   const [transformed, setTransformed] = useState(0); // Changed to a number to represent the transformation level
   const sectionRef = useRef(null); // Reference for the specific section

   useEffect(() => {

      const handleScroll = () => {
         if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const topRelativeToDocument = rect.top + window.scrollY; // Top position relative to the document
            if (window.scrollY <= topRelativeToDocument +178) {
               setTransformed(0)
             } else if (window.scrollY >= topRelativeToDocument +178) {
               setTransformed(1)
             }
            casestudioList.slice(0,-2).forEach((item,index)=>{
               if(window.scrollY >= topRelativeToDocument + ((window.innerHeight / 2)*(index+1))){
                  setTransformed(index+2)
                } 
            })
         }
       };

      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [transformed]);
  
  
   
  return (
   <section id='Work' className='home__casestudies casestudies'>
   {/* Main content section */}
   <div className='casestudies__container'>
   
      <div ref={sectionRef} className="main-content" style={{ height: mainContentHeight}}>
      <div className="border-block__area">
            <div className="border-block__aside"></div>
            <div className="border-block__middle"></div>
            <div className="border-block__right"></div>
         </div>
        <div className="blocks-outer-wrapper casestudies__section-block section-block">
         
            <div className="section-block__head">
         <TitleComponent text={t('homepage.case-studies.texts.title')}/>
               <Link to={'https://cal.com/proyect/discovery'} target="_blank" className="button casestudies__button">
                  <div className="button__text">{t('homepage.case-studies.texts.book_a_call')}</div>
                  <i className="button__icon">
                     <FaArrowRight />
                  </i>
               </Link>
            </div>
          <div className={`blocks-wrapper section-block__body`} style={{transform: transformed ? `translateY(-${transformed}00vh)` : `translateY(0vh)` }}>
            {/* Render blocks */}
               {
                  casestudioList.map((item,i)=>{
                     return <div key={i} className={`casestudies__row casestudies__row_${item.link}`}>
                     <div className='casestudies__row_inner-block'>
                        <div className="casestudies__content">
                            <Link to={item.link} className="casestudies__picture -ibg" onMouseEnter={()=> {props.sishvr(true)}} onClick={()=>{props.sishvr(false)}} onMouseLeave={()=>{props.sishvr(false)}}>
                               {item.mainVideo ? <video src={item.mainVideo} loop muted autoPlay playsInline></video> : <img src={item.mainPicture} alt="picture" />}
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
                                 <span className="link__text">{t('homepage.case-studies.texts.view_work')}</span>
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
                       {item.asideVideo ? <video src={item.asideVideo} loop muted autoPlay playsInline></video> : <img src={item.asidePicture} alt="picture" />}
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
               <TitleComponent text={t('homepage.case-studies.texts.title')}/>
               <button className="button casestudies__button">
                  <div className="button__text">{t('homepage.case-studies.texts.book_a_call')}</div>
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










// import React, { useEffect, useState } from 'react'
// import { FaArrowRight } from "react-icons/fa6";

// import asidepic1 from '../../../../img/casestudio/hetrix2.webp'
// import asidepic2 from '../../../../img/casestudio/venom2.webp'
// import asidepic3 from '../../../../img/casestudio/zume2.webp'
// import asidepic4 from '../../../../img/casestudio/trenfinance2.webp'

// import mainPicture1 from '../../../../img/casestudio/hetrix.webp'
// import mainPicture2 from '../../../../img/casestudio/venom.webp'
// import mainPicture3 from '../../../../img/casestudio/zume.webp'
// import mainPicture4 from '../../../../img/casestudio/trenfinance.webp'

// import { HiArrowLongRight } from "react-icons/hi2";
// import { Link } from 'react-router-dom';
// import TitleComponent from '../../../General/TitleAnimation/TitleComponent';
// import { useTranslation } from 'react-i18next';

// export default function Casestudies(props) {
//    const { t } = useTranslation();
//    const [transformed, setTransformed] = useState(0); // Changed to a number to represent the transformation level
 
//    const casestudioList = [
//       {
//          mainPicture: mainPicture1,
//          title: t('homepage.case-studies.item_1.title'),
//          list: [t('homepage.case-studies.item_1.work_type.item_1'),t('homepage.case-studies.item_1.work_type.item_1')],
//          link: 'hetrix',
//          asideText: t('homepage.case-studies.item_1.description'),
//          asidePicture: asidepic1,
//       },
//       {
//          mainPicture: mainPicture2,
//          title: t('homepage.case-studies.item_2.title'),
//          list: [t('homepage.case-studies.item_2.work_type.item_1'),t('homepage.case-studies.item_2.work_type.item_1')],
//          link: 'venom',
//          asideText: t('homepage.case-studies.item_2.description'),
//          asidePicture: asidepic2,
//       },
//       {
//          mainPicture: mainPicture3,
//          title: t('homepage.case-studies.item_3.title'),
//          list: [t('homepage.case-studies.item_3.work_type.item_1'),t('homepage.case-studies.item_3.work_type.item_1')],
//          link: 'zume',
//          asideText: t('homepage.case-studies.item_3.description'),
//          asidePicture: asidepic3,
//       },
//       {
//          mainPicture: mainPicture4,
//          title: t('homepage.case-studies.item_4.title'),
//          list: [t('homepage.case-studies.item_4.work_type.item_1'),t('homepage.case-studies.item_4.work_type.item_1')],
//          link: 'trenfinance',
//          asideText: t('homepage.case-studies.item_4.description'),
//          asidePicture: asidepic4,
//       },
//       {
//          mainPicture: mainPicture3,
//          title: t('homepage.case-studies.item_3.title'),
//          list: [t('homepage.case-studies.item_3.work_type.item_1'),t('homepage.case-studies.item_3.work_type.item_1')],
//          link: 't3lab',
//          asideText: t('homepage.case-studies.item_3.description'),
//          asidePicture: asidepic3,
//       },
//    ]
 
 
//    useEffect(() => {
//       const mainContent = document.querySelector('.main-content');
//       const mainContentTop = mainContent.getBoundingClientRect().top + window.scrollY;
//       const mainContentHeight = mainContent.clientHeight / 1.2;
    
//       const halfHeight = mainContentTop + mainContentHeight / 2;
      
//       const threeQuarterHeight = mainContentTop + mainContentHeight * 3 / 4;
      
//       const quarterHeight = mainContentTop + mainContentHeight / 3; // Calculate quarter height
      
//       const fourQuarterHeight = mainContentTop + mainContentHeight / 1.1;
      

      
    
//       const handleScroll = () => {
//         const currentPosition = window.scrollY;
//         if (currentPosition >= quarterHeight && currentPosition < halfHeight) {
//           setTransformed(-1);
//         } else if (currentPosition >= halfHeight && currentPosition < threeQuarterHeight) {
//           setTransformed(-2);
//         } else if (currentPosition >= threeQuarterHeight && currentPosition < fourQuarterHeight) {
//           setTransformed(-3);
//         } else if (currentPosition >= fourQuarterHeight && currentPosition < fourQuarterHeight + mainContentHeight) {
//          setTransformed(-4);
//          console.log("Passed fourQuarterHeight: "+fourQuarterHeight);
//         }
//          else {
//           console.log('Else');
//         }
//       };
    
//       window.addEventListener('scroll', handleScroll);
    
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);
 
//    const mainContentHeight = (casestudioList.length * window.innerHeight) / 0.8; // Calculate main content height
//   return (
//    <section id='Work' className='home__casestudies casestudies'>
//    {/* Main content section */}
//    <div className='casestudies__container'>
   
//       <div className="main-content" style={{ height: mainContentHeight}}>
//       <div className="border-block__area">
//             <div className="border-block__aside"></div>
//             <div className="border-block__middle"></div>
//             <div className="border-block__right"></div>
//          </div>
//         {/* Wrapper div for all blocks */}
//         <div className="blocks-outer-wrapper casestudies__section-block section-block">
         
//         <div className="section-block__head">
//          <TitleComponent text={t('homepage.case-studies.texts.title')}/>
//                <Link to={'https://cal.com/proyect/discovery'} target="_blank" className="button casestudies__button">
//                   <div className="button__text">{t('homepage.case-studies.texts.book_a_call')}</div>
//                   <i className="button__icon">
//                      <FaArrowRight />
//                   </i>
//                </Link>
//             </div>
//           <div className={`blocks-wrapper section-block__body`} style={{transform: transformed ? `translateY(${transformed}00vh)` : `translateY(0vh)` }}>
//             {/* Render blocks */}
//                {
//                   casestudioList.map((item,i)=>{
//                      return <div key={i} className={`casestudies__row casestudies__row_${item.link}`}>
//                      <div className='casestudies__row_inner-block'>
//                         <div className="casestudies__content">
//                             <Link to={item.link} className="casestudies__picture -ibg" onMouseEnter={()=> {props.sishvr(true)}} onClick={()=>{props.sishvr(false)}} onMouseLeave={()=>{props.sishvr(false)}}>
//                                <img src={item.mainPicture} alt="picture" />
//                                <div className="noise"></div>
//                             </Link>
//                            <div className="casestudies__body casestudies-body">
//                               <div className="casestudies-body__title">{item.title}</div>
//                               <div className="casestudies-body__labels">
//                                  {
//                                     item.list.map((item,i)=>{
//                                        return <div key={i} className="casestudies-body__label label">{item}</div>
//                                     })
//                                  }
//                               </div>
//                               <Link to={item.link} className='link'>
//                                  <span className="link__text">{t('homepage.case-studies.texts.view_work')}</span>
//                                  <HiArrowLongRight />
//                               </Link>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                   })
//                }
//           </div>
//           <div className={`casestudies__aside casestudies-aside ${transformed ? `transformed transformed-${transformed+1}` : ''}`}>
//           {
//             casestudioList.map((item,i)=>{
//                return <div key={i} className={`casestudies-aside__item casestudies-aside__item-${i+1}`}>
//                   <div className="casestudies-aside__text">{item.asideText}</div>
//                   <div className="casestudies-aside__picture -ibg">
//                      <img src={item.asidePicture} alt="picture" />
//                   </div>
//                </div>
            
//             })
//           }
//           </div>
//         </div>
//       </div>
//       <div className="main-content">
//       <div className="border-block__area">
//             <div className="border-block__aside"></div>
//             <div className="border-block__middle"></div>
//             <div className="border-block__right"></div>
//          </div>
//         {/* Wrapper div for all blocks */}
//         <div className="casestudies__section-block section-block">
         
//         <div className="section-block__head">
//                <TitleComponent text={t('homepage.case-studies.texts.title')}/>
//                <button className="button casestudies__button">
//                   <div className="button__text">{t('homepage.case-studies.texts.book_a_call')}</div>
//                   <i className="button__icon">
//                      <FaArrowRight />
//                   </i>
//                </button>
//             </div>
//           <div className={`blocks-wrapper section-block__body`}>
//             {/* Render blocks */}
//                {
//                   casestudioList.map((item,i)=>{
//                      return <div key={i} className='casestudies__row'>
//                      <div className='casestudies__row_inner-block'>
//                         <div className="casestudies__content">
//                             <Link to={item.link} className="casestudies__picture -ibg" >
//                                <img src={item.mainPicture} alt="picture" />
//                                <div className="noise"></div>
//                             </Link>
//                            <div className="casestudies__body casestudies-body">
//                               <div className="casestudies-body__title">{item.title}</div>
//                               <div className="casestudies-body__labels">
//                                  {
//                                     item.list.map((item,i)=>{
//                                        return <div key={i} className="casestudies-body__label label">{item}</div>
//                                     })
//                                  }
//                               </div>
//                               <Link to={item.link} className='link'>
//                                  <span className="link__text">View work</span>
//                                  <HiArrowLongRight />
//                               </Link>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                   })
//                }
                     
//           </div>
//         </div>
//       </div>
//    </div>

//  </section>
//   )
// }
