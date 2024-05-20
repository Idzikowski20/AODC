import React from 'react'

const JobPageMain = () => {
  return (
    <div>
      <div className="carrier-container">
        <div className="carrier-card-container">
        <div className="carrier-card">
          <div>
            <h1>Kariera w AODC</h1>
            <p>Łączymy najnowsze technologie i ludzi,którzy je tworzą.</p>
            <button className="carrier-card-button">Sprawdź oferty</button>
          </div>
          <div className="carrier-card-img">
          <img src="assets/img/carrier/header.svg"></img>
          </div>
        </div>
        </div>
      </div>

      <div className='carrier-card-desc-container'>
        <div className='carrier-card-desc'>
        <div>
          <p>Jesteśmy młodą firmą, aspirującą do bycia ważną częścią rewolucyjnej zmiany technologicznej w Polsce. Każdy z nas ma wpływ na tempo, w jakim rozwiązania chmurowe będą stawały się nowym standardem IT.</p>
        </div>
        <div>
          <p>Zwinna kultura pracy w ramach interdyscyplinarnych zespołów projektowych jest gwarantem skutecznej współpracy wewnątrz organizacji. Tworzymy innowacyjne rozwiązania, inspirujemy i dzielimy się zdobytą wiedzą i doświadczeniem.</p>
        </div>
        <div className='carrier-card-why-container'>
          <div className='carrier-card-why'>

            <div className='carrier-card-why-inside'>
              <div>
                <h2>Nowatorskie projekty</h2>
                <p>Bierzemy udział w nowatorskich projektach, które wyznaczają kierunek dalszych zmian i rozwoju cyfrowego polskich firm.</p>
              </div>
            <div className='carrier-card-why-img'>
            <img src='assets/img/carrier/icon-cloud.png'></img>
          </div>
            </div>

            <div className='carrier-card-why-inside'>
              <div>
                <h2>Zdobywanie certyfikatów</h2>
                <p>Dajemy możliwość współpracy z najlepszymi ekspertami z branży, oferujemy wsparcie w zdobywaniu liczących się na rynku certyfikatów.</p>
              </div>
            <div className='carrier-card-why-img'>
            <img src='assets/img/carrier/icon-certifications.png'></img>
          </div>
            </div>
            </div>

          </div>
        </div>

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
      </div>

      <div className="carrier-benefit-container">
        <div className="carrier-card-benefit-container">
        <div className="carrier-card-benefit">
          <div>
            <h1>Nasze wartości</h1>
            <p>Poznaj wartości, na których budujemy zarówno kulturę organizacyjną, jak i relacje z otoczeniem zewnętrznym.</p>
            <p>Każda z nich została zdefiniowana w Kodeksie Etyki przez przykłady zachowań, które wspierają realizację strategii biznesowej AODC.</p>
          </div>
          <div className="carrier-card-benefit-img">
          <img src="assets/img/carrier/benefit-welcome.svg"></img>
          </div>
        </div>
        </div>
      </div>

        {/* <JobPageImage /> */}
    <div className='job-container'>
    <iframe loading='lazy' className='job-cards' src="https://widgets.commoninja.com/iframe/c0f6ec33-7637-4a93-becc-210c8c6b6b9c" frameborder="0" scrolling="no"></iframe>
  </div>
    </div>
  )
}

export default JobPageMain