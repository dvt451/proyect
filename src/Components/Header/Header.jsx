import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, rights, Privicylist } from '../General/Generalinfo';
import { IoIosArrowUp } from "react-icons/io";

import Media from '../General/Media';
import Letstalk from '../General/Letstalk';
import { useTranslation } from 'react-i18next';

export default function Header({ LetstalkText }) {
	const { t } = useTranslation();
	const [burgerActive, setBurgerActive] = useState(false)
	const [subMenu, setSubMenu] = useState(false)
	const [isVisible, setIsVisible] = useState(true);

	const workCount = 8

	const burgerHandleTrue = () => {
		setBurgerActive(true)
		document.body.style.overflow = 'hidden';
	}
	const burgerHandleFalse = () => {
		setBurgerActive(false)
		document.body.style.overflow = 'auto';
	}
	const subMenuHandle = () => {
		setSubMenu(!subMenu)
	}
	const atHome = useLocation().pathname === '/'

	const atPrivacy = useLocation().pathname === '/privacy'

	const location = useLocation();

	const checkVisibility = () => {
		const element = document.getElementsByClassName('home__process');
		if (element.length > 0) {
			const rect = element[0].getBoundingClientRect();
			const isElementVisible = rect.top <= 42;
			setIsVisible(!isElementVisible);
		}
	};
	useEffect(() => {
		if (location.pathname === '/') {
			const element = document.getElementsByClassName('home__process');
			const rect = element[0].getBoundingClientRect();
			const isElementVisible = rect.top <= 42;
			if (isElementVisible) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
			window.addEventListener('scroll', checkVisibility);
			return () => {
				window.removeEventListener('scroll', checkVisibility);
			};
		} else {
			setIsVisible(false);
		}
	}, [location]);


	return (
		<header className={isVisible ? 'header' : 'header blend'}>
			<div className='header__top'>
				<div className='top__container'>
					{
						!atHome ? <Link to='/' className='header__logo-home header__logo'>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 52" fill="none">
								<path fillRule="evenodd" clipRule="evenodd" d="M46.3791 7.669C45.6065 6.89157 45.1725 5.83715 45.1725 4.7377C45.1725 3.63825 45.6065 2.58383 46.3791 1.8064C47.1516 1.02897 48.1994 0.592213 49.292 0.592213C50.3846 0.592213 51.4324 1.02897 52.2049 1.8064C52.9775 2.58383 53.4115 3.63825 53.4115 4.7377C53.4115 5.83715 52.9775 6.89157 52.2049 7.669C51.4324 8.44643 50.3846 8.88319 49.292 8.88319C48.1994 8.88319 47.1516 8.44643 46.3791 7.669ZM52.6211 8.08776C53.504 7.19927 54 5.99422 54 4.7377C54 3.48118 53.504 2.27613 52.6211 1.38764C51.7381 0.499149 50.5406 0 49.292 0C48.0434 0 46.8459 0.499149 45.9629 1.38764C45.08 2.27613 44.584 3.48118 44.584 4.7377C44.584 5.99422 45.08 7.19927 45.9629 8.08776C46.8459 8.97625 48.0434 9.4754 49.292 9.4754C50.5406 9.4754 51.7381 8.97625 52.6211 8.08776ZM49.651 2.37003H47.8208V7.10655H48.607V5.2849H49.598L50.4572 7.10655H51.3518L50.3843 5.15343C50.8715 4.97577 51.2641 4.50082 51.2641 3.82688C51.2641 2.94626 50.6573 2.37003 49.651 2.37003ZM48.6064 4.66012V3.01555H49.5392C50.093 3.01555 50.4437 3.31402 50.4437 3.85471C50.4437 4.38593 50.1035 4.66012 49.518 4.66012H48.6064ZM28.028 21.2387H13.9371V8.05536H28.028C36.6664 8.05536 43.6693 15.1024 43.6693 23.7953V37.6321H30.5686V23.7953C30.5686 22.3833 29.4311 21.2387 28.028 21.2387ZM13.1007 38.8167H29.7322V52H6.55034H0V45.4083V22.4233H13.1007V38.8167Z" />
							</svg>
						</Link> : <button onClick={() => {
							const element = document.querySelector('.head');
							element?.scrollIntoView({
								behavior: 'smooth'
							})
						}} className='header__logo-home header__logo'>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 52" fill="none">
								<path fillRule="evenodd" clipRule="evenodd" d="M46.3791 7.669C45.6065 6.89157 45.1725 5.83715 45.1725 4.7377C45.1725 3.63825 45.6065 2.58383 46.3791 1.8064C47.1516 1.02897 48.1994 0.592213 49.292 0.592213C50.3846 0.592213 51.4324 1.02897 52.2049 1.8064C52.9775 2.58383 53.4115 3.63825 53.4115 4.7377C53.4115 5.83715 52.9775 6.89157 52.2049 7.669C51.4324 8.44643 50.3846 8.88319 49.292 8.88319C48.1994 8.88319 47.1516 8.44643 46.3791 7.669ZM52.6211 8.08776C53.504 7.19927 54 5.99422 54 4.7377C54 3.48118 53.504 2.27613 52.6211 1.38764C51.7381 0.499149 50.5406 0 49.292 0C48.0434 0 46.8459 0.499149 45.9629 1.38764C45.08 2.27613 44.584 3.48118 44.584 4.7377C44.584 5.99422 45.08 7.19927 45.9629 8.08776C46.8459 8.97625 48.0434 9.4754 49.292 9.4754C50.5406 9.4754 51.7381 8.97625 52.6211 8.08776ZM49.651 2.37003H47.8208V7.10655H48.607V5.2849H49.598L50.4572 7.10655H51.3518L50.3843 5.15343C50.8715 4.97577 51.2641 4.50082 51.2641 3.82688C51.2641 2.94626 50.6573 2.37003 49.651 2.37003ZM48.6064 4.66012V3.01555H49.5392C50.093 3.01555 50.4437 3.31402 50.4437 3.85471C50.4437 4.38593 50.1035 4.66012 49.518 4.66012H48.6064ZM28.028 21.2387H13.9371V8.05536H28.028C36.6664 8.05536 43.6693 15.1024 43.6693 23.7953V37.6321H30.5686V23.7953C30.5686 22.3833 29.4311 21.2387 28.028 21.2387ZM13.1007 38.8167H29.7322V52H6.55034H0V45.4083V22.4233H13.1007V38.8167Z" />
							</svg>
						</button>

					}
					<Letstalk LetstalkText={LetstalkText} />
					<button onClick={!burgerActive ? burgerHandleTrue : burgerHandleFalse} type="button" className={burgerActive ? 'burger__icon icon-burger menu-open' : 'burger__icon icon-burger'}><span></span></button>
				</div>
			</div>
			<nav className="header__menu menu">
				<ul className="menu__list">
					{
						Menu.map((item, i) => {
							return i !== 5 ? <li className='menu__item' key={i}>
								{atHome ?
									<button
										onClick={() => {
											const element = document.querySelector('#' + t(item));
											element?.scrollIntoView({
												behavior: 'smooth'
											})
										}}
										className='menu__link' ><span className='menu__link_text'>{t(item)}</span>{t(item) === 'Work' ? <span className='work-count'>{workCount}</span> : false}</button>

									:
									<Link
										to='/'
										onClick={() => {
											setTimeout(() => {
												const element = document.querySelector('#' + t(item));
												element?.scrollIntoView({
													behavior: 'smooth'
												})
											}, 1000);
										}}
										className='menu__link' ><span className='menu__link_text'>{t(item)}</span>{t(item) === 'Work' ? <span className='work-count'>{workCount}</span> : false}</Link>
								}
							</li> : false
						})
					}
				</ul>
			</nav>
			<div className={burgerActive ? 'burger-body _active-burger' : 'burger-body'}>
				<div className='burger-body__block'>
					<nav className="burger-body__menu menu">
						<ul className="menu__list">
							{
								Menu.map((item, i) => {
									return i !== 5 ? <li className='menu__item' key={i}>
										{atHome ?
											<button className='menu__link' onClick={() => {
												setBurgerActive(false)
												document.body.style.overflow = 'auto';
												setTimeout(() => {
													const element = document.querySelector('#' + t(item));
													element?.scrollIntoView({
														behavior: 'smooth'
													})
												}, 100);
											}} >{t(item)}{t(item) === 'Work' ? <span className='work-count'>{workCount}</span> : false}</button>
											: <Link className='menu__link' onClick={() => {
												setBurgerActive(false)
												document.body.style.overflow = 'auto';
												setTimeout(() => {
													const element = document.querySelector('#' + t(item));
													element?.scrollIntoView({
														behavior: 'smooth'
													})
												}, 1000);
											}} to={'/#' + t(item)}>{t(item)}{t(item) === 'Work' ? <span className='work-count'>{workCount}</span> : false}</Link>
										}
									</li> :
										<li className='menu__item' key={i}>
											<button onClick={subMenuHandle} className={subMenu ? 'menu__link _active' : 'menu__link'} to={t(item)}>
												<span>{t(item)}</span>
												<IoIosArrowUp style={{ rotate: subMenu ? '180deg' : '' }} />
											</button>
											<ul className='sub-menu'>
												{
													Privicylist.map((item, i) => {
														return <li style={{ display: subMenu ? 'block' : 'none' }} key={i} className="sub-menu__item">
															{atPrivacy ?
																<button
																	onClick={() => {
																		setBurgerActive(false)
																		document.body.style.overflow = 'auto';
																		const element = document.querySelector('#' + item.id);
																		element?.scrollIntoView({
																			behavior: 'smooth'
																		})
																	}}
																	className='sub-menu__link menu__link'>{t(item.title)}</button>
																:
																<Link
																	to='/privacy'
																	onClick={() => {
																		setBurgerActive(false)
																		document.body.style.overflow = 'auto';
																		setTimeout(() => {
																			const element = document.querySelector('#' + item.id);
																			element?.scrollIntoView({
																				behavior: 'smooth'
																			})
																		}, 1000);
																	}}
																	className='sub-menu__link menu__link'>{t(item.title)}</Link>
															}</li>
													})
												}
											</ul>
										</li>
								})
							}
						</ul>
					</nav>
					<div className="burger-body__bottom">
						<Media />
						<div className="burger-body__rights">{t(rights)}</div>
					</div>
				</div>
			</div>
		</header>
	)
}