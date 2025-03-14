import React, { useState, useRef } from 'react'; // Dodanie useState i useRef
import { withNamespaces } from 'react-i18next';
import { 
  FaTruckMoving, FaMagnet, FaFireExtinguisher, FaPlayCircle, FaShareAlt, 
  FaShippingFast, FaCloudscale, FaCoins, FaShieldAlt, FaInfoCircle, 
  FaComments
} from 'react-icons/fa';
import { GrContact,GrSettingsOption,GrClose } from "react-icons/gr";
import ContainerFirstTab from '../CardsContainer/ContainerFirstTab';
import ContainerSecondTab from "../CardsContainer/ContainerSecondTab";
import ContainerThirdTab from "../CardsContainer/ContainerThirdTab";
import ContainerFourthTab from "../CardsContainer/ContainerFourthTab";
import BasicForm from '../BasicForm/BasicForm'; // Import formularza

function ContenerDataCenter({ t }) {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isModalOpen, setIsModalOpen] = useState(false); // Stan do otwierania/zamykania popupu

  const formRef = useRef(null); // Ref do sekcji formularza
  
  const handleTab1 = () => setActiveTab("tab1");
  const handleTab2 = () => setActiveTab("tab2");
  const handleTab3 = () => setActiveTab("tab3");
  const handleTab4 = () => setActiveTab("tab4");

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

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Przełącz stan modalu
  };

  // Funkcja do przewijania do formularza kontaktowego
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="jm-server-area">
      <div className="container-fluid p-0">
      <div className='bluur'></div>
      <div className='bluur2'></div>
        <div className="jm-datacenter-wrap bg-default">
          <div className='content'>
            <h1>{t('Header3.5')}</h1> 
            <div className='server-box'>
              <div className='server-box-span-top'>
                <span>{t('Header3.5.1')}</span>
                <div className='server-box-btn'>
                  <button className='server-btn' onClick={scrollToForm}><FaPlayCircle />Kontakt</button>
                  <button className='share-button' onClick={handleShare}><FaShareAlt /></button>
                </div>
              </div>
            </div>

            <div className='serwerownie-video-container'>
              <video className='serwerownie-video' controls type="video/mp4" src='/assets/serwerownia.mp4' />
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
                  <div className='server-box-reverse'>
                    <img className="server-datacenter-con-img" src="/assets/Serwerownia.webp" alt="Serwerownia" />
                    <div className='server-box-span-mid'>
                      <span>{t('Header3.5.2')}</span><br /><br />
                      <p>{t('Header3.5.3')}</p>
                      <p>{t('Header3.5.4')}</p>
                      <p>{t('Header3.5.5')}</p>
                      <p>{t('Header3.5.6')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='server-box-bottom-row-reverse'>
              <div className='server-box-bottom-span'>
                <span>{t('Header3.5.7')}</span>
                <span>{t('Header3.5.8')}</span><br />
                <div className='info-svg'><FaInfoCircle /></div>
                <p>● {t('Header3.5.9')}</p>
                <p>● {t('Header3.5.10')}</p>
                <p>● {t('Header3.5.11')}</p>
                <p>● {t('Header3.5.12')}</p>
              </div>
              <div className='server-box-bottom-image'>
                <img  src='/assets/datacenter2.jpg'  alt='datacenter' />
              </div>
            </div>

            <div className='whyaodc-container'>
              <div className='content-buttons-con'>
                {[{
                  icon: <FaShippingFast />, text: t('Header3.5.9'), handleTab: () => setActiveTab("tab1")
                }, {
                  icon: <FaCloudscale />, text: t('Header3.5.10'), handleTab: () => setActiveTab("tab2")
                }, {
                  icon: <FaCoins />, text: t('Header3.5.11'), handleTab: () => setActiveTab("tab3")
                }, {
                  icon: <FaShieldAlt />, text: t('Header3.5.12'), handleTab: () => setActiveTab("tab4")
                }].map(({ icon, text, handleTab }, index) => (
                  <div 
                    key={index} 
                    className={`content-buttons  ${activeTab === `tab${index + 1}` ? "active" : ""}`} 
                    onClick={handleTab}
                  >
                    {icon}{text}
                  </div>
                ))}
              </div>
              <div className="whyaodcdatacenter-container">
                <div className="whyaodcdatacenter-tabs-container">
                  {activeTab === "tab1" && <ContainerFirstTab />}
                  {activeTab === "tab2" && <ContainerSecondTab />}
                  {activeTab === "tab3" && <ContainerThirdTab />}
                  {activeTab === "tab4" && <ContainerFourthTab />}
                </div>
              </div>
            </div>

            <div className='server-box-bottom-reverse'>
              <div className='server-box-bottom-span'>
                <span>{t('Header3.5.13')}</span><br /><br />
                <div className='info-svg'><GrSettingsOption /></div>
                <p >{t('Header3.5.14')}</p>
              </div>
              <div className='server-box-bottom-image-reverse'>
                <img  src='/assets/datacenter1.jpg'  alt='datacenter' />
              </div>
            </div>

            {/* Sekcja formularza kontaktowego */}
            <div ref={formRef} className='description-box-contact-con'>
              <div className='description-box-contact'>
                <div className='description-box-contact-content'>
                  <div className='info-svg'><FaComments /></div>
                  <div className='description-box-contact-desc'>
                    <span>{t('Header3.5.15')}</span><br /><br />
                    <span>{t('Header3.5.16')}</span>
                  </div>
                  <button className='server-btn' onClick={handleModalToggle}><GrContact />  Formularz kontaktowy</button>
                </div>
              </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="modal-overlay">
                <div className="modal">
                  <button className="modal-close" onClick={handleModalToggle}><GrClose /></button>
                  <h2>Kontakt</h2>
                  <BasicForm />
                  <p>Pozwól nam zadbać o przyszłość Twojej infrastruktury IT – z nami Twoje dane są zawsze bezpieczne i dostępne.</p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default withNamespaces()(ContenerDataCenter);
