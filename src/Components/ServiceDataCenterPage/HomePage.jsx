import React from 'react'
import { withNamespaces } from 'react-i18next';

function HomePageService({ t }) {


  
  return (
    <>
      <div className="jm-video-area">
      <div className='bluur'></div>
      <div className='bluur2'></div>
        <div className="container-fluid p-0">
          <div className="jm-service-wrap bg-default">
            <div className='content'>
              <h1>{t('Header3.4.1')}</h1> 
            </div>
          </div>
        </div>
      </div>
    <div className='description-container'>
     <div className='description-box-container'>
        <div className='description-box'>
          <p>{t('Header3.4.2')}</p>
        </div>
    <div className='description-title'>
        <h4>{t('Header3.4.3')}</h4> 
    </div>
        <div className='description-box'>
          <p>{t('Header3.4.4')}</p><br></br>
          <p>{t('Header3.4.5')}</p><br></br>
          <p>{t('Header3.4.6')}</p>
          <p>{t('Header3.4.7')}</p>
          <p>{t('Header3.4.8')}</p>
        </div>
        <div className='description-title'>
           <h4>{t('Header3.4.9')}</h4> 
       </div>
        <div className='description-box'>
          <p>{t('Header3.4.10')}</p><br></br>
          <p>{t('Header3.4.11')}</p>
          <p>{t('Header3.4.12')}</p>
          <p>{t('Header3.4.13')}</p><br></br>
          <p>{t('Header3.4.14')}</p><br></br>
          <p>{t('Header3.4.15')}</p>
          <p>{t('Header3.4.16')}</p>
          <p>{t('Header3.4.17')}</p>
          <p>{t('Header3.4.18')}</p>
        </div>
        <div className='description-title'>
           <h4>{t('Header3.4.19')}</h4> 
       </div>
        <div className='description-box'>
          <p>{t('Header3.4.20')}</p><br></br>
          <p>{t('Header3.4.21')}</p>
          <p>{t('Header3.4.22')}</p>
          <p>{t('Header3.4.23')}</p>
          <p>{t('Header3.4.24')}</p><br></br>
          <p>{t('Header3.4.25')}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default withNamespaces()(HomePageService);
