import React from 'react'
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom'

function ErrorArea({ t }) {
  return (
    <div className="jm-error-area pt-100 pb-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8">
                    <div className="flex-class jm-error-img mb-40 text-center">
                        <img className='error-img' src="assets/img/error/error.png" alt="error 404"/>
                    </div>
                    <div className="jm-error-content text-center">
                        <h3 className="jm-error-title">{t('title12')}</h3>
                        <p className="text mb-30">{t('title12.1')}</p>
                        <Link to="/" className="jm-theme-btn">{t('title12.2')}</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default withNamespaces()(ErrorArea);