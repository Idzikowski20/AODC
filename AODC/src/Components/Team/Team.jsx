import React from 'react'
import './style.scss'

const Team = () => {
  return (
<section>
  <span>Poznaj nasz</span>
  <h2>ZESPÓŁ</h2>
  <p>AODC tworzą ludzie, którzy od prawie 20 lat czynnie zajmują się realizacją obiektów Data Center i z powodzeniem projektowali i nadzorowali proces implementacji największych tego typu ośrodków w Polsce, tak dla instytucji publicznych i samorządowych, jak i dla podmiotów komercyjnych.</p>
  <div class="cards">
    <div class="card">
      <img className='height-full' src="./assets/img/employers/robert.jpeg" alt="Robert Kabza photo"/>
      <div class="card-content">
        <h3>Robert Kabza</h3>
        <p>Członek Zarządu</p>
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
      <img className='height-full' src="./assets/img/employers/maciek.jpeg" alt="Maciej Wiśniewski photo"/>
      <div class="card-content">
        <h3>Maciej Wiśniewski</h3>
        <p>Prezes Zarządu</p>
        <p>Dyrektor ds. Technicznych </p>
        <p className='card-phone'>+48 697 902 145</p>
        <ul>
          <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
    <div class="card">
      <img className='height-full' src="./assets/img/employers/ewa.jpeg" alt="Ewa Filipiak photo"/>
      <div class="card-content">
        <h3>Ewa Filipiak</h3>
        <p>Dyrektor ds. Handlowych</p>
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

export default Team