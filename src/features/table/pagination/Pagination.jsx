import React from 'react';

import PaginationButton from './button/PaginationButton';
import PaginationNumbers from './numbers/PaginationNumbers';

import './Pagination.scss';

const Pagination = ({
  tableData: {
    getCanPreviousPage,
    getCanNextPage,
    previousPage,
    nextPage,
    setPageIndex,
  },
  pagination: { pageIndex, pageSize },
  data,
}) => {
  const isFirstPage = pageIndex === 0;
  const hasPreviousPage = getCanPreviousPage();
  const hasNextPage = getCanNextPage();
  const isLastPage = pageIndex === Math.ceil(data.length / pageSize) - 1;

  const currentPage = pageIndex + 1;
  const totalPages = Math.ceil(data.length / pageSize);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePreviousPage = () => previousPage();
  const handleNextPage = () => nextPage();
  const handlePageChange = (pageNumber) => setPageIndex(pageNumber);

  if (totalPages === 1) return;

  return (
    <div className='pagination'>
      <PaginationButton
        icon='double-chevron-left'
        onClick={() => handlePageChange(0)}
        disabled={isFirstPage}
      />
      <PaginationButton
        icon='chevron-left'
        onClick={handlePreviousPage}
        disabled={!hasPreviousPage}
      />
      <PaginationNumbers
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <PaginationButton
        icon='chevron-right'
        onClick={handleNextPage}
        disabled={!hasNextPage}
      />
      <PaginationButton
        icon='double-chevron-right'
        onClick={() => handlePageChange(totalPages - 1)}
        disabled={isLastPage}
      />
    </div>
  );
};

export default Pagination;
