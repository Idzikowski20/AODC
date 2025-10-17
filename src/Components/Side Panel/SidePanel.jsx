import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../../Context/JobContext';
import MobileMenu from './MobileMenu';
import { withNamespaces } from 'react-i18next';
import { IoIosArrowForward } from 'react-icons/io';

function SidePanel({ t }) {
    const {sidePanelOpen,handleClose} = useContext(JobContext)
  return (
    <>
      <div className={`jm-sidebar-info side-info ${sidePanelOpen ? 'info-open' : ''}`}>
        <div className="jm-sidebar-logo-wrapper mb-25">
          <div className="row align-items-center">
            <div className="col-xl-6 col-8">
              <div className="jm-sidebar-logo">
                <Link to="/" onClick={handleClose}>
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

        <div className="jm-sidebar-contact-wrapper mt-40">
          <div className="jm-sidebar-contact mb-40 flex justify-center flex-col items-start">
            <h4 className="jm-sidebar-contact-title">{t('title9')}</h4>
            <span className="sidebar-address">
              <i className="fal fa-map-marker-alt"></i>
              <span>Działkowa 37, 02-234 Warszawa</span>
            </span>
            <Link to="tel:(+22)8463515" onClick={handleClose}>
              <i className="fal fa-phone"></i>
              <span>(+22) 846 35 15</span>
            </Link>
            <Link to="mailto:biuro@aodc.pl" className="theme-3" onClick={handleClose}>
              <i className="fal fa-envelope"></i>
              <span><span>biuro@aodc.pl</span></span>
            </Link>
            <Link to="mailto:faktury@aodc.pl" className="theme-3" onClick={handleClose}>
              <i className="fal fa-envelope"></i>
              <span><span>faktury@aodc.pl</span></span>
            </Link>
            <Link to="/Dzial-handlowy" onClick={() => { handleClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                <i className="fa-solid fa-briefcase"></i>
                <span>{t('1')} </span><IoIosArrowForward />
             </Link>
          </div>
        </div>
      </div>
      <div className={`offcanvas-overlay ${sidePanelOpen ? 'overlay-open' : ''}`} onClick={handleClose}></div>
    </>
  );
};

export default withNamespaces()(SidePanel);
