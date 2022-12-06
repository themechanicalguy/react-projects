import Dropdown from "./components/Dropdown";
import React, { useState } from "react";

function App() {
  const [selection, setselection] = useState(null);
  const setOption = (option) => {
    setselection(option);
  };
  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];
  console.log(selection);
  return (
    <Dropdown options={options} selection={selection} setOption={setOption} />
  );
}

export default App;
