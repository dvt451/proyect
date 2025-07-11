import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowLongRight } from "react-icons/hi2";

export default function Notfound() {
  return (
    <div className='nopage'>
      <div className="nopage__content">
         <p className="nopage__text">
            Page not found
         </p>
         <Link to='/' className='link'>
            <span className="link__text">Go to main page</span>
            <HiArrowLongRight />
         </Link>
      </div>
    </div>
  )
}
