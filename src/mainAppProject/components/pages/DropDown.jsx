import React, { useState } from "react";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];
// TODO: main component
const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    handleSelect(option);
  };

  // FIXME: renderedOption
  const renderedOption = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    );
  });

  let content = "Select...";
  if (selection) {
    content = selection.label;
  }

  return (
    <div>
      <div onClick={handleClick}>
        <b>{content}</b>
      </div>
      {isOpen && renderedOption}
    </div>
  );
};

export default DropDown;
