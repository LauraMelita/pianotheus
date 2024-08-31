import { useState, useRef } from 'react';

export const useDropdownModal = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasOpenModal, setHasOpenModal] = useState(false);

  const dropdownTriggerRef = useRef(null);
  const focusRef = useRef(null);

  const handleSelectDropdownItem = () => {
    focusRef.current = dropdownTriggerRef.current;
  };

  const handleToggleModal = (open) => {
    setHasOpenModal(open);

    if (!open) setDropdownOpen(false);
  };

  return {
    dropdownTriggerRef,
    focusRef,
    dropdownOpen,
    hasOpenModal,
    setDropdownOpen,
    handleSelectDropdownItem,
    handleToggleModal,
  };
};
