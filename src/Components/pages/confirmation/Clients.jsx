import React from 'react'
import TitleComponent from '../../General/TitleAnimation/TitleComponent'
import avatarImage from '../../../img/avatar.webp'
import starIcon from '../../../img/star.svg'

export default function Clients() {
	const clients = [
		{
			avatar: avatarImage,
			name: 'Martin Goutry',
			describtion: 'Back-end developer at XXX',
			comment: 'Lorem ipsum dolor sit amet consectetur. Libero mauris dignissim ipsum neque vel tincidunt aenean consequat. Lorem convallis enim sagittis turpis justo varius.',
			rating: 5,
		},
		{
			avatar: avatarImage,
			name: 'Martin Goutry',
			describtion: 'Back-end developer at XXX',
			comment: 'Lorem ipsum dolor sit amet consectetur. Libero mauris dignissim ipsum neque vel tincidunt aenean consequat. Lorem convallis enim sagittis turpis justo varius.',
			rating: 5,
		},
		{
			avatar: avatarImage,
			name: 'Martin Goutry',
			describtion: 'Back-end developer at XXX',
			comment: 'Lorem ipsum dolor sit amet consectetur. Libero mauris dignissim ipsum neque vel tincidunt aenean consequat. Lorem convallis enim sagittis turpis justo varius.',
			rating: 5,
		},
		{
			avatar: avatarImage,
			name: 'Martin Goutry',
			describtion: 'Back-end developer at XXX',
			comment: 'Lorem ipsum dolor sit amet consectetur. Libero mauris dignissim ipsum neque vel tincidunt aenean consequat. Lorem convallis enim sagittis turpis justo varius.',
			rating: 5,
		},
		{
			avatar: avatarImage,
			name: 'Martin Goutry',
			describtion: 'Back-end developer at XXX',
			comment: 'Lorem ipsum dolor sit amet consectetur. Libero mauris dignissim ipsum neque vel tincidunt aenean consequat. Lorem convallis enim sagittis turpis justo varius.',
			rating: 5,
		},
		{
			avatar: avatarImage,
			name: 'Martin Goutry',
			describtion: 'Back-end developer at XXX',
			comment: 'Lorem ipsum dolor sit amet consectetur. Libero mauris dignissim ipsum neque vel tincidunt aenean consequat. Lorem convallis enim sagittis turpis justo varius.',
			rating: 5,
		},
	]
	return (
		<section className='clients-section'>
			<div className="clients-section__container">
				<TitleComponent text={'What Our Clients Say'} />
				<div className="clients-section__clients clients">
					{
						clients.map((item, i) => {
							return <div key={i} className="clients__client client">
								<div className="client__image"><img src={item.avatar} alt="avatar" /></div>
								<div className="client__content">
									<div className="client__head">
										<h4 className="client__name">{item.name}</h4>
										<span className="client__description">{item.describtion}</span>
									</div>
									<p className="client__comment">{item.comment}</p>
									<div className="client__rating">
										{
											[...Array(item.rating)].map((_, i) => (
												<i key={i}><img src={starIcon} alt="star-icon" /></i>
											))
										}
									</div>
								</div>
							</div>
						})
					}


				</div>
			</div>
		</section>
	)
}
