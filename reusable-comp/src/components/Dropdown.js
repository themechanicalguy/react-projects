import React, { useState } from "react";

const Dropdown = ({ options, setOption, selection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    setOption(option);
    // setSelect(option);
  };
  const renderOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>{selection?.label || "Select..."}</div>
      {isOpen && <div>{renderOptions}</div>}
    </div>
  );
};

export default Dropdown;
