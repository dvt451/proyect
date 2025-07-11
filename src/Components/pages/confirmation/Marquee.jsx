import React from 'react'
import logo1 from '../../../img/confirmation/logo1.svg'
import logo2 from '../../../img/confirmation/logo2.svg'
import logo3 from '../../../img/confirmation/logo3.svg'
import logo4 from '../../../img/confirmation/logo4.svg'
import logo5 from '../../../img/confirmation/logo5.svg'
import logo6 from '../../../img/confirmation/logo6.svg'
import logo7 from '../../../img/confirmation/logo7.svg'
import logo8 from '../../../img/confirmation/logo8.svg'

export default function Marquee() {
	const logos = [
		{
			image: logo1,
		},
		{
			image: logo2,
		},
		{
			image: logo3,
		},
		{
			image: logo4,
		},
		{
			image: logo5,
		},
		{
			image: logo6,
		},
		{
			image: logo7,
		},
		{
			image: logo8,
		},
	]
	return (
		<div className='marquee'>
			<div className='marquee__wrapper' >
				{logos.map((item, i) => {
					return <div className='marquee__items'>
						<img
							src={item.image}
							alt='picture'
						/>
					</div>
				})}
			</div>
			<div className='marquee__wrapper' >
				{logos.map((item, i) => {
					return <div className='marquee__items'>
						<img
							src={item.image}
							alt='picture'
						/>
					</div>
				})}
			</div>
		</div>
	)
}
