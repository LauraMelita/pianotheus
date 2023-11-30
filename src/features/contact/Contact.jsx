import React from 'react';

import Modal from '../../components/UI/modal/Modal';
import ContactForm from './contactForm/ContactForm';

import { useModal } from '../../hooks/useModal';

import './Contact.scss';

const Contact = () => {
  const { modalIsOpen, toggleModal } = useModal();

  return (
    <Modal
      open={modalIsOpen}
      toggleModal={toggleModal}
      triggerBtnClassName='contact__btn'
      triggerBtnText='Contact'
      title='Contact'
      description={`Got a question? I'd love to hear from you. Fill out the form and I'll be in touch as soon as possible.`}
    >
      <ContactForm toggleModal={toggleModal} />
    </Modal>
  );
};

export default Contact;
