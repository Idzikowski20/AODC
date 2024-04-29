import React, { useEffect } from 'react'
import  PreLoaderAnim from './Animation'
import './style.css'



const PreLoader = () => {

    useEffect(()=>{
        PreLoaderAnim()
    },[])
    
  return (
    <div className='preloader'>
        <div>
            <img className='preloader-logo' src='assets/img/logo/logoloader.png'></img>
        </div>
        <div className='texts-container'>
        <span>Witaj!</span>
        </div>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        <span>Ładowanie..</span>
    </div>
  )
}

export default PreLoader
