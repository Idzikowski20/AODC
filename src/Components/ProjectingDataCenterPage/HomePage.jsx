import React from 'react'
import { withNamespaces } from 'react-i18next';

function HomePageProjecting({ t }) {


  
  return (
    <>
      <div className="jm-video-area">
      <div className='bluur'></div>
      <div className='bluur2'></div>
        <div className="container-fluid p-0">
          <div className="jm-projecting-wrap bg-default">
            <div className='content'>
              <h1>{t('Header3.3.1')}</h1> 
            </div>
          </div>
        </div>
      </div>
    <div className='description-container'>
     <div className='description-box-container'>
        <div className='description-box'>
          <p>{t('Header3.3.2')}</p><br></br>
        </div>
        <div className='description-title'>
           <h4>{t('Header3.3.3')}</h4> 
        </div>
        <div className='description-box'>
          <p>{t('Header3.3.4')}</p><br></br>
          <p>{t('Header3.3.5')}</p><br></br>
          <p>{t('Header3.3.6')}</p>
          <p>{t('Header3.3.7')}</p>
          <p>{t('Header3.3.8')}</p><br></br>
          <p>{t('Header3.3.9')}</p>
        </div>
        <div className='description-title'>
        <h4>{t('Header3.3.10')}</h4> 
        </div>
        <div className='description-box'>
          <p>{t('Header3.3.11')}</p><br></br>
          <p>{t('Header3.3.12')}</p><br></br>
        </div>
      </div>
    </div>
    </>
  )
}

export default withNamespaces()(HomePageProjecting);
