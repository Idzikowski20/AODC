import React, { useState, useEffect } from 'react';
import { withNamespaces } from 'react-i18next';
import { MdError } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";

function BasicForm({ t }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError('');
        setSuccess(false);
      }, 4000); // 4 sekundy

      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const validateForm = () => {
    if (!name || !email || !message || !phone) {
      setError(t('5'));
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t('6'));
      return false;
    }
    
    const phoneRegex = /^[0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
      setError(t('7'));
      return false;
    }
    
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!validateForm()) return;

    fetch("https://formcarry.com/s/7ZnYFz8RZSh", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        setSuccess(true);
      } else if (response.code === 422) {
        setError('Wystąpił błąd walidacji danych.');
      } else {
        setError('Wystąpił błąd przy przesyłaniu danych.');
      }
    })
    .catch(error => {
      setError(error.message || 'Wystąpił błąd sieciowy');
    });
  }

  return (
    <div className='formcarry-container'>
      {error && (
        <div className="error-message">
          <MdError /> {error}
          <div className="progress-bar"></div>
        </div>
      )}
      {success && (
        <div className="success-message">
          <IoCheckmarkCircle /> {t('4')}
          <div className="progress-bar"></div>
        </div>
      )}

      <form onSubmit={onSubmit}>
        <div className="formcarry-block">
          <label htmlFor="name">{t('Header3.5.27')}</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder={t('8')}  />
        </div>

        <div className="formcarry-block">
          <label htmlFor="email">{t('Header3.5.28')}</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder={t('9')} />
        </div>

        <div className="formcarry-block">
          <label htmlFor="phone">{t('Header3.5.29')}</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" placeholder={t('10')} />
        </div>

        <div className="formcarry-block">
          <label htmlFor="message">{t('Header3.5.30')}</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder={t('11')}></textarea>
        </div>

        <div className="formcarry-block">  
          <button type="submit">{t('Header3.5.31')}</button>
        </div>
      </form>
    </div>
  );
}

export default withNamespaces()(BasicForm);
