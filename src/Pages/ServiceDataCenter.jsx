import React from 'react'
import Header2 from "../Components/Header/Header2";
import ServiceDataCenterPage from '../Components/ServiceDataCenterPage/HomePage';
import Footer2 from '../Components/Footer/Footer2';
import SidePanel from '../Components/Side Panel/SidePanel'

const ServiceDataCenter = () => {
  return (
    <>
    <Header2/>
    <SidePanel />
    <ServiceDataCenterPage/>
    <Footer2/>
</>
  )
}

export default ServiceDataCenter