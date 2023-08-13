import { useState } from 'react';

export const useModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  return { modalIsOpen, toggleModal };
};
