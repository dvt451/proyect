import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import asidepic1 from '../../../../img/usecases/hetrix/image2.webp'
import asidepic2 from '../../../../img/casestudio/venom2.webp'
import asidepic3 from '../../../../img/usecases/zume/image6.webp'
import asidepic4 from '../../../../videos/tren use case post 2.webm'
import asidepic5 from '../../../../img/usecases/t3lab/image13.webp'
import asidepic6 from '../../../../img/usecases/pixelbros/image4.webp'
import asidepic8 from '../../../../img/usecases/voltix/image11.webp'

import mainPicture1 from '../../../../img/casestudio/hetrix.webp'
import mainPicture2 from '../../../../img/casestudio/venom.webp'
import mainPicture3 from '../../../../img/usecases/zume/head.webp'
import mainPicture4 from '../../../../img/usecases/trenfinance/picture1.webp'
import mainPicture5 from '../../../../img/usecases/t3lab/image1.webp'
import mainPicture6 from '../../../../img/usecases/pixelbros/video/video2.webm'
import mainPicture7 from '../../../../img/usecases/notelix/image16.webp'
import mainPicture8 from '../../../../img/usecases/voltix/image1.webp'
import mainPicture9 from '../../../../img/usecases/notelix/video/video8.webm'

import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import TitleComponent from '../../../General/TitleAnimation/TitleComponent';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

