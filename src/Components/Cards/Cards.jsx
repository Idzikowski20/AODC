import React from 'react'
import { withNamespaces } from 'react-i18next';

const indexes = document.querySelectorAll('.indexes li');
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

function reset() {
  for (let i = 0; i < tabs.length; i++) {
    indexes[i].style.borderColor = 'transparent';
    tabs[i].style.zIndex = 0;
    tabs[i].classList.remove('active');
    contents[i].classList.remove('active');
  }
}

function showTab(i) {
  indexes[i].style.borderColor = 'rgba(211,38,38,0.6)';
  tabs[i].style.opacity = 1;
  tabs[i].style.zIndex = 5;
  tabs[i].classList.add('active');
  contents[i].classList.add('active');
}

function activate(e) {
  if (!e.target.matches('.indexes li')) return;
  reset();
  showTab(e.target.dataset.index);
}

const init = () => showTab(0);

window.addEventListener('load',init,false);
window.addEventListener('click',activate,false);

function Cards({ t }) {
  return (
    <section>
  <h2>{t('title2')}</h2>
  <div className="carrier-benefit-container">
        <div className="carrier-card-benefit-container">
        <div className="carrier-card-benefit">
          <div>
            <h1>Doradzctwo</h1>
            <p>Wiemy, że komfort pracy w wysokim stopniu wpływa na efektywność pracowników, dlatego zapewniamy najwyższej jakości sprzęt i komfortowe, nowoczesne biuro. W przerwie między obowiązkami zachęcamy do skorzystania ze strefy relaksu z konsolą Xbox i profesjonalnym symulatorem jazdy.</p>
          </div>
          <div className="carrier-card-benefit-img">
          <img src="assets/img/carrier/benefit-workplace.svg"></img>
          </div>
        </div>
        <div className='carrier-card-benefit-container'>
          <div className='carrier-card-benefit-buttons'>
            <button data-index='0' className='whatwedo-active carrier-card-benefit-button'><img src='assets/img/carrier/benefit-workplace.svg'/>Doradzctwo</button>
            <button data-index='1' className='carrier-card-benefit-button'><img src='assets/img/carrier/benefit-goal.svg'/>Projekty</button>
            <button data-index='2' className='carrier-card-benefit-button'><img src='assets/img/carrier/benefit-balance.svg'/>Budowa</button>
            </div>
            <div className='carrier-card-benefit-buttons'>
            <button data-index='3' className='carrier-card-benefit-button'><img src='assets/img/carrier/benefit-welcome.svg'/>Commissioning</button>
            <button data-index='4' className='carrier-card-benefit-button'><img src='assets/img/carrier/benefit-coworking.svg'/>Serwis</button>
          </div>
        </div>
        </div>
      </div>
  </section>
  )
}

export default withNamespaces()(Cards);