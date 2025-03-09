import React from 'react';
import { withNamespaces } from 'react-i18next';
import { 
  FaTruckMoving, FaMagnet, FaFireExtinguisher, FaPlayCircle, FaShareAlt, 
  FaShippingFast, FaCloudscale, FaCoins, FaShieldAlt, FaInfoCircle, 
  FaComments, FaHandsHelping 
} from 'react-icons/fa';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function ContenerDataCenter({ t }) {
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Tytuł strony",
        text: "Artykuł na blogu AODC",
        url: window.location.href,
      })
      .then(() => console.log('Udostępniono!'))
      .catch((error) => console.log('Błąd przy udostępnianiu', error));
    } else {
      alert('Udostępnianie nie jest obsługiwane przez tę przeglądarkę');
    }
  };
  
  return (
    <div className="jm-server-area">
      <div className='bluur'></div>
      <div className='bluur2'></div>
      <div className="container-fluid p-0">
        <div className="jm-datacenter-wrap bg-default">
          <div className='content'>
            <h1>{t('Header3.5')}</h1> 
            <div className='server-box'>
              <video className='serwerownie-video' controls type="video/mp4" src='/assets/serwerownia.mp4' />
              <div className='server-box-span-top'>
                <span>{t('Header3.5.1')}</span>
                <div className='server-box-btn'>
                  <button className='server-btn'><FaPlayCircle />Kontakt</button>
                  <button className='share-button' onClick={handleShare}><FaShareAlt /></button>
                </div>
              </div>
            </div>
            
            <div className='content-buttons-con'>
              {[{
                icon: <FaTruckMoving />, text: 'Mobilność'
              }, {
                icon: <FaMagnet />, text: 'Szczelność elektromagnetyczna'
              }, {
                icon: <FaFireExtinguisher />, text: 'Ochrona przeciwpożarowa'
              }].map(({ icon, text }, index) => (
                <div key={index} className='content-buttons'>{icon}{text}</div>
              ))}
            </div>

            <div className='server-box-container-wide'>
              <div className='server-box-row'>
                <div className='server-box-column'>
                  <div className='content-buttons-con'>
                    {[{
                      icon: <FaShippingFast />, text: t('Header3.5.9')
                    }, {
                      icon: <FaCloudscale />, text: t('Header3.5.10')
                    }, {
                      icon: <FaCoins />, text: t('Header3.5.11')
                    }, {
                      icon: <FaShieldAlt />, text: t('Header3.5.12')
                    }].map(({ icon, text }, index) => (
                      <div key={index} className='content-buttons'>{icon}{text}</div>
                    ))}
                  </div>
                  <div className='server-box-reverse'>
                    <img className="server-datacenter-con-img" src="/assets/Serwerownia.webp" alt="Serwerownia" />
                    <div className='server-box-span'>
                      <div className='info-svg'><FaTruckMoving /></div>
                      <span>{t('Header3.5.20')}.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='server-box-bottom-row-reverse'>
              <div className='server-box-bottom-span'>
                <div className='info-svg'><FaHandsHelping /></div>
                {[...Array(5).keys()].map(i => (
                  <span key={i}>{t(`Header3.5.${i+2}`)}</span>
                ))}
              </div>
              <div className='server-box-bottom-image'>
                  <img src='/assets/datacenter1.jpg' alt='datacenter' />
              </div>
            </div>

            <div className='server-box-bottom-reverse'>
              <div className='server-box-bottom-span'>
                <span>Jak działamy?</span>
                <div className='info-svg'><FaInfoCircle /></div>
                <span className='border-radius20'>{t('Header3.5.14')}</span>
              </div>
              <div className='server-box-bottom-image-reverse'>
                  <img  src='/assets/datacenter2.jpg'  alt='datacenter' />
              </div>
            </div>

            <div className='description-box-contact-con'>
              <div className='description-box-contact'>
                <div className='description-box-contact-content'>
                  <div className='info-svg'><FaComments /></div>
                  <div className='description-box-contact-desc'>
                    <span className='border-radius20'>{t('Header3.5.16')}</span>
                  </div>
                  <button className='server-btn'>Kontakt</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default withNamespaces()(ContenerDataCenter);
