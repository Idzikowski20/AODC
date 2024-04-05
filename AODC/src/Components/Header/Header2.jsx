import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { JobContext } from '../../Context/JobContext'

const Header2 = () => {
    const {isSticky} = useContext(JobContext)
  return (
    <header className="heater-transparent">
        <div className={`jm-header-area-2 jm_border_bottom jm-header-padding header-sticky ${isSticky? 'sticky': ''}`}>
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
                                        <a>O nas</a>
                                    </li>
                                    <li className="menu-has-children">
                                        <Link to="/kariera">Kariera</Link>
                                    </li>
                                    <li className="menu-has-children">
                                        <Link to="#">Realizacje</Link>
                                    </li>
                                    <li className="menu-has-children">
                                        <Link to="/blogPage">Kontakt</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </header>
  )
}

export default Header2