import React from 'react'
import CarrierPageImage from '../Video Area/CarrierPageImage'

const JobPageMain = () => {
  return (
    <>
    <CarrierPageImage />
    <section>
      <div className='job-title'>
      <h2>Oferty pracy</h2>
      </div>
    <div className='job-container'>
    <iframe loading='lazy' className='job-cards' src="https://widgets.commoninja.com/iframe/c0f6ec33-7637-4a93-becc-210c8c6b6b9c" frameborder="0" scrolling="no"></iframe>
  </div>
    </section>
    </>
  )
}

export default JobPageMain