import React from 'react'
import { Link } from 'react-router-dom'
export default function Letstalk({ LetstalkText }) {
	return (
		<Link to='https://wa.me/message/3TZIS5GQLU6VH1' target="_blank" className='letstalk-link'>
			<div className="letstalk-link__dott">

			</div>
			<span className='letstalk-link__text'>{LetstalkText}</span>
		</Link>
	)
}
