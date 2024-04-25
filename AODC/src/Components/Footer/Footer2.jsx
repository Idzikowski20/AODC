import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../../Components/Carousel/Carousel'

const Footer2 = () => {
  return (
    <footer className="jm-footer-area-3">
                        <Carousel />
            <div className="jm-footer-bottom-3">
                <div className="footer-container container">
                    <div className='footer-logo'>
                        <img  src='assets/img/logo/logodark.png' alt=''/>
                    </div>
                        {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7">
                            <div className="jm-footer-bottom-menu-3 mb-3 mb-sm-2 mb-lg-0 text-center text-sm-start">
                                <ul>
                                    <li><Link to="#">Strona główna</Link></li>
                                    <li><Link to="#">O nas</Link></li>
                                    <li><Link to="#">Kariera</Link></li>
                                    <li><Link to="#">Realizacje</Link></li>
                                    <li><Link to="#">Kontakt</Link></li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="footer-contact-container">
                             <div className="footer-contact jm-sidebar-contact mb-40">
                             <h4 className="jm-sidebar-contact-title">Kontakt</h4>
                             <Link to="mailto:biuro@aodc.pl" className="theme-3">
                                <i className="fal fa-envelope"></i>
                                    <span><span>biuro@aodc.pl</span></span>
                                        </Link>
                                             <Link to="tel:(+22)8463515">
                                                <i className="fal fa-phone"></i>
                                     <span>(+22) 846 35 15</span>
                                </Link>
                            </div>
                        </div>
                        <div className="footer-adress-container">
                             <div className="footer-adress jm-sidebar-contact mb-40">
                                    <h4 className="jm-sidebar-contact-title">Adres</h4>
                                         <span className="sidebar-address">
                                            <i className="fal fa-map-marker-alt"></i>
                                               <span>Działkowa 37, 02-234 Warszawa</span>
                                                   </span>
                                             <Link to="https://pl.linkedin.com/company/aodc" target="_blank" className="youtube">
                                          <i className="fab fa-instagram"></i>
                                    <span><span>Linkedin</span></span>
                                 </Link>
                            </div>
                        </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12 order-3 order-lg-2">
                            <div className="jm-footer-copyright-text-3 text-center">
                                <p>&copy; Copyright 2024 AODC Sp. z o.o. - Wszelkie prawa zastrzeżone. Stworzone przez <Link to="https://github.com/Idzikowski20" target="_blank">Patryk Idzikowski</Link>.</p>
                            </div>
                        </div>
                  </div>
        </footer>
  )
}

export default Footer2