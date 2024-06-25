import React from 'react';

import { useModal } from '../../hooks/useModal';
import { useResponsive } from '../../hooks/useResponsive';

import Modal from '../../components/UI/modal/Modal';
import ContactButton from './button/ContactButton';
import ContactForm from './form/ContactForm';

const ContactModal = ({ btnText }) => {
  const { isOpen, toggleModal } = useModal();
  const { isMobile } = useResponsive();

  return (
    <Modal
      className='contact'
      open={isOpen}
      onOpenChange={toggleModal}
      isBackgroundOverlay={isMobile ? true : false}
      triggerComponent={<ContactButton btnText={btnText} />}
    >
      <ContactForm toggleModal={toggleModal} />
    </Modal>
  );
};

export default ContactModal;
