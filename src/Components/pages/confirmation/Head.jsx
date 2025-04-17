import React from 'react';
import videoLink from '../../../videos/Project.mp4';
import Letstalk from '../../General/Letstalk';
import ConfirmedIcon from '../../../img/icons/confirmed.svg'
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
export default function Head(props) {
	const { t } = useTranslation();

	function scrollToPricing() {
		const element = document.querySelector('#Pricing');
		element?.scrollIntoView({
			behavior: 'smooth'
		});
	}

	const description = t('homepage.atf-header.texts.description');
	const parts = description.split('[here]');

	return (
		<section className='home__head head'>
			<div className="head__video" dangerouslySetInnerHTML={{
				__html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoLink}"
        ></video>
      ` }}></div>
			<div className="head__content">
				<i className='head__icon'>
					<img src={ConfirmedIcon} alt="icon" />
				</i>
				<h1 className="head__title">Booking <mark>
					Confirmed!
				</mark></h1>
				<p className="head__text">
					You’ve officially taken the first step to unlock the full potential of your business. We’re excited to dive in and bring your vision to life. Get ready for something amazing. Talk soon :)
				</p>
				<Link to={'/'} target='_blank' className="button">
					<div className="button__text">Check out what you're in for!</div>
					<i className="button__icon">
						<FaArrowRight />
					</i>
				</Link>
			</div>
			<div className="head__noice noise"></div>
			<div className="head__gradient">
				<div className="head__gradient_bottom"></div>
			</div>
		</section>
	);
}
