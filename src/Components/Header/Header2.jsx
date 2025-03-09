import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../../Context/JobContext';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';
import { Trans } from 'react-i18next';

function Header2 ({ t }) {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const { handleOpenForm, isSticky, handleOpen } = useContext(JobContext);

    // Stan do przechowywania, czy menu jest rozwinięte
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Funkcja zmieniająca stan menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="heater-transparent">
            <div className={`jm-header-area-2 jm-header-padding header-sticky ${isSticky ? 'sticky' : ''}`}>
                <div className="px115 container">
                    <div className="px100 row">
                        <div className="px100 col-xl-3 col-lg-3 col-7">
                            <div className="jm-header-logo jm-header-logo-2">
                                <Link className="jm-logo" to="/">
                                    <img src="https://aodc.pl/assets/img/logo/logodark.png" alt="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}/>
                                </Link>
                            </div>
                        </div>
                        <div className="nav-mobile">
                            <Trans>
                                <div className="jm-header-main-menu text-center jm-header-menu-2">
                                    <nav className="jm-mobile-menu" id="jm-mobile-menu">
                                        <ol>
                                            <li className="menu-has-children" onClick={() => window.location.replace("/#home")}>
                                                <Link to="/">{t('Header1')}</Link>
                                            </li>
                                            <li className="menu-has-children" onClick={() => window.location.replace("/#aboutus")}>
                                                <Link to="/">{t('Header2')}</Link>
                                            </li>
                                            {/* Zmiana: Zmieniamy sposób rozwijania menu "Oferta" */}
                                            <li className="menu-has-children" onClick={toggleMenu}>
                                                <Link to="#">{t('Header3')}</Link>
                                                {isMenuOpen && (
                                                    <ul>
                                                        <div className='oferta-container'>
                                                            <div className='oferta-container-content'>
                                                                <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/Serwerownie-Kontenerowe"><li>{t('Header3.5')}</li></Link>
                                                                <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/Budowa-Data-Center"><li>{t('Header3.1')}</li></Link>
                                                                <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/Audyt-Data-Center"><li>{t('Header3.2')}</li></Link>
                                                                <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/Projektowanie-Data-Center"><li>{t('Header3.3')}</li></Link>
                                                                <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/Serwis-Data-Center"><li>{t('Header3.4')}</li></Link>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                )}
                                            </li>
                                            <li className="menu-has-children" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                                <Link to="/Kariera">{t('Header4')}</Link>
                                            </li>
                                            <li className="menu-has-children" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                                <Link to="/Realizacje">{t('Header5')}</Link>
                                            </li>
                                            <li className="menu-has-children" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                                <Link to="/Blog">Blog</Link>
                                            </li>
                                            <li className="menu-has-children" onClick={() => window.scrollTo({ top: 10000, behavior: "smooth" })}>
                                                <Link to="#">{t('Header6')}</Link>
                                            </li>
                                            <li className="menu-has-children">
                                                <Link target="_blank" to="https://aodcserwis.pl">
                                                    <button href="#" className="aodcserwis-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
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
                                                        <img className='aodcserwislogo' src="https://aodc.pl/assets/img/logo/aodc_biale.svg" alt="aodcserwislogo" height="50" width="50"/>
                                                    </button>
                                                </Link>
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </Trans>
                        </div>

                        <div className='mobile-menu-container'>
                            <div className="languageFlag">
                                <button className="first">
                                    <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="languageIconTitle" stroke="#ffffff" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000000">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title id="languageIconTitle">Language</title>
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path strokeLinecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"></path>
                                            <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"></path>
                                        </g>
                                    </svg>
                                </button>
                                <button className="second" onClick={() => changeLanguage('en')}>
                                    <img src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png"/>
                                </button>
                                <button className="third" onClick={() => changeLanguage('pl')}>
                                    <img src="https://cdn.countryflags.com/thumbs/poland/flag-400.png"/>
                                </button>
                            </div>
                            <div className="px100 menu-mobile jm-header-right jm-header-right-2 text-end  d-flex justify-content-center">
                                <div className="jm-navbar-mobile-sign side-toggle d-lg-none d-inline-block" role='button' onClick={handleOpen}>
                                    <span className="dr-line-1"></span>
                                    <span className="dr-line-2"></span>
                                    <span className="dr-line-3"></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default withNamespaces()(Header2);
