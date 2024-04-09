import React from 'react'
import { Link } from 'react-router-dom'

const WorkArea = () => {
  return (
    <section className="jm-work-area-2 pb-60">
        <div className="container light-bg">
            <div className="row align-items-center">
                <div className="col-xl-3">
                    <div className="jm-work-left-2 mb-40 text-center text-xl-start">
                        <div className="jm-section-title mb-25">
                            <h2 className="title">Obszary
                                Działalności</h2>
                            <p className="text">Na których działamy</p>
                        </div>
                    </div>
                </div>
                <img className='bigbluur' src='public/assets/img/Bluur/Bluur.png'></img>
                <div className="col-xl-9">
                    <div className="jm-work-wrap-2 ml-40 mb-40">
                        <div className="row g-0">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2">
                                    <div className="jm-work-item-icon-2">
                                        <i className="fa-thin fa-user"></i>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title"><Link to="/serviceDetailsPage">Instytucje publiczne</Link></h4>
                                        <p>Przykładowy tekst</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2">
                                    <div className="jm-work-item-icon-2">
                                        <i className="fa-thin fa-magnifying-glass"></i>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title"><Link to="/serviceDetailsPage">Służby mundorowe</Link></h4>
                                        <p>Przykładowy tekst</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2">
                                    <div className="jm-work-item-icon-2">
                                        <i className="fa-thin fa-paper-plane"></i>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title"><Link to="/serviceDetailsPage">Szpitale</Link></h4>
                                        <p>Przykładowy tekst</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2 ">
                                    <div className="jm-work-item-icon-2">
                                        <i className="fa-thin fa-microchip"></i>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title"><Link to="/serviceDetailsPage">Przemysł</Link></h4>
                                        <p>Przykładowy tekst</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2 ">
                                    <div className="jm-work-item-icon-2">
                                        <i className="fa-thin fa-thumbs-up"></i>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title"><Link to="/serviceDetailsPage">Sektor finansowy</Link></h4>
                                        <p>Przykładowy tekst</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2">
                                    <div className="jm-work-item-icon-2">
                                        <i className="fa-thin fa-headset"></i>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title"><Link to="/serviceDetailsPage">Podmioty komercyjne</Link></h4>
                                        <p>Przykładowy tekst</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WorkArea