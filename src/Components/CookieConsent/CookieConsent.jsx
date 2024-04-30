import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { withNamespaces } from 'react-i18next';


function CookieConsent({ t }) {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "#" });
  };
  
  return (
    <div className="cookie-message">
      <div className='display-flex'>
      <img src="https://img.icons8.com/plasticine/100/000000/cookie.png"/>
    <span>{t('title11')} <a href='/'>{t('title11.1')}</a></span>
      </div>
    <div className='close-container'>
    <button className='close' onClick={giveCookieConsent}>{t('title11.2')}</button>
    </div>
    </div>
  )
}

export default withNamespaces()(CookieConsent);