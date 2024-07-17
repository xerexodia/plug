import React, { FC } from "react";

interface ButtonProps {
  text?: string;
  color?: string;
  bgColor?: string;
  style?: React.CSSProperties;
}

const Button: FC<ButtonProps> = ({
  text = "Button",
  color = "white",
  bgColor = "black",
  style,
}) => {
  return (
    <button
      style={{
        background: bgColor,
        color: color,
        ...style,
      }}
      className="rounded-full py-2 px-6 border border-white"
    >
      {text}
    </button>
  );
};

export default Button;
