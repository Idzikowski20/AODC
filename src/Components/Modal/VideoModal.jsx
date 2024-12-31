import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { JobContext } from '../../Context/JobContext';
import { withNamespaces } from 'react-i18next';
import YouTube from "react-youtube";


function VideoModal({ t}) {
    const {handleCloseModal, showModal} = useContext(JobContext)  
  return (
    <Modal show={showModal} onHide={handleCloseModal} size='lg' centered>
        <Modal.Body>
        <YouTube videoId="lYkVhmQUq9I"/>  
        <iframe class="youtube-player" type="text/html" width="640" height="385" 
src="https://youtu.be/lYkVhmQUq9I?si=FBvqZc66GJlthrt9" frameborder="0">
</iframe>
        </Modal.Body>
    </Modal>
  )
  }

export default withNamespaces()(VideoModal);