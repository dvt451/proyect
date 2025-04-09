import React from 'react';
import videoLink from '../../../../videos/Project.mp4';
import Letstalk from '../../../General/Letstalk';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
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
				<h1 className="head__title">{t('homepage.atf-header.texts.text')} <br /> {t('homepage.atf-header.texts.for')} <mark>
					<Typewriter
						words={[
							t('homepage.atf-header.items.item_1'),
							t('homepage.atf-header.items.item_2'),
							t('homepage.atf-header.items.item_3'),
							t('homepage.atf-header.items.item_4'),
							t('homepage.atf-header.items.item_5'),
							t('homepage.atf-header.items.item_6'),
						]}
						loop={true}
						cursor
						cursorStyle='|'
						typeSpeed={300}
						deleteSpeed={100}
						delaySpeed={1000}
					/>
				</mark></h1>
				<p className="head__text">
					{parts[0]}
					<button className="description-btn" onClick={scrollToPricing}>
						{t('homepage.atf-header.texts.[here]')}
					</button>
					{parts[1]}.
				</p>
				<Letstalk LetstalkText={t('homepage.footer.texts.lets_talk')} />
			</div>
			<div className="head__noice noise"></div>
			<div className="head__gradient">
				<div className="head__gradient_bottom"></div>
			</div>
		</section>
	);
}
