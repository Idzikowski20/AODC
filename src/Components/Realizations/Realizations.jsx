import React from 'react'
import './style.scss'
import { withNamespaces } from 'react-i18next';
import RealizationsPageImage from '../Video Area/RealizationsPageImage';


function Realizations({ t }) {

  document.addEventListener("DOMContentLoaded", function () {
    const heroGrid = document.querySelector(".tiltgrid");
    const hero = document.querySelector(".hero");
    const tiltDegree = 7;
    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
      );
    }
    function mapRange(value, inMin, inMax, outMin, outMax) {
      return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
    function updateScrollPos() {
      const scrollPos = window.scrollY;
      const rect = heroGrid.getBoundingClientRect();
      const scrollPercent = (scrollPos * 100) / rect.height;
  
      let mappedValue = mapRange(scrollPercent, 0, 100, tiltDegree * -1, tiltDegree);
      heroGrid.style.setProperty("--scroll-tilt", `${mappedValue}`);
      let heroOpacity = mapRange(scrollPercent, 0, 10, 1, 0);
      let heroScale = mapRange(scrollPercent, 0, 10, 1, 0);
      let heroTransformY = mapRange(scrollPercent, 0, 10, 0, -100);
      let heroBlur = mapRange(scrollPercent, 0, 10, 0, 20);
      hero.style.opacity = heroOpacity;
      hero.style.filter = `blur(${heroBlur}px)`;
      hero.style.transform = `translateY(${heroTransformY}px)`;
    }
  
    function handleScroll() {
      if (heroGrid && isElementInViewport(heroGrid)) {
        updateScrollPos();
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  
    handleScroll();
  });
  

  return (
    <>
    <RealizationsPageImage />
<section id='realizations'>
  <div className='realizations-title'>
  <p>{t('title10.2')}</p>
  </div>
	<div class="tiltgrid__container">

  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/asasasasa.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/uwuwuwu.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/kozienice.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/nbp.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/aa.png" alt=""/></div>

  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/aq.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/instytu.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/cms.png" alt=""/></div>

  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/a3.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/a1.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/mb.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/logo.jpg" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/accenture.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/GAGAGA.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/KPKPKP.png" alt=""/></div>

  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/uksw.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/logo_internet_dla_mazowsza_big_logo.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/bankpolski.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/data4.png" alt=""/></div>

  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/dr.png" alt=""/></div>


  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/millennium.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/msit.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/nask.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/ncbj.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/netia.png" alt=""/></div>

  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/pansa.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/pb.png" alt=""/></div>

  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/pse.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/pwpw.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/tvp.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/utk.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/KATOWICE.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/budimex.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/krakow.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/atos.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/MON.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/mbank-logo-ind.gif" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/pzuu.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/orlen.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/ifj.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/itwl.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/knf.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/pg.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/pocztapolska.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/energa.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/a111.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/aza.png" alt=""/></div>
  <div><img loading="lazy" src="https://aodc.pl/assets/img/trustus/images.png" alt=""/></div>
	</div>
	
</section>
<section class="p-x bottom">
</section>
</>
  )
}

export default withNamespaces()(Realizations);