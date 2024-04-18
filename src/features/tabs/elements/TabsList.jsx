import React from 'react';

import TabIndicator from './TabIndicator';

const TabsList = ({ tabs, padding, isSelected, handleSelectTab }) => {
  return (
    <ul className='tabs__list' style={{ padding: `${padding}px 0` }}>
      {tabs.map((tab) => {
        const isActive = isSelected(tab);

        return (
          <li
            key={tab.name}
            className={`tabs__item ${isActive ? 'active' : ''}`}
          >
            <button onClick={(e) => handleSelectTab(e, tab)}>
              {tab.label}
            </button>
            {isActive && <TabIndicator padding={padding} />}
          </li>
        );
      })}
    </ul>
  );
};

export default TabsList;
