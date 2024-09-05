import React from 'react';
import classNames from 'classnames';

import Button from '../../../../components/UI/button/Button';

const PaginationNumbers = ({ pageNumbers, currentPage, handlePageChange }) => {
  return (
    <div className='pagination__numbers'>
      {pageNumbers?.map((pageNumber) => (
        <Button
          key={pageNumber}
          // prettier-ignore
          className={classNames({ 'active': currentPage === pageNumber })}
          onClick={() => handlePageChange(pageNumber - 1)}
        >
          {pageNumber}
        </Button>
      ))}
    </div>
  );
};

export default PaginationNumbers;
