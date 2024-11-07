import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import OdometerAnimation from '../../General/Ordometer'
import { Privicylist } from '../../General/Generalinfo'
import poster from '../../../img/blog/blog1.webp'
import img1 from '../../../img/blog/graphicdesign/img1.webp'
import img2 from '../../../img/blog/graphicdesign/img2.webp'
import img3 from '../../../img/blog/graphicdesign/img3.webp'
import img4 from '../../../img/blog/graphicdesign/img4.webp'
import img5 from '../../../img/blog/graphicdesign/img5.webp'

export default function GraphicDesign() {
   const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const articleTitles = document.querySelectorAll('.prv-sec-ttl');
            const scrollPosition = window.scrollY || window.pageYOffset;

            // Loop through each title in the article
            articleTitles.forEach((title, index) => {
                const titlePosition = title.offsetTop;

                // If the title's position is less than or equal to the current scroll position, update the activeIndex
                if (titlePosition <= scrollPosition) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const topics = [
      "1. AI-Powered Personalization",
      "2. Immersive 3D and Augmented Reality (AR) Experiences",
      "3. Neumorphism and Glassmorphism 2.0",
      "4. Dark Mode Optimization",
      "5. Microinteractions and Subtle Animations",
      "6. Sustainable and Inclusive Design",
      "7. Voice User Interfaces (VUIs)",
   ]
  return (
   <>
   <Header />
   <OdometerAnimation />
    <main className='privacy blog'>
      <div className="privacy__container">
         <div className='privacy__border'>
         <section className='privacy__section'>
            <div className="blog__poster" style={{backgroundImage: `url(${poster})`}}></div>
            <div className="privacy__body">
               <aside className='privacy__aside privacy-aside'>
                  <div className='privacy-aside__sub-titles'>
                     <h5 className='privacy-aside__title'>Privacy Policy</h5>
                     <ul className='privacy-aside__list'>
                        {
                           topics.map((item,i)=>{
                              return <li key={i} className={activeIndex === i ? 'privacy-aside__item _active' : 'privacy-aside__item'}>{item}</li>
                           })
                        }
                     </ul>
                  </div>
               </aside>
               <article className='privacy__article privacy-article'>
                  <div className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title privacy-title-1">UI/UX Design Trends 2024</h3>
                     <p className="privacy-text">
                     As the digital world continues to evolve, the importance of user-centric design is more critical than ever. In 2024, UI/UX design trends are shifting to adapt to new technologies, user expectations, and societal changes. Let’s explore the top trends shaping the design landscape this year.
                     </p>
                  </div>
                  <div id={Privicylist[0].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">{topics[0]}</h3>
                     <p className="privacy-text">
                     Artificial intelligence is no longer just a backend technology; it is now an integral part of UI/UX design. In 2024, AI-powered personalization is set to revolutionize the user experience. By analyzing user behavior in real-time, AI can offer tailored content, product recommendations, and interfaces that adapt dynamically to individual needs. This level of hyper-personalization improves engagement and helps users feel connected to the product or service.
<br /><br />
<strong>Example:</strong><br />
Imagine an e-commerce site where the layout, product recommendations, and even color themes adjust according to a user’s preferences, creating a seamless and intuitive experience.
                     </p>
                  </div>
                  <div id={Privicylist[1].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">{topics[1]}</h3>
                     <p className='privacy-text'>
                     With the rise of metaverse platforms and more advanced AR technologies, 3D and immersive design elements are no longer niche but are becoming mainstream. In 2024, we will see websites, apps, and product displays utilizing 3D graphics and AR to offer users an interactive and engaging experience.
<br /><br />
Example:
<strong>Example:</strong><br />
Retailers are increasingly using AR for "virtual try-ons," allowing users to see how furniture looks in their living room or how a pair of shoes fits them, all through their mobile devices. This trend enhances decision-making and creates a sense of immersion.
                     </p>
                  </div>
                  <div id={Privicylist[2].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">{topics[2]}</h3>
                     <p className="privacy-text">
                     While minimalism has dominated UI design for years, neumorphism and glassmorphism are making a strong comeback in 2024, now with more refined approaches. Neumorphism, which blends flat design with subtle shadows and highlights, creates interfaces that appear soft and tactile. Meanwhile, glassmorphism uses frosted glass effects, transparency, and vibrant colors to create a visually rich experience.
                     <br /><br />
Example:
<strong>Example:</strong><br />
These design approaches are commonly used in card designs, forms, and dashboard layouts, adding depth and interactivity without overwhelming the user.
                     </p>
                     <div className="blog__image" style={{backgroundImage: `url(${img1})`}}></div>
                  </div>
                  <div id={Privicylist[3].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">{topics[3]}</h3>
                     <p className="privacy-text">
                     Dark mode has been a popular option for several years, but in 2024, dark mode design is being optimized for better readability and energy efficiency. Designers are experimenting with contrast levels, colors, and fonts to create darker themes that are not just aesthetic but functional, reducing eye strain and extending battery life on mobile devices.
                     <br /><br />
<strong>Example:</strong><br />
Major platforms like YouTube, Twitter (X), and Instagram have refined their dark mode themes to provide an optimized experience across devices.
                     </p>
                        <div className="blog__images">
                           <div className="blog__image img-size-1" style={{backgroundImage: `url(${img2})`}}></div>
                           <div className="blog__image img-size-1" style={{backgroundImage: `url(${img3})`}}></div>
                        </div>
                  </div>
                  <div id={Privicylist[4].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">{topics[4]}</h3>
                     <p className="privacy-text">
                     Microinteractions, such as button clicks, hover effects, and swipe animations, are becoming increasingly important to guide users through interfaces in an intuitive way. In 2024, expect to see more of these subtle animations that offer feedback, enhance usability, and add a touch of delight to the user experience.
                     <br /><br />
<strong>Example:</strong><br />
A small bounce or vibration when a user submits a form or clicks a button provides feedback that the action has been completed successfully.
                     </p>
                  </div>
                  <div id={Privicylist[5].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">{topics[5]}</h3>
                     <p className="privacy-text">
                     Sustainability and inclusivity are no longer optional. In 2024, designers are focusing on creating eco-friendly and accessible digital products. This includes reducing the carbon footprint of websites by optimizing code, compressing images, and using energy-efficient color schemes. Inclusivity, on the other hand, involves designing for all users, including those with disabilities, by integrating tools like voice commands, screen readers, and adjustable font sizes.
                     <br /><br />
<strong>Example:</strong><br />
A website built with sustainable principles might limit its use of energy-consuming elements like videos or animations, while an inclusive design could allow users to toggle between high-contrast modes or enable text-to-speech features.
                     </p>
                     <div className="blog__images">
                        <div className="blog__image img-size-2" style={{backgroundImage: `url(${img4})`}}></div>
                        <div className="blog__image img-size-2" style={{backgroundImage: `url(${img5})`,backgroundPosition: 'top left'}}></div>
                     </div>
                  </div>
                  <div id={Privicylist[6].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">{topics[6]}</h3>
                     <p className="privacy-text">
                     As voice assistants like Alexa, Siri, and Google Assistant continue to improve, voice user interfaces are becoming a critical aspect of UI/UX design in 2024. VUIs allow users to navigate applications and perform tasks using voice commands, offering a hands-free and seamless experience.
                     <br /><br />
<strong>Example:</strong><br />
Voice interactions are expanding beyond smart home devices into apps, where users can initiate commands like “book a flight” or “send a message” through voice alone, reducing the need for traditional touch-based navigation.
                     </p>
                  </div>
               </article>
            </div>
            </section>
         </div>
      </div>
    </main>
    </>
  )
}

           