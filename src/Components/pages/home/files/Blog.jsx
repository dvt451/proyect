import React from 'react'
import blog1 from '../../../../img/blog/blog1.webp'
import blog2 from '../../../../img/blog/blog2.webp'
import { Link } from 'react-router-dom'
import TitleComponent from '../../../General/TitleAnimation/TitleComponent'

export default function Blog() {
   const blogItems = [
      {
         title: "Graphic Design",
         text: "Let’s transform your vision into stunning reality. Reach out today and start the journey to a remarkable brand presence. Let’s transform your vision into stunning reality.",
         poster: blog1,
         link: '/blogs/Graphic Design'
      },
      {
         title: "Graphic Design",
         text: "Let’s transform your vision into stunning reality. Reach out today and start the journey to a remarkable brand presence. Let’s transform your vision into stunning reality.",
         poster: blog2,
         link: '/blogs/Graphic Design'
      },
   ]
  return (
    <section id='Blog' className='home__blog home-blog'>
      <div className="home-blog__container">
      <div className='home-blog__border'>
         <div className='home-blog__head'>
            <TitleComponent text={"Blog"} />
            <a className="button section-block__title-button" href="https://cal.com/proyect/discovery" target="_blank">
               <div className="button__text">View all</div>
               <i className="button__icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></i>
            </a>
         </div>
            <div className='home-blog__items'>
               {
                  blogItems.map((item,i)=>{
                     return <div className='home-blog__item home-blog-item' key={i}>
                        <Link to={item.link} className="home-blog-item__image" style={{backgroundImage: `url(${item.poster})`}}></Link>
                        <div className='home-blog-item__context'>
                           <h3 className='home-blog-item__title'>{item.title}</h3>
                           <div className="home-blog-item__text">{item.text}</div>
                           <Link className="home-blog-item__link link" to={item.link}><span className="link__text">Explore</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd"></path></svg></Link>
                        </div>
                     </div>
                  })
               }
            </div>
            <Link to={'#'} target='_blank' className="button section-block__button">
               <div className="button__text">View all</div>
            </Link>
         </div>
      </div>
    </section>
  )
}
