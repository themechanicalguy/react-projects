import Dropdown from ".././components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [selection, setselection] = useState(null);
  const onSelect = (option) => {
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
  return <Dropdown options={options} value={selection} onChange={onSelect} />;
}

export default DropdownPage;
