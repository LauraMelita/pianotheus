import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'; // TODO: Change default styles
import './ContactForm.scss';

const ContactForm = ({ closeModal }) => {
  const formRef = useRef();

  const sendEmailHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      );

      closeModal();
      if (result.text !== 'OK') throw new Error(`Message could not be send.`);
      toast.success('Thank you for reaching out!', {
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error(error, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmailHandler}>
      <label>Name</label>
      <input type='text' name='from_name' />
      <label>Email</label>
      <input type='email' name='from_email' />
      <label>Message</label>
      <textarea name='message' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ContactForm;
