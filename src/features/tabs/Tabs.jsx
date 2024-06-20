import React, { useState } from 'react';

import TabsList from './elements/TabsList';
import TabsContent from './elements/TabsContent';

import './Tabs.scss';

const Tabs = ({
  className,
  tabs,
  tabItemHeight = 10,
  hasPortal = false,
  portalId,
  renderPortalContent,
}) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleSelectTab = (e, tab) => {
    e.preventDefault();
    setCurrentTab(tab);
  };

  const isSelected = (tab) => currentTab.name === tab.name;

  return (
    <div className={className ? `tabs ${className}` : 'tabs'}>
      <TabsList
        tabs={tabs}
        tabItemHeight={tabItemHeight}
        isSelected={isSelected}
        handleSelectTab={handleSelectTab}
      />

      <TabsContent
        hasPortal={hasPortal}
        portalId={portalId}
        currentTab={currentTab}
        renderPortalContent={renderPortalContent}
      />
    </div>
  );
};

export default Tabs;
