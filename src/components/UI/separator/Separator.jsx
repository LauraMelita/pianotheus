import React from 'react';
import * as RadixSeparator from '@radix-ui/react-separator';

const Separator = ({ orientation }) => {
  return (
    <RadixSeparator.Root
      className='separator'
      orientation={orientation}
      decorative
    />
  );
};

export default Separator;
