import React, { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { JobContext } from '../../Context/JobContext';

function MobileMenu({ t }) {
  const [expandedMenus, setExpandedMenus] = useState([]);
  const {sidePanelOpen,handleClose} = useContext(JobContext)

  // const handleMenuClick = (index) => {
  //   const updatedMenus = [...expandedMenus];
  //   if (updatedMenus.includes(index)) {
  //     updatedMenus.splice(updatedMenus.indexOf(index), 1);
  //   } else {
  //     updatedMenus.push(index);
  //   }
  //   setExpandedMenus(updatedMenus);
  // };

  // const isMenuExpanded = (index) => {
  //   return expandedMenus.includes(index);
  // };

  return (
    <div className="jm-sidebar-menu-wrapper fix">
      <div className="jm-mobile-menu mean-container">
        <div className="mean-bar">
          <Link to="#nav" className="meanmenu-reveal">
            <span><span><span /></span></span>
          </Link>
          <nav className="mean-nav">
            <ol>
            <div className="mean-bar">
              <Link to="#nav" className="meanmenu-reveal">
                <span><span><span /></span></span>
              </Link>
            </div>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/" onClick={() => window.location.replace("/#home")}>{t('title9.1')}</Link>
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/" onClick={() => window.location.replace("/#aboutus")}>{t('title9.2')}</Link >
              </li>
              <li className="menu-has-children" ><Link to="/">{t('Header3')}</Link>
                  <ul className='oferta-container-mobile'>
                  <Link onClick={handleClose} to="/Serwerownie-Kontenerowe"> <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('Header3.5')}</li></Link>
                  <Link onClick={handleClose} to="/Budowa-Data-Center"> <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('Header3.1')}</li></Link>
                  <Link  onClick={handleClose} to="/Audyt-Data-Center">   <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('Header3.2')}</li></Link>
                  <Link  onClick={handleClose}  to="/Projektowanie-Data-Center">     <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('Header3.3')}</li></Link>
                  <Link  onClick={handleClose} to="/Serwis-Data-Center">      <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('Header3.4')}</li></Link>
                  </ul>
               </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/Kariera" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('title9.3')}</Link>
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/Realizacje" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('title9.4')}</Link>
              </li>
              <li className="menu-has-children">
                 {/* <Link to="#">A<span className="O-Red">O</span>DC SERWIS</Link> */}
                 <Link target="_blank" to="https://aodcserwis.pl">
                      <button href="#" className="aodcserwis-button">
                                                            <span className="aodcserwis-button__icon-wrapper">
                                                            <svg
                                                                viewBox="0 0 14 15"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="aodcserwis-button__icon-svg"
                                                                width="10"
                                                            >
                                                                <path
                                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                                fill="currentColor"
                                                                ></path>
                                                            </svg>
                
                                                            <svg
                                                                viewBox="0 0 14 15"
                                                                fill="none"
                                                                width="10"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="aodcserwis-button__icon-svg aodcserwis-button__icon-svg--copy"
                                                            >
                                                                <path
                                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                                fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                            </span>
                                                        <img className='aodcserwislogo' src="assets/img/logo/aodc_biale.svg" alt="aodcserwislogo" height="80" width="80"/>
                       </button>
                    </Link>
                </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(MobileMenu);
