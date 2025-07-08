import React from 'react'
import { Link } from 'react-router-dom'
import { withNamespaces } from 'react-i18next';
import CarrierPageImage from '../Video Area/CarrierPageImage'

function JobPageMain({ t }) {
  return (
    <>
    <CarrierPageImage />
    <div className='career-title'>
    <div className='policy-flex'>
      <div className='policy-warning'>
      <a target="_blank" href="https://www.iubenda.com/privacy-policy/95256272">{t('polityka2')}</a>
      </div>
    </div>
    <div className='policy-text2'>
      <p>{t('polityka4')}</p>
    </div>
    </div>
    <div className='job-container'>
    <iframe className='job-cards' src="https://widgets.commoninja.com/iframe/fd6e1f80-34b0-47e7-904d-8ae21280e30c" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
  </div>
    </>
  )
}

export default withNamespaces()(JobPageMain);