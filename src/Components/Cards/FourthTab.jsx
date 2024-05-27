import React from "react";
import { withNamespaces } from 'react-i18next';

function FourthTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div className="what-we-do-title-container">
    <h1 className='animate__animated animate__backInDown'>{t('title2.commissioning')}</h1>
      <p className='animate__animated animate__backInDown'>• {t('title2.commissioning2')}</p>
      <p className='animate__animated animate__backInDown'>• {t('title2.commissioning3')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img className='animate__animated animate__backInDown' src="assets/img/whatwedo/commissioning.png"></img>
    </div>
  </div>
  );
};

export default withNamespaces()(FourthTab);