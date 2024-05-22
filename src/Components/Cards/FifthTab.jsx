import React from "react";
import { withNamespaces } from 'react-i18next';

function FifthTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div className="what-we-do-title-container">
      <h1>{t('title2.serwis')}</h1>
      <p>{t('title2.serwis2')}</p>
      <p>{t('title2.serwis3')}</p>
      <p>{t('title2.serwis4')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img src="assets/img/blog/blog-quote.jpg"></img>
    </div>
  </div>
  );
};

export default withNamespaces()(FifthTab);