import { useEffect, useRef, useState } from "react";
import Panel from "../Panel";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState(null);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOption = (option) => {
    setIsOpen(false);
    setSelection(option);
  };

  const renderedItems = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-200 cursor-pointer w-24 grid items-center justify-center"
        key={option.label}
      >
        <div onClick={() => handleClickOption(option)}>{option.label}</div>
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-24 relative m-4">
      <Panel
        onClick={handleClick}
        className="cursor-pointer flex justify-between items-center"
      >
        <b>{selection?.label || "Select..."}</b>
        {!isOpen && "⧨"}
      </Panel>

      {isOpen && (
        <Panel className="absolute top-full grid justify-center">
          {renderedItems}
        </Panel>
      )}
    </div>
  );
};

export default DropDown;
