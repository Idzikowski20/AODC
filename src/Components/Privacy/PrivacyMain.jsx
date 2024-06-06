import React from 'react'
import PrivacyPageImage from '../Video Area/PrivacyPageImage'
import { withNamespaces } from 'react-i18next';

function PrivacyMain({ t }) {
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
    </p>
  </div>
    </section>
    </>
  )
}

export default withNamespaces()(PrivacyMain);