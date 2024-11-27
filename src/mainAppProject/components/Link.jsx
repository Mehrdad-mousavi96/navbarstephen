import classNames from "classnames";
import { useNavigation } from "../hooks/customHook";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500 m-2 border p-2 text-black hover:bg-gray-600  hover:transition-all",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    event.preventDefault();

    if (event.metaKey || event.crtlKey) {
      return;
    }
    navigate(to);
  };

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
};

export default Link;
