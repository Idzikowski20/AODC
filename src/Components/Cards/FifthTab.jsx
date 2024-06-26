import React from "react";
import { withNamespaces } from 'react-i18next';

function FifthTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div className="what-we-do-title-container">
      <h2 className='what-we-do-title animate__bounceIn'>{t('title2.serwis')}</h2>
      <p className='what-we-do-text-center animate__bounceIn'>• {t('title2.serwis2')}</p>
      <p className='what-we-do-text-center animate__bounceIn'>• {t('title2.serwis3')}</p>
      <p className='what-we-do-text-center animate__bounceIn'>• {t('title2.serwis4')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img className='animate__animated animate__backInDown' src="assets/img/whatwedo/serwis.png"></img>
    </div>
  </div>
  );
};

export default withNamespaces()(FifthTab);