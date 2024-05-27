import React from "react";
import { withNamespaces } from 'react-i18next';

function ThirdTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div className="what-we-do-title-container">
    <h1 className='animate__bounceIn'>{t('title2.budowa')}</h1>
      <p className='animate__bounceIn'>• {t('title2.budowa')}</p>
      <p className='animate__bounceIn'>• {t('title2.budowa3')}</p>
      <p className='animate__bounceIn'>• {t('title2.budowa4')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img className='animate__animated animate__backInDown' src="assets/img/whatwedo/budowa.png"></img>
    </div>
  </div>
  );
};
export default withNamespaces()(ThirdTab);