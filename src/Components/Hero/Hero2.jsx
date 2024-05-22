import React from 'react'
import './style.scss'
import { withNamespaces } from 'react-i18next';
import video from '../../../public/assets/img/blog/blog-list-2.jpg'
import 'animate.css';

function Hero2 ({ t }) {
  return (
    <div id='home'>
        <div className='bluur'></div>
<div className='hero-container'>
  <div className='bluur2'></div>
<div class='content'>
    <h1 class='h1--scalingSize animate__animated animate__backInDown'>{t('Welcome to React')}</h1>
    <h3 class='h3--scalingSize animate__animated animate__backInUp'>{t('for data center')}</h3>
  </div>
  <div className='video-background-container'>
    <img className='video-background' src={video} autoPlay loop muted/>
  </div>
</div>
    </div>
  )
}

export default withNamespaces()(Hero2);