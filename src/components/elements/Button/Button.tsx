import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ type = "button", children, ...rest }: ButtonProps) => {
  return (
    <button
      className="w-full bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700 transition duration-200 cursor-pointer font-bold"
      type={type}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
