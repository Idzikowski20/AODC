import React from 'react'
import { Link } from 'react-router-dom'
import CarrierPageImage from '../Video Area/CarrierPageImage'

const JobPageMain = () => {
  return (
    <>
    <CarrierPageImage />
    <section>
    <div className='career-title'>
    <div>
    <p>Przed aplikacją na dane stanowisko prosimy o zapoznanie się z Polityką Prywatności.</p>
    </div>
    <div>
      <Link to="/Polityka">
      <button className="career-button">Polityka Prywatności</button>
      </Link>
    </div>
    </div>
    <div className='job-container'>
    <iframe loading='lazy' className='job-cards' src="https://widgets.commoninja.com/iframe/c0f6ec33-7637-4a93-becc-210c8c6b6b9c" frameborder="0" scrolling="no"></iframe>
  </div>
    </section>
    </>
  )
}

export default JobPageMain