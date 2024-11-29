import React from "react";
import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "DropDown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className={""}
        activeClassName={"bg-gray-600 font-bold  "}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="stikcy top-0 overflow-y-scroll flex flex-col  ">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
