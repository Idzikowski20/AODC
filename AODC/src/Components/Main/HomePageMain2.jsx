import React from 'react'

import Team from '../Team/Team'
import WorkArea from '../Work Area/WorkArea'
import VideoArea from '../Video Area/VideoArea'
import VideoArea2 from '../Video Area/VideoArea2'
// import VideoArea4 from '../Video Area/VideoArea4'
import Hero from '../Hero/Hero'
import SidePanel from '../../Components/Side Panel/SidePanel'
import Linkedin from '../../Components/Linkedin/Linkedin'
import Cards from '../../Components/Cards/Cards'
import ContactForm from '../../Components/ContactForm/ContactForm'
import AboutUs from '../AboutUs/AboutUs'

const HomePageMain2 = () => {
  return (
    <main className='homepage-2-main'>
        <Hero />
        {/* <VideoArea4 /> */}
        <Linkedin />
        <Cards />
        <AboutUs />
        <VideoArea2 />
        <SidePanel/>
        <WorkArea/>
        <Team/>
        <ContactForm />
        <VideoArea/>
    </main>
  )
}

export default HomePageMain2