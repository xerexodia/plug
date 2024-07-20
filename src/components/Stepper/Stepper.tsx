import React from "react";

export default function Stepper({
  currentStep,
  children,
}: {
  currentStep: number;
  children: React.ReactNode[];
}) {
  const activeColor = (index: number) => currentStep >= index;

  const numberOfSteps = React.Children.count(children);

  return (
    <ul className="flex flex-col">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="flex flex-1 relative ">
          <div
            className="h-4 w-4 absolute rounded-full"
            style={{
              top: -5,
              left: -7,
              zIndex: 1,
              background: activeColor(index)
                ? "linear-gradient(180deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)"
                : "grey",
            }}
          />
          {numberOfSteps - 1 === index && (
            <div
              className="h-4 w-4 absolute rounded-full"
              style={{
                bottom: -5,
                left: -7,
                zIndex: 1,
                background: activeColor(index)
                  ? "linear-gradient(180deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)"
                  : "grey",
              }}
            />
          )}

          <div
            style={{
              width: 2,
              background: activeColor(index)
                ? "linear-gradient(180deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)"
                : "grey",
            }}
            className="h-full absolute z-0"
          />

          <div
            style={{
              display: "flex",
              flex: 1,
            }}
            className="px-2 sm:px-4"
          >
            {child}
          </div>
        </div>
      ))}
    </ul>
  );
}
