import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import './Tooltip.scss';

const Tooltip = ({
  content,
  align = 'center',
  place = 'bottom',
  offset = 10,
  children,
}) => {
  return (
    <RadixTooltip.Provider delayDuration={0}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal container={document.getElementById('portals')}>
          <RadixTooltip.Content
            className='tooltip__content'
            align={align}
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
