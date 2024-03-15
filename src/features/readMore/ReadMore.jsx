import React, { useState } from 'react';

const ReadMore = ({ text, maxAmountOfWords = 37 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const textArray = text.split(' ');
  const canCollapse = textArray.length > maxAmountOfWords;

  const VisibleText = () => {
    const visibleText = canCollapse
      ? textArray.slice(0, maxAmountOfWords).join(' ')
      : text;

    if (isExpanded) {
      return <span>{visibleText}</span>;
    } else {
      return <span>{visibleText}...</span>;
    }
  };

  const HiddenText = () => {
    const hiddenText = textArray.slice(maxAmountOfWords).join(' ');

    if (canCollapse && isExpanded) return <span>{hiddenText}</span>;
  };

  const ShowMoreLess = () => {
    return (
      <span
        onClick={() => setIsExpanded((prev) => !prev)}
        style={{
          cursor: 'pointer',
          marginLeft: '5px',
          color: 'var(--accent-color-100)',
          textDecoration: 'underline',
        }}
      >
        {isExpanded ? 'show less' : 'show more'}
      </span>
    );
  };

  return (
    <p>
      <VisibleText />
      <HiddenText />
      <ShowMoreLess />
    </p>
  );
};

export default ReadMore;
