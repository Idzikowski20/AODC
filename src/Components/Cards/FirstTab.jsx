import React from "react";
import { withNamespaces } from 'react-i18next';

function FirstTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div>
    <h1>{t('title2.doradzctwo')}</h1>
      <p>{t('title2.doradzctwo2')}</p>
      <p>{t('title2.doradzctwo3')}</p>
      <p>{t('title2.doradzctwo4')}</p>
      <p>{t('title2.doradzctwo5')}</p>
    </div>
    <div className="carrier-card-benefit-img">
    <img src="assets/img/blog/blog-quote.jpg"></img>
    </div>
  </div>
  );
};
export default withNamespaces()(FirstTab);