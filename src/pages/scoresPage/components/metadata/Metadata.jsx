import React from 'react';

import Image from '../../../../components/UI/image/Image';
// import Button from '../../../../components/UI/button/Button';
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

const ProductionCompanies = ({ companies }) => {
  return (
    <div className='production-companies'>
      {companies.map(({ name, logo }, index) => {
        return logo && <Image key={index} src={logo} alt={name} />;
      })}
    </div>
  );
};

// const Website = ({ link }) => {
//   return (
//     <Button
//       className='official-website'
//       href={link}
//       target='_blank'
//       rel='noreferrer'
//     >
//       Official Website
//     </Button>
//   );
// };

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
        {platforms && <span>Platforms: {formatList(platforms)}</span>}
        {/* {website && <Website link={website} />} */}
        {productionCompanies && (
          <ProductionCompanies companies={productionCompanies} />
        )}
      </div>
    </div>
  );
};

export default Metadata;
