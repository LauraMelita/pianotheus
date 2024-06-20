import React from 'react';
import { Link } from 'react-router-dom';

import VideoHoverPreview from '../../../features/videoHoverPreview/VideoHoverPreview';
// import Svg from '../../../components/UI/svg/Svg';

import { siteConfig } from '../../../utils/config';

import './Categories.scss';

const Categories = () => {
  const categories = siteConfig.home.categories;

  return (
    <div className='categories'>
      <h1 className='heading'>Categories</h1>
      <h4>Browse Collections for Piano Songs to Play</h4>

      <ul>
        {categories.map(({ title, path, cldId, icon }) => (
          <Link key={title} to={path}>
            <VideoHoverPreview
              className='category'
              videoId={cldId}
              aspectRatio='16 / 9'
            >
              <span className='category__title heading'>
                {/* <Svg icon={icon} /> */}
                {title}
              </span>
            </VideoHoverPreview>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
