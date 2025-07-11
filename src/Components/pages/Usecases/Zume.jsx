import React from 'react'
import Header from './Header'
import OdometerAnimation from '../../General/Ordometer'
import logo from '../../../img/usecases/zume/image1.webp'
import Progressbar from '../home/files/Progressbar'
import { Link } from 'react-router-dom'
import zumeColors from '../../../videos/colors-zume2.webm'
import { useTranslation } from 'react-i18next';
import headImage from '../../../img/usecases/zume/head.webp'
import Image11 from '../../../img/usecases/zume/image15.webp'
import zumeVideo1 from '../../../img/usecases/zume/video/video1.webm'
import zumeVideo2 from '../../../img/usecases/zume/video/video2.webm'

export default function Zume() {
   const { t } = useTranslation();
   const scrollTop = ()=>{
      window.scrollTo(0, 0);
   }

   const text_1 = t('use-case.zume.text_1').split('[text_1_colored_text]');
   const text_2 = t('use-case.zume.text_2').split('[text_2_colored_text]');
   const text_3 = t('use-case.zume.text_3').split('[text_3_colored_text]');
  return (
    <>
   <Header />
   <OdometerAnimation />
    <main id='zume' className='usecases zume'>
   <Progressbar />
      <section className="usecases__head usecases-head">
         <div style={{backgroundImage: `url(${headImage})`}} className="usecases-head__container">
         </div>
      </section>
      <section className='usecases__text-content usecases-text-content'>
         <div className='usecases-text-content__container'>
            <p className="usecases-text-content__text">
               {text_1[0]} {t('use-case.zume.[text_1_colored_text]') && <span>{t('use-case.zume.[text_1_colored_text]')}</span>} {text_1[1]}
            </p>
         </div>
      </section>
      <section className='zume__logo-section zume-logo-section'>
         <img className='zume-logo-section__logo' src={logo} alt="logo" />
      </section>
      <section className="zume-font">
         <div className='zume-font__container'>
            <div className="zume-font__row">
               <div className="zume-font__column">{t('use-case.zume.regular')}</div>
               <div className="zume-font__column zume-font__column_font-name">{t('use-case.zume.bandica')}</div>
            </div>
            <div className="zume-font__row zume-font__row_img">
            </div>
               <div className="zume-font__column_font-name">{t('use-case.zume.bandica')}</div>
            </div>
      </section>
      <section className='video-section'>
         <div className="video-section__container">
            <div className="usecases__video zume-colors" dangerouslySetInnerHTML={{ __html: `
           <video
             loop
             muted
             autoPlay
             playsInline
             src="${zumeColors}"
           ></video>
         ` }}>
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_13">
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
               {text_2[0]} {t('use-case.zume.[text_2_colored_text]') && <span>{t('use-case.zume.[text_2_colored_text]')}</span>} {text_2[1]}
            </p>
         </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_14">
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_15">
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div className="usecases-image__pic usecases-image_2">
               </div>
            </div>
      </section>
      <section className='video-section'>
         <div className="video-section__container">
            <div className="usecases__video usecases__video_1" dangerouslySetInnerHTML={{ __html: `
           <video
             loop
             muted
             autoPlay
             playsInline
             src="${zumeVideo2}"
           ></video>
         ` }}>
            </div>
         </div>
      </section>
      <section className='usecases__text-content usecases-text-content'>
         <div className='usecases-text-content__container'>
            <p className="usecases-text-content__text">
                {text_3[0]} {t('use-case.zume.[text_3_colored_text]') && <span>{t('use-case.zume.[text_3_colored_text]')}</span>} {text_3[1]}
            </p>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div className="usecases-image__pic usecases-image_3">
               </div>
            </div>
      </section>
      <section className='usecases__pair-col usecases-pair usecases-pair-3'>
         <div className='usecases-pair__container'>
            <div className="usecases-pair__column usecases-pair__column_7 -ibg"></div>
            <div className="usecases-pair__column usecases-pair__column_8 -ibg"></div>
         </div>
      </section>
      <section className='video-section'>
         <div className="video-section__container">
            <div className="usecases__video usecases__video_1" dangerouslySetInnerHTML={{ __html: `
           <video
             loop
             muted
             autoPlay
             playsInline
             src="${zumeVideo1}"
           ></video>
         ` }}>
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${Image11})`}} className="usecases-image__pic usecases-image_11">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_6">
            </div>
         </div>
      </section>
      <nav className='usecases__navigation usecases-navigation'>
         <div className='usecases-navigation__container'>
            <Link to={'/venom'} onClick={scrollTop} className="usecases-navigation__arrow usecases-navigation__prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 15" fill="none">
               <path d="M0.292908 6.88667C-0.0976258 7.27719 -0.0976257 7.91036 0.292908 8.30088L6.65686 14.6648C7.04739 15.0554 7.68054 15.0554 8.07108 14.6648C8.46158 14.2743 8.46158 13.6412 8.07108 13.2506L2.41422 7.59377L8.07107 1.93692C8.46158 1.54639 8.46158 0.913229 8.07107 0.522705C7.68054 0.13218 7.04739 0.13218 6.65686 0.522705L0.292908 6.88667ZM266 6.59375L1 6.59377L1 8.59377L266 8.59375L266 6.59375Z" fill="white"/>
            </svg>
            </Link>
            <Link to={'/t3lab'} onClick={scrollTop} className="usecases-navigation__arrow usecases-navigation__next">
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
