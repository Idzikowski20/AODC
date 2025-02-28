import React from 'react'
import Login from '../Components/AdminPanel/Login'
import Header2 from '../Components/Header/Header2'
import SidePanel from '../Components/Side Panel/SidePanel'
import Footer2 from '../Components/Footer/Footer2'

const LoginPage = () => {
  return (
    <div>
        <Header2/>
        <SidePanel/>
      <Login/>
      <Footer2/>
    </div>
  )
}

export default LoginPage
