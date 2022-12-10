// import useCounter from ".././hooks/use-counter";
// import Button from ".././components/Button";

// const CounterPage = ({ initialCount }) => {
//   const { count, increment } = useCounter(initialCount);
//   return (
//     <div>
//       <h1>Count is {count}</h1>
//       <Button onClick={increment}>Increment</Button>
//     </div>
//   );
// };

// export default CounterPage;

import { useReducer } from "react";
import Panel from ".././components/Panel";
import Button from ".././components/Button";
//using immer library
import produce from "immer";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change_value_to_add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  // using Switch case
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    // return {
    //   ...state,
    //   count: state.count + 1,
    // };
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      // return {
      //   ...state,
      //   count: state.count - 1,
      // };
      return;
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
        // count: +state.count + +state.valueToAdd,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: +state.count + +state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }

  //If--else if
  // if (action.type === "increment") {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // }
  // if (action.type === "decrement") {
  //   return {
  //     ...state,
  //     count: state.count - 1,
  //   };
  // }
  // if (action.type === "changeValueToAdd") {
  //   return {
  //     ...state,
  //     valueToAdd: action.payload,
  //     // count: +state.count + +state.valueToAdd,
  //   };
  // }
  // if (action.type === "submit") {
  // return {
  //   ...state,
  //   count: +state.count + +state.valueToAdd,
  //   valueToAdd: 0,
  // };
  // }
  // return state;
};

const CounterPage = ({ initialCount }) => {
  // const [valueToAdd, setValueToAdd] = useState(0);
  // const [count, setCount] = useState(initialCount);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);
  const increment = () => {
    // state.count;
    // setCount(count + 1);
    dispatch({ type: INCREMENT_COUNT });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT_COUNT });
  };
  const handleChange = (event) => {
    const value = +event.target.value;
    // setValueToAdd(value);
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({ type: ADD_VALUE_TO_COUNT });
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
        <Button>Add it</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
