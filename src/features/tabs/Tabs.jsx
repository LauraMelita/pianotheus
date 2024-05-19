import React, { useState } from 'react';

import TabsList from './elements/TabsList';
import TabsContent from './elements/TabsContent';

import './Tabs.scss';

const Tabs = ({ className, tabs, tabItemHeight = 10, isPortal, portalId }) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleSelectTab = (e, tab) => {
    e.preventDefault();
    setCurrentTab(tab);
  };

  const isSelected = (tab) => currentTab.name === tab.name;

  return (
    <section className={className ? `tabs ${className}` : 'tabs'}>
      <TabsList
        tabs={tabs}
        tabItemHeight={tabItemHeight}
        isSelected={isSelected}
        handleSelectTab={handleSelectTab}
      />

      {/* The tabs content can be portaled */}
      <TabsContent
        isPortal={isPortal}
        portalId={portalId}
        currentTab={currentTab}
      />
    </section>
  );
};

export default Tabs;
