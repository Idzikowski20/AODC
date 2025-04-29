import React from 'react'
import { withNamespaces } from 'react-i18next';
import {  FaComments } from 'react-icons/fa';
import { GrContact } from "react-icons/gr";
import { Link } from 'react-router-dom';
function HomePageProjecting({ t }) {


  
  return (
    <>
      <div className="jm-video-area">
      <div className='bluur'></div>
      <div className='bluur2'></div>
        <div className="container-fluid p-0">
          <div className="jm-projecting-wrap bg-default">
            <div className='content'>
              <h1 className='animate__animated animate__backInDown'>{t('Header3.3.1')}</h1> 
              <img className='content-image' src='/assets/projektowanie.png' alt='projektowanie data center' />
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
           <h2>{t('Header3.3.3')}</h2> 
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
        <h2>{t('Header3.3.10')}</h2> 
        </div>
        <div className='description-box'>
          <span className='border-radius20'>{t('Header3.3.11')}</span><br></br>
          <span className='border-radius20'>{t('Header3.3.12')}</span><br></br>
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

export default withNamespaces()(HomePageProjecting);
