import React from 'react'
import CountUp from 'react-countup'

const Counter = () => {
  return (
    <section>
        <span>Wykonane</span>
            <h2>REALIZACJE</h2>
                    <div className="container light-bg pt-uptolg-100 pt-60 pb-60">
                       <div className="row justify-content-center width-100%">
                            <div className="#">
                             <div className="jm-video-content-wrapper text-center text-xl-start">
                                  <div className="jm-video-content-3 ml-80">
                                    <div className="jm-video-counter-3">
                                        <div className="jm-video-counter-item-3">
                                            <div className="jm-video-inner">
                                                <div className="jm-icon"><i className="fa-thin fa-user"></i></div>
                                                <div className="jm-video-counter-item-content">
                                                    <h2 className="title">
                                                        <span className="odometer mainCounter" data-count="140">
                                                            <CountUp duration={4} end={94}/>
                                                        </span></h2>
                                                    <span className="subtitle">Serwerownie</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jm-video-counter-item-3">
                                            <div className="jm-video-inner">
                                                <div className="jm-icon"><i className="fa-thin fa-gem"></i></div>
                                                <div className="jm-video-counter-item-content">
                                                    <h2 className="title">
                                                        <span className="odometer mainCounter" data-count="250">
                                                            <CountUp duration={4} end={73}/>
                                                        </span></h2>
                                                    <span className="subtitle">Serwisy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jm-video-counter-item-3">
                                            <div className="jm-video-inner">
                                                <div className="jm-icon"><i className="fa-thin fa-address-card"></i></div>
                                                <div className="jm-video-counter-item-content">
                                                    <h2 className="title">
                                                        <span className="odometer mainCounter" data-count="199">
                                                            <CountUp duration={4} end={98}/>
                                                        </span></h2>
                                                    <span className="subtitle">Koncepcje</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jm-video-counter-item-3">
                                            <div className="jm-video-inner">
                                                <div className="jm-icon"><i className="fa-thin fa-address-card"></i></div>
                                                <div className="jm-video-counter-item-content">
                                                    <h2 className="title">
                                                        <span className="odometer mainCounter" data-count="199">
                                                            <CountUp duration={4} end={79}/>
                                                        </span></h2>
                                                    <span className="subtitle">Projekty</span>
                                                </div>
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

export default Counter