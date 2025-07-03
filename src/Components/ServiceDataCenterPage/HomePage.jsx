import React from 'react'
import { withNamespaces } from 'react-i18next';
import {  FaComments } from 'react-icons/fa';
import { GrContact } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function HomePageService({ t }) {


  
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://aodc.pl/Serwis-Data-Center" />
      </Helmet>
      <div className="jm-video-area">
      <div className='bluur'></div>
      <div className='bluur2'></div>
        <div className="container-fluid p-0">
          <div className="jm-service-wrap bg-default">
            <div className='content'>
              <h1 className='animate__animated animate__backInDown'>{t('Header3.4.1')}</h1> 
              <img className='content-image' src='/assets/serwis.png' alt='serwis data center' />
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
        <h2>{t('Header3.4.3')}</h2> 
    </div>
        <div className='description-box'>
          <span>{t('Header3.4.4')}</span><br></br>
          <span>{t('Header3.4.5')}</span><br></br>
          <span>{t('Header3.4.6')}</span>
          <span>{t('Header3.4.7')}</span>
          <span>{t('Header3.4.8')}</span>
        </div>
        <div className='description-title'>
           <h2>{t('Header3.4.9')}</h2> 
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
           <h2>{t('Header3.4.19')}</h2> 
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
                          <div className='description-box-contact-con'>
                            <div className='description-box-contact'>
                              <div className='description-box-contact-content'>
                                <div className='info-svg'><FaComments /></div>
                                <div className='description-box-contact-desc'>
                                  <span>{t('Header3.5.15')}</span><br /><br />
                                  <span>{t('Header3.5.16')}</span>
                                </div>
                                <Link to='/Dzial-handlowy' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                <button className='server-btn'><GrContact  />{t('Header3.5.24')}</button>
                                </Link>
                              </div>
                            </div>
                          </div>
    </div>
    </>
  )
}

export default withNamespaces()(HomePageService);
