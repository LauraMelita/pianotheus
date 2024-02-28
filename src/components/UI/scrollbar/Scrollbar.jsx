import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

import './Scrollbar.scss';

const Scrollbar = ({ orientation, children }) => {
  return (
    <ScrollArea.Root className='scroll-area__root' type='auto'>
      <ScrollArea.Viewport className='scroll-area__viewport'>
        {children}
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        className='scroll-area__scrollbar'
        orientation={orientation}
      >
        <ScrollArea.Thumb className='scroll-area__thumb' />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};

export default Scrollbar;
