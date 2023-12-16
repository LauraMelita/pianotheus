import React from 'react';
import { useClickOutside } from '@mantine/hooks';

const Dropdown = (props) => {
  const dropdownRef = useClickOutside(props.onOutsideClick);

  return (
    <div className='quick-search__dropdown' ref={dropdownRef}>
      <div className='dropdown-menu'>{props.children}</div>
    </div>
  );
};

export default Dropdown;
