import React from "react";
import { withNamespaces } from 'react-i18next';

function SecondTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div className="what-we-do-title-container">
    <h1>{t('title2.projekty')}</h1>
      <p>{t('title2.projekty2')}</p>
      <p>{t('title2.projekty3')}</p>
      <p>{t('title2.projekty4')}</p>
      <p>{t('title2.projekty5')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img src="assets/img/blog/blog-quote.jpg"></img>
    </div>
  </div>
  );
};

export default withNamespaces()(SecondTab);