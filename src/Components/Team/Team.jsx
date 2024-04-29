import React from 'react'
import './style.scss'
import { withNamespaces } from 'react-i18next';

function Team({ t }) {
  return (
<section>
<h2>{t('title6')}</h2>
  <p>{t('title6.1')}</p>
  <div class="cards">
    <div class="card">
      <img className='height-full' src="./assets/img/employers/robert.jpeg" loading="lazy" alt="Robert Kabza photo"/>
      <div class="card-content">
        <h3>Robert Kabza</h3>
        <p>{t('title6.2')}</p>
        <p className='card-phone'>+48 690 017 317</p>
        <ul>
          <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
    <div className='bluur2'></div>
    <div className='bluur'></div>
    <div class="card">
      <img className='height-full' src="./assets/img/employers/maciek.jpeg" loading="lazy" alt="Maciej Wiśniewski photo"/>
      <div class="card-content">
        <h3>Maciej Wiśniewski</h3>
        <p>{t('title6.3')}</p>
        <p>{t('title6.4')} </p>
        <p className='card-phone'>+48 697 902 145</p>
        <ul>
          <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
    <div class="card">
      <img className='height-full' src="./assets/img/employers/ewa.jpeg" loading="lazy" alt="Ewa Filipiak photo"/>
      <div class="card-content">
        <h3>Ewa Filipiak</h3>
        <p>{t('title6.5')}</p>
        <p className='card-phone'>+48 577 414 900</p>
        <ul>
          <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</section>
  )
}

export default withNamespaces()(Team);