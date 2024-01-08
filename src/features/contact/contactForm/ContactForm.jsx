import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import {
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
} from '../../../components/UI/form/Form';
import Button from '../../../components/UI/button/Button';

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
    <Form className='contact' ref={formRef} onSubmit={sendEmailHandler}>
      <FormGroup className='name'>
        <Label>Name</Label>
        <Input type='text' name='from_name' />
      </FormGroup>
      <FormGroup className='email'>
        <Label>Email</Label>
        <Input type='email' name='from_email' />
      </FormGroup>
      <FormGroup className='subject'>
        <Label>Subject</Label>
        <Input type='text' name='subject' />
      </FormGroup>
      <FormGroup className='message'>
        <Label>Message</Label>
        <TextArea name='message' />
      </FormGroup>
      <Button className='contact__btn' variant='default' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
