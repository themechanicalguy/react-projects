import Header from "./Header";
import InputPanel from "./InputPanel";
import Todos from "./Todos";
import "../index.css";
import { useState } from "react";
import Summary from "./Summary";

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }
  return (
    <div>
      <Header />
      <InputPanel onAddItems={handleAddItems} />
      <Todos
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Summary items={items} />
    </div>
  );
};

export default App;
