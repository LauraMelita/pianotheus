import { useState, useEffect, useRef } from 'react';

export const useComponentVisible = (initialIsVisible) => {
  const [componentIsVisible, setComponentIsVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      setComponentIsVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setComponentIsVisible(false);
    }
  };

  const toggleComponentIsVisible = () =>
    setComponentIsVisible((prevState) => !prevState);

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey, true);
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return {
    ref,
    componentIsVisible,
    setComponentIsVisible,
    toggleComponentIsVisible,
  };
};
