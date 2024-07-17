import React from "react";
import "./styles.css";
const Box = ({
  children,
  bgColor = "rgba(23, 16, 17,1)",
}: {
  children: React.ReactNode;
  bgColor?: string;
}) => {
  return (
    <div className="box">
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          backgroundColor: bgColor,
          borderRadius: 20,
          gap: 20,
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Box;
