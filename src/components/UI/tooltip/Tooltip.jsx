import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import './Tooltip.scss';

const Tooltip = ({ content, place, offset, children }) => {
  return (
    <RadixTooltip.Provider delayDuration={0}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal
          container={document.getElementById('tooltip-root')}
        >
          <RadixTooltip.Content
            className='tooltip__content'
            side={place}
            sideOffset={offset}
          >
            {content}
            <RadixTooltip.Arrow className='tooltip__arrow' />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
