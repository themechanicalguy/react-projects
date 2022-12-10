import React, { useState } from "react";
import Panel from "./Panel";

const CounterPage = ({ initialCount }) => {
  const [valueToAdd, setValueToAdd] = useState(0);
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setValueToAdd(value);
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();

    setCount(count + valueToAdd);
    setValueToAdd(0);
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is : {count}</h1>
      <div>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={hanldeSubmit}>
        <label>Add a lot!</label>
        <input
          value={valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border-gray-300"
        />
      </form>
      <Button>Add it</Button>
    </Panel>
  );
};

export default CounterPage;
