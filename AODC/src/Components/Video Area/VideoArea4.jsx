import React, { useContext } from 'react';
import { JobContext } from '../../Context/JobContext';
import VideoModal from '../Modal/VideoModal';

const VideoArea = () => {
  const {handleOpenModal} = useContext(JobContext)
    return (
      <div className='hero-container'>
      <div className="jm-video-area">
        <div className="container-fluid p-0">
          <div className="homepage bg-default">
            <div className="jm-video-text">
              <h1 className="title">Sztuka rozwiązań</h1>
              <h1 className="sub-title">Dla data center</h1>
            </div>
          </div>
        </div>
        <VideoModal/>
      </div>
      </div>
    );
  };
  

export default VideoArea