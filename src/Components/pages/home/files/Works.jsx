import React from 'react'

import work16 from '../../../../img/usecases/voltix/image9.webp'
import work18 from '../../../../img/usecases/trenfinance/picture3.webp'
import work1 from '../../../../img/usecases/zume/image15.webp'
import work11 from '../../../../img/works/work21.webp'
import work17 from '../../../../img/works/work7.webp'
import work2 from '../../../../img/usecases/pixelbros/image4.webp'
import work14 from '../../../../img/usecases/voltix/image12.webp'
import work5 from '../../../../img/casestudio/hetrix.webp'

import work4 from '../../../../img/works/work4.webp'
import work8 from '../../../../img/works/work8.webp'
import work12 from '../../../../img/works/work12.webp'
import work13 from '../../../../img/works/work13.webp'
import work15 from '../../../../img/works/work15.webp'
import work19 from '../../../../img/works/work19.webp'

import videoLink1 from '../../../../videos/ghyser.mp4'
import videoLink2 from '../../../../videos/proyect old.mp4'
import videoLink3 from '../../../../videos/tren half 4.webm'
import videoLink4 from '../../../../img/usecases/voltix/video/video1.webm'
import videoLink5 from '../../../../img/usecases/pixelbros/video/video2.webm'
import videoLink6 from '../../../../videos/subtract.webm'
import videoLink7 from '../../../../img/usecases/t3lab/video/video2.webm'
import videoLink8 from '../../../../videos/tren use case post 2.webm'
import videoLink9 from '../../../../videos/proyect.webm'


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
      video: videoLink4,
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
      video: videoLink5,
      link: '',
id: 6,
   },
   {
      video: videoLink3,
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
      video: videoLink7,
      link: '',
id: 9,
   },
   {
      video: videoLink6,
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
      video: videoLink8,
      link: '',
id: 20,
   },
   {
      video: videoLink9,
      link: '',
id: 21,
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