import React from 'react'
import { Link } from 'react-router-dom'
import Letstalk from '../../General/Letstalk'
import { useTranslation } from 'react-i18next';



export default function Header() {
	const { t } = useTranslation();

	return (
		<header className='header usecases-header'>
			<div className='header__top'>
				<div className='top__container'>
					<Link to='/' className='header__logo usecases-header__logo'>
						<svg xmlns="http://www.w3.org/2000/svg" width="46" height="16" viewBox="0 0 46 16" fill="none">
							<path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM46 7L1 7V9L46 9V7Z" fill="white" />
						</svg>
					</Link>
					<Letstalk LetstalkText={t('homepage.footer.texts.lets_talk')} />
				</div>
			</div>
		</header>
	)
}
