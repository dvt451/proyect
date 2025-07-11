import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export default function Prices() {
	const { t } = useTranslation();
	const [prices, setPrices] = useState([]);

	useEffect(() => {
		axios.get(process.env.REACT_APP_API_URL + '/prices')
			.then(response => {
				setPrices(response.data);
			})
			.catch(error => {
				console.error('There was an error fetching the prices!', error);
			});
	}, []);

	return (
		<section id='Pricing' className='home__prices prices'>
			<div className="prices__container">
				<div className='prices__head'>
					<div className="prices__column">
						<div className="prices__top">
							<div className='prices__top_row'>
								<i className='prices__icon'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
										<path d="M17.4931 39.3065L14.5331 56.6132C14.4531 57.1198 14.6531 57.6132 15.0664 57.9198C15.4797 58.2132 16.0264 58.2532 16.4664 58.0265L31.9997 49.8398L47.5331 58.0132C47.7331 58.1198 47.9464 58.1598 48.1597 58.1598C48.3544 58.1603 48.5468 58.1182 48.7234 58.0364C48.9001 57.9547 49.0568 57.8354 49.1825 57.6868C49.3083 57.5382 49.4 57.364 49.4514 57.1762C49.5027 56.9884 49.5124 56.7917 49.4797 56.5998L46.5197 39.2932L59.0931 27.0398C59.2701 26.8646 59.3948 26.6436 59.4532 26.4015C59.5117 26.1594 59.5016 25.9059 59.4241 25.6692C59.3466 25.4325 59.2047 25.2221 59.0144 25.0615C58.824 24.9009 58.5928 24.7964 58.3464 24.7598L40.9731 22.2398L33.1997 6.51984C32.7464 5.61318 31.2531 5.61318 30.8131 6.51984L23.0397 22.2532L5.66641 24.7865C5.15974 24.8532 4.74641 25.2132 4.58641 25.6932C4.42641 26.1732 4.55974 26.7065 4.91974 27.0665L17.4931 39.3065ZM24.1064 24.7998C24.5464 24.7332 24.9197 24.4665 25.1064 24.0665L31.9997 10.1198L38.8797 24.0665C39.0797 24.4665 39.4531 24.7332 39.8797 24.7998L55.2664 27.0398L44.1331 37.8932C43.8131 38.1998 43.6797 38.6398 43.7464 39.0798L46.3731 54.4132L32.6131 47.1732C32.4131 47.0665 32.1997 47.0265 31.9864 47.0265C31.7731 47.0265 31.5597 47.0798 31.3597 47.1732L17.6131 54.3998L20.2397 39.0665C20.2781 38.8522 20.2628 38.6317 20.1953 38.4246C20.1279 38.2176 20.0103 38.0305 19.8531 37.8798L8.71974 27.0265L24.1064 24.7998Z" fill="#D9DBDB" />
									</svg>
								</i>
							</div>
							<div className='prices__top_row'>
								<h3 className="prices__title">{t('homepage.price.design.title')}</h3>
								<div className="prices__price">
									<button className='prices__price-layer'>
										<span className='prices__price_text'>{prices?.design?.symbol}{new Intl.NumberFormat('en-US', { style: 'decimal' }).format(prices?.design?.price)}/{t('homepage.price.design.month')}</span>
										<i className='prices__price_icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
											<g clipPath="url(#clip0_1_1989)">
												<path d="M14 0C6.26259 0 0 6.2615 0 14C0 21.7374 6.2615 28 14 28C21.7374 28 28 21.7385 28 14C28 6.26259 21.7385 0 14 0ZM14 25.8125C7.47146 25.8125 2.1875 20.5291 2.1875 14C2.1875 7.47146 7.47086 2.1875 14 2.1875C20.5285 2.1875 25.8125 7.47086 25.8125 14C25.8125 20.5285 20.5291 25.8125 14 25.8125ZM17.2447 20.4531C17.2447 21.0573 16.7551 21.5469 16.151 21.5469H11.849C11.2449 21.5469 10.7553 21.0573 10.7553 20.4531C10.7553 19.849 11.2449 19.3594 11.849 19.3594H12.9062V12.9428H11.849C11.2449 12.9428 10.7553 12.4532 10.7553 11.849C10.7553 11.2449 11.2449 10.7553 11.849 10.7553H14C14.6041 10.7553 15.0938 11.2449 15.0938 11.849V19.3594H16.151C16.7551 19.3594 17.2447 19.849 17.2447 20.4531ZM12.6328 6.76309C12.6328 6.00791 13.2448 5.39591 14 5.39591C14.7552 5.39591 15.3672 6.00791 15.3672 6.76309C15.3672 7.51805 14.7552 8.13028 14 8.13028C13.2448 8.13028 12.6328 7.51805 12.6328 6.76309Z" fill="#D9DBDB" />
											</g>
											<defs>
												<clipPath id="clip0_1_1989">
													<rect width="28" height="28" fill="white" />
												</clipPath>
											</defs>
										</svg>
										</i>
									</button>
									<div className="price__sub-discription sub-discription">
										<h5 className='sub-discription__title'>{t('homepage.price.design.notification.title')}</h5>
										<p className="sub-discription__text">
											{t('homepage.price.design.notification.text_1')}
											<br /><br />
											{t('homepage.price.design.notification.text_2')}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="prices__body">
							<p className="prices__text">{t('homepage.price.design.subtitle')}</p>
							<div className="prices__sub-title">{t('homepage.price.design.included.title')}</div>
							<ul className="prices__list">
								<li className='prices__item'>{t('homepage.price.design.included.list.item_1')}</li>
								<li className='prices__item'>{t('homepage.price.design.included.list.item_2')}</li>
								<li className='prices__item'>{t('homepage.price.design.included.list.item_3')}</li>
								<li className='prices__item'>{t('homepage.price.design.included.list.item_4')}</li>
								<li className='prices__item'>{t('homepage.price.design.included.list.item_5')}</li>
								<li className='prices__item'>{t('homepage.price.design.included.list.item_6')}</li>
								<li className='prices__item'>{t('homepage.price.design.included.list.item_7')}</li>
							</ul>
						</div>
						<Link to='https://wa.me/message/3TZIS5GQLU6VH1' target="_blank" className='prices__link label'>{t('homepage.price.design.button')}</Link>
					</div>
					<div className="prices__column">
						<div className="prices__top">
							<div className='prices__top_row'>
								<i className='prices__icon'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
										<g clipPath="url(#clip0_1_2000)">
											<path d="M32.0001 61.3329C31.8057 61.3326 31.6136 61.2899 31.4372 61.208C31.2609 61.126 31.1044 61.0067 30.9788 60.8583L0.312128 24.4343C0.139092 24.2286 0.0322435 23.9755 0.00559489 23.708C-0.0210537 23.4406 0.0337412 23.1713 0.162794 22.9356L10.9148 3.35959C11.0295 3.14997 11.1984 2.97502 11.4039 2.85305C11.6094 2.73108 11.8438 2.66656 12.0828 2.66626H51.9175C52.4055 2.66626 52.8535 2.93293 53.0855 3.35959L63.8348 22.9356C64.1015 23.4183 64.0401 24.0129 63.6855 24.4343L33.0188 60.8583C32.8938 61.0068 32.7379 61.1262 32.5619 61.2082C32.386 61.2901 32.1942 61.3327 32.0001 61.3329ZM2.94413 23.4156L32.0001 57.9303L61.0561 23.4156L51.1281 5.33293H12.8721L2.94413 23.4156Z" fill="#D9DBDB" />
											<path d="M62.0003 25.3329H2.00033C1.6467 25.3329 1.30757 25.1925 1.05752 24.9424C0.807468 24.6924 0.666992 24.3532 0.666992 23.9996C0.666992 23.646 0.807468 23.3068 1.05752 23.0568C1.30757 22.8067 1.6467 22.6663 2.00033 22.6663H62.0003C62.354 22.6663 62.6931 22.8067 62.9431 23.0568C63.1932 23.3068 63.3337 23.646 63.3337 23.9996C63.3337 24.3532 63.1932 24.6924 62.9431 24.9424C62.6931 25.1925 62.354 25.3329 62.0003 25.3329Z" fill="#D9DBDB" />
											<path d="M45.4993 24.5833C45.2851 24.5836 45.0741 24.5321 44.8842 24.4332C44.6943 24.3343 44.5311 24.1909 44.4086 24.0153L32.0059 6.32735L19.7606 23.922C19.6606 24.0656 19.5333 24.1881 19.386 24.2825C19.2387 24.3769 19.0742 24.4413 18.902 24.4721C18.7298 24.503 18.5532 24.4996 18.3823 24.4621C18.2114 24.4247 18.0495 24.354 17.9059 24.254C17.616 24.0521 17.4181 23.7433 17.3558 23.3954C17.325 23.2232 17.3284 23.0466 17.3658 22.8757C17.4032 22.7048 17.4739 22.5429 17.5739 22.3993L30.9073 3.23668C31.0295 3.0606 31.1925 2.91673 31.3825 2.81735C31.5724 2.71797 31.7836 2.66605 31.9979 2.66602H32.0006C32.4353 2.66602 32.8406 2.87668 33.0913 3.23402L46.5899 22.4847C46.7309 22.6842 46.8143 22.9186 46.8308 23.1623C46.8474 23.406 46.7966 23.6496 46.684 23.8663C46.5714 24.0831 46.4012 24.2646 46.1922 24.3911C45.9833 24.5176 45.7435 24.5841 45.4993 24.5833Z" fill="#D9DBDB" />
											<path d="M32.0003 61.3329C31.7252 61.3329 31.4568 61.2478 31.232 61.0893C31.0071 60.9308 30.8368 60.7066 30.7443 60.4475L10.827 4.44752C10.7325 4.12071 10.7662 3.77015 10.9213 3.46735C11.0764 3.16454 11.3411 2.93231 11.6616 2.81802C11.982 2.70372 12.334 2.71598 12.6457 2.85228C12.9574 2.98858 13.2054 3.23867 13.339 3.55152L32.0003 56.0209L50.6617 3.55152C50.7805 3.21841 51.0268 2.94614 51.3463 2.79461C51.6659 2.64308 52.0326 2.62471 52.3657 2.74352C52.6988 2.86234 52.9711 3.10862 53.1226 3.42818C53.2741 3.74774 53.2925 4.11441 53.1737 4.44752L33.2563 60.4475C33.1639 60.7066 32.9936 60.9308 32.7687 61.0893C32.5438 61.2478 32.2755 61.3329 32.0003 61.3329Z" fill="#D9DBDB" />
										</g>
										<defs>
											<clipPath id="clip0_1_2000">
												<rect width="64" height="64" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</i>
							</div>
							<div className='prices__top_row'>
								<h3 className="prices__title">{t('homepage.price.development.title')}</h3>
								<div className="prices__price">
									<button className='prices__price-layer'>
										<span className='prices__price_text'>{prices?.development?.symbol}{new Intl.NumberFormat('en-US', { style: 'decimal' }).format(prices?.development?.price)}/{t('homepage.price.development.month')}</span>
										<i className='prices__price_icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
											<g clipPath="url(#clip0_1_1989)">
												<path d="M14 0C6.26259 0 0 6.2615 0 14C0 21.7374 6.2615 28 14 28C21.7374 28 28 21.7385 28 14C28 6.26259 21.7385 0 14 0ZM14 25.8125C7.47146 25.8125 2.1875 20.5291 2.1875 14C2.1875 7.47146 7.47086 2.1875 14 2.1875C20.5285 2.1875 25.8125 7.47086 25.8125 14C25.8125 20.5285 20.5291 25.8125 14 25.8125ZM17.2447 20.4531C17.2447 21.0573 16.7551 21.5469 16.151 21.5469H11.849C11.2449 21.5469 10.7553 21.0573 10.7553 20.4531C10.7553 19.849 11.2449 19.3594 11.849 19.3594H12.9062V12.9428H11.849C11.2449 12.9428 10.7553 12.4532 10.7553 11.849C10.7553 11.2449 11.2449 10.7553 11.849 10.7553H14C14.6041 10.7553 15.0938 11.2449 15.0938 11.849V19.3594H16.151C16.7551 19.3594 17.2447 19.849 17.2447 20.4531ZM12.6328 6.76309C12.6328 6.00791 13.2448 5.39591 14 5.39591C14.7552 5.39591 15.3672 6.00791 15.3672 6.76309C15.3672 7.51805 14.7552 8.13028 14 8.13028C13.2448 8.13028 12.6328 7.51805 12.6328 6.76309Z" fill="#D9DBDB" />
											</g>
											<defs>
												<clipPath id="clip0_1_1989">
													<rect width="28" height="28" fill="white" />
												</clipPath>
											</defs>
										</svg>
										</i>
									</button>
									<div className="price__sub-discription sub-discription">
										<h5 className='sub-discription__title'>{t('homepage.price.development.notification.title')}</h5>
										<p className="sub-discription__text">
											{t('homepage.price.development.notification.text_1')}
											<br /><br />
											{t('homepage.price.development.notification.text_2')}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="prices__body">
							<p className="prices__text">{t('homepage.price.development.subtitle')}</p>
							<div className="prices__sub-title">{t('homepage.price.development.included.title')}</div>
							<ul className="prices__list">
								<li className='prices__item'>{t('homepage.price.development.included.list.item_1')}</li>
								<li className='prices__item'>{t('homepage.price.development.included.list.item_2')}</li>
								<li className='prices__item'>{t('homepage.price.development.included.list.item_3')}</li>
								<li className='prices__item'>{t('homepage.price.development.included.list.item_4')}</li>
								<li className='prices__item'>{t('homepage.price.development.included.list.item_5')}</li>
								<li className='prices__item'>{t('homepage.price.development.included.list.item_6')}</li>
								<li className='prices__item'>{t('homepage.price.development.included.list.item_7')}</li>
							</ul>
						</div>
						<Link to='https://wa.me/message/3TZIS5GQLU6VH1' target="_blank" className='prices__link label'>{t('homepage.price.development.button')}</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
