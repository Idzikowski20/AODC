import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };
  
  return (
    <div class="cookie-message">
      <div className='display-flex'>
      <img src="https://img.icons8.com/plasticine/100/000000/cookie.png"/>
    <span>Używamy plików cookie, aby zapewnić Ci najlepszą możliwą obsługę. Ale nie panikuj – nie udostępnimy żadnych Twoich danych. Więcej informacji na temat naszych plików cookie znajdziesz  <a href="#">Tutaj</a>.</span>
      </div>
    <div className='close-container'>
    <button className='close' href='#' onClick={giveCookieConsent}>Rozumiem</button>
    </div>
    </div>
  )
}

export default CookieConsent;