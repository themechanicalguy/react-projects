// import React, { useState } from "react";
import { useReducer } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";

const reducer = (state, action) => {
  if (action.type === "increment-counter") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "decrement-counter") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  if (action.type === "change-value") {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }
  if (action.type === "add-value-to-count") {
    return {
      ...state,
      count: +state.count + state.valueToAdd,
      valueToAdd: 0,
    };
  }
};

const CounterPage = ({ initialCount }) => {
  // const [valueToAdd, setValueToAdd] = useState(0);
  // const [count, setCount] = useState(initialCount);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: "increment-counter",
    });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: "decrement-counter",
    });
  };
  const handleChange = (event) => {
    const value = +event.target.value;
    // setValueToAdd(value);
    dispatch({
      type: "change-value",
      payload: value,
    });
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: "add-value-to-count",
      // payload:
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is : {state.count}</h1>
      <div>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={hanldeSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border-gray-300"
        />
      </form>
      <Button onClick={hanldeSubmit}>Add it</Button>
    </Panel>
  );
};

export default CounterPage;
