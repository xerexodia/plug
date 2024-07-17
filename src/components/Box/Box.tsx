import React from "react";

const Box = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={{
        flex: 1,
        padding: 1,
        borderRadius: 20,
        backgroundImage:
          "linear-gradient(0deg, rgba(204,73,153,1) 0%, rgba(247,139,52,1) 100%)",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          backgroundColor: "#171011",
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
