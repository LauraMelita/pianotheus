import React, { useRef, useEffect } from 'react';

import { splitArray } from '../../utils/helpers';

import './HorizontalScroller.scss';

const HorizontalScroller = ({
  className,
  data,
  children,
  isGrouped,
  numberOfGroups,
  isScrollbarHidden = false,
  isSnapsInline = false,
}) => {
  const scrollerRef = useRef(null);

  const groups = splitArray(data, numberOfGroups);

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
      className={`scroller 
      ${className}
      ${isSnapsInline && 'inline-snap'} 
      ${isGrouped && 'grouped'}`}
      tabIndex='0'
      style={{ overflowX: isScrollbarHidden ? 'hidden' : 'auto' }}
    >
      {isGrouped
        ? groups.map((group, index) => (
            <div key={index} className='scroller__group'>
              {group.map((item, itemIndex) => (
                <div key={itemIndex} className='scroller__item'>
                  {children(item)}
                </div>
              ))}
            </div>
          ))
        : data.map((item, index) => (
            <div key={index} className='scroller__group'>
              {children(item)}
            </div>
          ))}
    </div>
  );
};

export default HorizontalScroller;
