import React from "react";
import Table from "../Table";

const TablePage = () => {

  const config = [
    { label: "Fruits", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => (
        <div className={`p-4  m-2 flex  ${fruit.color} rounded-xl`}></div>
      ),
    },
    { label: "Score", render: (fruit) => fruit.score },
    { label: "Score Squared", render: (fruit) => fruit.score * 2 },
  ];
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const keyFn = (fruit) => {
    return fruit.name
  }

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
