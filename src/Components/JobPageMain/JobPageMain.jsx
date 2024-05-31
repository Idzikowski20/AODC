import React from 'react'
import { Link } from 'react-router-dom'
import { withNamespaces } from 'react-i18next';
import CarrierPageImage from '../Video Area/CarrierPageImage'

function JobPageMain({ t }) {
  return (
    <>
    <CarrierPageImage />
    <div className='career-title'>
    <div>
    <p>{t('polityka2')}</p>
    </div>
    <div>
      <Link to="/Polityka">
      <button className="career-button">{t('polityka3')}</button>
      </Link>
    </div>
    </div>
    <div className='job-container'>
    <iframe loading='lazy' className='job-cards' src="https://widgets.commoninja.com/iframe/c0f6ec33-7637-4a93-becc-210c8c6b6b9c" frameborder="0" scrolling="no"></iframe>
  </div>
    </>
  )
}

export default withNamespaces()(JobPageMain);