import React from 'react'
import './style.scss'
import { withNamespaces } from 'react-i18next';
import video from '../../../public/assets/hero2.mp4'
import 'animate.css';

function Hero2 ({ t }) {
  return (
    <div id='home'>
        <div className='bluur'></div>
<div className='hero-container'>
  <div className='bluur2'></div>
<div className='content'>
    <h1  className='h1--scalingSize animate__animated animate__backInDown'>{t('Welcome to React')}</h1>
    <h3  className='h3--scalingSize animate__animated animate__backInUp'>{t('for data center')}</h3>
  </div>
  <div className='video-background-container'>
    <video className='video-background' src={video} autoPlay muted loop/>
  </div>
</div>
    </div>
  )
}

export default withNamespaces()(Hero2);