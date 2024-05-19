import React from 'react';

import Image from '../../../../components/UI/image/Image';
import Button from '../../../../components/UI/button/Button';

import { formatList, formatDate } from '../../../../utils/formatting';

import './Metadata.scss';

const SpokenLanguages = ({ languages }) => {
  const isLanguagesArray = Array.isArray(languages);

  return (
    <span>
      Spoken Languages: {isLanguagesArray ? formatList(languages) : languages}
    </span>
  );
};

const ProductionCompanies = ({ companies }) => {
  return (
    <div className='production-companies'>
      {companies.map(({ name, logo }, index) => {
        return logo && <Image key={index} src={logo} alt={name} />;
      })}
    </div>
  );
};

const Website = ({ link }) => {
  return (
    <Button
      className='official-website'
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      Official Website
    </Button>
  );
};

const Metadata = ({
  firstAirDate,
  country,
  languages,
  boxOffice,
  awards,
  productionCompanies,
  platforms,
  website,
}) => {
  return (
    <div className='metadata'>
      <h4>Details</h4>
      {firstAirDate && <span>First Air Date: {formatDate(firstAirDate)}</span>}
      {country && <span>Country: {country}</span>}
      {languages && <SpokenLanguages languages={languages} />}
      {boxOffice && <span>Box Office: {boxOffice}</span>}
      {awards && <span>Awards: {awards}</span>}
      {platforms && <span>Platforms: {formatList(platforms)}</span>}
      {website && <Website link={website} />}
      {productionCompanies && (
        <ProductionCompanies companies={productionCompanies} />
      )}
    </div>
  );
};

export default Metadata;
