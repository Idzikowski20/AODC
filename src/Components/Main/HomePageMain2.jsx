import React from 'react'

import Team from '../Team/Team'
import WorkArea from '../Work Area/WorkArea'
import VideoArea from '../Video Area/VideoArea'
import VideoArea3 from '../Video Area/VideoArea3'
import Hero2 from '../Hero/Hero2'
import SidePanel from '../../Components/Side Panel/SidePanel'
import Linkedin from '../../Components/Linkedin/Linkedin'
import Cards from '../../Components/Cards/Cards'
// import ContactForm from '../../Components/ContactForm/ContactForm'
import AboutUs from '../AboutUs/AboutUs'
import Counter from '../Video Area/Counter'


const HomePageMain2 = () => {
  return (
    <main className='homepage-2-main'>
        <Hero2 />
        <Linkedin />
        <Cards />
        <AboutUs />
        <Counter />
        <SidePanel/>
        <WorkArea/>
        <Team/>
        <VideoArea/>
    </main>
  )
}

export default HomePageMain2