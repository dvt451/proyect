import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import TitleComponent from '../../../General/TitleAnimation/TitleComponent';
import { useTranslation } from 'react-i18next';

export default function Services() {
   const { t } = useTranslation();

   const servicesList = [
      {
         title: t('homepage.services.visual_design.title'),
         list: [
            t('homepage.services.visual_design.list.item_1'),
            t('homepage.services.visual_design.list.item_2'),
            t('homepage.services.visual_design.list.item_3'),
            t('homepage.services.visual_design.list.item_4'),
            t('homepage.services.visual_design.list.item_5'),
            t('homepage.services.visual_design.list.item_6'),
            t('homepage.services.visual_design.list.item_7'),
            t('homepage.services.visual_design.list.item_8')
         ]
      },
      {
         title: t('homepage.services.branding.title'),
         list: [
            t('homepage.services.branding.list.item_1'),
            t('homepage.services.branding.list.item_2'),
            t('homepage.services.branding.list.item_3'),
            t('homepage.services.branding.list.item_4'),
            t('homepage.services.branding.list.item_5'),
            t('homepage.services.branding.list.item_6'),
            t('homepage.services.branding.list.item_7')
         ]
      },
      {
         title: t('homepage.services.web_design.title'),
         list: [
            t('homepage.services.web_design.list.item_1'),
            t('homepage.services.web_design.list.item_2'),
            t('homepage.services.web_design.list.item_3'),
            t('homepage.services.web_design.list.item_4')
         ]
      },
      {
         title: t('homepage.services.animation.title'),
         list: [
            t('homepage.services.animation.list.item_1'),
            t('homepage.services.animation.list.item_2'),
            t('homepage.services.animation.list.item_3'),
            t('homepage.services.animation.list.item_4')
         ]
      },
      {
         title: t('homepage.services.3d_design.title'),
         list: [
            t('homepage.services.3d_design.list.item_1'),
            t('homepage.services.3d_design.list.item_2'),
            t('homepage.services.3d_design.list.item_3'),
            t('homepage.services.3d_design.list.item_4')
         ]
      },
      {
         title: t('homepage.services.video_editing.title'),
         list: [
            t('homepage.services.video_editing.list.item_1'),
            t('homepage.services.video_editing.list.item_2'),
            t('homepage.services.video_editing.list.item_3'),
            t('homepage.services.video_editing.list.item_4')
         ]
      },
   ]
   const bookCalLink = 'https://cal.com/proyect/discovery'

  return (
    <section id='Services' className='hone__services services'>
      <div className="services__container">
      <div className="services__section-block section-block">
            <div className="section-block__head">
               <TitleComponent text={t('homepage.services.texts.title')}/>
               <Link to={'https://cal.com/proyect/discovery'} target="_blank" className="button services__button">
                  <div className="button__text">{t('homepage.services.texts.button')}</div>
                  <i className="button__icon">
                     <FaArrowRight />
                  </i>
               </Link>
            </div>
            <div className="section-block__body">
               {
                  servicesList.map((item,i)=>{
                     return <div key={i} className='services__row'>
                        <div className="services__column services__titles">
                           <div className="title-sub-2">{item.title}</div>
                        </div>
                        <div className="services__column services__labels">
                           <ul className='services__list'>
                              {
                                 item.list.map((item,i)=>{
                                    return <li key={i} className='services__item label'>{item}</li>
                                 })
                              }
                              
                           </ul>
                        </div>
                     </div>
                  })
               }
            </div>
            
            <Link to={bookCalLink} target='_blank' className="button section-block__button">
               <div className="button__text">{t('homepage.services.texts.book_a_call')}</div>
            </Link>
         </div>
      </div>
    </section>
  )
}
