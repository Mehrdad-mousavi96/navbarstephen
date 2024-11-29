import React from "react";

const Table = ({ data, config }) => {
  const renderedHeaders = config.map((columnConfig) => {
    return <th className="p-4">{columnConfig.label}</th>;
  });

  const renderedRows = data.map((fruit) => {
    return (
      <tr key={fruit.name} className="border-b">
        <td className="">{fruit.name}</td>

        <td className=" flex justify-center p-4">
          <div className={`p-2 ${fruit.color} w-2`}></div>
        </td>

        <td className="pl-4">
          <b>{fruit.score}</b>
        </td>
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2 ">{renderedHeaders}</tr>
      </thead>

      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
