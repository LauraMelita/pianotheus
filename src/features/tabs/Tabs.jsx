import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';

import './Tabs.scss';

const Tabs = ({ defaultValue, tabs, padding = 20 }) => {
  return (
    <RadixTabs.Root className='tabs' defaultValue={defaultValue}>
      <RadixTabs.List
        className='tabs__list'
        style={{ padding: `${padding}px 0` }}
      >
        {tabs.map(({ value, name }, index) => (
          <div key={index}>
            <RadixTabs.Trigger className='tabs__trigger' value={value}>
              {name}
              <div
                className='tabs__indicator'
                aria-hidden
                style={{ bottom: `-${padding}px` }}
              />
            </RadixTabs.Trigger>
          </div>
        ))}
      </RadixTabs.List>
      {tabs.map(({ value, content }, index) => (
        <RadixTabs.Content key={index} className='tabs__content' value={value}>
          {content}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
};

export default Tabs;
