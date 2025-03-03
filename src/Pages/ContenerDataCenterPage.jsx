import React from 'react'
import ContenerDataCenter from '../Components/ContenerDataCenter/ContenerDataCenter'
import Footer2 from '../Components/Footer/Footer2';
import SidePanel from '../Components/Side Panel/SidePanel'
import Header2 from "../Components/Header/Header2";

const ContenerDataCenterPage = () => {
  return (
    <div>
        <Header2/>
        <SidePanel />
      <ContenerDataCenter/>
         <Footer2/>
    </div>
  )
}

export default ContenerDataCenterPage
