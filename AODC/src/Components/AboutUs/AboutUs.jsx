import React from 'react'

const AboutUs = () => {
  return (
    <section>
  <h2>O NAS</h2>
  <article className="postcard dark blue">
        <a className="postcard__img_link" href="#">
          <img className="postcard__img" src="https://picsum.photos/500/501" alt="Image Title" />
        </a>
        <div className="postcard__text">
          <div className="postcard__preview-txt">
          <div className='title-before'>
          AODC to firma, która powstała z pasji tworzenia najlepszych serwerowni, a jej zarząd i pracownicy, to osoby z prawie dwudziestoletnim doświadczeniem i wiedzą operacyjną w tworzeniu i zarządzaniu implementacją centrów przetwarzania danych od etapu koncepcji, projektu, po etapy budowy, wdrożenia, optymalizacji oraz serwisu. <span className='card-read-more'>Czytaj dalej..</span>
              </div>
              <div className='title-after'>
              AODC posiada unikatowy zakres wiedzy praktycznej oraz teoretycznej zweryfikowany udanymi wdrożeniami wielu serwerowni, oraz potwierdzony certyfikatami, w tym ATD, CDCP, CDCS, TSI-Professional. Spółka wdrożyła sprawdzone procedury, które pozwalają właściwie diagnozować potrzeby klientów w zakresie infrastruktury Data Center i zamieniać je na realne opracowania koncepcyjne i projekty wykonawcze.
              <br>
              </br>
              AODC współpracuje z najlepszymi specjalistami, których wiedzę i umiejętności zweryfikowane zostały podczas tworzenia największych serwerowni w Polsce, a także przez niezależne uznane jednostki certyfikacyjne w tym Uptime Institute.
              <br>
              </br>
              AODC realizuje serwerownie we wszystkich sektorach rynku w tym szczególnie dla instytucji publicznych, szpitali, służb mundurowych, dla sektora finansowego, przemysłowego i komercyjnego. Obiekty te realizowane są w formule, zaprojektuj i wybuduj, pod klucz, tak dla pomieszczeń w istniejących lub nowo budowanych budynkach, a także w technologiach kontenerowych.
              <br>
              </br>
              Nasza firma jest w stanie realizować projekty oparte o ochronę informacji niejawnych w rozumieniu ustawy z dnia 5 sierpnia 2010 r. (Dz.U. z 2016 r. poz. 1167). Posiada do dyspozycji system ochrony informacji niejawnych wraz ze strukturą odpowiedzialną za zapewnienie ich bezpieczeństwa.
              </div>
              </div>
        </div>
      </article>
  </section>
  )
}

export default AboutUs