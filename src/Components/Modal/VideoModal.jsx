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
            width="100%"
            height="400"
            src={t('videomodal')}
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        </Modal.Body>
    </Modal>
  )
  }

export default withNamespaces()(VideoModal);