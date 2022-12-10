import React, { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
  // rendering Table Headers
  const renderHeaders = config.map((column, index) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={index}>{column.label}</th>;
  });

  // Rendering Table rows & columns
  const renderedRows = data.map((rowData) => {
    const renderCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
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
