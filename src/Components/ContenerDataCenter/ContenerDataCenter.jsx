import React from 'react'
import { withNamespaces } from 'react-i18next';
import { FaTruckMoving } from "react-icons/fa";
import { FaMagnet } from "react-icons/fa";
import { FaFireExtinguisher } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
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
              <div className='server-box'>
              <img  className="server-datacenter-con-img" src="/assets/Serwerownia.webp" />
              <br></br>
              <div className='server-box-span'>
              <span>{t('Header3.5.1')}</span><br></br>
              <div className='server-box-btn'>
              <button className='server-btn'><FaPlayCircle />Prezentacja</button>
              </div>
              </div>
              </div>
                <div className='content-buttons-con'>
                  <div className='content-buttons'>
                    <FaTruckMoving />
                    Mobilność
                  </div>
                  <div className='content-buttons'>
                    <FaMagnet />
                    Szczelność elektromagnetyczna
                  </div>
                  <div className='content-buttons'>
                    <FaFireExtinguisher />
                    Ochrona przeciwpożarowa
                  </div>
                </div>
                <div className='server-box-reverse'>
              <img  className="server-datacenter-con-img" src="/assets/szafa.webp" />
              <br></br>
              <div className='server-box-span'>
              <span>{t('Header3.5.20')}</span><br></br>
              </div>
              </div>
              <div className='description-title'>
        <h4>{t('Header3.5.17')}</h4> 
        </div>
        <div className='description-box'>
        <div className='serwerownie-video-con'>
          <video className='serwerownie-video' controls type="video/mp4" src='/assets/serwerownia.mp4' />
        </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    <div className='description-container'>
     <div className='server-box-container-wide'>
      <div className='server-box-row'>
      <div className='description-box'>
            <img  className="datacenter-con-img" src="/assets/datacenterbg.png" />
              {/* <strong className='server-span'><span>{t('Header3.5.8')}</span></strong><br></br> */}
              <span>{t('Header3.5.8')}</span><br></br>
              <span>{t('Header3.5.9')}</span>
              <span>{t('Header3.5.10')}</span>
              <span>{t('Header3.5.11')}</span>
              <span>{t('Header3.5.12')}</span>
              </div>
            </div>
            <div className='description-box'>
            <img  className="datacenter-con-img" src="/assets/datacenterbg2.png" />
            <br></br>
              <span>{t('Header3.5.2')}</span><br></br>
              <span>{t('Header3.5.3')}</span>
              <span>{t('Header3.5.4')}</span>
              <span>{t('Header3.5.5')}</span>
              <span>{t('Header3.5.6')}</span>
            </div>
        <div className='description-title'>
        <h4>{t('Header3.5.13')}</h4> 
        </div>
        <div className='description-box'>
          <span className='border-radius20'>{t('Header3.5.14')}</span><br></br>
        </div>
        <div className='description-title'>
        <h4>{t('Header3.5.15')}</h4> 
        </div>
          <div className='server-box-contact-con'>
            <div>
              <div className='description-box'>
              <span className='border-radius20'>{t('Header3.5.16')}</span><br></br>
            </div>
            <div>
              Contact form
            </div>
            </div>
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
