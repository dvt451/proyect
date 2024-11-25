import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import OdometerAnimation from '../../General/Ordometer'
import Progressbar from '../home/files/Progressbar'

import videoLink from '../../../img/usecases/notelix/video/video8.webm'
import videoLink1 from '../../../img/usecases/notelix/video/video1.webm'
import videoLink2 from '../../../img/usecases/notelix/video/video2.webm'
import videoLink3 from '../../../img/usecases/notelix/video/video3.webm'
import videoLink4 from '../../../img/usecases/notelix/video/video4.webm'
import videoLink5 from '../../../img/usecases/notelix/video/video5.webm'
import videoLink6 from '../../../img/usecases/notelix/video/video6.webm'
import videoLink7 from '../../../img/usecases/notelix/video/video7.webm'

import { useTranslation } from 'react-i18next';
import image1 from '../../../img/usecases/notelix/image1.webp'
import image2 from '../../../img/usecases/notelix/image2.webp'
import image3 from '../../../img/usecases/notelix/image3.webp'
import image4 from '../../../img/usecases/notelix/image4.webp'
import image5 from '../../../img/usecases/notelix/image5.webp'
import image6 from '../../../img/usecases/notelix/image6.webp'
import image7 from '../../../img/usecases/notelix/image7.webp'
import image8 from '../../../img/usecases/notelix/image8.webp'
import image9 from '../../../img/usecases/notelix/image9.webp'
import image10 from '../../../img/usecases/notelix/image10.webp'
import image11 from '../../../img/usecases/notelix/image11.webp'
import image12 from '../../../img/usecases/notelix/image12.webp'
import image13 from '../../../img/usecases/notelix/image13.webp'
import image14 from '../../../img/usecases/notelix/image14.webp'
import image15 from '../../../img/usecases/notelix/image15.webp'

export default function Notelix() {
   const { t } = useTranslation();
   const scrollTop = ()=>{
      window.scrollTo(0, 0);
   }

  return (
   <>
   <Header />
   <OdometerAnimation />
    <main id='notelix' className='usecases notelix'>
      <Progressbar />
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_2" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink}"
        ></video>
      ` }}>
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
               <div className='usecases-image__pic__block'>
                   <div style={{backgroundImage: `url(${image1})`}} className="usecases-image__pic usecases-image_3">
                   </div>
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image2})`}} className="usecases-image__pic usecases-image_4">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_5" dangerouslySetInnerHTML={{ __html: `
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
            <div className="usecases-image__pic usecases-image_6" dangerouslySetInnerHTML={{ __html: `
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
               <div style={{backgroundImage: `url(${image3})`}} className="usecases-image__pic usecases-image_6">
               </div>
            </div>
      </section>
      
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image4})`}} className="usecases-image__pic usecases-image_7">
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
               <div style={{backgroundImage: `url(${image6})`}} className="usecases-image__pic usecases-image_8">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image7})`}} className="usecases-image__pic usecases-image_8">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image8})`}} className="usecases-image__pic usecases-image_9">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image9})`}} className="usecases-image__pic usecases-image_10">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image10})`}} className="usecases-image__pic usecases-image_8">
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
          src="${videoLink4}"
        ></video>
      ` }}>
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image11})`}} className="usecases-image__pic usecases-image_11">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image12})`}} className="usecases-image__pic usecases-image_8">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_11" dangerouslySetInnerHTML={{ __html: `
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
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image13})`}} className="usecases-image__pic usecases-image_8">
               </div>
            </div>
      </section>
   

      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image14})`}} className="usecases-image__pic usecases-image_13">
               </div>
            </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_7" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink7}"
        ></video>
      ` }}>
            </div>
         </div>
      </section>
      {/* ********************************************************************************************************************** */}
      {/* ********************************************************************************************************************** */}
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_12" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink6}"
        ></video>
      ` }}>
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div style={{backgroundImage: `url(${image15})`}} className="usecases-image__pic usecases-image_14">
               </div>
            </div>
      </section>

      <nav className='usecases__navigation usecases-navigation'>
         <div className='usecases-navigation__container'>
            <Link to={'/pixelbros'} onClick={scrollTop} className="usecases-navigation__arrow usecases-navigation__prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 15" fill="none">
               <path d="M0.292908 6.88667C-0.0976258 7.27719 -0.0976257 7.91036 0.292908 8.30088L6.65686 14.6648C7.04739 15.0554 7.68054 15.0554 8.07108 14.6648C8.46158 14.2743 8.46158 13.6412 8.07108 13.2506L2.41422 7.59377L8.07107 1.93692C8.46158 1.54639 8.46158 0.913229 8.07107 0.522705C7.68054 0.13218 7.04739 0.13218 6.65686 0.522705L0.292908 6.88667ZM266 6.59375L1 6.59377L1 8.59377L266 8.59375L266 6.59375Z" fill="white"/>
            </svg>
            </Link>
            <Link to={'/voltix'} onClick={scrollTop} className="usecases-navigation__arrow usecases-navigation__next">
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
