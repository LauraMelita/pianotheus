import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({ toggleModal }) => {
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

      toggleModal();
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
    <form className='contact__form' ref={formRef} onSubmit={sendEmailHandler}>
      <div className='contact__form-group'>
        <label className='required'>Name</label>
        <input type='text' name='from_name' />
      </div>
      <div className='contact__form-group'>
        <label className='required'>Email</label>
        <input type='email' name='from_email' />
      </div>
      <div className='contact__form-group'>
        <label>Subject</label>
        <input type='subject' name='from_subject' />
      </div>
      <div className='contact__form-group'>
        <label className='required'>Message</label>
        <textarea name='message' />
      </div>
      <div className='contact__form-actions'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
