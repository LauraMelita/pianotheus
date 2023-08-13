import React, { useRef, useEffect } from 'react';

import Icons from '../../assets/icons.svg';
import './Suggestions.scss';

const Suggestions = ({
  suggestions,
  searchQuery,
  active,
  setActive,
  onSuggestionClick,
}) => {
  const selectRef = useRef(null);

  const handleClick = (selected) => {
    onSuggestionClick(selected);
  };

  const handleMouseEnter = (index) => {
    setActive(index);
  };

  useEffect(() => {
    const selected = selectRef?.current?.querySelector('.active');

    const timer = setTimeout(() => {
      if (selected) {
        selected?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest',
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [active]);

  return (
    <ul className='dropdown-menu suggestions' ref={selectRef}>
      {suggestions.map((suggestion, index) => {
        const {
          category,
          scores,
          title,
          year,
          poster,
          composer,
          composerImg,
          birth,
          death,
        } = suggestion;

        return (
          <li
            className={`suggestion ${index === active ? 'active' : ''}`}
            key={index}
            onClick={() => handleClick(suggestion)}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <div className='image'>
              <img
                src={category === 'classical' ? composerImg : poster}
                alt='quick-search img'
              />
            </div>
            <div className='body'>
              <span className='title-suggestion'>
                {category === 'classical'
                  ? `${composer} (${birth} - ${death})`
                  : `${title} (${year})`}
              </span>
              <span className='composer-suggestion'>
                {category !== 'classical' && composer}
              </span>
              {scores.map(({ score }, index) => (
                <span className='score-suggestion' key={index}>
                  {score.toLowerCase().includes(searchQuery) && score}
                </span>
              ))}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Suggestions;
