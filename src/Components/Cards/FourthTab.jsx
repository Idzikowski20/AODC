import React from "react";
import { withNamespaces } from 'react-i18next';

function FourthTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div className="what-we-do-title-container">
    <h1>{t('title2.commissioning')}</h1>
      <p>{t('title2.commissioning2')}</p>
      <p>{t('title2.commissioning3')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img src="assets/img/blog/blog-quote.jpg"></img>
    </div>
  </div>
  );
};

export default withNamespaces()(FourthTab);