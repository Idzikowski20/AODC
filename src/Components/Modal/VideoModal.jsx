import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { JobContext } from '../../Context/JobContext';
import { withNamespaces } from 'react-i18next';



function VideoModal({ t}) {
    const {handleCloseModal, showModal} = useContext(JobContext)  
  return (
    <Modal show={showModal} onHide={handleCloseModal} size='lg' centered>
        <Modal.Body>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lYkVhmQUq9I?si=uJuIgniS3mWHhBIi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
    </Modal>
  )
  }

export default withNamespaces()(VideoModal);