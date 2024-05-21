import React from "react";
import { withNamespaces } from 'react-i18next';

function FourthTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div>
    <h1>{t('title2.commissioning')}</h1>
      <p>{t('title2.commissioning2')}</p>
      <p>{t('title2.commissioning3')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img src="assets/img/carrier/benefit-welcome.svg"></img>
    </div>
  </div>
  );
};

export default withNamespaces()(FourthTab);