import React from 'react'
import { useTranslation } from 'react-i18next';
import gif1 from '../../../../img/confirmation/1.gif'
import gif2 from '../../../../img/confirmation/2.gif'
import gif3 from '../../../../img/confirmation/3.gif'
import gif4 from '../../../../img/confirmation/4.gif'

export default function Benefits() {
	const { t } = useTranslation();
	const priceOptions = [
		{
			icon: gif1,
			title: t('homepage.benefits.item_1.title'),
			text: t('homepage.benefits.item_1.description'),
		},
		{
			icon: gif2,
			title: t('homepage.benefits.item_2.title'),
			text: t('homepage.benefits.item_2.description'),
		},
		{
			icon: gif3,
			title: t('homepage.benefits.item_3.title'),
			text: t('homepage.benefits.item_3.description'),
		},
		{
			icon: gif4,
			title: t('homepage.benefits.item_4.title'),
			text: t('homepage.benefits.item_4.description'),
		},
	]
	return (
		<div id='Benefits' className="prices-options">
			<div className='prices-options__container'>
				<div className='prices-options__grid'>
					{
						priceOptions.map((item, i) => {
							return <div key={i} className="prices-options__column">
								<div className='prices-options__head'>
									<div className="prices-options__icon">
										<img src={item.icon} alt="icon" />
									</div>
									<h3 className="title-sub-2">{item.title}</h3>
								</div>
								<p className="prices-options__text">{item.text}</p>
							</div>
						})
					}
				</div>
			</div>
		</div>
	)
}
