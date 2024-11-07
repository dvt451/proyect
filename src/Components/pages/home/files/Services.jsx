import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import TitleComponent from '../../../General/TitleAnimation/TitleComponent';

export default function Services() {

   const servicesList = [
      {
         title: 'Visual Design',
         list: [
            'Pitchdecks',
            'Social Media Posts',
            'Brochures / Magazines',
            'Product Mockups',
            'Advertisements',
            'Product Packaging / Invitations',
            'Banners',
            'Whitepapers / Documents',
         ]
      },
      {
         title: 'Branding',
         list: [
            'Logo Design',
            'Corporate Identity',
            'Branding / Brandbooks',
            'Brand Guidelines',
            'Business Cards',
            'Merchandise',
            'Typography',
         ]
      },
      {
         title: 'Web Design',
         list: [
            'Website UI',
            'Mobile Applications',
            'Design Systems',
            'Wireframes',
         ]
      },
      {
         title: 'Animation',
         list: [
            '2D Animation',
            '3D Animation',
            'Product Videos',
            'Promotion Videos',
         ]
      },
      {
         title: '3D Design',
         list: [
            'NFT Design',
            'Logo Animation',
            'Graphics Support',
            '3D Modelling',
         ]
      },
      {
         title: 'Video Editing',
         list: [
            'Video Editing',
            'Story Boards',
            'Intro / Outros',
            'Templates',
         ]
      },
   ]
   const bookCalLink = 'https://cal.com/proyect/discovery'

  return (
    <section id='Services' className='hone__services services'>
      <div className="services__container">
      <div className="services__section-block section-block">
            <div className="section-block__head">
               <TitleComponent text={"Services"}/>
               <Link to={'https://cal.com/proyect/discovery'} target="_blank" className="button services__button">
                  <div className="button__text">Explore</div>
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
               <div className="button__text">Book a Call</div>
            </Link>
         </div>
      </div>
    </section>
  )
}
