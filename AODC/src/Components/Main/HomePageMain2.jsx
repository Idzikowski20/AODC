import React from 'react'
import Banner2 from '../Banner/Banner2'
import Team from '../Team/Team'
import WorkArea from '../Work Area/WorkArea'
import VideoArea from '../Video Area/VideoArea'
import SidePanel from '../../Components/Side Panel/SidePanel'
import Linkedin from '../../Components/Linkedin/Linkedin'

const HomePageMain2 = () => {
  return (
    <main className='homepage-2-main'>
        <Banner2/>
        <Linkedin />
        <SidePanel/>
        <Team/>
        <WorkArea/>
        <VideoArea/>
    </main>
  )
}

export default HomePageMain2