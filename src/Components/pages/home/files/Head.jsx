import React from 'react';
import videoLink from '../../../../videos/Project.mp4';
import Letstalk from '../../../General/Letstalk';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
export default function Head(props) {
    const { t } = useTranslation();
  return (
    <section className='home__head head'>
      <div className="head__video" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink}"
        ></video>
      ` }}></div>
      <div className="head__content">
      <h1 className="head__title">Designing the future <br /> for <mark>
      <Typewriter 
               words={[
                  'Startups',
                  'Founders',
                  'Crypto',
                  'Fintech',
                  'AI / Saas',
                  'Ecommerce',
               ]}
               loop={true}
               cursor
               cursorStyle='|'
               typeSpeed={300}
               deleteSpeed={100}
               delaySpeed={1000}
               />
         </mark></h1>
         <p className="head__text">The strategic design / development partner for businesses wanting to scale to higher levels. Check out our convenient plan <mark><button onClick={()=>{
            const element = document.querySelector('#Pricing');
            element?.scrollIntoView({
               behavior: 'smooth'
            })
         }}>here</button></mark>.</p>
         <Letstalk />
      </div>
      <div className="head__noice noise"></div>
      <div className="head__gradient">
         <div className="head__gradient_bottom"></div>
      </div>
    </section>
  );
}
