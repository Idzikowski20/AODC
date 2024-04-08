import React from 'react'
import Banner2 from '../Banner/Banner2'
import WorkArea from '../Work Area/WorkArea'
import VideoArea2 from '../Video Area/VideoArea2'
import SidePanel from '../../Components/Side Panel/SidePanel'

const HomePageMain2 = () => {
  return (
    <main className='homepage-2-main'>
        <Banner2/>
        <SidePanel/>
        <VideoArea2/>
        <WorkArea/>
    </main>
  )
}

export default HomePageMain2