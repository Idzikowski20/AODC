import React from "react";
import { withNamespaces } from 'react-i18next';
import 'animate.css';

function FirstTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div className="what-we-do-title-container">
    <h1 className='animate__bounceIn'>{t('title2.doradzctwo')}</h1>
      <p className='animate__bounceIn'>• {t('title2.doradzctwo2')}</p>
      <p className='animate__bounceIn'>• {t('title2.doradzctwo3')}</p>
      <p className='animate__bounceIn'>• {t('title2.doradzctwo4')}</p>
      <p className='animate__bounceIn'>• {t('title2.doradzctwo5')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img className='animate__animated animate__backInDown' src="assets/img/whatwedo/doradzctwo.png"></img>
    </div>
  </div>
  );
};
export default withNamespaces()(FirstTab);