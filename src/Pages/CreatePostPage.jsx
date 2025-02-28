import React from 'react'
import CreatePost from '../Components/AdminPanel/CreatePost'
import Footer2 from '../Components/Footer/Footer2'
import SidePanel from '../Components/Side Panel/SidePanel'
const CreatePostPage = () => {
  return (
    <div>
      <SidePanel />
      <CreatePost />
      <Footer2/>
    </div>
  )
}

export default CreatePostPage
