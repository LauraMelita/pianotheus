import React from 'react';

import PopOutCard from '../../../components/UI/card/popout/PopOutCard';

import { siteConfig } from '../../../utils/config';
import { convertToPath } from '../../../utils/helpers';

import './HomeCategories.scss';

const HomeCategories = () => {
  return (
    <div className='categories-wrapper'>
      {siteConfig.categories.map(
        ({ category, backgroundImage, popOutImage }, index) => (
          <div key={index} className={convertToPath(category)}>
            <PopOutCard
              category={category}
              backgroundImage={`${require(`../../../assets/images/categories/${backgroundImage}`)}`}
              popOutImage={`${require(`../../../assets/images/categories/${popOutImage}`)}`}
            />
            <span>{category}</span>
          </div>
        )
      )}
    </div>
  );
};

export default HomeCategories;
