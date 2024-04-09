import React from 'react';
import { flexRender } from '@tanstack/react-table';

const TableBody = ({ tableData }) => {
  const { rows } = tableData.getRowModel();

  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
