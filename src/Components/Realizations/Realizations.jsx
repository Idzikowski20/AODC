import React from 'react'
import './style.scss'
import Header2 from '../Header/Header2';
import SidePanel from '../Side Panel/SidePanel';
import { withNamespaces } from 'react-i18next';
import JobPageImage from '../Video Area/JobPageImage';


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
    <JobPageImage/>
    <SidePanel />
    <Header2 />
<section>
	<div class="tiltgrid__container">
  <div><img loading="lazy" src="assets/img/trustus/KATOWICE.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/krakow.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/MON.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/GAGAGA.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/KPKPKP.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/asasasasa.jpg" alt=""/></div>
  {/* <div><img loading="lazy" src="assets/img/trustus/ritaaa.jpg" alt=""/></div> */}
  <div><img loading="lazy" src="assets/img/trustus/uwuwuwu.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/nbp.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/kozienice.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/aa.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/atos.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/a111.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/instytu.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/aq.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/aza.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/a3.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/a1.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/mb.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/accenture.png" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/mbank-logo-ind.gif" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/knf-1.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/pzuu.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/logo.jpg" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/logo_internet_dla_mazowsza_big_logo.png" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/images.png" alt=""/></div>
  <div><img loading="lazy" src="assets/img/trustus/pobrane-2.jpg" alt=""/></div>
	</div>
	
</section>
<section class="p-x bottom">
</section>
</>
  )
}

export default withNamespaces()(Realizations);