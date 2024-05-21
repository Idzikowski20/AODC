import React from "react";
import { withNamespaces } from 'react-i18next';

function FifthTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div>
      <h1>{t('title2.serwis')}</h1>
      <p>{t('title2.serwis2')}</p>
      <p>{t('title2.serwis3')}</p>
      <p>{t('title2.serwis4')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img src="assets/img/carrier/benefit-workplace.svg"></img>
    </div>
  </div>
  );
};

export default withNamespaces()(FifthTab);