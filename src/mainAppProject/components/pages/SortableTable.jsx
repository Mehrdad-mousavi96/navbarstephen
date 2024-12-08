import React, { useState } from "react";
import Table from "../Table";
import useSort from "../../hooks/use-sort";

const SortableTable = (props) => {
  const { config, data } = props;

  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => setSortColumn(column.label)}>{column.label}</th>
      ),
    };
  });

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};

export default SortableTable;
