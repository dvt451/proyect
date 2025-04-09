import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import OdometerAnimation from '../General/Ordometer'
import { Privicylist } from '../General/Generalinfo'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
	const { t } = useTranslation();
	const [activeIndex, setActiveIndex] = useState(0);
	const contactDescription = t('privacy-policy.section_8.description').split('[email]');

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
			<Header LetstalkText={t('homepage.footer.texts.lets_talk')} />
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
												Privicylist.map((item, i) => {
													return <li key={i} className={activeIndex === i ? 'privacy-aside__item _active' : 'privacy-aside__item'}>{t(item.title)}</li>
												})
											}
										</ul>
									</div>
								</aside>
								<article className='privacy__article privacy-article'>
									<div className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title privacy-title-1">{t('privacy-policy.texts.title')}</h3>
										<p className="privacy-text">
											{t('privacy-policy.texts.description')}
										</p>
									</div>
									<div id={Privicylist[0].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{t('privacy-policy.section_1.title')}</h3>
										<p className="privacy-text">
											{t('privacy-policy.section_1.text_1')}
											<br /><br />
											{t('privacy-policy.section_1.text_2')}
										</p>
									</div>
									<div id={Privicylist[1].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{t('privacy-policy.section_2.title')}</h3>
										<p className='privacy-text'>{t('privacy-policy.section_2.text_1')}
											<br /><br />
										</p>
										<ul className='privacy-article__list'>
											<li className='privacy-article__row'>{t('privacy-policy.section_2.items.item_1')}</li>
											<li className='privacy-article__row'>{t('privacy-policy.section_2.items.item_2')}</li>
											<li className='privacy-article__row'>{t('privacy-policy.section_2.items.item_3')}</li>
											<li className='privacy-article__row'>{t('privacy-policy.section_2.items.item_4')}</li>
										</ul>
									</div>
									<div id={Privicylist[2].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{t('privacy-policy.section_3.title')}</h3>
										<p className="privacy-text">
											{t('privacy-policy.section_3.description')}
										</p>
									</div>
									<div id={Privicylist[3].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{t('privacy-policy.section_4.title')}</h3>
										<p className="privacy-text">
											{t('privacy-policy.section_4.text_1')}
											<br /><br />
											{t('privacy-policy.section_4.text_2')}
											<br /><br />
											{t('privacy-policy.section_4.text_3')}
										</p>
									</div>
									<div id={Privicylist[4].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{t('privacy-policy.section_5.title')}</h3>
										<p className="privacy-text">
											{t('privacy-policy.section_5.text_1')}
											<br /><br />
											{t('privacy-policy.section_5.text_2')}
										</p>
									</div>
									<div id={Privicylist[5].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{t('privacy-policy.section_6.title')}</h3>
										<p className="privacy-text">
											{t('privacy-policy.section_6.text_1')}
											<br /><br />
											{t('privacy-policy.section_6.items.label')}
											<br />
											<strong>{t('privacy-policy.section_6.items.item_1.title')}</strong> {t('privacy-policy.section_6.items.item_1.description')}
											<br /><br />
											<strong>{t('privacy-policy.section_6.items.item_2.title')}</strong> {t('privacy-policy.section_6.items.item_2.description')}
											<br /><br />
											<strong>{t('privacy-policy.section_6.items.item_3.title')}</strong> {t('privacy-policy.section_6.items.item_3.description')}
											<br /><br />
											<strong>{t('privacy-policy.section_6.items.item_4.title')}</strong> {t('privacy-policy.section_6.items.item_4.description')}
											<br /><br />
											<strong>{t('privacy-policy.section_6.items.item_5.title')}</strong> {t('privacy-policy.section_6.items.item_5.description')}
										</p>

									</div>
									<div id={Privicylist[6].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{t('privacy-policy.section_7.title')}</h3>
										<p className="privacy-text">
											{t('privacy-policy.section_7.description')}
										</p>
									</div>
									<div id={Privicylist[7].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{t('privacy-policy.section_8.title')}</h3>
										<p className="privacy-text">
											{contactDescription[0]} <Link to={`mailto:${t('privacy-policy.section_8.[email]')}`}>{t('privacy-policy.section_8.[email]')}</Link> {contactDescription[1]}
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

