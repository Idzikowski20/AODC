import React from 'react'
import CarrierPageImage from '../Video Area/CarrierPageImage'

const JobPageMain = () => {
  return (
    <div>
      <CarrierPageImage />
        <div className="carrier-aboutus-container">
        <div className="carrier-card-aboutus-container">
        <div className="carrier-card-aboutus">
          <div>
            <h1>Nasze wartości</h1>
            <p>Poznaj wartości, na których budujemy zarówno kulturę organizacyjną, jak i relacje z otoczeniem zewnętrznym.</p>
            <p>Każda z nich została zdefiniowana w Kodeksie Etyki przez przykłady zachowań, które wspierają realizację strategii biznesowej AODC.</p>
          </div>
          <div className="carrier-card-aboutus-img">
          <img src="assets/img/carrier/kodeks_intro.webp"></img>
          </div>
        </div>
        <div className='carrier-card-aboutus-container'>
          <div className='carrier-card-aboutus-buttons'>
            <button className='carrier-card-aboutus-button'>Współodpowiedzialność</button>
            <button className='carrier-card-aboutus-button'>Bezpieczeństwo</button>
            <button className='carrier-card-aboutus-button'>Projesjonalizm</button>
            <button className='carrier-card-aboutus-button'>Proaktywność</button>
            <button className='carrier-card-aboutus-button'>Szacunek</button>
            <button className='carrier-card-aboutus-button'>Zgodność</button>
          </div>
        </div>
        </div>
      </div>

      <div className='job-title'>
      <h2>Oferty pracy</h2>
      </div>
    <div className='job-container'>
    <iframe loading='lazy' className='job-cards' src="https://widgets.commoninja.com/iframe/c0f6ec33-7637-4a93-becc-210c8c6b6b9c" frameborder="0" scrolling="no"></iframe>
  </div>
    </div>
  )
}

export default JobPageMain