import React, { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    event.preventDefault();

    navigate(to);
  };

  return (
    <a className="border p-2 m-2" onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
