import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { withNamespaces } from 'react-i18next';
// import CookieConsent from "react-cookie-consent";
import {Helmet} from "react-helmet";


function Cookies({ t }) {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true);
  };
  
<<<<<<< HEAD
  class Application extends React.Component {
    render () {
      return (
          <div className="application">
              <Helmet>
              {/* <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="4d1d6c1d-794a-4cef-8d2a-d6a0fe3a0a41"  type="text/javascript"></script> */}
              </Helmet>
              ...
          </div>
      );
    }
  };
=======
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
    <span style={{ fontSize: "18px", alignItems: "center", justifyContent: "center", display: "flex", textAlign: "center", color: "#2B373B"}}>{t('title11')} <a href='/'>{t('title11.1')}</a></span>
</CookieConsent>
    </>
  )
>>>>>>> 3bf02c7567508fc584742585e1554615ec309e73
}

export default withNamespaces()(Cookies);