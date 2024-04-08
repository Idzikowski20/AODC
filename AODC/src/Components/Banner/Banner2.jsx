import React from 'react'
import { Link } from 'react-router-dom'
import Scene from '../3Dscene/3Dscene.jsx'

const Banner2 = () => {
  return (
    <section className="jm-banner-area-2 banner-hieght bg-default jm-overlay h-jobmot-banner-2">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='bluur'></div>
                    <div className="jm-banner-content-static">
                        <div className="jm-banner-content-haed text-center">
                            <h1 className="jm-banner-content-title-3">
                               Sztuka rozwiązań<br/>
                            </h1>
                            <h2 className="jm-banner-sub-text"> Dla data center </h2>
                            <div className='bluur2'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center h-screen w-screen">
                            <Scene />
                        </div>
    </section>
  )
}

export default Banner2