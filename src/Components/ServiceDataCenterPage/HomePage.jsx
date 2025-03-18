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
              <h1 className='animate__animated animate__backInDown'>{t('Header3.4.1')}</h1> 
            </div>
          </div>
        </div>
      </div>
    <div className='description-container'>
     <div className='description-box-container'>
        <div className='description-box'>
        <br></br>
          <span>{t('Header3.4.2')}</span>
        </div>
    <div className='description-title'>
        <h4>{t('Header3.4.3')}</h4> 
    </div>
        <div className='description-box'>
          <span>{t('Header3.4.4')}</span><br></br>
          <span>{t('Header3.4.5')}</span><br></br>
          <span>{t('Header3.4.6')}</span>
          <span>{t('Header3.4.7')}</span>
          <span>{t('Header3.4.8')}</span>
        </div>
        <div className='description-title'>
           <h4>{t('Header3.4.9')}</h4> 
       </div>
        <div className='description-box'>
          <span>{t('Header3.4.10')}</span><br></br>
          <span>{t('Header3.4.11')}</span>
          <span>{t('Header3.4.12')}</span>
          <span>{t('Header3.4.13')}</span><br></br>
          <span>{t('Header3.4.14')}</span><br></br>
          <span>{t('Header3.4.15')}</span>
          <span>{t('Header3.4.16')}</span>
          <span>{t('Header3.4.17')}</span>
          <span>{t('Header3.4.18')}</span>
        </div>
        <div className='description-title'>
           <h4>{t('Header3.4.19')}</h4> 
       </div>
        <div className='description-box'>
          <span>{t('Header3.4.20')}</span><br></br>
          <span>{t('Header3.4.21')}</span>
          <span>{t('Header3.4.22')}</span>
          <span>{t('Header3.4.23')}</span>
          <span>{t('Header3.4.24')}</span><br></br>
          <span>{t('Header3.4.25')}</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default withNamespaces()(HomePageService);
