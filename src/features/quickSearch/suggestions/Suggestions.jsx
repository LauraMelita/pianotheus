import React, { forwardRef } from 'react';

import Image from '../../../components/UI/image/Image';
import Svg from '../../../components/UI/svg/Svg';

import './Suggestions.scss';

const Suggestions = forwardRef(
  (
    {
      suggestionRef,
      suggestions,
      searchQuery,
      active,
      handleSuggestionClick,
      handleSuggestionHover,
    },
    ref
  ) => {
    const renderImage = ({
      category,
      composerImg,
      poster,
      composer,
      title,
    }) => {
      const isClassical = category === 'classical';

      return (
        <Image
          src={isClassical ? composerImg : poster}
          alt={isClassical ? composer : `${title} poster`}
        />
      );
    };

    const renderTitle = ({ category, composer, title, year }) => {
      const isClassical = category === 'classical';

      return (
        <span className='suggestion__title'>
          {isClassical ? composer : `${title} (${year})`}
        </span>
      );
    };

    const renderComposer = ({ category, composer }) => {
      const isClassical = category === 'classical';

      if (!isClassical)
        return <span className='suggestion__composer'>{composer}</span>;
    };

    const renderScores = ({ scores }) =>
      scores.map(({ score }, index) => {
        const searchQueryIncludesScore = score
          .toLowerCase()
          .includes(searchQuery);

        if (searchQueryIncludesScore)
          return (
            <li key={index}>
              <Svg icon='midi-text' />
              <span>{score}</span>
            </li>
          );
      });

    return (
      <ul className='suggestions' ref={suggestionRef}>
        {suggestions.map((suggestion, index) => {
          return (
            <li
              className={`suggestion ${index === active ? 'active' : ''}`}
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseEnter={() => handleSuggestionHover(index)}
            >
              <div className='suggestion__image'>{renderImage(suggestion)}</div>
              <div className='suggestion__details'>
                {renderTitle(suggestion)}
                {renderComposer(suggestion)}
                <ul className='suggestion__scores'>
                  {renderScores(suggestion)}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
);

export default Suggestions;
