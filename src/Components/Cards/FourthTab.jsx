import React from "react";
import { withNamespaces } from 'react-i18next';

function FourthTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div className="what-we-do-title-container">
    <h2 className='what-we-do-title animate__bounceIn'>{t('title2.commissioning')}</h2>
      <p className='what-we-do-text-center animate__bounceIn'>• {t('title2.commissioning2')}</p>
      <p className='what-we-do-text-center animate__bounceIn'>• {t('title2.commissioning3')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img className='animate__animated animate__backInDown' src="assets/img/whatwedo/commissioning.png"></img>
    </div>
  </div>
  );
};

export default withNamespaces()(FourthTab);