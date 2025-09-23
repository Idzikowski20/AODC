import React from 'react'
import { withNamespaces } from 'react-i18next';

function WorkArea({ t }) {
  return (
    <section>
        <h2>{t('title5')}</h2>
        <div className="">
            <div className="display-flex row align-items-center">
                <div className="col-xl-9 width-100">
                    <div className="jm-work-wrap-2">
                        <div className="row g-0">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2">
                                    <div className="workarea-img">
                                        <img className='counter-img' src='assets/img/workarea/bank.png'></img>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title">{t('title5.1')}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2">
                                <div className="workarea-img">
                                    <img className='counter-img'  src='assets/img/workarea/rocket-takeoff.png'></img>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title">{t('title5.2')}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2">
                                <div className="workarea-img">
                                    <img className='counter-img'  src='assets/img/workarea/hospital.png'></img>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title">{t('title5.3')}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2 ">
                                <div className="workarea-img">
                                    <img className='counter-img' src='assets/img/workarea/building-gear.png'></img>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title">{t('title5.4')}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2 ">
                                <div className="workarea-img">
                                    <img className='counter-img'  src='assets/img/workarea/currency-dollar.png'></img>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title">{t('title5.5')}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 jm-border-2">
                                <div className="jm-work-item-2">
                                <div className="workarea-img">
                                    <img className='counter-img'  src='assets/img/workarea/bar-chart.png'></img>
                                    </div>
                                    <div className="jm-work-item-content-2">
                                        <h4 className="title">{t('title5.6')}</h4>
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

export default withNamespaces()(WorkArea);