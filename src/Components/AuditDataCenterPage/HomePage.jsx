import React from 'react'
import { withNamespaces } from 'react-i18next';

function HomePageAudit({ t }) {


  
  return (
    <>
      <div className="jm-video-area">
        <div className='bluur4'></div>
        <div className='bluur2'></div>
        <div className="container-fluid p-0">
          <div className="jm-audit-wrap bg-default">
            <div className='content'>
              <h1>{t('Header3.2')}</h1> 
            </div>
          </div>
        </div>
      </div>
    <div className='description-container'>
      <div className='description-box-container'>
      <div className='description-box'>
          <p>{t('Header3.2.1')}</p><br></br>
        </div>
      <h4>{t('Header3.2.2')}</h4> 
        <div className='description-box'>
          <p>{t('Header3.2.3')}</p><br></br>
        </div>
      <h4>{t('Header3.2.4')}</h4> 
        <div className='description-box'>
          <p>{t('Header3.2.5')}</p><br></br>
          <p>{t('Header3.2.6')}</p><br></br>
          <p>{t('Header3.2.7')}</p>
          <p>{t('Header3.2.8')}</p>
          <p>{t('Header3.2.9')}</p><br></br>
          <p>{t('Header3.2.10')}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default withNamespaces()(HomePageAudit);
