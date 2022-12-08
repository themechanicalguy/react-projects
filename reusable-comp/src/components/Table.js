import React from "react";

const Table = ({ tableData, config, keyFn }) => {
  const renderHeaders = config.map((column, index) => {
    return <th key={index}>{column.label}</th>;
  });
  const renderedRows = tableData.map((rowData) => {
    const renderCells = config.map((column) => {
      return <td className="p-2">{column.render(rowData)}</td>;
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
