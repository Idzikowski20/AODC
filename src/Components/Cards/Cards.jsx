import React from 'react'
import { withNamespaces } from 'react-i18next';

function Cards({ t }) {
  return (
    <section>
  <h2>{t('title2')}</h2>
  <div className='service-container'>
  <div className='bluur2'></div>
  <div className='bluur'></div>
  <div className='service-card1'>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
      <h2>{t('title2.projektowanie')}</h2>
      </div>
    </div>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
      <h2>{t('title2.wdrazanie')}</h2>
      </div>
    </div>
    </div>
    <div className='service-card1'>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
      <h2>{t('title2.serwis')}</h2>
      </div>
    </div>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
      <h2>{t('title2.audyt')}</h2>
      </div>
    </div>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
      <h2>{t('title2.optymalizacja')}</h2>
      </div>
    </div>
    </div>
  </div>
  </section>
  )
}

export default withNamespaces()(Cards);