import React from 'react';

import Button from '../../../../components/UI/button/Button';

const PaginationNumbers = ({ pageNumbers, currentPage, handlePageChange }) => {
  return (
    <div className='pagination__numbers'>
      {pageNumbers?.map((pageNumber) => (
        <Button
          key={pageNumber}
          className={currentPage === pageNumber ? 'active' : ''}
          onClick={() => handlePageChange(pageNumber - 1)}
        >
          {pageNumber}
        </Button>
      ))}
    </div>
  );
};

export default PaginationNumbers;
