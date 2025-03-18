import React from 'react'
import { withNamespaces } from 'react-i18next';

function HomePageAudit({ t }) {


  
  return (
    <>
      <div className="jm-video-area">
        <div className='bluur'></div>
        <div className='bluur2'></div>
        <div className="container-fluid p-0">
          <div className="jm-audit-wrap bg-default">
            <div className='content'>
              <h1 className='animate__animated animate__backInDown'>{t('Header3.2')}</h1> 
            </div>
          </div>
        </div>
      </div>
    <div className='description-container'>
      <div className='description-box-container'>
      <div className='description-box-top'>
        {/* <img className='offer-img' src="assets/img/whatwedo/commissioning.png"/> */}
      <br></br>
          <span className='border-radius20'>{t('Header3.2.1')}</span>
        </div>
        <div className='description-title'>
          <h4>{t('Header3.2.2')}</h4> 
        </div>
        <div className='description-box'>
          <span className='border-radius20'>{t('Header3.2.3')}</span><br></br>
        </div>
        <div className='description-title'>
          <h4>{t('Header3.2.4')}</h4> 
        </div>
        <div className='description-box'>
          <span className='border-radius20'>{t('Header3.2.5')}</span><br></br>
          <span>{t('Header3.2.6')}</span>
          <span>{t('Header3.2.7')}</span>
          <span>{t('Header3.2.8')}</span>
          <span>{t('Header3.2.9')}</span><br></br>
          <span className='border-radius20'>{t('Header3.2.10')}</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default withNamespaces()(HomePageAudit);
