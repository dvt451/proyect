import React from 'react'
import work1 from '../../../../img/works/work1.webp'
import work2 from '../../../../img/works/work2.webp'
import work3 from '../../../../img/works/work3.webp'
import work4 from '../../../../img/works/work4.webp'
import work5 from '../../../../img/works/work5.webp'
import work6 from '../../../../img/works/work6.webp'
import work7 from '../../../../img/works/work7.webp'
import work8 from '../../../../img/works/work8.webp'
import work9 from '../../../../img/works/work9.webp'
import work10 from '../../../../img/works/work10.webp'
import work11 from '../../../../img/works/work11.webp'
import work12 from '../../../../img/works/work12.webp'
import work13 from '../../../../img/works/work13.webp'
import work14 from '../../../../img/works/work14.webp'
import work15 from '../../../../img/works/work15.webp'
import work16 from '../../../../img/works/work16.webp'
import work17 from '../../../../img/works/work17.webp'
import work18 from '../../../../img/works/work18.webp'
import work19 from '../../../../img/works/work19.webp'
import work20 from '../../../../img/works/work20.webp'

import videoLink1 from '../../../../videos/ghyser.mp4'
import videoLink2 from '../../../../videos/proyect old.mp4'
import videoLink3 from '../../../../videos/tren discord.mp4'


import InfiniteRunningImages from './Runningline'

const worksLine1 = [
   {  
      image: work1,
      link: '',
id: 1,
   },
   {
      image: work2,
      link: '',
id: 2,
   },
   {
      image: work3,
      link: '',
id: 3,
   },
   {
      image: work4,
      link: '',
id: 4,
   },
   {
      image: work5,
      link: '',
id: 5,
   },
   {
      image: work6,
      link: '',
id: 6,
   },
   {
      video: videoLink3,
      image: work7,
      link: '',
id: 7,
   },
   {
      video: videoLink1,
      image: work8,
      link: '',
id: 8,
   },
   {
      image: work9,
      link: '',
id: 9,
   },
   {
      image: work10,
      link: '',
id: 10,
   },
]
const worksLine2 = [
   {
      image: work11,
      link: '',
id: 11,
   },
   {
      image: work12,
      link: '',
id: 12,
   },
   {
      image: work13,
      link: '',
id: 13,
   },
   {
      image: work14,
      link: '',
id: 14,
   },
   {
      image: work15,
      link: '',
      id: 15,
   },
   {
      image: work16,
      link: '',
id: 16,
   },
   {
      image: work17,
      link: '',
id: 17,
   },
   {
      image: work18,
      link: '',
id: 18,
   },
   {
      video: videoLink2,
      image: work19,
      link: '',
id: 19,
   },
   {
      image: work20,
      link: '',
id: 20,
   },
]

export default function Works() {
      
  return (
   <div className='border-block'>
      <div className='works'>
         <div className="works__row works__row_right">
            <InfiniteRunningImages images={worksLine1} />
         </div>
         <div className="works__row works__row_left">
            <InfiniteRunningImages images={worksLine2} />
         </div>
      </div>
      <div className="border-block-container">
      
         <div className="border-block__area">
            <div className="border-block__aside"></div>
            <div className="border-block__middle"></div>
            <div className="border-block__right"></div>
         </div>
      </div>
    </div>
    
  )
}

