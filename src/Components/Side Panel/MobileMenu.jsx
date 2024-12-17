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
            <div className="mean-bar">
              <Link to="#nav" className="meanmenu-reveal">
                <span><span><span /></span></span>
              </Link>
            </div>
            <ul>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/" onClick={() => window.location.replace("/#home")}>{t('title9.1')}</Link>
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/" onClick={() => window.location.replace("/#aboutus")}>{t('title9.2')}</Link >
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/Kariera" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('title9.3')}</Link>
              </li>
              <li className="menu-has-children" onClick={handleClose}>
                <Link to="/Realizacje" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t('title9.4')}</Link>
              </li>
              <li className="menu-has-children">
                 {/* <Link to="#">A<span className="O-Red">O</span>DC SERWIS</Link> */}
                <Link target="_blank" to="https://aodcserwis.pl"><img className='aodcserwislogo' src="assets/img/logo/aodc_biale.svg" height="110" width="110" alt="" /></Link>
                </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(MobileMenu);
