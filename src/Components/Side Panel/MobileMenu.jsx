import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { JobContext } from '../../Context/JobContext';
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdBriefcase } from "react-icons/io";


function MobileMenu({ t }) {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const { sidePanelOpen, handleClose } = useContext(JobContext);

  const toggleMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <div className="jm-sidebar-menu-wrapper fix">
      <div className="jm-mobile-menu mean-container">
        <div className="mean-bar">
          <Link to="#nav" className="meanmenu-reveal">
            <span><span><span /></span></span>
          </Link>
          <nav className="mean-nav">
            <ol>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/" onClick={() => window.location.replace("/#home")}><FaHome /> {t('title9.1')}</Link>
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/" onClick={() => window.location.replace("/#aboutus")}>{t('title9.2')}</Link>
              </li>
              <li className="menu-has-children">
                <Link to="#">
                  {t('Header3')}
                </Link>
                <ul className={`oferta-container-mobile`}>
                  <Link onClick={handleClose} to="/Serwerownie-Kontenerowe">
                    <li> {t('Header3.5')}</li>
                  </Link>
                  <Link onClick={handleClose} to="/Budowa-Data-Center">
                    <li>{t('Header3.1')}</li>
                  </Link>
                  <Link onClick={handleClose} to="/Audyt-Data-Center">
                    <li>{t('Header3.2')}</li>
                  </Link>
                  <Link onClick={handleClose} to="/Projektowanie-Data-Center">
                    <li>{t('Header3.3')}</li>
                  </Link>
                  <Link onClick={handleClose} to="/Serwis-Data-Center">
                    <li>{t('Header3.4')}</li>
                  </Link>
                </ul>
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/Kariera">{t('title9.3')}</Link>
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/Realizacje">{t('title9.4')}</Link>
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/Dzial-handlowy">{t('Header6')}</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default withNamespaces()(MobileMenu);
