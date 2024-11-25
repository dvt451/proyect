import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import OdometerAnimation from '../../General/Ordometer'
import Progressbar from '../home/files/Progressbar'
import videoLink from '../../../videos/tren half 4.webm'
import videoLink2 from '../../../videos/tren use case post 2.webm'
import videoLink3 from '../../../videos/subtract.webm'
import videoLink5 from '../../../videos/tren use case post 5.webm'
import { useTranslation } from 'react-i18next';
import Image1 from '../../../img/usecases/trenfinance/tren.webp'
import Image2 from '../../../img/usecases/trenfinance/mix.webp'
import Image3 from '../../../img/usecases/trenfinance/image7.webp'
import Image9 from '../../../img/usecases/trenfinance/image9.webp'
import Image10 from '../../../img/usecases/trenfinance/image1.webp'

export default function TrenFinance() {
   const { t } = useTranslation();
   const scrollTop = ()=>{
      window.scrollTo(0, 0);
   }

    const text_1 = t('use-case.tren.texts.text_1').split('[text_1_colored_text]');
    const text_2 = t('use-case.tren.texts.text_2').split('[text_2_colored_text]');
    const text_3 = t('use-case.tren.texts.text_3').split('[text_3_colored_text]');

   const gradients = {
      mainBlock: {
         text: t('use-case.tren.colors.dark_green'),
         gradient: 'linear-gradient(268deg, #67DAB1 -123.02%, #102522 81.82%), #102522',
      },
      mainLightColor:{
         text: t('use-case.tren.colors.turquoise'),
         color: '#67DAB1',
      },
      mainDarkColor: {
         text: t('use-case.tren.colors.green'),
         color: '#102522',
      },
      colorShapesOpacity: [80,70,60,50,20,10,0],
      colorTypes: [
         {
            text: t('use-case.tren.colors.light_green'),
            color: '#C6E0DC',
         },
         {
            text: t('use-case.tren.colors.gray'),
            color: '#D0D4D4',
         },
         {
            text: t('use-case.tren.colors.white'),
            color: '#fff',
         },
         {
            text: t('use-case.tren.colors.black'),
            color: '#0B0D0E',
         },
      ]
   }
  return (
   <>
   <Header />
   <OdometerAnimation />
    <main id='trenfinance' className='usecases trenfinance'>
      <Progressbar />
      <section className="usecases__head usecases-head">
      <div className="head__video" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink}"
        ></video>
      ` }}></div>
         <div className="usecases-head__container content-corner">
            <div className="usecases-head__content">
               <div className="usecases-head__title trenfinance-head-title">
                  
               </div>
            </div>
         </div>
      </section>
      <section className='usecases__text-content usecases-text-content'>
         <div className='usecases-text-content__container'>
            {/* <h2 className="usecases-text-content__title">Title will come here</h2> */}
            <p className="usecases-text-content__text">
                {text_1[0]} {t('use-case.tren.texts.[text_1_colored_text]') && <span>{t('use-case.tren.texts.[text_1_colored_text]')}</span>} {text_1[1]}
            </p>
         </div>
      </section>
      <section className='usecases__pair-col usecases-pair usecases-pair-1'>
         <div className="usecases-pair__column usecases-pair__column_1 -ibg"></div>
         <div className="usecases-pair__column usecases-pair__column_2 -ibg"></div>
      </section>
      <section className='usecases-gradients trenfinance-gradients'>
         <div className="trenfinance-gradients__column">
            <div className="trenfinance-gradients__main" 
               style={{background: gradients.mainBlock.gradient,}}
            >
            <span className='trenfinance-gradients__text white'>{gradients.mainBlock.text}</span>
         </div>
            <div className="trenfinance-gradients__shapes">
               {
                  gradients.colorShapesOpacity.map((item,i)=>{
                     return <div key={i} className='trenfinance-gradients__shape'>
                        <div className='trenfinance-gradients__layer'
                           style={{
                              backgroundColor: gradients.mainDarkColor.color,
                              opacity:  item / 100,
                           }}
                        ></div>
                     <p className={i > 3 ? 'trenfinance-gradients__text black' : 'trenfinance-gradients__text'}>{item}%</p>
                     </div>
                  })
               }
            </div>
         </div>
         <div className="trenfinance-gradients__column">
            <div className="trenfinance-gradients__col">
               <div className="trenfinance-gradients__col_block" style={{backgroundColor: gradients.mainLightColor.color}}><span className='trenfinance-gradients__text black'>{gradients.mainLightColor.text}</span></div>
               <div className="trenfinance-gradients__col_block" style={{backgroundColor: gradients.mainDarkColor.color}}><span className='trenfinance-gradients__text'>{gradients.mainDarkColor.text}</span></div>
            </div>
            <div className="trenfinance-gradients__types">
               {
                  gradients.colorTypes.map((item,i)=>{
                     return <div key={i} className='trenfinance-gradients__type'
                        style={{backgroundColor: item.color,height: 100 / gradients.colorTypes.length +'%'}}
                     >
                        <span className={i > 2 ? 'trenfinance-gradients__text' : 'trenfinance-gradients__text black'}>{item.text}</span>
                     </div>
                  })
               }
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div style={{backgroundImage: `url(${Image1})`}} className="usecases-image__pic usecases-image_7">
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div style={{backgroundImage: `url(${Image2})`}} className="usecases-image__pic usecases-image_8">
            </div>
         </div>
      </section>

      <section className='usecases__pair-col usecases-pair usecases-pair__container usecases-pair-1'>
         <div className="usecases-pair__column usecases-pair__column_3 -ibg"></div>
         <div className="usecases-pair__column usecases-pair__column_4 -ibg"></div>
      </section>
      <section className='usecases__text-content usecases-text-content dir-r'>
         <div className='usecases-text-content__container'>
            <p className="usecases-text-content__text">
                {text_2[0]} {t('use-case.tren.texts.[text_2_colored_text]') && <span>{t('use-case.tren.texts.[text_2_colored_text]')}</span>} {text_2[1]}
            </p>
         </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_1">
            </div>
         </div>
      </section>
      <section className='usecases__pair-col usecases-pair usecases-pair-2'>
         <div className='usecases-pair__container'>
            <div className="usecases-pair__column usecases-pair__column_5 -ibg"></div>
            <div className="usecases-pair__column usecases-pair__column_6 -ibg"></div>
         </div>
      </section>
      <section className="usecases__video usecases__video_1" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink3}"
        ></video>
      ` }}></section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${Image3})`}} className="usecases-image__pic usecases-image_9">
               </div>
            </div>
      </section>
      <section className='usecases__text-content usecases-text-content'>
         <div className='usecases-text-content__container'>
            <p className="usecases-text-content__text">
                {text_3[0]} {t('use-case.tren.texts.[text_3_colored_text]') && <span>{t('use-case.tren.texts.[text_3_colored_text]')}</span>} {text_3[1]}
            </p>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div className="usecases-image__pic usecases-image_3">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${Image9})`}} className="usecases-image__pic usecases-image_10">
               </div>
            </div>
      </section>
      <section className="usecases__video usecases__video_1" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink2}"
        ></video>
      ` }}></section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${Image9})`}} className="usecases-image__pic usecases-image_10">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${Image10})`}} className="usecases-image__pic usecases-image_10">
               </div>
            </div>
      </section>

      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_6" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink5}"
        ></video>
      ` }}>
            </div>
         </div>
      </section>
      <nav className='usecases__navigation usecases-navigation'>
         <div className='usecases-navigation__container'>
            <Link to={'/hetrix'} onClick={scrollTop} className="usecases-navigation__arrow usecases-navigation__prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 15" fill="none">
               <path d="M0.292908 6.88667C-0.0976258 7.27719 -0.0976257 7.91036 0.292908 8.30088L6.65686 14.6648C7.04739 15.0554 7.68054 15.0554 8.07108 14.6648C8.46158 14.2743 8.46158 13.6412 8.07108 13.2506L2.41422 7.59377L8.07107 1.93692C8.46158 1.54639 8.46158 0.913229 8.07107 0.522705C7.68054 0.13218 7.04739 0.13218 6.65686 0.522705L0.292908 6.88667ZM266 6.59375L1 6.59377L1 8.59377L266 8.59375L266 6.59375Z" fill="white"/>
            </svg>
            </Link>
            <Link to={'/venom'} onClick={scrollTop} className="usecases-navigation__arrow usecases-navigation__next">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 15" fill="none">
                  <path d="M265.707 8.3009C266.098 7.91038 266.098 7.27721 265.707 6.88669L259.343 0.522728C258.953 0.132203 258.319 0.132203 257.929 0.522727C257.538 0.913252 257.538 1.54642 257.929 1.93694L263.586 7.5938L257.929 13.2506C257.538 13.6412 257.538 14.2743 257.929 14.6649C258.319 15.0554 258.953 15.0554 259.343 14.6649L265.707 8.3009ZM-1.74846e-07 8.59375L265 8.5938L265 6.5938L1.74846e-07 6.59375L-1.74846e-07 8.59375Z" fill="white"/>
               </svg>
            </Link>
         </div>
      </nav>
    </main>
    </>
  )
}
