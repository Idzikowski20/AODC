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
      <h2>{t('title2.doradzctwo')}</h2>
      </div>
      <div className='service-subtitle'>
        <div>-{t('title2.doradzctwo2')}</div>
        <div>-{t('title2.doradzctwo3')}</div>
        <div>-{t('title2.doradzctwo4')}</div>
        <div>-{t('title2.doradzctwo5')}</div>
      </div>
    </div>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
      <h2>{t('title2.projekty')}</h2>
      </div>
      <div className='service-subtitle'>
        <div>-{t('title2.projekty2')}</div>
        <div>-{t('title2.projekty3')}</div>
        <div>-{t('title2.projekty4')}</div>
        <div>-{t('title2.projekty5')}</div>
      </div>
    </div>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
      <h2>{t('title2.budowa')}</h2>
      </div>
      <div className='service-subtitle'>
        <div>-{t('title2.budowa2')}</div>
        <div>-{t('title2.budowa3')}</div>
        <div>-{t('title2.budowa4')}</div>
      </div>
    </div>
    </div>
    <div className='service-card1'>
    <div></div>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
      <h2>{t('title2.commissioning')}</h2>
      </div>
      <div className='service-subtitle'>
        <div>-{t('title2.commissioning2')}</div>
        <div>-{t('title2.commissioning3')}</div>
      </div>
    </div>
    <div className='service-card-service'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
      <h2>{t('title2.serwis')}</h2>
      </div>
      <div className='service-subtitle'>
        <div>-{t('title2.serwis2')}</div>
        <div>-{t('title2.serwis3')}</div>
        <div>-{t('title2.serwis4')}</div>
      </div>
    </div>
    </div>
    </div>
  </section>
  )
}

export default withNamespaces()(Cards);