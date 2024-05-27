import React from "react";
import { withNamespaces } from 'react-i18next';

function FifthTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div className="what-we-do-title-container">
      <h1 className='animate__bounceIn'>{t('title2.serwis')}</h1>
      <p className='animate__bounceIn'>• {t('title2.serwis2')}</p>
      <p className='animate__bounceIn'>• {t('title2.serwis3')}</p>
      <p className='animate__bounceIn'>• {t('title2.serwis4')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img className='animate__animated animate__backInDown' src="assets/img/whatwedo/serwis.png"></img>
    </div>
  </div>
  );
};

export default withNamespaces()(FifthTab);