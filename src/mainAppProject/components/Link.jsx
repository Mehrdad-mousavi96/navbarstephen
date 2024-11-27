import classNames from "classnames";
import { useNavigation } from "../hooks/customHook";

const Link = ({ to, children }) => {
  const { navigate } = useNavigation();

  const classes = classNames(
    "text-blue-500 m-2 border p-2 text-teal-900 hover:bg-teal-900 hover:text-white hover:transition-all"
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
