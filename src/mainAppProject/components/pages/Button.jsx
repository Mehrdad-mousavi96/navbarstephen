import classnames from "classnames";
import React from "react";

const Button = ({
  children,
  primary,
  secondary,
  warning,
  danger,
  success,
  outline,
  rounded,
  ...rest
}) => {
  const classes = classnames(
    "items-center flex justify-center py-1 px-3 border-2",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-500 bg-gray-500 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-500 bg-yellow-500 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-lg": rounded,
      "bg-white text-black ": outline,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button className={classes} {...rest}>
      <div className="flex">{children}</div>
    </button>
  );
};

export default Button;
