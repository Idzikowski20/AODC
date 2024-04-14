import React from 'react'
import './style.scss'

const Cards = () => {
  return (
    <>
    <section className="dark">
  <h2>CZYM SIĘ ZAJMUJEMY</h2>
  <span class="bg-watermark">TASK</span>
    <div className="container py-4">
  
      <article className="postcard dark blue">
        <a className="postcard__img_link" href="#">
          <img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title blue"><a href="#">Projektowanie</a></h1>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">
             <div className='title-before'>
              Właściwie zaprojektowane Data Center to połowa sukcesu na drodze, do powodzenia całej inwestycji. Wykonujemy kompleksowe projekty zaczynając od opracowania razem z inwestorem koncepcji gdzie określamy wszystkie parametry Data Center. <span className='card-read-more'>Czytaj dalej..</span>
              </div>
              <div className='title-after'>
              Właściwie zaprojektowane Data Center to połowa sukcesu na drodze, do powodzenia całej inwestycji. Wykonujemy kompleksowe projekty, zaczynając od opracowania razem z inwestorem koncepcji gdzie określamy wszystkie parametry Data Center min. takie jak kwestie architektoniczne, aranżacyjne, poziomy niezawodności, dobieramy w sposób zoptymalizowany parametry oraz technologię chłodzenia, zasilania, ilość szaf serwerowych, zapotrzebowanie na moc elektryczną oraz moc chłodniczą, przy założeniu minimalizacji zużycia prądu (energoefektywność PUE).

              Po określeniu i zaaprobowaniu przez inwestora powyższych parametrów rozpoczynamy fazę projektowania (projekty budowlane i wykonawcze).

              Dysponujemy zespołem projektantów o bardzo wysokich kwalifikacjach merytorycznych, posiadający certyfikaty potwierdzające wiedzę ekspercką z zakresu projektowania Data Center (m.in. ATD wydany przez Uptime Institute, TIA).
              </div>
              </div>
        </div>
      </article>
      <article className="postcard dark red">
        <a className="postcard__img_link" href="#">
          <img className="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />	
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title red"><a href="#">Wdrażanie</a></h1>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">
          <div className='title-before'>
             Zmieniające się potrzeby w zakresie wdrażania obiektów typu Data Center wymagają elastyczności w prowadzeniu procesu inwestycyjnego przy jednoczesnym zachowaniu wysokich standardów realizacji. <span className='card-read-more'>Czytaj dalej..</span>
              </div>
              <div className='title-after'>
              Zmieniające się potrzeby w zakresie wdrażania obiektów typu Data Center wymagają elastyczności w prowadzeniu procesu inwestycyjnego przy jednoczesnym zachowaniu wysokich standardów realizacji.

              Prowadzimy proces powstawania Data Center od momentu uzgodnień przez komplet prac projektowych, realizację, koordynację i serwis obejmujący:

              architekturę i konstrukcję zorientowaną na potrzeby infrastruktury IT,  
              aranżację terenu oraz sieci zewnętrzne
              systemy zasilania ,
              infrastrukturę sanitarną wraz z klimatyzacją precyzyjną,
              systemy teletechniczne wraz z urządzeniami branży IT
              systemy bezpieczeństwa fizycznego oraz bezpieczeństwa IT
              systemy bezpieczeństwa pożarowego
              Wychodzimy naprzeciw potrzebom Klientów realizując obiekty nowe jak i wykonując adaptacje i modernizację pomieszczeń pod przyszłe Centra Przetwarzania Danych.

              Nasi pracownicy posiadają doświadczenie w prowadzeniu interdyscyplinarnych projektów w formule „pod klucz”.

              Podejmujemy wszelkie kroki by sprawnie przeprowadzić proces realizacji, staramy przeanalizować i sprostać wymaganiom naszych Klientów.
              </div>
              </div>
        </div>
      </article>
      <article className="postcard dark green">
        <a className="postcard__img_link" href="#">
          <img className="postcard__img" src="https://picsum.photos/500/501" alt="Image Title" />
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title green"><a href="#">Serwis</a></h1>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">
          <div className='title-before'>
             Zarządzanie obiektami typu Data Center, to zapewnienie bezpieczeństwa zasobom krytycznym oraz konieczność posiadania eksperckiej wiedzy, by móc podejmować właściwe decyzje w przypadku zaistnienia awarii. <span className='card-read-more'>Czytaj dalej..</span>
              </div>
              <div className='title-after'>
              Zarządzanie obiektami typu Data Center rozumiemy jako zapewnienie bezpieczeństwa zasobom krytycznym z koniecznością posiadania eksperckiej wiedzy, by móc podejmować właściwe decyzje w przypadku zaistnienia awarii.

              Dla Klienta oznacza to konieczność zatrudnienia wykwalifikowanych pracowników posiadających doświadczenie w wielu obszarach, co wiąże się z wysokimi kosztami stałymi.

              Proponujemy więc usługę utrzymania obiektów Data Center prowadzona przez naszych doświadczonych inżynierów. Prowadzimy zarówno stałą opiekę, doraźne konsultacje dotyczące optymalizacji kosztów, jak i doraźne wsparcie w przypadku zaistnienia sytuacji krytycznych.  Oferujemy wsparcie w modelu 24/7/365: 24 godziny na dobę, 7 dni w tygodniu, 365 dni roku z uzgodnionym z każdym Klientem wymaganym czasem reakcji.

              Nasze działania gwarantują utrzymanie infrastruktury pozwalające na ciągłą i stabilną pracę Centrum Przetwarzania Danych.
              </div>
              </div>
        </div>
      </article>
      <article className="postcard dark yellow">
        <a className="postcard__img_link" href="#">
          <img className="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" />
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title yellow"><a href="#">Audyt</a></h1>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">
          <div className='title-before'>
             W dzisiejszych czasach serwerownie stają się technicznym sercem i mózgiem każdej organizacji. Każda przerwa w ich działaniu powoduje, iż firmy lub instytucje tracą setki tysięcy złotych związane z brakiem dostępu do poczty, stron www, czy też kluczowych danych i procesów, a awarie i zdarzenia krytyczne z tym związane, mogą doprowadzić do nieodwracalnych uszkodzeń danych na serwerach. <span className='card-read-more'>Czytaj dalej..</span>
              </div>
              <div className='title-after'>
              W dzisiejszych czasach serwerownie stają się technicznym sercem i mózgiem każdej organizacji. Każda przerwa w ich działaniu powoduje, iż firmy lub instytucje tracą setki tysięcy złotych związane z brakiem dostępu do poczty, stron www czy też kluczowych danych a awarie które mogą wystąpić mogą doprowadzić do nieodwracalnych uszkodzeń danych na serwerach .

              Szereg serwerowni zostało wybudowanych kilka a nawet kilkanaście lat temu, gdy wiedza techniczna o standardach w jakich należy je budować aby spełniały one wysokie parametry dostępności i niezawodności, była w Polsce znikoma. Dzisiaj także wielokrotnie otrzymujemy znaczne ilości projektów do audytowania, które gdyby zostały dopuszczone do realizacji, mogłyby narazić klienta na niepotrzebne straty będące skutkiem fundamentalnych błędów.

              Skąd konieczność audytu serwerowni:

              W konsekwencji poważnej awarii istotnym jest ustalenie, jakie kroki należy poczynić by zapobiec ponownemu wystąpieniu problemu jak również zlokalizowanie i wyeliminowanie innych czyhających zagrożeń  w serwerowni.
              W trakcie projektowania często zachodzi potrzeba weryfikacji poczynań zatrudnionych projektantów z uwagi na domniemanie występowania błędów wynikających niekiedy z braku wystarczającej wiedzy, czy umiejętności.
              w trakcie kolejnych  lat użytkowania serwerowni przy wprowadzanych zmianach zarówno personalnych jak i  materialistycznych typu przebudowa, rozbudowa obiektu zachodzi potrzeba zweryfikowania niezbędnych parametrów.
              Cele przeprowadzania audytu:

              Znalezienie pojedynczych punktów, których awaria może zagrozić poprawnemu działaniu systemów IT (Single Point of Failrue)
              Wskazanie błędów lub niedociągnięć w krytycznych systemach DC
              Weryfikacja procedur obiektowych oraz umów serwisowych
              Opracowanie koncepcji, harmonogramu czasowego i budżetu zmian koniecznych do wprowadzenia, aby zwiększyć niezawodność i efektywność energetyczną DC
              Dlaczego My:

              Nasza firma to doświadczony zespół audytorów branżowych mogących pochwalić się
              Uprawnieniami UpTime Institute, TIA-942/EPI oraz TUV IT
              Działaniami w oparciu o powyższe standardy oraz BICSI i ASHRAE
              Uprawnieniami budowlanymi w zakresie analizowanych systemów
              Bogatym doświadczeniem praktycznym zbudowanym na bazie zrealizowanych 50 projektach/realizacjach  i serwisach obiektów  DC  Czyli best practise
              Referencjami na podobne zadania
              Posiadanym wyspecjalizowanym sprzętem takim jak kamery termowizyjne i zestawy przenośnych czujników temperatury i powietrza
              </div>
              </div>
        </div>
      </article>

      <article className="postcard dark blue">
        <a className="postcard__img_link" href="#">
          <img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title blue"><a href="#">Optymalizacja</a></h1>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">
          <div className='title-before'>
             Kluczem do sukcesu w budowaniu nowego obiektu DATA CENTER, a także w procesie modernizacji istniejącej już u Klienta infrastruktury jest optymalizacja obiektów/obszarów Data Center pod kątem zużycia energii, potrzebnego minimalnego miejsca, aranżacji wymaganej przestrzeni oraz efektywnego wykorzystania systemów klimatyzacji. <span className='card-read-more'>Czytaj dalej..</span>
              </div>
              <div className='title-after'>
              AODC zatrudnia w swoich szeregach ekspertów z różnych kluczowych branż i obszarów będących  kluczem do sukcesu w budowaniu nowego obiektu DATA CENTER ale przede wszystkim modernizacji istniejącej już u Klienta infrastruktury

              Wielu Klientów ma na dziś dzień daleko nieoptymalną, kosztowną  i odbiegającą od dzisiejszych trendów infrastrukturę w swoich serwerowniach.

              Proponujemy więc usługę optymalizacji obiektów/obszarów Data Center pod kątem zużycia energii, potrzebnego minimalnego miejsca w m2 i aranżacji wymaganej przestrzeni, efektywnego wykorzystania systemów klimatyzacji w tym odzysk ciepła, analizę finansową OPEX/CAPEX, dobór rozwiązań odpowiednich do właściwej modernizacji i potrzeb Klienta, analizę współczynników PUE, doradztwo w zakresie odpowiedniego serwisowania i utrzymania infrastruktury, oraz wykorzystania rozwiązań kogeneracyjnych dla zapewnienia zasilania awaryjnego.

              Nasze działania są skorelowane na bieżąco ze zmieniającymi się trendami rynkowymi w tych dziedzinach.
              </div>
              </div>
        </div>
      </article>
    </div>
  </section>
  </>
  )
}

export default Cards;