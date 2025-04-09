import React from 'react'
import OdometerAnimation from '../../General/Ordometer'
import Header from './Header'
import { Link } from 'react-router-dom';
import Progressbar from '../home/files/Progressbar';
import videoLink from '../../../videos/hetrix.mp4'
import videoLinkColors from '../../../videos/colors-hetrix.webm'
import watchVideo from '../../../videos/hetrix-watch.webm'
import { useTranslation } from 'react-i18next';
export default function Hetrix() {
   const { t } = useTranslation();
   const scrollTop = ()=>{
      window.scrollTo(0, 0);
   }

   const text_1 = t('use-case.hetrix.text_1').split('[text_1_colored_text]');
   const text_2 = t('use-case.hetrix.text_2').split('[text_2_colored_text]');
   const text_3 = t('use-case.hetrix.text_3').split('[text_3_colored_text]');

  return (
    <>
   <Header />
   <OdometerAnimation />
    <main id='hetrix' className='usecases hetrix'>
   <Progressbar />
      <section className="usecases__head usecases-head">
         <div className="usecases-head__container">
            <div className="usecases-head__content">
               <h1 className="usecases-head__title">
                  <i className="usecases-head__icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="178" height="118" viewBox="0 0 178 118" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M101.059 59.4815L134.75 117.172H95.4407L67.271 70.3284L39.3115 117.172H0L34.8968 57.7802H76.3069L42.6164 0.0898438H81.9253L110.095 46.9333L138.055 0.0898438H177.366L142.469 59.4815H101.059Z" fill="white"/>
                     </svg>
                  </i>
                  <div className="usecases-head__text">{t('use-case.hetrix.title')}</div>
               </h1>
            </div>
         </div>
      </section>
      <section className="usecases__video" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink}"
        ></video>
      ` }}></section>
      <section className='usecases__text-content usecases-text-content'>
         <div className='usecases-text-content__container'>
            <p className="usecases-text-content__text">
               {text_1[0]} {t('use-case.hetrix.[text_1_colored_text]') && <span>{t('use-case.hetrix.[text_1_colored_text]')}</span>} {text_1[1]}
            </p>
         </div>
      </section>
      <section className='video-section'>
         <div className="video-section__container">
            <div className="usecases__video" dangerouslySetInnerHTML={{ __html: `
           <video
             loop
             muted
             autoPlay
             playsInline
             src="${videoLinkColors}"
           ></video>
         ` }}>
            </div>
         </div>
      </section>
      <section className='hetrix-font'>
         <div className='hetrix-font__container'>
            <div className="hetrix-font__row">
               <div className="hetrix-font__column">
                  <div className="hetrix-font__txt">{t('use-case.hetrix.typeface')}</div>
               </div>
               <div className="hetrix-font__column">
               <h2 className="hetrix-font__title">{t('use-case.hetrix.michroma_font')}</h2>
                  <div className="hetrix-font__sub-title">{t('use-case.hetrix.regular')}</div>
               </div>
            </div>
            <div className="hetrix-font__row">
               <div className="hetrix-font__column">
                  <div className="hetrix-font__letter">Aa</div>
               </div>
               <div className="hetrix-font__column">
                  <div className="hetrix-font__letters">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq RrSs Tt Uu Vv Ww Xx Yy Zz</div>
                  <div className="hetrix-font__symbols">1234567890 &</div>
               </div>
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_1">
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_3">
            </div>
         </div>
      </section>
      <section className='usecases__text-content usecases-text-content dir-r'>
         <div className='usecases-text-content__container'>
            <p className="usecases-text-content__text">
               {text_2[0]} {t('use-case.hetrix.[text_2_colored_text]') && <span>{t('use-case.hetrix.[text_2_colored_text]')}</span>} {text_2[1]}
            </p>
         </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_7">
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_8">
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
            <div className="usecases__video" dangerouslySetInnerHTML={{ __html: `
           <video
             loop
             muted
             autoPlay
             playsInline
             src="${watchVideo}"
           ></video>
         ` }}>
            </div>
         </div>
      </section>
      <section className='usecases__text-content usecases-text-content'>
         <div className='usecases-text-content__container'>
            <p className="usecases-text-content__text">
               {text_3[0]} {t('use-case.hetrix.[text_3_colored_text]') && <span>{t('use-case.hetrix.[text_3_colored_text]')}</span>} {text_3[1]}
            </p>
         </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_9">
            </div>
         </div>
      </section>
      <section className='usecases__pair-col usecases-pair usecases-pair__container usecases-pair-1'>
         <div className="usecases-pair__column usecases-pair__column_9 -ibg"></div>
         <div className="usecases-pair__column usecases-pair__column_10 -ibg"></div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_10">
            </div>
         </div>
      </section>
      <section className='usecases__pair-col usecases-pair usecases-pair__container usecases-pair-1'>
         <div className="usecases-pair__column usecases-pair__column_11 -ibg"></div>
         <div className="usecases-pair__column usecases-pair__column_12 -ibg"></div>
      </section>

      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_6">
            </div>
         </div>
      </section>
      <nav className='usecases__navigation usecases-navigation'>
         <div className='usecases-navigation__container'>
            <Link to={'/zume'} onClick={scrollTop} className="usecases-navigation__arrow usecases-navigation__prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 15" fill="none">
               <path d="M0.292908 6.88667C-0.0976258 7.27719 -0.0976257 7.91036 0.292908 8.30088L6.65686 14.6648C7.04739 15.0554 7.68054 15.0554 8.07108 14.6648C8.46158 14.2743 8.46158 13.6412 8.07108 13.2506L2.41422 7.59377L8.07107 1.93692C8.46158 1.54639 8.46158 0.913229 8.07107 0.522705C7.68054 0.13218 7.04739 0.13218 6.65686 0.522705L0.292908 6.88667ZM266 6.59375L1 6.59377L1 8.59377L266 8.59375L266 6.59375Z" fill="white"/>
            </svg>
            </Link>
            <Link to={'/trenfinance'} onClick={scrollTop} className="usecases-navigation__arrow usecases-navigation__next">
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
