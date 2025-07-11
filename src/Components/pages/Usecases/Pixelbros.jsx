import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import OdometerAnimation from '../../General/Ordometer'
import Progressbar from '../home/files/Progressbar'

import videoLink1 from '../../../img/usecases/pixelbros/video/video1.webm'
import videoLink2 from '../../../img/usecases/pixelbros/video/video2.webm'
import videoLink3 from '../../../img/usecases/pixelbros/video/video3.webm'

import { useTranslation } from 'react-i18next';
import image1 from '../../../img/usecases/pixelbros/image1.webp'
import image2 from '../../../img/usecases/pixelbros/image2.webp'
import image3 from '../../../img/usecases/pixelbros/image3.webp'
import image4 from '../../../img/usecases/pixelbros/image4.webp'
import image5 from '../../../img/usecases/pixelbros/image5.webp'
import image6 from '../../../img/usecases/pixelbros/image6.webp'
import image7 from '../../../img/usecases/pixelbros/image7.webp'
import image10 from '../../../img/usecases/pixelbros/image10.webp'
import image11 from '../../../img/usecases/pixelbros/image11.webp'

export default function Pixelbros() {
   const { t } = useTranslation();
   const scrollTop = ()=>{
      window.scrollTo(0, 0);
   }

  return (
   <>
   <Header />
   <OdometerAnimation />
    <main id='pixelbros' className='usecases pixelbros'>
      <Progressbar />
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image1})`}} className="usecases-image__pic usecases-image_1">
               </div>
            </div>
      </section>
      <section className='usecases__text-content usecases-text-content'>
         <div className='usecases-text-content__container'>
            <svg width="366" height="35" viewBox="0 0 366 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M331.234 20.9166V0.223633H365.723V7.12129H338.132V14.0189H365.723V34.7119H331.234V27.8143H358.825V20.9166H331.234Z" fill="white"/>
            <path d="M289.875 34.7119V0.223633H324.363V34.7119H289.875ZM296.773 7.12129V27.8143H317.466V7.12129H296.773Z" fill="white"/>
            <path d="M248.516 34.7119V0.223633H276.106L283.004 0.223633V20.9166H276.106V27.8143H283.004V34.7119H276.106V27.8143H269.209V20.9166H255.413V34.7119H248.516ZM276.106 7.12129H255.413V14.0189H276.106V7.12129Z" fill="white"/>
            <path d="M165.801 34.7119V0.223633H172.698V27.8143H200.289V34.7119H165.801Z" fill="white"/>
            <path d="M124.441 34.7119V0.223633H158.93V7.12129H131.339V14.0189H145.134V20.9166H131.339V27.8143H158.93V34.7119H124.441Z" fill="white"/>
            <path d="M89.9797 14.0189V7.12129H83.082V0.223633H89.9797V7.12129H96.8773V14.0189H103.775V20.9166H110.673V27.8143H117.57V34.7119H110.673V27.8143H103.775V20.9166H96.8773V14.0189H89.9797ZM83.082 34.7119V27.8143H89.9797V34.7119H83.082ZM89.9797 27.8143V20.9166H96.8773V27.8143H89.9797ZM110.673 7.12129V0.223633H117.57V7.12129H110.673ZM103.775 14.0189V7.12129H110.673V14.0189H103.775Z" fill="white"/>
            <path d="M41.7227 7.12129V0.223633H76.2109V7.12129H62.4156V27.8143H76.2109V34.7119H41.7227V27.8143H55.518V7.12129H41.7227Z" fill="white"/>
            <path d="M7.26094 20.9166V34.7119H0.363281V0.223633H27.9539V7.12129H34.8516V20.9166H7.26094ZM27.9539 7.12129H7.26094V14.0189H27.9539V7.12129Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M207.156 0.223633V34.7119H234.747H241.645V0.223633H234.747H207.156ZM234.747 20.9166V27.8143H214.054V20.9166H234.747ZM234.747 7.12129V14.0189H214.054V7.12129H234.747ZM241.644 14.0257H234.755V20.9154H241.644V14.0257Z" fill="white"/>
            </svg>
            <p className="usecases-text-content__text">
                {t('use-case.pixelbros.text_1')}
            </p>
            <p className="usecases-text-content__text">
                {t('use-case.pixelbros.text_2')}
            </p>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image2})`}} className="usecases-image__pic usecases-image_1">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_2" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink1}"
        ></video>
      ` }}>
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image3})`}} className="usecases-image__pic usecases-image_3">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_4" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink2}"
        ></video>
      ` }}>
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image4})`}} className="usecases-image__pic usecases-image_5">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image5})`}} className="usecases-image__pic usecases-image_6">
               </div>
            </div>
      </section>
      
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image6})`}} className="usecases-image__pic">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image7})`}} className="usecases-image__pic usecases-image_7">
               </div>
            </div>
      </section>
      <section className='usecases__text-content-2 usecases-text-content-2'>
         <div className='usecases-text-content-2__container'>
            <div className=' usecases-text-content-2__title'>{t('use-case.pixelbros.overview')}</div>
            <p className="usecases-text-content-2__text">
                {t('use-case.pixelbros.text_3')}
            </p>
         </div>
      </section>
      <section className="video-image-section">
         <div className="video-image-section__container">
            <div className="video-image-section__video" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink3}"
        ></video>
      ` }}></div>
      <div style={{backgroundImage: `url(${image11})`}} className="video-image-section__image"></div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image10})`}} className="usecases-image__pic">
               </div>
            </div>
      </section>
      <nav className='usecases__navigation usecases-navigation'>
         <div className='usecases-navigation__container'>
            <Link to={'/t3lab'} onClick={scrollTop} className="usecases-navigation__arrow usecases-navigation__prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 15" fill="none">
               <path d="M0.292908 6.88667C-0.0976258 7.27719 -0.0976257 7.91036 0.292908 8.30088L6.65686 14.6648C7.04739 15.0554 7.68054 15.0554 8.07108 14.6648C8.46158 14.2743 8.46158 13.6412 8.07108 13.2506L2.41422 7.59377L8.07107 1.93692C8.46158 1.54639 8.46158 0.913229 8.07107 0.522705C7.68054 0.13218 7.04739 0.13218 6.65686 0.522705L0.292908 6.88667ZM266 6.59375L1 6.59377L1 8.59377L266 8.59375L266 6.59375Z" fill="white"/>
            </svg>
            </Link>
            <Link to={'/notelix'} onClick={scrollTop} className="usecases-navigation__arrow usecases-navigation__next">
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
