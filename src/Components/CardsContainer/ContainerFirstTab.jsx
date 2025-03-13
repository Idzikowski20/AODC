import React from "react";
import { withNamespaces } from 'react-i18next';
import 'animate.css';

function FirstTab({ t }) {
  return (
    <div className="whyaodc-card-benefit">
    <div className="whyaodc-cards-column">
        <div className="whyaodc-span-container">
            <p className='animate__bounceIn'>{t('Header3.5.9.1')}</p>
        </div>
    </div>
  </div>
  );
};
export default withNamespaces()(FirstTab);