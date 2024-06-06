import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { withNamespaces } from 'react-i18next';
import CookieConsent from "react-cookie-consent";


function Cookies({ t }) {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true);
  };
  
  return (
    <>
<CookieConsent
  enableDeclineButton
  declineButtonText={t('title11.3')}
  location="bottom"
  buttonText={t('title11.2')}
  cookieName="myAwesomeCookieName2"
  style={{ opacity: "0.9", color: "#2B373B", background: "#fff" }}
  declineButtonStyle={{ border: "2px solid #888", background: "transparent", color: "#888", fontSize: "15px", borderRadius: "20px"}}
  buttonStyle={{ background: "#d32b50", color: "#fff", fontSize: "15px", borderRadius: "20px" }}
  expires={150}
>
    <span style={{ fontSize: "20px", alignItems: "center", justifyContent: "center", display: "flex", textAlign: "center", color: "#2B373B"}}>{t('title11')} <a href='/'>{t('title11.1')}</a></span>
</CookieConsent>
    </>
  )
}

export default withNamespaces()(Cookies);