import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { JobContext } from '../../Context/JobContext'

const Header2 = () => {
    const {handleOpenForm, isSticky,handleOpen} = useContext(JobContext)
  return (
    <header className="heater-transparent">
        <div className={`jm-header-area-2 jm-header-padding header-sticky ${isSticky? 'sticky': ''}`}>
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-xl-3 col-lg-3 col-7">
                        <div className="jm-header-logo jm-header-logo-2">
                            <Link className="jm-logo" to="/">
                                <img src="assets/img/logo/logowhite.png" alt="Image Not Fouund"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                        <div className="jm-header-main-menu text-center jm-header-menu-2">
                            <nav className="jm-mobile-menu" id="jm-mobile-menu">
                                <ul>
                                    <li className="menu-has-children">
                                        <Link to="/">Strona główna</Link>
                                    </li>
                                    <li className="menu-has-children">
                                        <Link to="#">O nas</Link>
                                    </li>
                                    <li className="menu-has-children">
                                        <Link to="#">Kariera</Link>
                                    </li>
                                    <li className="menu-has-children">
                                        <Link to="#">Realizacje</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="#">Realizacje1</Link></li>
                                            <li><Link to="#">Realizacje2</Link></li>
                                            <li><Link to="#">Realizacje3</Link></li>
                                            <li><Link to="#">Realizacje4</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-has-children">
                                        <Link to="#">Kontakt</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-5">
                        <div className="jm-header-right jm-header-right-2 text-end  d-flex align-items-center justify-content-end">
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
  )
}

export default Header2