import React from "react";
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom'
function ThirdTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div className="cards-column">
    <div className="whyaodc-span-container">
            <p className=' animate__bounceIn'>{t('Header3.5.11.1')}</p>
        </div>
    </div>
  </div>
  );
};
export default withNamespaces()(ThirdTab);