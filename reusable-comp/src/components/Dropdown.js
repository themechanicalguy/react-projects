import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, onSelect, selection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const domEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      // console.log(event.target);
      if (!domEl.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("click", handler, true);
  }, []);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
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
    <div ref={domEl} className="w-48 relative">
      <div onClick={handleClick}>{selection?.label || "Select..."}</div>
      {isOpen && <div>{renderOptions}</div>}
    </div>
  );
};

export default Dropdown;
