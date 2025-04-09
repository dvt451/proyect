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
import { useTranslation } from 'react-i18next';

export default function GraphicDesign() {
	const { t } = useTranslation();
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
		t('blog.blog-1.section_1.title'),
		t('blog.blog-1.section_2.title'),
		t('blog.blog-1.section_3.title'),
		t('blog.blog-1.section_4.title'),
		t('blog.blog-1.section_5.title'),
		t('blog.blog-1.section_6.title'),
		t('blog.blog-1.section_7.title'),
	]
	return (
		<>
			<Header LetstalkText={t('homepage.footer.texts.lets_talk')} />
			<OdometerAnimation />
			<main className='privacy blog'>
				<div className="privacy__container">
					<div className='privacy__border'>
						<section className='privacy__section'>
							<div className="blog__poster" style={{ backgroundImage: `url(${poster})` }}></div>
							<div className="privacy__body">
								<aside className='privacy__aside privacy-aside'>
									<div className='privacy-aside__sub-titles'>
										<h5 className='privacy-aside__title'>{t('blog.blog-1.texts.privacy_policy')}</h5>
										<ul className='privacy-aside__list'>
											{
												topics.map((item, i) => {
													return <li key={i} className={activeIndex === i ? 'privacy-aside__item _active' : 'privacy-aside__item'}>{item}</li>
												})
											}
										</ul>
									</div>
								</aside>
								<article className='privacy__article privacy-article'>
									<div className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title privacy-title-1">{t('blog.blog-1.texts.title')}</h3>
										<p className="privacy-text">
											{t('blog.blog-1.texts.description')}
										</p>
									</div>
									<div id={Privicylist[0].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{topics[0]}</h3>
										<p className="privacy-text">
											{t('blog.blog-1.section_1.description')}
											<br /><br />
											<strong>{t('blog.blog-1.texts.example')}</strong><br />
											{t('blog.blog-1.section_1.example')}
										</p>
									</div>
									<div id={Privicylist[1].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{topics[1]}</h3>
										<p className='privacy-text'>
											{t('blog.blog-1.section_2.description')}
											<br /><br />
											<strong>{t('blog.blog-1.texts.example')}</strong><br />
											{t('blog.blog-1.section_2.example')}
										</p>
									</div>
									<div id={Privicylist[2].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{topics[2]}</h3>
										<p className="privacy-text">
											{t('blog.blog-1.section_3.description')}
											<br /><br />
											<strong>{t('blog.blog-1.texts.example')}</strong><br />
											{t('blog.blog-1.section_3.example')}
										</p>
										<div className="blog__image" style={{ backgroundImage: `url(${img1})` }}></div>
									</div>
									<div id={Privicylist[3].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{topics[3]}</h3>
										<p className="privacy-text">
											{t('blog.blog-1.section_4.description')}
											<br /><br />
											<strong>{t('blog.blog-1.texts.example')}</strong><br />
											{t('blog.blog-1.section_4.example')}
										</p>
										<div className="blog__images">
											<div className="blog__image img-size-1" style={{ backgroundImage: `url(${img2})` }}></div>
											<div className="blog__image img-size-1" style={{ backgroundImage: `url(${img3})` }}></div>
										</div>
									</div>
									<div id={Privicylist[4].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{topics[4]}</h3>
										<p className="privacy-text">
											{t('blog.blog-1.section_5.description')}
											<br /><br />
											<strong>{t('blog.blog-1.texts.example')}</strong><br />
											{t('blog.blog-1.section_5.example')}
										</p>
									</div>
									<div id={Privicylist[5].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{topics[5]}</h3>
										<p className="privacy-text">
											{t('blog.blog-1.section_6.description')}
											<br /><br />
											<strong>{t('blog.blog-1.texts.example')}</strong><br />
											{t('blog.blog-1.section_6.example')}
										</p>
										<div className="blog__images">
											<div className="blog__image img-size-2" style={{ backgroundImage: `url(${img4})` }}></div>
											<div className="blog__image img-size-2" style={{ backgroundImage: `url(${img5})`, backgroundPosition: 'top left' }}></div>
										</div>
									</div>
									<div id={Privicylist[6].id} className="privacy-article__block prv-sec-ttl">
										<h3 className="privacy-article__title privacy-title">{topics[6]}</h3>
										<p className="privacy-text">
											{t('blog.blog-1.section_7.description')}
											<br /><br />
											<strong>{t('blog.blog-1.texts.example')}</strong><br />
											{t('blog.blog-1.section_7.example')}
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

