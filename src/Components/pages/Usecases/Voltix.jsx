import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import OdometerAnimation from '../../General/Ordometer'
import Progressbar from '../home/files/Progressbar'

import videoLink1 from '../../../img/usecases/voltix/video/video1.webm'
import videoLink2 from '../../../img/usecases/voltix/video/video2.webm'
import videoLink3 from '../../../img/usecases/voltix/video/video3.webm'

import { useTranslation } from 'react-i18next';
import image1 from '../../../img/usecases/voltix/image1.webp'
import image2 from '../../../img/usecases/voltix/image2.webp'
import image3 from '../../../img/usecases/voltix/image3.webp'
import image4 from '../../../img/usecases/voltix/image4.webp'
import image5 from '../../../img/usecases/voltix/image5.webp'
import image6 from '../../../img/usecases/voltix/image6.webp'
import image7 from '../../../img/usecases/voltix/image7.webp'
import image8 from '../../../img/usecases/voltix/image8.webp'
import image9 from '../../../img/usecases/voltix/image9.webp'
import image10 from '../../../img/usecases/voltix/image10.webp'
import image11 from '../../../img/usecases/voltix/image11.webp'
import image12 from '../../../img/usecases/voltix/image12.webp'

export default function Voltix() {
   const { t } = useTranslation();
   const scrollTop = ()=>{
      window.scrollTo(0, 0);
   }

  return (
   <>
   <Header />
   <OdometerAnimation />
    <main id='voltix' className='usecases voltix'>
      <Progressbar />
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div className='usecases-image__pic__block'>
                   <div style={{backgroundImage: `url(${image1})`}} className="usecases-image__pic usecases-image_1">
                   </div>
               </div>
            </div>
      </section>
      <section className='usecases__text-content usecases-text-content'>
         <div className='usecases-text-content__container'>
            <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M63.5078 0V31.5L32.0078 0H63.5078Z" fill="black"/>
            <path d="M63.5078 64.2109H32.0078V32.711H48.6493L63.5078 48.6027V64.2109Z" fill="black"/>
            <path d="M0.507832 64.2109V32.711L32.0078 64.2109H0.507832Z" fill="black"/>
            <path d="M0.507812 0H32.0078V31.5H15.3663L0.507812 15.3809V0Z" fill="black"/>
            </svg>
            <p className="usecases-text-content__text">
            With distinct logo of opposing arrows in radiant orange, we signify the dynamic exchange of ideas and the transformative journey toward success. Through strategic guidance and ample support, we empower projects to thrive in their respective markets.
            </p>
            <p className="usecases-text-content__text">
            With distinct logo of opposing arrows in radiant orange, we signify the dynamic exchange of ideas and the transformative journey toward success. Through strategic guidance and ample support, we empower projects to thrive in their respective markets.
            </p>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image2})`}} className="usecases-image__pic usecases-image_2">
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
          src="${videoLink1}"
        ></video>
      ` }}>
            </div>
         </div>
      </section>
      <section className='usecases__text-content usecases-text-content'>
         <div className='usecases-text-content__container'>
            <p className="usecases-text-content__text">
            With distinct logo of opposing arrows in radiant orange, we signify the dynamic exchange of ideas and the transformative journey toward success. Through strategic guidance and ample support, we empower projects to thrive in their respective markets.
            </p>
            <p className="usecases-text-content__text">
            With distinct logo of opposing arrows in radiant orange, we signify the dynamic exchange of ideas and the transformative journey toward success. Through strategic guidance and ample support, we empower projects to thrive in their respective markets.
            </p>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image4})`}} className="usecases-image__pic usecases-image_1">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_1" dangerouslySetInnerHTML={{ __html: `
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
               <div style={{backgroundImage: `url(${image5})`}} className="usecases-image__pic usecases-image_8">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image6})`}} className="usecases-image__pic usecases-image_1">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image7})`}} className="usecases-image__pic usecases-image_1">
               </div>
            </div>
      </section>
      <section className='usecases__text-content usecases-text-content'>
         <div className='usecases-text-content__container'>
            <p className="usecases-text-content__text">
            With distinct logo of opposing arrows in radiant orange, we signify the dynamic exchange of ideas and the transformative journey toward success. Through strategic guidance and ample support, we empower projects to thrive in their respective markets.
            </p>
            <p className="usecases-text-content__text">
            With distinct logo of opposing arrows in radiant orange, we signify the dynamic exchange of ideas and the transformative journey toward success. Through strategic guidance and ample support, we empower projects to thrive in their respective markets.
            </p>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image8})`}} className="usecases-image__pic usecases-image_1">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image9})`}} className="usecases-image__pic usecases-image_1">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image10})`}} className="usecases-image__pic usecases-image_1">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_1" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink3}"
        ></video>
      ` }}>
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image11})`}} className="usecases-image__pic usecases-image_1">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image12})`}} className="usecases-image__pic usecases-image_1">
               </div>
            </div>
      </section>

     
      <nav className='usecases__navigation usecases-navigation'>
         <div className='usecases-navigation__container'>
            <Link to={'/notelix'} onClick={scrollTop} className="usecases-navigation__arrow usecases-navigation__prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 15" fill="none">
               <path d="M0.292908 6.88667C-0.0976258 7.27719 -0.0976257 7.91036 0.292908 8.30088L6.65686 14.6648C7.04739 15.0554 7.68054 15.0554 8.07108 14.6648C8.46158 14.2743 8.46158 13.6412 8.07108 13.2506L2.41422 7.59377L8.07107 1.93692C8.46158 1.54639 8.46158 0.913229 8.07107 0.522705C7.68054 0.13218 7.04739 0.13218 6.65686 0.522705L0.292908 6.88667ZM266 6.59375L1 6.59377L1 8.59377L266 8.59375L266 6.59375Z" fill="white"/>
            </svg>
            </Link>
            <Link to={'/hetrix'} onClick={scrollTop} className="usecases-navigation__arrow usecases-navigation__next">
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