export default function Casestudies(props) {
	const { t } = useTranslation();

	const casestudioList = [
		{
			mainPicture: mainPicture3,
			title: t('homepage.case-studies.item_3.title'),
			list: [t('homepage.case-studies.item_3.work_type.item_1'), t('homepage.case-studies.item_3.work_type.item_2')],
			link: 'zume',
			asideText: t('homepage.case-studies.item_3.description'),
			asidePicture: asidepic3,
		},
		{
			mainPicture: mainPicture5,
			title: t('homepage.case-studies.item_5.title'),
			list: [t('homepage.case-studies.item_5.work_type.item_1'), t('homepage.case-studies.item_5.work_type.item_2')],
			link: 't3lab',
			asideText: t('homepage.case-studies.item_5.description'),
			asidePicture: asidepic5,
		},
		{
			mainPicture: mainPicture7,
			title: t('homepage.case-studies.item_7.title'),
			list: [t('homepage.case-studies.item_7.work_type.item_1'), t('homepage.case-studies.item_7.work_type.item_2')],
			link: 'notelix',
			asideText: t('homepage.case-studies.item_7.description'),
			asideVideo: mainPicture9,
		},
		{
			mainVideo: mainPicture6,
			title: t('homepage.case-studies.item_6.title'),
			list: [t('homepage.case-studies.item_6.work_type.item_1'), t('homepage.case-studies.item_6.work_type.item_2')],
			link: 'pixelbros',
			asideText: t('homepage.case-studies.item_6.description'),
			asidePicture: asidepic6,
		},
		{
			mainPicture: mainPicture1,
			title: t('homepage.case-studies.item_1.title'),
			list: [t('homepage.case-studies.item_1.work_type.item_1'), t('homepage.case-studies.item_1.work_type.item_2')],
			link: 'hetrix',
			asideText: t('homepage.case-studies.item_1.description'),
			asidePicture: asidepic1,
		},
		{
			mainPicture: mainPicture4,
			title: t('homepage.case-studies.item_4.title'),
			list: [t('homepage.case-studies.item_4.work_type.item_1'), t('homepage.case-studies.item_4.work_type.item_2')],
			link: 'trenfinance',
			asideText: t('homepage.case-studies.item_4.description'),
			asideVideo: asidepic4,
		},
		{
			mainPicture: mainPicture8,
			title: t('homepage.case-studies.item_8.title'),
			list: [t('homepage.case-studies.item_8.work_type.item_1'), t('homepage.case-studies.item_8.work_type.item_2')],
			link: 'voltix',
			asideText: t('homepage.case-studies.item_8.description'),
			asidePicture: asidepic8,
		},
		{
			mainPicture: mainPicture2,
			title: t('homepage.case-studies.item_2.title'),
			list: [t('homepage.case-studies.item_2.work_type.item_1'), t('homepage.case-studies.item_2.work_type.item_2')],
			link: 'venom',
			asideText: t('homepage.case-studies.item_2.description'),
			asidePicture: asidepic2,
		},
	]

	return (
		<section id='Work' className='home__casestudies casestudies'>
			<div className='section-block-wrapper'>
				<div className='section-block__container'>
					<div className="section-block">
						<div className="section-block__head"></div>
						<div className="section-block__body">
							<div className="section-block__col"></div>
						</div>
					</div>
				</div>
			</div>

			<div className='casestudies__main-content'>
				<div className='casestudies__container'>
					<div className="section-block__head">
						<div className="section-block__column">
							<TitleComponent text={t('homepage.case-studies.texts.title')} />
							<Link to={'https://cal.com/proyect/discovery'} target="_blank" className="button casestudies__button">
								<div className="button__text">{t('homepage.case-studies.texts.book_a_call')}</div>
								<i className="button__icon">
									<FaArrowRight />
								</i>
							</Link>
						</div>
						<div className="section-block__column">
							<div className="navigation">
								<button className="navigation__arrow casestudies__prev">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
										<path d="M32.6705 25.1676C32.9165 24.9216 32.9984 24.6757 32.9984 24.3477C32.9984 23.6919 32.5065 23.2 31.8507 23.2L15.454 23.2C14.7981 23.2 14.3062 23.6919 14.3062 24.3477C14.3062 25.0036 14.7981 25.4955 15.454 25.4955L31.8507 25.4955C32.1786 25.4955 32.4246 25.4135 32.6705 25.1676Z" fill="white" />
										<path d="M23.6519 32.5465C24.1438 32.0546 24.1438 31.3988 23.6519 30.9069L17.0932 24.3482L23.6519 17.7895C24.1438 17.2976 24.1438 16.6418 23.6519 16.1499C23.16 15.658 22.5041 15.658 22.0122 16.1499L14.6337 23.5284C14.1418 24.0203 14.1418 24.6761 14.6337 25.168L22.0122 32.5465C22.5041 33.0384 23.16 33.0384 23.6519 32.5465Z" fill="white" />
									</svg>
								</button>
								<button className="navigation__arrow casestudies__next">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
										<path d="M15.3295 25.1676C15.0835 24.9216 15.0016 24.6757 15.0016 24.3477C15.0016 23.6919 15.4935 23.2 16.1493 23.2L32.546 23.2C33.2019 23.2 33.6938 23.6919 33.6938 24.3477C33.6938 25.0036 33.2019 25.4955 32.546 25.4955L16.1493 25.4955C15.8214 25.4955 15.5754 25.4135 15.3295 25.1676Z" fill="white" />
										<path d="M24.3481 32.5465C23.8562 32.0546 23.8562 31.3988 24.3481 30.9069L30.9068 24.3482L24.3481 17.7895C23.8562 17.2976 23.8562 16.6418 24.3481 16.1499C24.84 15.658 25.4959 15.658 25.9878 16.1499L33.3663 23.5284C33.8582 24.0203 33.8582 24.6761 33.3663 25.168L25.9878 32.5465C25.4959 33.0384 24.84 33.0384 24.3481 32.5465Z" fill="white" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="out-block">
					<div className="out-block__right">
						<Swiper
							modules={[Navigation, Pagination]}
							spaceBetween={20}
							slidesPerView={1.5}
							breakpoints={{
								768: { slidesPerView: 2.72 },
							}}
							loop
							navigation={{
								nextEl: '.casestudies__next',
								prevEl: '.casestudies__prev'
							}}
						>
							{casestudioList.map((item, i) => (
								<SwiperSlide key={i}>
									<div className="casestudies__slide">
										{item.mainVideo ?
											<Link to={`/` + item.link} onMouseEnter={() => { props.sishvr(true) }} onClick={() => { props.sishvr(false) }} onMouseLeave={() => { props.sishvr(false) }} className="casestudies__image -ibg">
												<div className="noise"></div>
												<video muted autoPlay playsInline loop src={item.mainVideo}></video>
											</Link>
											:
											<Link to={`/` + item.link} onMouseEnter={() => { props.sishvr(true) }} onClick={() => { props.sishvr(false) }} onMouseLeave={() => { props.sishvr(false) }} className="casestudies__image  -ibg">
												<div className="noise"></div>
												<img src={item.mainPicture} alt="Picture" />
											</Link>
										}
										<h4 className='casestudies__title'>
											{item.title}
										</h4>
										<div className="casestudies__labels">
											<div className='casestudies__labels-wrapper'>
												{
													item.list.map((label, i) => {
														return <div key={i} className='label'>{label}</div>
													})
												}
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}