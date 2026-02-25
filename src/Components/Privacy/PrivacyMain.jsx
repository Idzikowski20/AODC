import React, { useEffect } from 'react'
import PrivacyPageImage from '../Video Area/PrivacyPageImage'
import { withNamespaces } from 'react-i18next';

function PrivacyMain({ t }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
    <PrivacyPageImage />
    <section>
    <div className='privacy-title'>
    <p>
      <div className='polityka-desc'>
      {t('politykadesc')}
      </div>
      <div className='polityka-desc'>
      {t('politykadesc1')}
      </div>
      <div className='polityka-desc'>
      {t('politykadesc2')}
      </div>
      <div className='polityka-desc'>
      {t('politykadesc3')}
      </div>
      <div className='polityka-desc'>
      {t('politykadesc4')}
      </div>
      <div className='polityka-desc'>
      {t('politykadesc5')}
      </div>
      <div className='polityka-desc'>
      {t('politykadesc6')}
      </div>
      <div className='polityka-desc'>
      {t('politykadesc7')}
      </div>
      <div className='polityka-desc' style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderLeft: '4px solid #0078d4' }}>
        <strong>8. Microsoft Clarity</strong><br/>
        {t('clarity.privacy')} <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" style={{ color: '#0078d4', textDecoration: 'underline' }}>{t('clarity.privacy.link')}</a>.
      </div>
    </p>
  </div>
    </section>
    </>
  )
}

export default withNamespaces()(PrivacyMain);