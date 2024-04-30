import React from 'react'
import CountUp from 'react-countup'
import { withNamespaces } from 'react-i18next';

function Counter({ t }) {
  return (
    <section id='counter'>
            <h2>{t('title4')}</h2>
                    <div className="container light-bg pt-uptolg-100 pt-60 pb-60">
                       <div className="row justify-content-center width-100%">
                            <div className="#">
                             <div className="jm-video-content-wrapper text-center text-xl-start">
                                  <div className="jm-video-content-3 ml-80">
                                    <div className="jm-video-counter-3">
                                        <div className="jm-video-counter-item-3">
                                            <div className="jm-video-inner">
                                                <div className="jm-icon"><i className="fa-thin fas fa-server"></i></div>
                                                <div className="jm-video-counter-item-content">
                                                    <h2 className="title">
                                                        <span className="odometer mainCounter" data-count="140">
                                                            <CountUp enableScrollSpy={true} duration={4} end={94}/>
                                                        </span></h2>
                                                    <span className="subtitle">{t('title4.serwerownie')}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jm-video-counter-item-3">
                                            <div className="jm-video-inner">
                                                <div className="jm-icon"><i className="fa-thin fas fa-cogs"></i></div>
                                                <div className="jm-video-counter-item-content">
                                                    <h2 className="title">
                                                        <span className="odometer mainCounter" data-count="250">
                                                            <CountUp enableScrollSpy={true} duration={4} end={73}/>
                                                        </span></h2>
                                                    <span className="subtitle">{t('title4.serwisy')}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jm-video-counter-item-3">
                                            <div className="jm-video-inner">
                                                <div className="jm-icon"><i className="fa-thin fa-pen-fancy"></i></div>
                                                <div className="jm-video-counter-item-content">
                                                    <h2 className="title">
                                                        <span className="odometer mainCounter" data-count="199">
                                                            <CountUp enableScrollSpy={true} duration={4} end={98}/>
                                                        </span></h2>
                                                    <span className="subtitle">{t('title4.koncepcje')}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jm-video-counter-item-3">
                                            <div className="jm-video-inner">
                                                <div className="jm-icon"><i className="fa-thin fa-project-diagram"></i></div>
                                                <div className="jm-video-counter-item-content">
                                                    <h2 className="title">
                                                        <span className="odometer mainCounter" data-count="199">
                                                            <CountUp enableScrollSpy={true} duration={4} end={79}/>
                                                        </span></h2>
                                                    <span className="subtitle">{t('title4.projekty')}</span>
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

export default withNamespaces()(Counter);