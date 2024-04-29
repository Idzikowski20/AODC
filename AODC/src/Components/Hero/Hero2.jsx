import React from 'react'
import './style.scss'
import { withNamespaces } from 'react-i18next';

function Hero2 ({ t }) {
  return (
    <div>
<div className='hero-container'>
<div class='content'>
    <h1 class='h1--scalingSize'>{t('Welcome to React')}</h1>
    <h3 class='h1--scalingSize'>{t('for data center')}</h3>
  </div>
  <div class="scroll-downs">
  <div class="mousey">
    <div class="scroller"></div>
  </div>
</div>
</div>
    </div>
  )
}

export default withNamespaces()(Hero2);