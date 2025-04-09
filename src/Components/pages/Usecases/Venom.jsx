import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import OdometerAnimation from '../../General/Ordometer'
import Progressbar from '../home/files/Progressbar'
import videoLinkColors from '../../../videos/colors-venom.webm'
import IconLines from '../../../videos/venom-icon-lines-6.webm'
import { useTranslation } from 'react-i18next';

export default function Venom() {
  const { t } = useTranslation();

   const text_1 = t('use-case.venom.text_1').split('[text_1_colored_text]');
   const text_2 = t('use-case.venom.text_2').split('[text_2_colored_text]');
   const text_5 = t('use-case.venom.text_5').split('[text_5_colored_text]');

  return (
   <>
   <Header />
   <OdometerAnimation />
    <main className='usecases venom'>
   <Progressbar />
      <section className="usecases__head usecases-head">
         <div className="usecases-head__container">
            <div className="usecases-head__content">
               <h1 className="usecases-head__title">
                  <i className="usecases-head__icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="132" height="136" viewBox="0 0 132 136" fill="none">
                        <path d="M112.613 1.23138C108.831 0.637657 104.955 0.975715 101.343 2.21463C97.7313 3.45381 94.499 5.55389 91.9441 8.3216C87.0678 13.6194 85.5505 20.5169 86.7216 27.4284C87.7823 33.6615 89.1892 39.9877 89.5061 45.9926C89.9489 55.0367 88.529 64.0756 85.3296 72.5821C82.4347 80.2792 78.3099 86.2482 69.4707 87.569C68.8153 87.6692 66.4287 87.7406 65.7509 87.7762C65.0734 87.8118 62.93 87.6762 62.2669 87.5763C53.428 86.2553 49.2662 80.2863 46.3786 72.5391C43.1793 64.0326 41.7594 54.9937 42.2022 45.9496C42.519 39.9664 43.9259 33.6331 44.9867 27.3857C46.1578 20.4739 44.6404 13.5767 39.7642 8.27862C37.2011 5.5131 33.9608 3.41768 30.3421 2.18589C26.7232 0.954369 22.8427 0.62616 19.0586 1.23138C7.72247 3.02378 0.172423 12.7769 0.10613 23.0087C0.0744945 26.951 1.17912 30.8235 3.29558 34.1901C6.82384 39.8306 12.6134 43.9435 17.6664 48.2131C21.0106 51.0692 26.7928 59.1731 29.6287 67.9552C31.3449 73.2747 32.7445 78.6655 34.1291 84.1062C36.0737 91.6889 38.7475 108.439 40.508 116.044C44.0217 131.266 54.7759 134.715 65.5521 135.065H65.935C76.7115 134.715 87.6425 131.259 91.1559 116.037C92.909 108.432 95.5755 91.6747 97.5348 84.0991C98.927 78.6869 100.319 73.2675 102.035 67.9481C104.871 59.166 110.654 51.0334 113.998 48.206C119.051 43.9218 124.833 39.8235 128.368 34.183C130.485 30.8164 131.589 26.9439 131.558 23.0016C131.499 12.7484 123.978 2.98792 112.613 1.23138Z" fill="white"/>
                     </svg>
                  </i>
                  <div className="usecases-head__text">{t('use-case.venom.title')}</div>
               </h1>
            </div>
         </div>
      </section>
      <section className='video-section'>
         <div className="video-section__container">
            <div className="usecases__video icon-lines" dangerouslySetInnerHTML={{ __html: `
           <video
             loop
             muted
             autoPlay
             playsInline
             src="${IconLines}"
           ></video>
         ` }}>
            </div>
         </div>
      </section>
      <section className='usecases__text-content usecases-text-content'>
         <div className='usecases-text-content__container'>
            <p className="usecases-text-content__text">
               {text_1[0]} {t('use-case.venom.[text_1_colored_text]') && <span>{t('use-case.venom.[text_1_colored_text]')}</span>} {text_1[1]}
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
      <section className='venom-font__container'>
         <div className='venom-font'>
            <div className='venom-font__row'>
               <div className="venom-font__column">
                  <div className="venom-font__labels">
                     <div className="venom-font__label venom-font__label_title">{t('use-case.venom.weights')}</div>
                     <div className="venom-font__label">{t('use-case.venom.regular')}</div>
                     <div className="venom-font__label">{t('use-case.venom.semibold')}</div>
                  </div>
               </div>
               <div className="venom-font__column">
                  <div className="venom-font__title">{t('use-case.venom.nunito_sans')}</div>
               </div>
            </div>
            <div className='venom-font__row'>
               <div className="venom-font__column">
                  <div className="venom-font__labels">
                     <div className="venom-font__label venom-font__label_title">{t('use-case.venom.letters')}</div>
                  </div>
               </div>
               <div className="venom-font__column">
                  <div className="venom-font__letters">
                     <div className="venom-font__letter venom-font__letter-upp">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                     <div className="venom-font__letter venom-font__letter-low">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                  </div>
               </div>
            </div>
            <div className='venom-font__row'>
               <div className="venom-font__column">
                  <div className="venom-font__labels">
                     <div className="venom-font__label venom-font__label_title">{t('use-case.venom.numbers')}</div>
                  </div>
               </div>
               <div className="venom-font__column">
                  <div className="venom-font__numbers">
                     <div className="venom-font__number">1234567890</div>
                  </div>
               </div>
            </div>
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
            <div className="usecases-image__pic usecases-image_11">
            </div>
         </div>
      </section>
      <section className='usecases__text-content usecases-text-content dir-r'>
         <div className='usecases-text-content__container'>
            <p className="usecases-text-content__text">
               {text_2[0]} {t('use-case.venom.[text_2_colored_text]') && <span>{t('use-case.venom.[text_2_colored_text]')}</span>} {text_2[1]}
            </p>
         </div>
      </section>
      <section className="usecases__image usecases-image">
         <div className='usecases-image__container'>
            <div className="usecases-image__pic usecases-image_7">
            </div>
         </div>
      </section>
      <section className='venom-offer__container'>
         <div className='venom-offer'>
            <div className="venom-offer__top">
               <i className='venom-offer__icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" fill="none">
                     <path d="M15.0362 41.5564L14.9118 41.6806L14.7875 41.5563L13.1437 39.9125L13.0193 39.7882L13.1435 39.6637L36.9299 15.8326H15.1508H14.9749V15.6566V13.2673V13.0914H15.1508H41.4326H41.6086V13.2673V39.5491V39.7251H41.4326H39.0434H38.8674V39.5491V17.7724L15.0362 41.5564Z" fill="white" stroke="white" strokeWidth="0.351941"/>
                  </svg>
               </i>
               <a className='venom-offer__link' href="#">venom.foundation</a>
            </div>
            <p className="venom-offer__text">{t('use-case.venom.text_3')}</p>
            <div className="venom-offer__labels">
               <div className="venom-offer__label">{t('use-case.venom.secure')}</div>
               <div className="venom-offer__label">{t('use-case.venom.blockchain')}</div>
               <div className="venom-offer__label">{t('use-case.venom.scalable')}</div>
               <div className="venom-offer__label">{t('use-case.venom.decentralization')}</div>
               <div className="venom-offer__label">{t('use-case.venom.network')}</div>
            </div>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div className="usecases-image__pic usecases-image_2">
               </div>
            </div>
      </section>
      <section className='usecases__pair-col usecases-pair usecases-pair-2'>
         <div className='usecases-pair__container'>
            <div className="usecases-pair__column usecases-pair__column_5 -ibg"></div>
            <div className="usecases-pair__column usecases-pair__column_6 -ibg"></div>
         </div>
      </section>
      <section className='usecases__text-content usecases-text-content'>
         <div className='usecases-text-content__container'>
            <p className="usecases-text-content__text">
               {t('use-case.venom.text_4')}
            </p>
         </div>
      </section>
      <section className="usecases__image usecases-image">
            <div className='usecases-image__container'>
               <div className="usecases-image__pic usecases-image_12">
               </div>
            </div>
      </section>
      <section className='usecases__pair-col usecases-pair usecases-pair__container usecases-pair-1'>
         <div className="usecases-pair__column usecases-pair__column_9"></div>
         <div className="usecases-pair__column usecases-pair__column_10"></div>
      </section>
      <section className="usecases__image usecases-image"><div className="usecases-image__container"><div className="usecases-image__pic usecases-image_10"></div></div></section>
      <section className='usecases-getstarted__container'>
         <div className='usecases-getstarted'>
            <div className="usecases-getstarted__column">
               <div className='usecases-getstarted__content'>
                  <p className="usecases-getstarted__text">{text_5[0]} {t('use-case.venom.[text_5_colored_text]') && <span>{t('use-case.venom.[text_5_colored_text]')}</span>} {text_5[1]}</p>
                  <div className="usecases-getstarted__links">
                     <a href="" className="usecases-getstarted__link usecases-getstarted__link_1">{t('use-case.venom.get_started')}</a>
                     <a href="" className="usecases-getstarted__link usecases-getstarted__link_2">{t('use-case.venom.start_building')}</a>
                  </div>
               </div>
            </div>
            <div className="usecases-getstarted__column">
               
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
            <Link to={'/trenfinance'} className="usecases-navigation__arrow usecases-navigation__prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 15" fill="none">
               <path d="M0.292908 6.88667C-0.0976258 7.27719 -0.0976257 7.91036 0.292908 8.30088L6.65686 14.6648C7.04739 15.0554 7.68054 15.0554 8.07108 14.6648C8.46158 14.2743 8.46158 13.6412 8.07108 13.2506L2.41422 7.59377L8.07107 1.93692C8.46158 1.54639 8.46158 0.913229 8.07107 0.522705C7.68054 0.13218 7.04739 0.13218 6.65686 0.522705L0.292908 6.88667ZM266 6.59375L1 6.59377L1 8.59377L266 8.59375L266 6.59375Z" fill="white"/>
            </svg>
            </Link>
            <Link to={'/zume'} className="usecases-navigation__arrow usecases-navigation__next">
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
