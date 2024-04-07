import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { JobContext } from '../../Context/JobContext'

const Header = () => {
    const {handleOpenForm, isSticky,handleOpen} = useContext(JobContext)
  return (
    <header className="heater-transparent">
        <div className={`jm-header-area header-sticky ${isSticky? 'sticky': ''}`}>
            <div className="container">
                <div className="jm-header-top d-none d-md-block">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-md-8">
                            <div className="jm-header-top-cta">
                                <span><i className="fas fa-map-marker-alt"> Dzialkowa 37, Warszawa</i></span>
                                <span><i className="fal fa-clock"></i>Pn-pt 8:00 - 16:00</span>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-4">
                            <div className="jm-header-top-social">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="jm-header-main jm-header-padding ">
                    <div className="row align-items-center ">
                        <div className="col-xl-3 col-lg-3  col-7">
                            <div className="jm-header-logo">
                                <Link className="jm-logo" to="/">
                                    <img src="assets/img/logo/logo.png" alt="Image Not Fouund"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                            <div className="jm-header-main-menu text-center" >
                                <nav className="jm-mobile-menu" id="jm-mobile-menu">
                                    <ul>
                                        <li className="menu-has-children">
                                            <Link to="/">Strona główna</Link>
                                        </li>
                                        <li className="menu-has-children">
                                            <Link to="/jobPage">O nas</Link>
                                        </li>
                                        <li className="menu-has-children">
                                            <Link to="#">Kariera</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/JobPage">Oferty pracy</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-has-children">
                                            <Link to="/jobPage">Realizacje</Link>
                                        </li>
                                        <li className="menu-has-children">
                                            <Link to="/jobPage">Kontakt</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-5">
                            <div className="jm-header-right  text-end d-flex align-items-center justify-content-end">
                                <Link to="#" className="jm-theme-btn d-none d-lg-block">Zaloguj</Link>
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
        </div>
    </header>
  )
}

export default Header