import React from 'react';

const Suggestions = ({ suggestions, suggestionIndex, onSuggestionClick }) => {
  const handleClick = (selected) => {
    onSuggestionClick(selected);
  };

  return (
    <ul className='suggestions'>
      {suggestions.map((suggestion, index) => {
        return (
          <div
            className={`suggestion ${
              index === suggestionIndex ? 'active' : ''
            }`}
            key={index}
            onClick={() => handleClick(suggestion)}
            tabIndex='0'
            onKeyDown={(e) => console.log('key pressed i think')}
          >
            {suggestion.title}
          </div>
        );
      })}
    </ul>
  );
};

export default Suggestions;
