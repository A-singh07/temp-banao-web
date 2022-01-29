import React, { useState, useEffect } from "react";
import { contactForm } from '../../pages/api/contactForm';
import styles from "./ContactForm.module.css";
import closeBtn from '../../public/assets/images/close-btn.svg'
import Image from 'next/dist/client/image'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm({ close_Btn, setShowModal }) {
  const [check, setCheck] = useState(true);
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Message, setMessage] = useState('');
  const [submitDisable, setSubmitDisable] = useState(true)

  const sendFormEmail = (e) => {
    e.preventDefault();
    const formData = {
      full_name: Name,
      email: Email,
      phone: Phone,
      message: Message
    }
    contactForm(formData)
      .then((res) => {
        console.log('Contact Data Sent', res);
      });
    setName('');
    setEmail('')
    setPhone('')
    setMessage('');
    setSubmitDisable(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const validateForm = () => {
    (Phone !== '') && (Name !== '') && (Email !== '') && (Message !== '') ? setSubmitDisable(false) : setSubmitDisable(true);
  }

  const notify = () => {
    toast.success('Message Received');
  }

  useEffect(() => {
    var messageArea = document.getElementById('message')
    messageArea.addEventListener('change keydown keyup paste cut', function () {
      messageArea.height(0).height(messageArea.scrollHeight + 2);
      if (messageArea.height >= 96) {
        messageArea.style.overflow = 'auto'
      } else {
        messageArea.style.overflow = 'hidden';
      }
    })
  }, [])

  return (
    <form className={styles.container} onSubmit={sendFormEmail} onChange={validateForm}>
      <p className={styles.title}>
        GET IN TOUCH WITH OUR EXPERTS TO TURN YOUR IDEA INTO REALITY.
      </p>
      {
        close_Btn && (
          <div className={styles.closeBtn} onClick={() => closeModal()}>
            <Image width={24} height={24} layout='intrinsic' src={closeBtn.src} alt="" />
          </div>
        )
      }
      <input className={styles.name} autoComplete='off' placeholder="Full Name" name='name' value={Name} onChange={(e) => setName(e.target.value)} />
      <input className={styles.email} autoComplete='off' placeholder="Email" type="email" name='email' value={Email} onChange={(e) => setEmail(e.target.value)} />
      <input className={styles.phone} autoComplete='off' placeholder="Phone" type="tel" name='phone' value={Phone} onChange={(e) => setPhone(e.target.value)} />
      <textarea
        id='message'
        autoComplete='off'
        className={styles.message}
        placeholder="Message"
        name='message'
        value={Message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <div className={styles.checkboxContainer}>
        <label className='checkbox-label' htmlFor='mailList-checkbox'>
          <input type="checkbox" id='mailList-checkbox' checked={check} onChange={(e) => setCheck(!check)} />
          <span className='custom-checkmark'></span>
          <p>Add me in mailing list</p>
        </label>
      </div>
      <Button variant="contained" disableElevation className={styles.submit} onClick={notify} disabled={submitDisable} type='submit'>Submit</Button>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </form>
  );
}

export default ContactForm;
