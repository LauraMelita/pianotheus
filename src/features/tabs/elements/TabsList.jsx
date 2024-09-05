import React from 'react';
import classNames from 'classnames';

import TabIndicator from './TabIndicator';

const TabsList = ({ tabs, tabItemHeight, isSelected, handleSelectTab }) => {
  return (
    <ul className='tabs__list' style={{ padding: `${tabItemHeight}px 0` }}>
      {tabs.map((tab) => {
        const isActive = isSelected(tab);

        return (
          <li
            key={tab.name}
            // prettier-ignore
            className={classNames('tabs__item', {
              'active': isActive,
            })}
          >
            <button onClick={(e) => handleSelectTab(e, tab)}>
              {tab.label}
            </button>
            {isActive && <TabIndicator tabItemHeight={tabItemHeight} />}
          </li>
        );
      })}
    </ul>
  );
};

export default TabsList;
