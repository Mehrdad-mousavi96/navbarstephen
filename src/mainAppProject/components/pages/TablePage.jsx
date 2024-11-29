import React from "react";
import Table from "../Table";

const TablePage = () => {
  const config = [
    { label: "Fruits", render: (fruit) => fruit.name },
    { label: "Color", render: (fruit) => fruit.color },
    { label: "Score", render: (fruit) => fruit.score },
    { label: "Score Squared", render: (fruit) => fruit.score * 2 },
  ];

  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
};

export default TablePage;
