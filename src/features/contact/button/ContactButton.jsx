import React from 'react';

import Button from '../../../components/UI/button/Button';

const ContactButton = ({ btnText }) => {
  return (
    <Button
      className='contact__btn'
      style={{ border: 'none', backgroundColor: 'transparent' }}
    >
      {btnText}
    </Button>
  );
};

export default ContactButton;
