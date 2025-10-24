import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../../Components/Carousel/Carousel'
import { withNamespaces } from 'react-i18next';
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Footer2({ t }) {
  return (
    <footer id='footer' className="jm-footer-area-3">
             <Carousel />
            <div className="jm-footer-bottom-3">
                <div className="footer-container">
                    <div className='footer-logo'>
                        <img  src='https://aodc.pl/assets/img/logo/logodark.png' alt=''/>
                        <span>NIP: 679-311-76-21, REGON: 362779750</span>
                    </div>
                        <div className="footer-contact-container">
                             <div className="footer-contact jm-sidebar-contact mb-40">
                             <h4 className="jm-sidebar-contact-title">{t('title7.3')}</h4>
                             <Link to="mailto:biuro@aodc.pl" className="theme-3">
                                <i className="fas fa-envelope"></i>
                                <span><span>biuro@aodc.pl</span></span>
                            </Link>
                                <Link to="mailto:faktury@aodc.pl" className="theme-3">
                                    <i className="fas fa-envelope"></i>
                                    <span><span>faktury@aodc.pl</span></span>
                                </Link>
                                    <Link to="tel:(+22)8463515">
                                        <i className="fal fa-phone"></i>
                                        <span>(+22) 846 35 15</span>
                                    </Link>
                                <Link to="/Dzial-handlowy" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                    <i class="fa-solid fa-briefcase"></i>
                                    <span>{t('1')} </span><IoIosArrowForward />
                                </Link>
                            </div>
                        </div>


                        <div className="footer-adress-container">
                             <div className="footer-adress jm-sidebar-contact">
                                    <h4 className="jm-sidebar-contact-title">{t('title7.4')}</h4>
                                    <div className=''>
                                    <Link to="https://maps.app.goo.gl/HEjxiQmK4aHDSqH86" target="_blank" className="youtube">
                                         <span className="sidebar-address">
                                                 <i className="fal fa-map-marker-alt"></i>
                                                <span>Działkowa 37, 02-234 Warszawa</span>
                                        </span>
                                     </Link>
                                    </div>
                                    </div>
                                    
                                    <div className='socialmedia-container'>
                                    <div className='jm-sidebar-contact-title'>
                                    <h4 className="">{t('title7.7')}</h4>
                                    </div>
                                    <div className='socialmedia-icon-container'>
                                    <div className='socialmedia-icon'>
                                        <Link to="https://pl.linkedin.com/company/aodc" target="_blank" className="youtube">
                                        <FaLinkedin />
                                         </Link>
                                        </div>
                                        <div className='socialmedia-icon'>
                                        <Link to="https://www.youtube.com/@AODCSp.zo.o" target="_blank" className="youtube">
                                        <FaYoutube />
                                         </Link>
                                        </div>
                                        <div className='socialmedia-icon'>
                                        <Link to="https://www.tiktok.com/@aodcartofdatacenter" target="_blank" className="youtube">
                                        <FaTiktok />
                                        </Link>
                                        </div>
                                    </div>
                                 </div>
                        </div>


                </div>
                {/* <ContactForm /> */}
                
                <hr className='light:border-gray-200 dark:border-gray-800 mb-8' />

                <div className='footer-bottom-container'>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', textAlign: 'center', margin: '0' }}>{t('clarity.footer')}<Link to="/Privacy" style={{ color: '#c23c52', }}> {t('clarity.footer.link')}</Link></p>
                </div>

                <div className="footer-bottom-links">
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0' }}>
                        {t('title7.5')}<a href='https://idztech.pl' target='_blank' rel="noopener noreferrer" style={{ color: '#c23c52', textDecoration: 'none' }}>  {t('title7.6')}</a>
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
                            <Link to="/Privacy" style={{ color: '#6b7280', textDecoration: 'none', }}>{t('polityka3')}</Link>
                            <Link to="/Privacy" style={{ color: '#6b7280', textDecoration: 'none', }}>{t('polityka3.2')}</Link>
                    </div>
                </div>
                <style>{`
                    .footer-bottom-links {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 1rem;
                    }
                    @media (min-width: 768px) {
                        .footer-bottom-links {
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                        }
                    }
                `}</style>

                </div>
                  </div>
        </footer>
  )
}

export default withNamespaces()(Footer2);