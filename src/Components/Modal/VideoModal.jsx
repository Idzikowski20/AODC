import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { JobContext } from '../../Context/JobContext';
import { withNamespaces } from 'react-i18next';



function VideoModal({ t}) {
    const {handleCloseModal, showModal} = useContext(JobContext)  
  return (
    <Modal show={showModal} onHide={handleCloseModal} size='lg' centered>
        <Modal.Body>
         <iframe 
         frameborder="0"
          type="text/html"
           src="https://www.dailymotion.com/embed/video/x94csfw?autoplay=1" 
           width="100%"
            height="400"
             allowfullscreen title="Dailymotion Video Player" allow="autoplay; web-share"> </iframe>
        </Modal.Body>
    </Modal>
  )
  }

export default withNamespaces()(VideoModal);