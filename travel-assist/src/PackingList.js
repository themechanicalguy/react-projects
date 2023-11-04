import React from "react";
import PackingItem from "./PackingItem";

const PackingList = ({ initialItems }) => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <PackingItem item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
