import React from 'react'
import './style.scss'
import { withNamespaces } from 'react-i18next';
import video from '../../../public/assets/backgroundservers.mp4';
import 'animate.css';

function Hero2 ({ t }) {
  return (
    <div id='#id1'>
<div className='hero-container'>
  <div className='overlay-video'></div>
  <div className='bluur2'></div>
  {/* <video className='video-background' src={video} autoPlay loop muted/> */}
  <div className='bluur'></div>
<div class='content'>
    <h1 class='h1--scalingSize animate__animated animate__backInDown'>{t('Welcome to React')}</h1>
    <h3 class='h3--scalingSize animate__animated animate__backInUp'>{t('for data center')}</h3>
  </div>
</div>
    </div>
  )
}

export default withNamespaces()(Hero2);