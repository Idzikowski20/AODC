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
            <img src='assets/img/logo/logo.png'></img>
        </div>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default PreLoader
