import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

import { AccordionItem } from '../../../Libs/AccordionItem';
import { Link } from 'react-router-dom';
import TitleComponent from '../../../General/TitleAnimation/TitleComponent';

export default function Faq() {
 
   const faqItems = [
      {
         id: 1,
         title: 'How fast will my requests be delivered?',
         text: "You can typically expect to receive your tasks within 24 hours. However, please keep in mind that larger tasks demand additional time and attention, the delivery timeframe might extend. Our commitment is to ensure each task receives the necessary dedication for top-notch results."
      },
      {
         id: 2,
         title: 'Who will I be working with?',
         text: "You’’ll be in contact with a dedicated project and account manager, ensuring seamless communication for all your design requirements. Weekly progress reports will be sent to track the advancement of your needs."
      },
      {
         id: 3,
         title: 'What languages do you code in?',
         text: "We code using a diverse range of languages tailored to meet the requirements of your project. Our expertise includes JavaScript, encompassing Vue.js, React.js, Node.js, React Native, and Angular.js, as well as PHP, with proficiency in frameworks such as Laravel and Yii2."
      },
      {
         id: 4,
         title: 'Why would I not just hire a freelancer?',
         text: "Investing in a full-time senior-level designer or developer can be a significant financial commitment. On average, the annual cost of hiring a senior professional can exceed $87,000, and that's not including benefits and the challenge of finding top talent. With our subscription, you not only get access to visual design services but also 2D/3D animation, UI/UX design, and video editing."
      },
      {
         id: 5,
         title: "What if I don't have enough requests for the month?",
         text: "No worries, If you find yourself running low on designs for the month, just hit pause on your subscription. That way, you can save those design requests for whenever your creative needs are booming again. This operates on a daily basis. If you have 10 days remaining on your subscription, you can utilize them at your convenience in the future."
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
               <TitleComponent text={"FAQ"}/>
               <Link to={'https://cal.com/proyect/discovery'} target="_blank" className="button section-block__title-button">
                  <div className="button__text">Book a Call</div>
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
