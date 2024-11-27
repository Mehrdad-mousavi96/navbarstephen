import React, { useState } from "react";

const items = [
  {
    id: "l2kf5",
    label: "first one",
    content: "You can use React on any project you want",
  },
  {
    id: "firq3",
    label: "second one",
    content: "You can use React on any project you want",
  },
  {
    id: "8efo1",
    label: "third one",
    content: "You can use React on any project you want",
  },
];
const Accordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    let isExpanded = index === expandedIndex;

    const clickHandler = (nextId) => {
      setExpandedIndex(nextId);
    };

    let icons = <span>{isExpanded ? "👇" : "👈"}</span>;

    return (
      <div key={item.id} className="m-4">
        <span onClick={() => setExpandedIndex(index)}>
          <b>{item.label}</b>
          {icons}
        </span>

        {isExpanded && <span>{item.content}</span>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
