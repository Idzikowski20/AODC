import React from 'react'
import CountUp from 'react-countup'

const Counter = () => {
  return (
    <div className="container light-bg pt-uptolg-100 pt-60 pb-60">
        <div className="row justify-content-end">
            <div className="col-xl-6 col-lg-12">
                <div className="jm-video-content-wrapper text-center text-xl-start">
                    <div className="jm-video-content-3 ml-80">
                        <div className="jm-section-title mb-40">
                            <span className="subtitle">AODC</span>
                            <div className="jm-video-info-3">
                                <h2 className="title">Sprawdź prezentacje naszej firmy.</h2>
                                <p  className="text">???</p>
                            </div>
                        </div>
                        <div className="jm-video-counter-3">
                            <div className="jm-video-counter-item-3">
                                <div className="jm-video-inner">
                                    <div className="jm-icon"><i className="fa-thin fa-user"></i></div>
                                    <div className="jm-video-counter-item-content">
                                        <h2 className="title">
                                            <span className="odometer mainCounter" data-count="140">
                                                <CountUp duration={8} end={100}/>
                                            </span>+</h2>
                                        <span className="subtitle">Pracowników</span>
                                    </div>
                                </div>
                            </div>
                            <div className="jm-video-counter-item-3">
                                <div className="jm-video-inner">
                                    <div className="jm-icon"><i className="fa-thin fa-gem"></i></div>
                                    <div className="jm-video-counter-item-content">
                                        <h2 className="title">
                                            <span className="odometer mainCounter" data-count="250">
                                                <CountUp duration={8} end={220}/>
                                            </span>+</h2>
                                        <span className="subtitle">Kontraktów</span>
                                    </div>
                                </div>
                            </div>
                            <div className="jm-video-counter-item-3">
                                <div className="jm-video-inner">
                                    <div className="jm-icon"><i className="fa-thin fa-address-card"></i></div>
                                    <div className="jm-video-counter-item-content">
                                        <h2 className="title">
                                            <span className="odometer mainCounter" data-count="199">
                                                <CountUp duration={8} end={20}/>
                                            </span>+</h2>
                                        <span className="subtitle">Lat na rynku</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter