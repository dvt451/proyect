import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import OdometerAnimation from '../General/Ordometer'
import { Privicylist } from '../General/Generalinfo'
import { Link } from 'react-router-dom';

export default function Privacy() {
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
  return (
   <>
   <Header />
   <OdometerAnimation />
    <main className='privacy'>
      <div className="privacy__container">
         <div className='privacy__border'>
         <section className='privacy__section'>
            <div className="privacy__body">
               <aside className='privacy__aside privacy-aside'>
               <h3 className="section-title">Privacy Policy</h3>
                  <div className='privacy-aside__sub-titles'>
                     <h5 className='privacy-aside__title'>Privacy Policy</h5>
                     <ul className='privacy-aside__list'>
                        {
                           Privicylist.map((item,i)=>{
                              return <li key={i} className={activeIndex === i ? 'privacy-aside__item _active' : 'privacy-aside__item'}>{item.title}</li>
                           })
                        }
                     </ul>
                  </div>
               </aside>
               <article className='privacy__article privacy-article'>
                  <div className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title privacy-title-1">Privacy Policy</h3>
                     <p className="privacy-text">
                     At Proyect, we are committed to protecting the privacy and confidentiality of our
                     customers' personal information. This Privacy Policy outlines how we collect, use,
                     and safeguard your information as a subscriber to our design and development
                     services.
                     </p>
                  </div>
                  <div id={Privicylist[0].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">Information We Collect</h3>
                     <p className="privacy-text">
                     As a subscriber to our services, we collect various types of information from you,
including:
<br /><br />
Personal information such as your name, email address, postal address, phone
number, and payment details when you sign up for a subscription, place an
order, or communicate with us.
 Information about your usage of our services, including your preferences,
project requirements, and interactions with our platform.
                     </p>
                  </div>
                  <div id={Privicylist[1].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">Use of Your Information</h3>
                     <p className='privacy-text'>We use the information we collect for the following purposes:
                     <br /><br />
                     </p>
                        <ul className='privacy-article__list'>
                           <li className='privacy-article__row'>To provide you with the design and development services you subscribe to,including managing your account, processing your orders, and delivering ourproducts and solutions.</li>
                           <li className='privacy-article__row'>To personalize your experience and tailor our services to meet your specific needs and preferences.</li>
                           <li className='privacy-article__row'>To communicate with you about your subscription, updates to our services, special offers, and promotional materials that may be of interest to you.</li>
                           <li className='privacy-article__row'>To analyze usage patterns and trends, troubleshoot technical issues, and improve the functionality, performance, and security of our website and services.</li>
                        </ul>
                  </div>
                  <div id={Privicylist[2].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">Protection of Your Information</h3>
                     <p className="privacy-text">
                     We take appropriate measures to protect your personal information against
                     unauthorized access, alteration, disclosure, or destruction. We implement
                     industry-standard security practices and technologies to ensure the
                     confidentiality and integrity of your data.
                     </p>
                  </div>
                  <div id={Privicylist[3].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">Disclosure of Your Information</h3>
                     <p className="privacy-text">
                     Your privacy is important to us, and we want you to feel confident and secure
when using our services. In order to provide you with the best possible
experience, we may need to share your personal information with trusted thirdparty
service providers who assist us in various aspects of our operations.
<br /><br />
We want to assure you that we only share your personal information with trusted
third parties who have agreed to adhere to strict confidentiality and data
protection standards. These third parties are contractually obligated to use your
information solely for the purposes for which we disclose it to them and to
implement appropriate security measures to safeguard your data.
<br /><br />
By entrusting your information to Proyect, you can trust that we take your privacy
seriously and are committed to protecting it at all times. If you have any questions
or concerns about how your information is shared, please don't hesitate to contact
us. Your privacy and satisfaction are our top priorities.
                     </p>
                  </div>
                  <div id={Privicylist[4].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">Cookies and Similar Technologies</h3>
                     <p className="privacy-text">
                     By using our website, you consent to the use of cookies and similar tracking
technologies as described in this Privacy Policy. You have the option to disable
cookies through your browser settings or by using opt-out mechanisms provided
by certain third-party services. However, please note that disabling cookies may
limit your ability to access certain features and functionality of our website.
<br /><br />
You can manage your cookie preferences and opt-out of certain types of cookies
 by adjusting your browser settings or using the opt-out mechanisms provided by
specific third-party services. Please refer to your browser's help documentation
or visit the websites of individual third-party providers for more information on
how to manage cookies.
                     </p>
                  </div>
                  <div id={Privicylist[5].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">Your Rights</h3>
                     <p className="privacy-text">
                     You have certain rights regarding your personal information, which are designed
to empower you and ensure the protection of your privacy. 
<br /><br />
These rights include:
<br />
<strong>1. Right to Access:</strong> You have the right to request access to the personal
information we hold about you. This allows you to obtain confirmation as to
whether or not your personal data is being processed and to access specific
details about how and why it is being processed.
<br /><br />
<strong>2. Right to Correction:</strong> If you believe that any of the personal information we hold
about you is inaccurate or incomplete, you have the right to request that we
correct or update it. We strive to ensure that the information we hold about
you is accurate, up-to-date, and relevant for the purposes for which it was
collected.
<br /><br />
<strong>3. Right to Erasure:</strong> You have the right to request the deletion or removal of your
personal information in certain circumstances, such as when it is no longer
necessary for the purposes for which it was collected or if you withdraw your
consent for its processing. However, please note that this right is not absolute
and may be subject to legal or regulatory obligations that require us to retain
certain information.
<br /><br />
<strong>4. Right to Object:</strong> You have the right to object to the processing of your
personal information in certain situations, such as when it is being processed
for direct marketing purposes or based on legitimate interests pursued by us
or a third party. We will carefully consider your objection and, where
applicable, cease processing your personal information unless we have
compelling legitimate grounds for the processing that override your interests,
rights, and freedoms.
<br /><br />
<strong>5. Right to Restriction of Processing:</strong> You have the right to request the
restriction of processing of your personal information in certain
circumstances, such as when you contest the accuracy of the information or
when the processing is unlawful but you oppose its erasure. This means that
we will temporarily suspend the processing of your personal information while
we investigate your objection or verify the accuracy of the data.
                     </p>
                     
                  </div>
                  <div id={Privicylist[6].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">Protection of Your Information</h3>
                     <p className="privacy-text">
                     We are committed to transparency and keeping you informed about how we
collect, use, and protect your personal information. As part of this commitment,
we reserve the right to update or modify this Privacy Policy at any time to reflect
changes in our practices, technology advancements, or legal requirements.
We will notify you of any significant changes to our Privacy Policy by posting a
prominent notice on our website or sending you a direct communication, such as
an email. We encourage you to review this policy periodically to stay informed
about how we are protecting your privacy and to understand any updates or
revisions that may affect you.
                     </p>
                  </div>
                  <div id={Privicylist[7].id} className="privacy-article__block prv-sec-ttl">
                     <h3 className="privacy-article__title privacy-title">Contact Us</h3>
                     <p className="privacy-text">
                     If you have any questions, concerns, or requests regarding this Document or our
data practices, please contact us at <Link to={'mailto:hello@proyect.io'}>hello@proyect.io </Link>
By subscribing to our services, you acknowledge that you have read, understood,
and consent to the terms of this Privacy Policy.
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

           