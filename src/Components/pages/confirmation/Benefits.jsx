import React from 'react'
import { useTranslation } from 'react-i18next';
import gif1 from '../../../img/confirmation/1.gif'
import gif2 from '../../../img/confirmation/2.gif'
import gif3 from '../../../img/confirmation/3.gif'
import gif4 from '../../../img/confirmation/4.gif'

export default function Benefits() {
	const { t } = useTranslation();
	return (
		<div id='Benefits' className="prices-options">
			<div className='prices-options__container'>
				<div className='prices-options__grid'>
					<div className="prices-options__column">
						<div className="prices-options__icon">
							<img src={gif1} alt="icon" />
						</div>
						<h3 className="title-sub-2">{t('homepage.benefits.item_1.title')}</h3>
						<p className="prices-options__text">Our in-house team helps you define, scope and plan the design process.</p>
					</div>
					<div className="prices-options__column">
						<div className="prices-options__icon">
							<img src={gif2} alt="icon" />
						</div>
						<h3 className="title-sub-2">{t('homepage.benefits.item_2.title')}</h3>
						<p className="prices-options__text">Unlimited design requests & revisions</p>
					</div>
					<div className="prices-options__column">
						<div className="prices-options__icon">
							<img src={gif3} alt="icon" />
						</div>
						<h3 className="title-sub-2">{t('homepage.benefits.item_3.title')}</h3>
						<p className="prices-options__text">Pause or cancel anytime, No obligations.</p>
					</div>
					<div className="prices-options__column">
						<div className="prices-options__icon">
							<img src={gif4} alt="icon" />
						</div>
						<h3 className="title-sub-2">Flexible / Scalable</h3>
						<p className="prices-options__text">We’re just moving along as you grow your business.</p>
					</div>
				</div>
			</div>
		</div>
	)
}
