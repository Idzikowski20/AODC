import React from 'react'
import { withNamespaces } from 'react-i18next';

function AboutUs({ t }) {
  return (
    <section>
        <h2>{t('title3')}</h2>
      <div className='aboutus-servers-container'>
      <div className='bluur2'></div>
      <img className='aboutus-servers' src='assets/img/banner/banner-4.png' alt='servers image' />
      </div>
      <div className='bluur'></div>
      <div className='aboutus-container'>
    <div className='aboutus-box'>
          <div>
          <h4>{t('title3.about1')}</h4>
              </div>
              <div>
              <h4>{t('title3.about2')}</h4>
              </div>
              <div>
              <h4>{t('title3.about3')}</h4>
              </div>
              </div>
              </div>
  </section>
  )
}

export default withNamespaces()(AboutUs);