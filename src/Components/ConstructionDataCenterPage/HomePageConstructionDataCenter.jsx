import React from 'react'
import { withNamespaces } from 'react-i18next';

function HomePageConstructionDataCenter({ t }) {


  
  return (
    <>
      <div className="jm-video-area">
        <div className='bluur4'></div>
        <div className='bluur5'></div>
        <div className="container-fluid p-0">
          <div className="jm-video-wrap bg-default">
            <div className='content'>
              <h1>{t('Header3.1.1')}</h1> 
            </div>
          </div>
        </div>
      </div>
    <div className='description-container'>
        <div className='description-box'>
          <p>{t('Header3.1.2')}</p><br></br>
          <p>{t('Header3.1.3')}</p>
        </div>
      <h2>{t('Header3.1.4')}</h2> 
        <div className='description-box'>
          <p>{t('Header3.1.5')}</p><br></br>
          <p>{t('Header3.1.6')}</p><br></br>
          <p>{t('Header3.1.7')}</p>
          <p>{t('Header3.1.8')}</p>
          <p>{t('Header3.1.9')}</p>
        </div>
      <h2>{t('Header3.1.10')}</h2> 
        <div className='description-box'>
          <p>{t('Header3.1.11')}</p><br></br>
          <p>{t('Header3.1.12')}</p><br></br>
          <p>{t('Header3.1.13')}</p>
          <p>{t('Header3.1.14')}</p>
          <p>{t('Header3.1.15')}</p>
          <p>{t('Header3.1.16')}</p>
        </div>
      <h2>{t('Header3.1.17')}</h2>
        <div className='description-box'>
          <p>{t('Header3.1.18')}</p><br></br>
        </div>
      <h2>{t('Header3.1.19')}</h2>
        <div className='description-box'>
          <p>{t('Header3.1.20')}</p><br></br>
        </div>
    </div>
    </>
  )
}

export default withNamespaces()(HomePageConstructionDataCenter);
