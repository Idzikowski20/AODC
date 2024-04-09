import React from 'react'
import './style.scss'

const Team = () => {
  return (
    <div>
<section>
  <span>Poznaj nasz</span>
  <h2>Zespół</h2>
  <p>AODC tworzą ludzie, którzy od prawie 20 lat czynnie zajmują się realizacją obiektów Data Center i z powodzeniem projektowali i nadzorowali proces implementacji największych tego typu ośrodków w Polsce, tak dla instytucji publicznych i samorządowych, jak i dla podmiotów komercyjnych.</p>
  <span class="bg-watermark">team</span>
  <div class="cards">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Franklin Carlson"/>
      <div class="card-content">
        <h3>Robert Kabza</h3>
        <p>Członek Zarządu</p>
        <ul>
          <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
    <div class="card">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Antonia Moore"/>
      <div class="card-content">
        <h3>Maciej Wiśniewski</h3>
        <p>Prezes Zarządu</p>
        <p>Dyrektor ds. Technicznych </p>
        <ul>
          <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
    <div class="card">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Travis Lynch"/>
      <div class="card-content">
        <h3>Ewa Filipiak</h3>
        <p>Dyrektor ds. Handlowych</p>
        <ul>
          <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Team