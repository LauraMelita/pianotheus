import React, { useState } from 'react';

import TabsList from './elements/TabsList';
import TabsContent from './elements/TabsContent';

import './Tabs.scss';

const Tabs = ({ tabs, tabItemHeight = 15, isPortal, portalId }) => {
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
        tabItemHeight={tabItemHeight}
        isSelected={isSelected}
        handleSelectTab={handleSelectTab}
      />

      <TabsContent
        isPortal={isPortal}
        portalId={portalId}
        currentTab={currentTab}
      />
    </div>
  );
};

export default Tabs;
