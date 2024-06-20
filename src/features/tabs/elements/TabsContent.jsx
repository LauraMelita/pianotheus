import React from 'react';

import { useAnimations } from '../../../hooks/useAnimations';

import TabReveal from './TabReveal';
import Portal from '../../../components/portal/Portal';

const TabsContent = ({
  currentTab,
  hasPortal,
  portalId,
  renderPortalContent,
}) => {
  const { fadeAndSlide, fadeInOut } = useAnimations();

  return (
    <>
      <div className='tabs__content'>
        <TabReveal
          animationKey={currentTab.name}
          animation={fadeAndSlide}
          duration={0.3}
        >
          {currentTab && currentTab.content}
        </TabReveal>
      </div>

      {/* If hasPortal is true, render additional tabs content inside of a portal */}
      {hasPortal && (
        <Portal portalId={portalId}>
          <div className='tabs__content'>
            <TabReveal
              animationKey={currentTab.name}
              animation={fadeInOut}
              duration={0.1}
            >
              {renderPortalContent && renderPortalContent(currentTab)}
            </TabReveal>
          </div>
        </Portal>
      )}
    </>
  );
};

export default TabsContent;
