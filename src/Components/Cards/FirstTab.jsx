import React from "react";
import { withNamespaces } from 'react-i18next';
import 'animate.css';

function FirstTab({ t }) {
  return (
    <div className="carrier-card-benefit">
    <div className="cards-column">
        <div className="what-we-do-title-container">
          <h2 className='what-we-do-title animate__bounceIn'>{t('title2.doradzctwo')}</h2>
            <p className='what-we-do-text-center animate__bounceIn'>• {t('title2.doradzctwo2')}</p>
            <p className='what-we-do-text-center animate__bounceIn'>• {t('title2.doradzctwo3')}</p>
            <p className='what-we-do-text-center animate__bounceIn'>• {t('title2.doradzctwo4')}</p>
            <p className='what-we-do-text-center animate__bounceIn'>• {t('title2.doradzctwo5')}</p>
        </div>
        <div className="cards-button-container">
        <button href="#" className="cards-button" onClick={() => window.scrollTo({ top: 10000, behavior: "smooth" })}>
            <span className="cards-button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cards-button__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="cards-button__icon-svg cards-button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            {t('Header6')}
        </button>
        </div>
    </div>
    <div className="carrier-card-benefit-img">
    <img className='animate__animated animate__backInDown' src="assets/img/whatwedo/doradzctwo.png"></img>
    </div>
  </div>
  );
};
export default withNamespaces()(FirstTab);