import React from 'react'
import { withNamespaces } from 'react-i18next';

function HomePageProjecting({ t }) {


  
  return (
    <>
      <div className="jm-video-area">
        <div className="container-fluid p-0">
          <div className="jm-projecting-wrap bg-default">
            <div className='content'>
              <h1 className='animate__animated animate__backInDown'>{t('Header3.3.1')}</h1> 
            </div>
          </div>
        </div>
      </div>
    <div className='description-container'>
     <div className='description-box-container'>
        <div className='description-box'>
        <br></br>
          <span className='border-radius20'>{t('Header3.3.2')}</span>
        </div>
        <div className='description-title'>
           <h4>{t('Header3.3.3')}</h4> 
        </div>
        <div className='description-box'>
          <span className='border-radius20'>{t('Header3.3.4')}</span><br></br>
          <span className='border-radius20'>{t('Header3.3.5')}</span><br></br>
          <span>{t('Header3.3.6')}</span>
          <span>{t('Header3.3.7')}</span>
          <span>{t('Header3.3.8')}</span><br></br>
          <span className='border-radius20'>{t('Header3.3.9')}</span>
        </div>
        <div className='description-title'>
        <h4>{t('Header3.3.10')}</h4> 
        </div>
        <div className='description-box'>
          <span className='border-radius20'>{t('Header3.3.11')}</span><br></br>
          <span className='border-radius20'>{t('Header3.3.12')}</span><br></br>
        </div>
      </div>
    </div>
    </>
  )
}

export default withNamespaces()(HomePageProjecting);
