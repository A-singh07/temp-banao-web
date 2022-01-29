import React from 'react'
import closeBtn from '../../../public/assets/images/close-btn.svg'
import ContactForm from '../../ContactForm/ContactForm'
import { Modal, ModalBody } from 'react-bootstrap'

import styles from './ModalForm.module.css'

const ModalForm = ({ showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <>
      <Modal
        show={showModal}
        onHide={closeModal}
        backdrop='true'
        keyboard={false}
        contentClassName={styles.contactModalContent}
        centered
      >
        <ContactForm close_Btn={true} setShowModal={setShowModal} />
      </Modal>
    </>
  )
}

export default ModalForm
