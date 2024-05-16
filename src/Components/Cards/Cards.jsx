import React from 'react'
import { withNamespaces } from 'react-i18next';

function Cards({ t }) {
  return (
    <section>
  <h2>{t('title2')}</h2>
  <div className='bluur2'></div>
  <div className='bluur'></div>
  <div className='service-container'>
  <div className='service-card1'>
    <div className='service-card'>
      <div className='service-icon'>
        {/* <AiFillDatabase /> */}
      </div>
      <div className='service-title'>
      <h2>{t('title2.doradzctwo')}</h2>
      </div>
      <div className='service-subtitle'>
        <div>
        <p>-{t('title2.doradzctwo2')}</p>
        <p>-{t('title2.doradzctwo3')}</p>
        <p>-{t('title2.doradzctwo4')}</p>
        <p>-{t('title2.doradzctwo5')}</p>
        </div>
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
        <div>
        <p>-{t('title2.projekty2')}</p>
        <p>-{t('title2.projekty3')}</p>
        <p>-{t('title2.projekty4')}</p>
        <p>-{t('title2.projekty5')}</p>
        </div>
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
        <div>
        <p>-{t('title2.budowa2')}</p>
        <p>-{t('title2.budowa3')}</p>
        <p>-{t('title2.budowa4')}</p>
        </div>
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
        <div>
        <p>-{t('title2.commissioning2')}</p>
        <p>-{t('title2.commissioning3')}</p>
        </div>
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
        <div>
        <p>-{t('title2.serwis2')}</p>
        <p>-{t('title2.serwis3')}</p>
        <p>-{t('title2.serwis4')}</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  </section>
  )
}

export default withNamespaces()(Cards);