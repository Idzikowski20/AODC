import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  const [expandedMenus, setExpandedMenus] = useState([]);

  const handleMenuClick = (index) => {
    const updatedMenus = [...expandedMenus];
    if (updatedMenus.includes(index)) {
      updatedMenus.splice(updatedMenus.indexOf(index), 1);
    } else {
      updatedMenus.push(index);
    }
    setExpandedMenus(updatedMenus);
  };

  const isMenuExpanded = (index) => {
    return expandedMenus.includes(index);
  };

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
              <li className="menu-has-children">
                <Link to="/">Strona główna</Link>
              </li>
              <li className="menu-has-children">
                <Link to="/O-nas">O nas</Link>
              </li>
              <li className="menu-has-children">
                <Link to="/Kariera">Kariera</Link>
              </li>
              <li className="menu-has-children">
                <Link to="/Realizacje">Realizacje</Link>
                <ul className={`sub-menu ${isMenuExpanded(3) ? '' : 'd-none'}`}>
                  <li><Link to="#">Realizacje1</Link></li>
                  <li><Link to="/#">Realizacje2</Link></li>
                  <li><Link to="#">Realizacje2</Link></li>
                  <li><Link to="#">Realizacje3</Link></li>
                </ul>
                <Link className={`mean-expand ${isMenuExpanded(3) ? 'mean-clicked' : ''}`} role='button' to="#" onClick={() => handleMenuClick(3)}>{isMenuExpanded(3) ? '-' : '+'}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
