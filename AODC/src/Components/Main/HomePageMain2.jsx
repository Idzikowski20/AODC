import React from 'react'
import Banner2 from '../Banner/Banner2'
import Team from '../Team/Team'
import WorkArea from '../Work Area/WorkArea'
import VideoArea from '../Video Area/VideoArea'
import VideoArea2 from '../Video Area/VideoArea2'
import VideoArea3 from '../Video Area/VideoArea3'
import VideoArea4 from '../Video Area/VideoArea4'
import SidePanel from '../../Components/Side Panel/SidePanel'
import Linkedin from '../../Components/Linkedin/Linkedin'

const HomePageMain2 = () => {
  return (
    <main className='homepage-2-main'>
        <VideoArea4/>
        <Linkedin />
        <VideoArea2 />
        <SidePanel/>
        <Team/>
        <WorkArea/>
        <VideoArea/>

    </main>
  )
}

export default HomePageMain2