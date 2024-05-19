import React, { useState } from 'react';

const ReadMore = ({ text, maxWords = 35 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = text.split(' ');
  const canCollapse = words.length > maxWords;
  const isFullText = words.length <= maxWords;

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  // Determine the visible portion of the text
  const VisibleText = () => {
    const visibleText = canCollapse ? words.slice(0, maxWords).join(' ') : text;

    if (isExpanded) {
      return <span>{visibleText}</span>;
    } else {
      return <span>{visibleText}...</span>;
    }
  };

  // Hidden portion of the text, displayed when expanded
  const HiddenText = () => {
    const hiddenText = words.slice(maxWords).join(' ');

    if (canCollapse && isExpanded) return <span>&nbsp;{hiddenText}</span>;
  };

  const ShowMoreLess = () => {
    return (
      <span
        onClick={toggleExpanded}
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
  };

  return isFullText ? (
    <p>{text}</p>
  ) : (
    <p>
      <VisibleText />
      <HiddenText />
      <ShowMoreLess />
    </p>
  );
};

export default ReadMore;
