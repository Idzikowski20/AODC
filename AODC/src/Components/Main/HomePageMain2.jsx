import React from 'react'

import Team from '../Team/Team'
import WorkArea from '../Work Area/WorkArea'
import VideoArea from '../Video Area/VideoArea'
import VideoArea2 from '../Video Area/VideoArea2'
import Hero from '../Hero/Hero'
import SidePanel from '../../Components/Side Panel/SidePanel'
import Linkedin from '../../Components/Linkedin/Linkedin'
import Cards from '../../Components/Cards/Cards'
import ContactForm from '../../Components/ContactForm/ContactForm'
import AboutUs from '../AboutUs/AboutUs'

const HomePageMain2 = () => {
  return (
    <main className='homepage-2-main'>
        <Hero/>
        <Linkedin />
        <Cards />
        <AboutUs />
        <VideoArea2 />
        <SidePanel/>
        <WorkArea/>
        <Team/>
        <VideoArea/>
        <ContactForm />

    </main>
  )
}

export default HomePageMain2