import React, { useEffect, useState } from 'react'
import Head from './Head'
import Works from '../home/files/Works'
import Header from '../../Header/Header'
import Letstalk from '../home/files/Letstalk'
import { useTranslation } from 'react-i18next';
import Benefits from './Benefits'
import Progressbar from '../home/files/Progressbar'
import Clients from './Clients'
import Confetti from './Confetti'

import Marquee from './Marquee'

export default function Confirmation() {
	const { t } = useTranslation();



	return (
		<>
			<Header LetstalkText={'Any Questions?'} />
			<main className='confirmation'>
				<Confetti />
				<Progressbar />
				<Head />
				<Works />
				<Clients />
				<Marquee />
				<Benefits />
				<Letstalk
					mainTextTop={'Wanna Know'}
					mainTextBottom={'More?'}
					buttonText={'More Info'}
					bottomText={'Let’s transform your vision into stunning reality. Reach out today and start the journey to a remarkable brand presence.'}
				/>
			</main>
		</>
	)
}
