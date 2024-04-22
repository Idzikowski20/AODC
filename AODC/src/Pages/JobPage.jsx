import React from 'react'
import SidePanel from '../Components/Side Panel/SidePanel'
import Header from '../Components/Header/Header'
import JobMain from '../Components/Main/JobMain'
import Footer from '../Components/Footer/Footer'

const JobPage = () => {
  return (
    <>
    <SidePanel/>
    <Header/>
    <JobMain/>
    <Header/>
    <Footer/>
    </>
  )
}

export default JobPage