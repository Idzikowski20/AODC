import React, { useEffect } from 'react'
import  PreLoaderAnim from './Animation'
import './style.css'
import { withNamespaces } from 'react-i18next';



function PreLoader({ t }) {

    useEffect(()=>{
        PreLoaderAnim()
    },[])
    
  return (
    <div className='preloader'>
      <div className='content-container-preloader'>
        <div>
            <img className='preloader-logo' src='assets/img/logo/logoloader.png'></img>
        </div>
        <div className='texts-container'>
        <span>{t('title8')}</span>
        </div>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        <span>{t('title8.1')}</span>
      </div>
    </div>
  )
}

export default withNamespaces()(PreLoader);
