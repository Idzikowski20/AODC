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
}

export default withNamespaces()(Cookies);