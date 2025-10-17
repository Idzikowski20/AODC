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
                <Link to="/" onClick={() => { window.location.replace("/#home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{t('title9.1')}</Link>
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/" onClick={() => { window.location.replace("/#aboutus"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{t('title9.2')}</Link>
              </li>
              <li className="menu-has-children">
                <Link to="#">
                  {t('Header3')}
                </Link>
                <ul className={`oferta-container-mobile`}>
                  <Link onClick={() => { handleClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/Serwerownie-Kontenerowe">
                    <li> {t('Header3.5')}</li>
                  </Link>
                  <Link onClick={() => { handleClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/Budowa-Data-Center">
                    <li>{t('Header3.1')}</li>
                  </Link>
                  <Link onClick={() => { handleClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/Audyt-Data-Center">
                    <li>{t('Header3.2')}</li>
                  </Link>
                  <Link onClick={() => { handleClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/Projektowanie-Data-Center">
                    <li>{t('Header3.3')}</li>
                  </Link>
                  <Link onClick={() => { handleClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/Serwis-Data-Center">
                    <li>{t('Header3.4')}</li>
                  </Link>
                </ul>
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/Kariera" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('title9.3')}</Link>
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/Realizacje" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('title9.4')}</Link>
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                 <Link to="/Blog" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Blog</Link>
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/Dzial-handlowy" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('Header6')}</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default withNamespaces()(MobileMenu);
