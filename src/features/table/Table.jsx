import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';

import SearchBar from '../search/SearchBar';
import Pagination from './pagination/Pagination';
import TableHead from './elements/TableHead';
import TableBody from './elements/TableBody';
import NoResults from '../search/noResults/NoResults';

import './Table.scss';

const Table = ({
  className,
  data,
  columns,
  resultsPerPage,
  searchBarPlaceholder,
}) => {
  const [sorting, setSorting] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: resultsPerPage, //default page size
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setSearchTerm,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      globalFilter: searchTerm,
      pagination,
    },
  });

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleClearSearch = () => setSearchTerm('');

  const hasSearchResults = table.getRowModel().rows.length > 0;
  const isSearching = searchTerm !== '';

  return (
    <div className={`${className || ''} table`}>
      <div className='table__header'>
        <SearchBar
          placeholder={searchBarPlaceholder}
          value={searchTerm}
          onChange={handleSearch}
          clearSearch={handleClearSearch}
        />
        {!isSearching && (
          <Pagination data={data} tableData={table} pagination={pagination} />
        )}
      </div>
      {hasSearchResults ? (
        <table>
          <TableHead tableData={table} />
          <TableBody tableData={table} />
        </table>
      ) : (
        <NoResults searchTerm={searchTerm} clearSearch={handleClearSearch} />
      )}
    </div>
  );
};

export default Table;
