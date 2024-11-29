import React from "react";

const Table = ({ data, config }) => {
  // Head
  const renderedHeaders = config.map((column) => {
    return (
      <th key={column.label} className="p-4">
        {column.label}
      </th>
    );
  });

  // Body
  const renderedRows = data.map((fruit) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className={`p-2 ${column.render(fruit)}`}>
          {column.render(fruit)}
        </td>
      );
    });

    return (
      <tr key={fruit.name} className="border-b ">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      {/* Head */}
      <thead>
        <tr className="border-b-2 ">{renderedHeaders}</tr>
      </thead>

      {/* Body */}
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
