import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../../Context/JobContext';
import MobileMenu from './MobileMenu';
import { withNamespaces } from 'react-i18next';

function SidePanel({ t }) {
    const {sidePanelOpen,handleClose} = useContext(JobContext)
  return (
    <>
      <div className={`jm-sidebar-info side-info ${sidePanelOpen ? 'info-open' : ''}`}>
        <div className="jm-sidebar-logo-wrapper mb-25">
          <div className="row align-items-center">
            <div className="col-xl-6 col-8">
              <div className="jm-sidebar-logo">
                <Link to="/">
                  <img src="assets/img/logo/logodark.png" alt="logo-img" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-4">
              <div className="jm-sidebar-close-wrapper text-end">
                <button className="jm-sidebar-close side-info-close" onClick={handleClose}>
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <MobileMenu handleClose={handleClose}/>

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
                                    <span>{t('1')} </span>
                                </Link>
                            </div>
                        </div>
      </div>
      <div className={`offcanvas-overlay ${sidePanelOpen ? 'overlay-open' : ''}`} onClick={handleClose}></div>
    </>
  );
};

export default withNamespaces()(SidePanel);
