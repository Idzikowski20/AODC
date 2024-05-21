import React from "react";
import { withNamespaces } from 'react-i18next';

function ThirdTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div>
    <h1>{t('title2.budowa')}</h1>
      <p>{t('title2.budowa')}</p>
      <p>{t('title2.budowa3')}</p>
      <p>{t('title2.budowa4')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img src="assets/img/carrier/benefit-balance.svg"></img>
    </div>
  </div>
  );
};
export default withNamespaces()(ThirdTab);