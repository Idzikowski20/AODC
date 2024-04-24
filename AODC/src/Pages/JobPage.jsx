import React from 'react'
// import VideoArea4 from '../Components/Video Area/VideoArea4'
import Footer2 from '../Components/Footer/Footer2'
import Header2 from '../Components/Header/Header2'
import Hero from '../Components/Hero/Hero'
import SidePanel from '../Components/Side Panel/SidePanel'



const JobMain = () => {
  return (
    <>
    <SidePanel />
    <Header2 />
    <Hero />
    <div className='job-container'>
    <iframe className='job-cards' src="https://widgets.commoninja.com/iframe/c0f6ec33-7637-4a93-becc-210c8c6b6b9c" frameborder="0" scrolling="no"></iframe>
  </div>
  <Footer2 />
    </>
  )
}

export default JobMain