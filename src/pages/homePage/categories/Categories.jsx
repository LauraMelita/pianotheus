import React from 'react';

import PopOutCard from '../../../components/UI/card/popout/PopOutCard';

import { siteConfig } from '../../../utils/config';
import { convertToPath } from '../../../utils/formatting';

import './Categories.scss';

const Categories = () => {
  return (
    <div className='categories'>
      <h2 className='header gradient-text'>Discover by Category</h2>
      <div className='categories__container'>
        {siteConfig.home.categories.map(
          ({ category, backgroundImage, popOutImage }, index) => (
            <div
              key={index}
              className={`categories__${convertToPath(category)}`}
            >
              <PopOutCard
                title={category}
                backgroundImage={`${require(`../../../assets/images/categories/${backgroundImage}`)}`}
                popOutImage={`${require(`../../../assets/images/categories/${popOutImage}`)}`}
                minWidth={200}
                minHeight={200}
                hoverScale={1.02}
              />
              <span className='categories__title'>{category}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Categories;
