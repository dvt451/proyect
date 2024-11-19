import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
export default function Letstalk() {
  const { t } = useTranslation();
  return (
   <Link to='https://wa.me/message/3TZIS5GQLU6VH1' target="_blank" className='letstalk-link'>
      <div className="letstalk-link__dott">

      </div>
      <span className='letstalk-link__text'>{t('homepage.footer.texts.lets_talk')}</span>
   </Link>
  )
}
