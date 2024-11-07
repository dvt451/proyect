import React, { useRef } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import TitleComponent from '../../../General/TitleAnimation/TitleComponent';
import gif1 from '../../../General/icons/icons_6.gif'
import gif2 from '../../../General/icons/icons_7.gif'
import gif3 from '../../../General/icons/icons_8.gif'
import gif4 from '../../../General/icons/icons_9.gif'

export default function Process(props) {
   const bookCalLink = 'https://cal.com/proyect/discovery'
  return (
    <section id='Process' className='home__process process'>
      <div className="process__container">
         <div className="process__section-block section-block">
            <div className="section-block__head">
               <TitleComponent text={"The Process"}/>
               <Link  to={bookCalLink} target='_blank' className="button">
                  <div className="button__text">Book a Call</div>
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
                           <div className="process__title title-sub-1">Subscribe</div>
                           <div className="process__text">Discover our subscription plans below, and feel free to schedule a <Link to={'https://cal.com/proyect/discovery'} target="_blank">call</Link> if you have any questions.</div>
                        </div>
                     </div>
                  </li>
                  <li className="process__item">
                     <div className='process__item-container'>
                        <i className='process__icon'>
                        <img src={gif2} alt="icon" />

                        </i>
                        <div className='process__item-content'>
                           <div className="process__title title-sub-1">Add Tasks</div>
                           <div className="process__text">Meet the team, and pile on as many requests as you want, we're ready to jump in and start the process.</div>
                        </div>
                     </div>
                  </li>
                  <li className="process__item">
                     <div className='process__item-container'>
                        <i className='process__icon'>
                           <img src={gif3} alt="icon" />
                        </i>
                        <div className='process__item-content'>
                           <div className="process__title title-sub-1">Check it out</div>
                           <div className="process__text">Review as you move along, we'll keep things rolling with the next tasks to make sure you get the most out of your subscription.</div>
                        </div>
                     </div>
                  </li>
                  <li className="process__item">
                     <div className='process__item-container'>
                        <i className='process__icon'>
                           <img src={gif4} alt="icon" />
                        </i>
                        <div className='process__item-content'>
                           <div className="process__title title-sub-1">On to the next</div>
                           <div className="process__text">We quickly move on to the next task on your list, ensuring a smooth and efficient workflow.</div>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
            <div className='process__bottom'>
               <Link to={bookCalLink} target='_blank' className="button section-block__button">
                  <div className="button__text">Book a Call</div>
               </Link>
            </div>
         </div>
      </div>
    </section>
  )
}