import React from 'react'
import { withNamespaces } from 'react-i18next';

function ContenerDataCenter({ t }) {


  
  return (
    <>
      <div className="jm-video-area">
        {/* <img src='/assets/datacenterbg2.png'/> */}
      <div className='bluur'></div>
      <div className='bluur2'></div>
        <div className="container-fluid p-0">
          <div className="jm-datacenter-wrap bg-default">
            <div className='content'>
              <h1>{t('Header3.5')}</h1> 
              <div className='serwerownie-video-con'>
                <video className='serwerownie-video' controls type="video/mp4" src='/assets/serwerownia.mp4' autoPlay />
              </div>
              {/* <div className='content-buttons-con'>
              <button class="cssbuttons-io-button">
              <span>Sprawdź</span>
            </button>
            <button class="cssbuttons-io-button">
              <span>Kontakt</span>
            </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    <div className='description-container'>
     <div className='description-box-container'>
        <div className='description-box'>
        <img  className="datacenter-con-img" src="/assets/datacenterbg.png" />
        <br></br>
          <span className='border-radius20'>{t('Header3.1.2')}</span><br></br>
          <span className='border-radius20'>{t('Header3.1.3')}</span>
        </div>
        <div className='description-title'>
        <h4>{t('Header3.1.4')}</h4> 
        </div>
        <div className='description-box'>
        <img  className="datacenter-con-img" src="/assets/Serwerownia.png" />
          <span className='border-radius20'>{t('Header3.1.5')}</span><br></br>
          <span>{t('Header3.1.6')}</span>
          <span>{t('Header3.1.7')}</span>
          <span>{t('Header3.1.8')}</span>
          <span>{t('Header3.1.9')}</span>
        </div>
        <div className='description-title'>
        <h4>{t('Header3.1.10')}</h4> 
        </div>
        <div className='description-box'>
          <span className='border-radius20'>{t('Header3.1.11')}</span><br></br>
          <span className='border-radius20'>{t('Header3.1.12')}</span><br></br>
          <span>{t('Header3.1.13')}</span>
          <span>{t('Header3.1.14')}</span>
          <span>{t('Header3.1.15')}</span>
          <span>{t('Header3.1.16')}</span>
        </div>
        <div className='description-title'>
        <h4>{t('Header3.1.17')}</h4> 
        </div>
        <div className='description-box'>
          <span className='border-radius20'>{t('Header3.1.18')}</span><br></br>
        </div>
        <div className='description-title'>
        <h4>{t('Header3.1.19')}</h4> 
        </div>
        <div className='description-box'>
          <span className='border-radius20'>{t('Header3.1.20')}</span><br></br>
        </div>
        <div className='description-pagination'>
            <div className='pagination-button-right-con'>
            <div className='pagination-button-right'>
                <p>Powrot do oferty</p>
            </div>
            <div>
                <img src='/assets/arrow-left.png'/>
            </div>
            </div>
            <div className='pagination-button-left-con'>
            <div className='pagination-button-left'>
                <p>Budowa Data Center</p>
            </div>
            <div>
                <img src='/assets/arrow-right.png'/>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default withNamespaces()(ContenerDataCenter);
