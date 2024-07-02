import React from 'react';

import Svg from '../../../../components/UI/svg/Svg';

import { formatList, formatDate } from '../../../../utils/formatting';

import './Metadata.scss';

const SpokenLanguages = ({ languages }) => {
  const isLanguagesArray = Array.isArray(languages);

  return (
    <span>
      <Svg icon='languages' />
      {isLanguagesArray ? formatList(languages) : languages}
    </span>
  );
};

const Metadata = ({
  firstAirDate,
  country,
  languages,
  boxOffice,
  awards,
  platforms,
  website,
}) => {
  return (
    <div className='metadata'>
      <h3 className='heading heading-lb'>Details</h3>
      <div>
        {firstAirDate && (
          <span>
            <Svg icon='calendar' /> {formatDate(firstAirDate)}
          </span>
        )}
        {country && (
          <span>
            <Svg icon='country' /> {country}
          </span>
        )}
        {languages && <SpokenLanguages languages={languages} />}
        {boxOffice && (
          <span>
            <Svg icon='money' /> {boxOffice}
          </span>
        )}
        {awards && (
          <span>
            <Svg icon='awards' /> {awards}
          </span>
        )}
        {platforms && (
          <span>
            <Svg icon='platforms' /> {formatList(platforms)}
          </span>
        )}
        {website && (
          <span>
            <Svg icon='external-link' />{' '}
            <a href={website} target='_blank' rel='noreferrer'>
              Official Website
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default Metadata;
