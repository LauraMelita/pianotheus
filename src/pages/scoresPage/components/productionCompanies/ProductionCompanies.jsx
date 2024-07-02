import React from 'react';

import Image from '../../../../components/UI/image/Image';

import './ProductionCompanies.scss';

const ProductionCompanies = ({ companies }) => {
  return (
    companies && (
      <div className='production-companies'>
        {companies.map(({ name, logo }, index) => {
          return logo && <Image key={index} src={logo} alt={name} />;
        })}
      </div>
    )
  );
};

export default ProductionCompanies;
