import React from 'react'
import { withNamespaces } from 'react-i18next';

function AboutUs({ t }) {
  return (
    <section id='aboutus'>
        <h2>{t('title3')}</h2>
      <div className='aboutus-servers-container'>
      <div className='aboutus-container'>
    <div className='aboutus-box'>
          <div>
          <p>{t('title3.about1')}</p>
              </div>
              <div>
              <p>{t('title3.about2')}</p>
              </div>
              <div>
              <p>{t('title3.about3')}</p>
              </div>
              </div>
              <div className='aboutus-img-container'>
              {/* <img className="aboutus-img" src='assets/img/aboutus/aboutus.png'></img> */}
              </div>
              </div>
              </div>
  </section>
  )
}

export default withNamespaces()(AboutUs);