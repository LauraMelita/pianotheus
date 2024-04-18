import React, { useState } from 'react';

import TabsList from './elements/TabsList';
import TabsContent from './elements/TabsContent';

import './Tabs.scss';

const Tabs = ({ tabs, padding = 15 }) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleSelectTab = (e, tab) => {
    e.preventDefault();
    setCurrentTab(tab);
  };

  const isSelected = (tab) => currentTab.name === tab.name;

  return (
    <div className='tabs'>
      <TabsList
        tabs={tabs}
        padding={padding}
        isSelected={isSelected}
        handleSelectTab={handleSelectTab}
      />
      <TabsContent currentTab={currentTab} />
    </div>
  );
};

export default Tabs;
