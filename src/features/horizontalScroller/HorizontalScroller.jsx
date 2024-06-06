import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

import { splitArray } from '../../utils/helpers';

import './HorizontalScroller.scss';

const HorizontalScroller = ({
  className,
  data,
  children,
  numberOfGroups,
  isScrollbarHidden = true,
  isSnaps = true,
  itemGap,
}) => {
  const scrollerRef = useRef(null);
  const scrollerItemRef = useRef(null);
  const isInView = useInView(scrollerItemRef, {
    amount: 1, // The last scroller item needs to be 100% in view.
  });

  const groups = splitArray(data, numberOfGroups);
  const lastElement = groups.length - 1;
  const maskRight = !isInView
    ? 'linear-gradient(90deg, transparent, #fff 0%, #fff 95%, transparent)'
    : 'unset';

  useEffect(() => {
    const handleMouseWheel = (event) => {
      if (scrollerRef.current) {
        event.preventDefault(); // Prevent default vertical scroll

        scrollerRef.current.scrollBy({
          left: event.deltaY, // Scroll horizontally by the deltaY value
          behavior: 'smooth', // Makes the scrolling smooth
        });
      }
    };

    const scrollerElement = scrollerRef.current;
    scrollerElement.addEventListener('wheel', handleMouseWheel);

    return () => {
      scrollerElement.removeEventListener('wheel', handleMouseWheel);
    };
  }, []);

  return (
    <div
      ref={scrollerRef}
      tabIndex='0'
      className={`scroller 
      ${className}
      ${isSnaps && 'scroll-snap'} 
      ${isScrollbarHidden && 'scrollbar-hidden'}
      `}
      style={{
        gap: itemGap,
        mask: maskRight,
      }}
    >
      {groups.map((group, index) => (
        <div key={index} className='scroller__group' style={{ gap: itemGap }}>
          {group.map((item, itemIndex) => (
            <div
              key={itemIndex}
              ref={index === lastElement ? scrollerItemRef : null}
              className='scroller__item'
            >
              {children(item)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroller;
