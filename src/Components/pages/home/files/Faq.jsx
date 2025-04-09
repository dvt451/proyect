import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

import { AccordionItem } from '../../../Libs/AccordionItem';
import { Link } from 'react-router-dom';
import TitleComponent from '../../../General/TitleAnimation/TitleComponent';
import { useTranslation } from 'react-i18next';

export default function Faq() {
   const { t } = useTranslation();
   const faqItems = [
    {
        id: 1,
        title: t('homepage.faq.items.item_1.question'),
        text: t('homepage.faq.items.item_1.answer')
    },
    {
        id: 2,
        title: t('homepage.faq.items.item_2.question'),
        text: t('homepage.faq.items.item_2.answer')
    },
    {
        id: 3,
        title: t('homepage.faq.items.item_3.question'),
        text: t('homepage.faq.items.item_3.answer')
    },
    {
        id: 4,
        title: t('homepage.faq.items.item_4.question'),
        text: t('homepage.faq.items.item_4.answer')
    },
    {
        id: 5,
        title: t('homepage.faq.items.item_5.question'),
        text: t('homepage.faq.items.item_5.answer')
    },
   ]
   const [activeItems, setActiveItems] = useState([]);
  const activatedItem = 1;
  const numerical = false // if true items will be numerized
  const freemode = true; // Default is false, change as needed

  const handleToggle = (itemId) => {
    if (freemode) {
      // If freemode is true, toggle the clicked item
      setActiveItems((prevActiveItems) => {
        if (prevActiveItems.includes(itemId)) {
          return prevActiveItems.filter((item) => item !== itemId);
        } else {
          return [...prevActiveItems, itemId];
        }
      });
    } else {
      // If freemode is false, open only the clicked item
      setActiveItems([itemId]);
    }
  };

  return (
    <section id='FAQ' className='home__faq faq'>
      <div className="faq__container">
         <div className="faq__block">
            <div className="faq__column faq__head">
               <TitleComponent text={t('homepage.faq.texts.title')}/>
               <Link to={'https://cal.com/proyect/discovery'} target="_blank" className="button section-block__title-button">
                  <div className="button__text">{t('homepage.faq.texts.book_a_call')}</div>
                  <i className="button__icon">
                     <FaArrowRight />
                  </i>
               </Link>
            </div>
            <div className="faq__column faq__body">
               {
               faqItems.map((faq) => (
                  <AccordionItem
                     key={faq.id}
                     handleToggle={handleToggle}
                     active={activeItems.includes(faq.id)}
                     activated={activatedItem}
                     faq={faq}
                     numerical={numerical}
                  />
                  ))
      }
            </div>
         </div>
         <div className="faq__space faq-space">
            <div className="faq-space__aside"></div>
            <div className="faq-space__middle"></div>
         </div>
      </div>
    </section>
  )
}
