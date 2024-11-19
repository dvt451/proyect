import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import TitleComponent from '../../../General/TitleAnimation/TitleComponent';
import gif1 from '../../../General/icons/icons_6.gif'
import gif2 from '../../../General/icons/icons_7.gif'
import gif3 from '../../../General/icons/icons_8.gif'
import gif4 from '../../../General/icons/icons_9.gif'
import { useTranslation } from 'react-i18next';

export default function Process(props) {
   const { t } = useTranslation();
   const bookCalLink = 'https://cal.com/proyect/discovery'
   const itemDescriptionWithBtn = t('homepage.the-process.item_1.description');
   const parts = itemDescriptionWithBtn.split('[call]');

  return (
    <section id='Process' className='home__process process'>
      <div className="process__container">
         <div className="process__section-block section-block">
            <div className="section-block__head">
               <TitleComponent text={t("homepage.the-process.texts.title")}/>
               <Link  to={bookCalLink} target='_blank' className="button">
                  <div className="button__text">{t("homepage.the-process.texts.button")}</div>
                  <i className="button__icon">
                     <FaArrowRight />
                  </i>
               </Link>
            </div>
            <div className="section-block__body">
               <ul className="process__list">
                  <li className="process__item">
                     <div className='process__item-container'>
                        <i className='process__icon'>
                           <img src={gif1} alt="icon" />
                        </i>
                        <div className='process__item-content'>
                           <div className="process__title title-sub-1">{t('homepage.the-process.item_1.title')}</div>
                           <div className="process__text">
                              {parts[0]} <Link to={'https://cal.com/proyect/discovery'} target="_blank">{t('homepage.the-process.item_1.[call]')}</Link> {parts[1]}
                           </div>
                        </div>
                     </div>
                  </li>
                  <li className="process__item">
                     <div className='process__item-container'>
                        <i className='process__icon'>
                        <img src={gif2} alt="icon" />

                        </i>
                        <div className='process__item-content'>
                           <div className="process__title title-sub-1">{t('homepage.the-process.item_2.title')}</div>
                           <div className="process__text">{t('homepage.the-process.item_2.description')}</div>
                        </div>
                     </div>
                  </li>
                  <li className="process__item">
                     <div className='process__item-container'>
                        <i className='process__icon'>
                           <img src={gif3} alt="icon" />
                        </i>
                        <div className='process__item-content'>
                           <div className="process__title title-sub-1">{t('homepage.the-process.item_3.title')}</div>
                           <div className="process__text">{t('homepage.the-process.item_3.description')}</div>
                        </div>
                     </div>
                  </li>
                  <li className="process__item">
                     <div className='process__item-container'>
                        <i className='process__icon'>
                           <img src={gif4} alt="icon" />
                        </i>
                        <div className='process__item-content'>
                           <div className="process__title title-sub-1">{t('homepage.the-process.item_4.title')}</div>
                           <div className="process__text">{t('homepage.the-process.item_4.description')}</div>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
            <div className='process__bottom'>
               <Link to={bookCalLink} target='_blank' className="button section-block__button">
                  <div className="button__text">{t('homepage.the-process.texts.button')}</div>
               </Link>
            </div>
         </div>
      </div>
    </section>
  )
}