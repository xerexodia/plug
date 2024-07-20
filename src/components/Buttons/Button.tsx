import React, { FC } from "react";

interface ButtonProps {
  text?: string;
  color?: string;
  bgColor?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  text = "Button",
  color = "white",
  bgColor = "black",
  style,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: bgColor,
        cursor: "pointer",
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
