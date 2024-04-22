import React, { useState } from 'react';

const ReadMore = ({ text, maxAmountOfWords = 37 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = text.split(' ');
  const canCollapse = words.length > maxAmountOfWords;

  const toggleExpansion = () => setIsExpanded((prev) => !prev);

  // If collapsing is possible and `isExpanded` is false, show only part of the text. Otherwise show the entire text.
  const visibleText =
    canCollapse && !isExpanded
      ? words.slice(0, maxAmountOfWords).join(' ') + '...'
      : text;

  // Only show hidden text when collapsing is possible and `isExpanded` is true
  const hiddenText =
    canCollapse && isExpanded ? words.slice(maxAmountOfWords).join(' ') : '';
  // The fallback empty string avoids undefined or null values that might cause errors during rendering.

  const ShowMoreLessButton = () => (
    <span
      onClick={toggleExpansion}
      style={{
        cursor: 'pointer',
        marginLeft: '5px',
        color: 'var(--accent-color-100)',
        textDecoration: 'underline',
      }}
    >
      {isExpanded ? 'show less' : 'read more'}
    </span>
  );

  return (
    <p>
      <span>{visibleText}</span>
      {isExpanded && <span>{hiddenText}</span>}
      {canCollapse && <ShowMoreLessButton />}
    </p>
  );
};

export default ReadMore;
