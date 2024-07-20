"use client";
import Header from "@/components/Header/Header";
import Image from "next/image";
import React from "react";
import Ellipse from "../../../public/Ellipse.png";
import Box from "@/components/Box/Box";
import { FaLock } from "react-icons/fa";
//@ts-ignore
import ETh from "../../../public/diamodEth.svg?url";
import Subtract from "../../../public/Subtract.svg";
import { LuLoader } from "react-icons/lu";
import Footer from "@/components/Footer/Footer";

const Listing = () => {
  return (
    <main className="flex flex-col gap-20 overflow-hidden">
      <Header />
      {/* ===================first section ================== */}
      <div className="relative flex items-center justify-center my-10">
        <Image
          src={Ellipse}
          alt=""
          className="absolute opacity-60"
          style={{
            height: "auto",
            width: "60%",
            maxHeight: "500px",
          }}
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold text-center">
          Sell Deployer:{" "}
          <strong
            style={{
              fontWeight: "bold",
              background:
                "linear-gradient(180deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            Create A Listing
          </strong>
        </h1>
      </div>

      <div className="relative px-2 sm:px-10  md:px-20">
        <Image
          src={Ellipse}
          alt=""
          style={{
            position: "absolute",
            opacity: 0.6,
            zIndex: -100,
            right: "-50%",
          }}
        />
        <span className="text-white font-semiBold text-3xl ml-20">
          Enter Listing Info
        </span>
        <Stepper currentStep={0}>
          <div className="flex flex-1 m-4 flex-col gap-4">
            <Box>
              <div className="flex w-full flex-col gap-6 p-4">
                <div className="flex w-full items-center justify-between">
                  <span className="text-white text-2xl font-bold">-- --</span>
                  <span className="text-white text-2xl font-bold">--/--</span>
                </div>
                <button className="flex py-2 text-white font-meduim items-center gap-2 justify-center border border-white rounded-full">
                  <FaLock size={17} color="grey" />
                  DEPLOYER SELECTED
                </button>
              </div>
            </Box>
            <Box bgColor={"rgba(23, 16, 17,0.6)"}>
              <div className="flex w-full flex-col gap-4 p-4">
                <span className="text-2xl text-white font-bold">
                  Set Your Price
                </span>
                <span className="text-xl text-white font-regular">
                  Accept Payment In
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    className="py-2 px-6 sm:px-8 md:px-32 rounded-full font-bold text-white"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)",
                    }}
                  >
                    PLUG
                  </button>
                  <button className="flex font-bold py-2 px-6 text-white items-center gap-2 justify-center border border-white rounded-full">
                    <Image src={ETh} alt="ETH logo" height={30} width={30} />
                    ETH
                  </button>
                  <button className="py-2 font-bold px-6 text-white border border-white rounded-full">
                    BOTH
                  </button>
                </div>
                <span className="text-xl text-white font-regular">
                  Accept Payment In
                </span>
                <div className="flex flex-row md:flex-row border border-white rounded-full overflow-hidden p-1">
                  <input
                    style={{ backgroundColor: "transparent" }}
                    value={"Xxxxxxxxxxxxxxx"}
                    type="text"
                    className="flex-1 px-6 font-bold text-white"
                  />
                  <Subtract />
                </div>
              </div>
            </Box>
            <div className="flex flex-col md:flex-row gap-6">
              <button className="px-4 md:px-20 py-4 rounded-full bg-white text-xl font-light">
                CONFIRM
              </button>
              <button className="flex items-center gap-2 px-4 md:px-20 py-4 uppercase rounded-full border border-white text-xl font-light text-white justify-center">
                <LuLoader color="white" />
                Pending Activation
              </button>
            </div>
          </div>
          <div className="flex border border-white rounded-xl flex-1 flex-col p-4 m-4 gap-1 opacity-25">
            <span className="text-white text-4xl">TRANSFER DEPLOYER</span>
            <span className="text-white text-4xl">OWNERSHIP</span>
          </div>
          <div className="flex border border-white rounded-xl flex-1 flex-col p-4 m-4 gap-1 opacity-25">
            <span className="text-white text-4xl">Activate Listing</span>
          </div>
        </Stepper>
      </div>
      <Footer />
    </main>
  );
};

export default Listing;

export function Stepper({
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
