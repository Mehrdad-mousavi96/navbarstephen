import React from "react";

import SortableTable from "./SortableTable";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
  ];

  let config = [
    {
      label: "Fruits",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`${fruit.color} p-4 m-2 flex`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => <h1>{fruit.score}</h1>,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => fruit.name;

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
