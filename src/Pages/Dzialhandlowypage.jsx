import React from 'react'
import Dzialhandlowy from '../Components/Dzialhandlowy/dzialhandlowy'
import Footer2 from '../Components/Footer/Footer2';
import SidePanel from '../Components/Side Panel/SidePanel'
import Header2 from "../Components/Header/Header2";

const DzialhandlowyPage = () => {
  return (
    <div>
        <Header2/>
        <SidePanel />
      <Dzialhandlowy/>
         <Footer2/>
    </div>
  )
}

export default DzialhandlowyPage
