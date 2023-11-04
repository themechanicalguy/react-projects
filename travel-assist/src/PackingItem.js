import React from "react";

const PackingItem = ({ item }) => {
  return (
    <li>
      <span className={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default PackingItem;
