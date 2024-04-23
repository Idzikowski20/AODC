import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../../Components/Carousel/Carousel'

const Footer2 = () => {
  return (
    <footer className="jm-footer-area-3">
            <div className="jm-footer-bottom-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7">
                            <div className="jm-footer-bottom-menu-3 mb-3 mb-sm-2 mb-lg-0 text-center text-sm-start">
                                <ul>
                                    <li><Link to="#">Strona główna</Link></li>
                                    <li><Link to="#">O nas</Link></li>
                                    <li><Link to="#">Kariera</Link></li>
                                    <li><Link to="#">Realizacje</Link></li>
                                    <li><Link to="#">Kontakt</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 order-3 order-lg-2">
                            <div className="jm-footer-copyright-text-3 text-center">
                                <p>&copy; Copyright 2024 AODC Sp. z o.o. - Wszelkie prawa zastrzeżone. Stworzone przez <Link to="https://github.com/Idzikowski20" target="_blank">Patryk Idzikowski</Link>.</p>
                            </div>
                        </div>
                        <div className="linkedin col-xl-3 col-lg-3 col-md-6  col-sm-5 order-2 order-lg-3">
                                                <div className="jm-sidebar-contact-wrapper mt-40">
                            <div className="jm-sidebar-contact mb-40">
                                <Link to="https://pl.linkedin.com/company/aodc" target="_blank" className="youtube">
                                <i className="fab fa-instagram"></i>
                                <span><span>Linkedin</span></span>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel />
            </div>
        </footer>
  )
}

export default Footer2