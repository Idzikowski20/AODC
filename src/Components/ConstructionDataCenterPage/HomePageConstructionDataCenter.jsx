import React from 'react'; // Dodanie useState i useRef
import { withNamespaces } from 'react-i18next';
import {  FaComments } from 'react-icons/fa';
import { GrContact } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function HomePageConstructionDataCenter({ t }) {


  
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://aodc.pl/Budowa-Data-Center" />
      </Helmet>
      <div className="jm-video-area">
      <div className='bluur'></div>
      <div className='bluur2'></div>
        <div className="container-fluid p-0">
          <div className="jm-building-wrap bg-default">
            <div className='content'>
              <h1 className='animate__animated animate__backInDown'>{t('Header3.1.1')}</h1> 
              <img className='content-image' src='/assets/budowa2.png' alt='budowa data center' />
            </div>
          </div>
        </div>
      </div>
    <div className='description-container'>
     <div className='description-box-container'>
        <div className='description-box'>
        <br></br>
          <span className='border-radius20'>{t('Header3.1.2')}</span><br></br>
          <span className='border-radius20'>{t('Header3.1.3')}</span>
        </div>
        <div className='description-title'>
        <h2>{t('Header3.1.4')}</h2> 
        </div>
        <div className='description-box'>
          <span className='border-radius20'>{t('Header3.1.5')}</span><br></br>
          <span>{t('Header3.1.6')}</span>
          <span>{t('Header3.1.7')}</span>
          <span>{t('Header3.1.8')}</span>
          <span>{t('Header3.1.9')}</span>
        </div>
        <div className='description-title'>
        <h2>{t('Header3.1.10')}</h2> 
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
        <h2>{t('Header3.1.17')}</h2> 
        </div>
        <div className='description-box'>
          <span className='border-radius20'>{t('Header3.1.18')}</span><br></br>
        </div>
        <div className='description-title'>
        <h2>{t('Header3.1.19')}</h2> 
        </div>
        <div className='description-box'>
          <span className='border-radius20'>{t('Header3.1.20')}</span><br></br>
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

export default withNamespaces()(HomePageConstructionDataCenter);
