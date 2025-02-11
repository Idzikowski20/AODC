import React from 'react'
import { withNamespaces } from 'react-i18next';

function HomePageConstructionDataCenter({ t }) {


  
  return (
    <>
      <div className="jm-video-area">
      <div className='bluur'></div>
      <div className='bluur2'></div>
        <div className="container-fluid p-0">
          <div className="jm-building-wrap bg-default">
            <div className='content'>
              <h1>{t('Header3.1.1')}</h1> 
            </div>
          </div>
        </div>
      </div>
    <div className='description-container'>
     <div className='description-box-container'>
        <div className='description-box'>
        <br></br>
          <p>{t('Header3.1.2')}</p><br></br>
          <p>{t('Header3.1.3')}</p>
        </div>
        <div className='description-title'>
        <h4>{t('Header3.1.4')}</h4> 
        </div>
        <div className='description-box'>
          <p>{t('Header3.1.5')}</p><br></br>
          <p>{t('Header3.1.6')}</p>
          <p>{t('Header3.1.7')}</p>
          <p>{t('Header3.1.8')}</p>
          <p>{t('Header3.1.9')}</p>
        </div>
        <div className='description-title'>
        <h4>{t('Header3.1.10')}</h4> 
        </div>
        <div className='description-box'>
          <p>{t('Header3.1.11')}</p><br></br>
          <p>{t('Header3.1.12')}</p><br></br>
          <p>{t('Header3.1.13')}</p>
          <p>{t('Header3.1.14')}</p>
          <p>{t('Header3.1.15')}</p>
          <p>{t('Header3.1.16')}</p>
        </div>
        <div className='description-title'>
        <h4>{t('Header3.1.17')}</h4> 
        </div>
        <div className='description-box'>
          <p>{t('Header3.1.18')}</p><br></br>
        </div>
        <div className='description-title'>
        <h4>{t('Header3.1.19')}</h4> 
        </div>
        <div className='description-box'>
          <p>{t('Header3.1.20')}</p><br></br>
        </div>
        </div>
    </div>
    </>
  )
}

export default withNamespaces()(HomePageConstructionDataCenter);
