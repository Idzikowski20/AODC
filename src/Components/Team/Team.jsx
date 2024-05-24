import React from 'react'
import './style.scss'
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

function Team({ t }) {
  return (
<section id='team'>
<h2>{t('title6')}</h2>
  <div className='team-servers-container'>
      <div className='bluur'></div>
      <div className='bluur2'></div>
      <div className='team-container'>
    <div className='team-box'>
          <div>
          <p>{t('title3.about1')}</p>
              </div>
              <div>
              {t('title3.about2')}
              </div>
              <div>
              {t('title3.about3')}
              </div>
              </div>
              <div className='team-img-container'>
              {/* <img className="team-img" src='assets/img/aboutus/aboutus.png'></img> */}
              </div>
              </div>
              </div>
</section>
  )
}

export default withNamespaces()(Team);