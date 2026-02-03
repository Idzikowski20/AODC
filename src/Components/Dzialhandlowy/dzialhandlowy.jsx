import React, { useState, useEffect, useRef } from 'react'
import { withNamespaces } from 'react-i18next';
import BasicForm from '../BasicForm/BasicForm'
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsTelephone } from "react-icons/bs";

function dzialhandlowy({ t }) {
  const [revealedContacts, setRevealedContacts] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const scriptLoaded = useRef(false);

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  // Ładowanie skryptu reCAPTCHA Enterprise
  useEffect(() => {
    if (!siteKey || scriptLoaded.current) return;

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      scriptLoaded.current = true;
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup - usuń skrypt przy unmount (opcjonalne)
    };
  }, [siteKey]);

  const handleShowContactClick = async (targetKey) => {
    if (!siteKey) {
      // Brak skonfigurowanego klucza – nie blokujemy dostępu, pokazujemy od razu
      setRevealedContacts((prev) => ({ ...prev, [targetKey]: true }));
      return;
    }

    setIsLoading(true);

    try {
      // Czekaj aż skrypt się załaduje
      if (!window.grecaptcha || !window.grecaptcha.enterprise) {
        // Jeśli jeszcze nie załadowane, czekaj
        await new Promise((resolve) => {
          const checkInterval = setInterval(() => {
            if (window.grecaptcha && window.grecaptcha.enterprise) {
              clearInterval(checkInterval);
              resolve();
            }
          }, 100);
        });
      }

      // Wywołaj reCAPTCHA Enterprise
      await window.grecaptcha.enterprise.ready(async () => {
        try {
          const token = await window.grecaptcha.enterprise.execute(siteKey, {
            action: 'show_contact'
          });

          // Jeśli mamy token, pokazujemy kontakt
          // W przyszłości możesz wysłać token do backendu do weryfikacji
          if (token) {
            setRevealedContacts((prev) => ({
              ...prev,
              [targetKey]: true,
            }));
          }
        } catch (error) {
          console.error('reCAPTCHA error:', error);
          // W przypadku błędu, pokazujemy kontakt (fallback)
          setRevealedContacts((prev) => ({ ...prev, [targetKey]: true }));
        }
      });
    } catch (error) {
      console.error('reCAPTCHA loading error:', error);
      // W przypadku błędu, pokazujemy kontakt (fallback)
      setRevealedContacts((prev) => ({ ...prev, [targetKey]: true }));
    } finally {
      setIsLoading(false);
    }
  };

  const isContactRevealed = (key) => !!revealedContacts[key] || !siteKey;

  const formatPhone = (parts) => parts.join(' ');

  const ewaPhoneParts = ['+48', '577', '414', '900'];
  const ewaPhoneHref = '+48577414900';

  const arekPhoneParts = ['+48', '577', '703', '457'];
  const arekPhoneHref = '+48577703457';

  const konradPhoneParts = ['+48', '533', '327', '613'];
  const konradPhoneHref = '+48533327613';

  return (
    <>
    <div className="jm-server-area">
      <div className="container-fluid p-0">
        <div className="jm-datacenter-wrap bg-default">
          <div className='content'>
            <div className='contact-content-title'>
                <h1 className='animate__animated animate__backInDown'>{t('1')}</h1>
            </div>
            <div className='handlowy-box-container'>
            <div className='handlowcy-albo'>{t('3')}</div>
            <div className='handlowcy-transfer'><FaExchangeAlt /></div>
              <div className='handlowy-container'>

                <div className='handlowcy-container'>

                    <div className='handlowiec-box'>
                        <img src='/assets/img/team/Ewa.png' alt='handlowiec' loading="lazy" />
                        <div className='handlowiec-details'>
                            <div className='handlowiec-details-desc'><span>Ewa Filipiak</span></div>
                            <div className='handlowiec-details-desc'>{t('2')}</div>
                            <div className='handlowiec-details-desc'>
                              {isContactRevealed('ewa') ? (
                                <>
                                  <Link to="mailto:filipiak@aodc.pl">
                                    <div className='handlowiec-icon'><MdOutlineEmail /></div>
                                  </Link>
                                  {' '}
                                  filipiak@aodc.pl
                                </>
                              ) : (
                                <>
                                  <div className='handlowiec-icon'><MdOutlineEmail /></div>
                                  {' '}
                                  <button
                                    type="button"
                                    className="btn-show-contact"
                                    onClick={() => handleShowContactClick('ewa')}
                                    disabled={isLoading}
                                  >
                                    {isLoading ? 'Ładowanie...' : 'Pokaż email'}
                                  </button>
                                </>
                              )}
                            </div>
                            <div className='handlowiec-details-desc'>
                              {isContactRevealed('ewa') ? (
                                <>
                                  <a href={`tel:${ewaPhoneHref}`}>
                                    <div className='handlowiec-icon'><BsTelephone /></div>
                                  </a>
                                  {' '}
                                  {formatPhone(ewaPhoneParts)}
                                </>
                              ) : (
                                <>
                                  <div className='handlowiec-icon'><BsTelephone /></div>
                                  {' '}
                                  <button
                                    type="button"
                                    className="btn-show-contact"
                                    onClick={() => handleShowContactClick('ewa')}
                                    disabled={isLoading}
                                  >
                                    {isLoading ? 'Ładowanie...' : 'Pokaż numer'}
                                  </button>
                                </>
                              )}
                            </div>
                        </div>
                    </div>

                    <div className='handlowiec-box'>
                        <img src='/assets/img/team/Arkadiusz.png' alt='handlowiec' loading="lazy" />
                        <div className='handlowiec-details'>
                                <div className='handlowiec-details-desc'><span>Arkadiusz Jaworski</span></div>
                                <div className='handlowiec-details-desc'>Key Account Manager</div>
                                <div className='handlowiec-details-desc'>
                                  {isContactRevealed('arek') ? (
                                    <>
                                      <Link to="mailto:arkadiusz.jaworski@aodc.pl">
                                        <div className='handlowiec-icon'><MdOutlineEmail /></div>
                                      </Link>
                                      {' '}
                                      arkadiusz.jaworski@aodc.pl
                                    </>
                                  ) : (
                                    <>
                                      <div className='handlowiec-icon'><MdOutlineEmail /></div>
                                      {' '}
                                      <button
                                        type="button"
                                        className="btn-show-contact"
                                        onClick={() => handleShowContactClick('arek')}
                                        disabled={isLoading}
                                      >
                                        {isLoading ? 'Ładowanie...' : 'Pokaż email'}
                                      </button>
                                    </>
                                  )}
                                </div>
                                <div className='handlowiec-details-desc'>
                                  {isContactRevealed('arek') ? (
                                    <>
                                      <a href={`tel:${arekPhoneHref}`}>
                                        <div className='handlowiec-icon'><BsTelephone /></div>
                                      </a>
                                      {' '}
                                      {formatPhone(arekPhoneParts)}
                                    </>
                                  ) : (
                                    <>
                                      <div className='handlowiec-icon'><BsTelephone /></div>
                                      {' '}
                                      <button
                                        type="button"
                                        className="btn-show-contact"
                                        onClick={() => handleShowContactClick('arek')}
                                        disabled={isLoading}
                                      >
                                        {isLoading ? 'Ładowanie...' : 'Pokaż numer'}
                                      </button>
                                    </>
                                  )}
                                </div>
                        </div>
                    </div>

                      <div className='handlowiec-box'>
                        <img src='/assets/img/team/konrad.png' alt='handlowiec' loading="lazy" />
                        <div className='handlowiec-details'>
                                <div className='handlowiec-details-desc'><span>Konrad Hołowacz</span></div>
                                <div className='handlowiec-details-desc'>Business Development Manager </div>
                                <div className='handlowiec-details-desc'>
                                  {isContactRevealed('konrad') ? (
                                    <>
                                      <Link to="mailto:konrad.holowacz@aodc.pl">
                                        <div className='handlowiec-icon'><MdOutlineEmail /></div>
                                      </Link>
                                      {' '}
                                      konrad.holowacz@aodc.pl
                                    </>
                                  ) : (
                                    <>
                                      <div className='handlowiec-icon'><MdOutlineEmail /></div>
                                      {' '}
                                      <button
                                        type="button"
                                        className="btn-show-contact"
                                        onClick={() => handleShowContactClick('konrad')}
                                        disabled={isLoading}
                                      >
                                        {isLoading ? 'Ładowanie...' : 'Pokaż email'}
                                      </button>
                                    </>
                                  )}
                                </div>
                                <div className='handlowiec-details-desc'>
                                  {isContactRevealed('konrad') ? (
                                    <>
                                      <a href={`tel:${konradPhoneHref}`}>
                                        <div className='handlowiec-icon'><BsTelephone /></div>
                                      </a>
                                      {' '}
                                      {formatPhone(konradPhoneParts)}
                                    </>
                                  ) : (
                                    <>
                                      <div className='handlowiec-icon'><BsTelephone /></div>
                                      {' '}
                                      <button
                                        type="button"
                                        className="btn-show-contact"
                                        onClick={() => handleShowContactClick('konrad')}
                                        disabled={isLoading}
                                      >
                                        {isLoading ? 'Ładowanie...' : 'Pokaż numer'}
                                      </button>
                                    </>
                                  )}
                                </div>
                        </div>
                    </div>

                </div>
              </div>
              <div className='contact-form-container'>
                <BasicForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default withNamespaces()(dzialhandlowy);

