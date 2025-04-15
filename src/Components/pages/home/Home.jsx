import React from 'react';
import Head from './files/Head';
import Process from './files/Process';
import Services from './files/Services';
import Casestudies from './files/Casestudies';
import Prices from './files/Prices';
import Letstalk from './files/Letstalk';
import Faq from './files/Faq';
import Progressbar from './files/Progressbar';
import Works from './files/Works';
import OdometerAnimation from '../../General/Ordometer';
import Header from '../../Header/Header';
import Blog from './files/Blog';
import { useTranslation } from 'react-i18next';
import Benefits from './files/Benefits';


export default function Home(props) {
	const ishvr = props.isHovered;
	const sishvr = props.setIsHovered;
	const { t } = useTranslation();

	return (
		<>
			<Header LetstalkText={t('homepage.footer.texts.lets_talk')} />
			<main className='home'>
				<OdometerAnimation />
				<Progressbar />
				<Head />
				<Process />
				<Works />
				<Services />
				<Casestudies ishvr={ishvr} sishvr={sishvr} />
				<Prices />
				<Benefits />
				<Letstalk
					mainText={t('homepage.lets-talk.title')}
					buttonText={t('homepage.lets-talk.button')}
					bottomText={t('homepage.lets-talk.description')}
				/>
				<Faq />
				<Blog />
			</main>
		</>
	);
}