import React from "react";
import { withNamespaces } from 'react-i18next';

function SecondTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div className="what-we-do-title-container">
    <h1 className='animate__bounceIn'>{t('title2.projekty')}</h1>
      <p className='animate__bounceIn'>• {t('title2.projekty2')}</p>
      <p className='animate__bounceIn'>• {t('title2.projekty3')}</p>
      <p className='animate__bounceIn'>• {t('title2.projekty4')}</p>
      <p className='animate__bounceIn'>• {t('title2.projekty5')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img className='animate__animated animate__backInDown' src="assets/img/whatwedo/projekty.png"></img>
    </div>
  </div>
  );
};

export default withNamespaces()(SecondTab);