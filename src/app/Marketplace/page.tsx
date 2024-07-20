"use client";

import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import React, { useState } from "react";
import DoubleIcon from "../../../public/doubleIcon.svg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { BsFillPlayFill } from "react-icons/bs";
import Ellipse from "../../../public/Ellipse.png";
import Box from "@/components/Box/Box";
import { motion } from "framer-motion";
import Header from "@/components/Header/Header";

const MarketPlace = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex flex-col gap-20">
      {/* ================header============== */}
      <Header />
      {/* =======================first section=================== */}
      <div className="relative flex flex-col items-center justify-end gap-6 p-4 md:p-8 lg:p-12">
        <Image
          src={Ellipse}
          alt=""
          style={{
            position: "absolute",
            zIndex: -100,
            top: "5%",
          }}
        />
        <DoubleIcon />
        <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">
          Unlock Assets, Trade{" "}
          <strong className="text-secondary">Deployer</strong>
        </h3>
        <strong className="text-primary text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Wallets
        </strong>
        <h5 className="text-white text-xl md:text-2xl lg:text-3xl font-light text-center">
          Buy & Sell, Deployer Wallets
        </h5>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white rounded-full py-3 px-6 border border-white flex items-center gap-1 font-bold">
            <FaArrowRightLong />
            Buy Deployer wallets
          </button>
          <button className="bg-white rounded-full py-3 px-6 border border-white flex items-center gap-1 font-bold">
            <FaArrowLeftLong />
            Sell Deployer wallets
          </button>
          <button className="bg-black rounded-full py-3 px-6 border border-white flex items-center gap-1 font-bold text-white">
            <div className="w-4 h-4 bg-white flex items-center justify-center rounded-full">
              <BsFillPlayFill color="black" size={15} />
            </div>
            Watch tutorial
          </button>
        </div>
      </div>
      {/* =======================second section=================== */}
      <div className="flex flex-col justify-evenly md:flex-col lg:flex-row items-center gap-6 px-4 md:px-10 lg:px-20">
        <motion.div
          initial={{ rotate: 5, y: 15 }}
          animate={{ rotate: -2, y: -15 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            type: "tween",
          }}
        >
          <Box>
            <div className="flex flex-col justify-between p-6 h-60 w-64 lg:h-60 lg:w-64">
              <span className="text-white font-light text-xl lg:text-2xl">
                <strong className="text-6xl lg:text-7xl font-black">0</strong>
                BNB
              </span>
              <span className="text-white font-bold text-2xl lg:text-3xl">
                Live Listing
              </span>
            </div>
          </Box>
        </motion.div>

        <motion.div
          initial={{ rotate: -6, y: 15 }}
          animate={{ rotate: 3, y: -15 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            type: "tween",
          }}
        >
          <Box>
            <div className="flex flex-col justify-between p-6 h-60 w-64 lg:h-60 lg:w-64">
              <span className="text-white font-light text-xl lg:text-2xl">
                <strong className="text-6xl lg:text-7xl font-black">0</strong>
                BNB
              </span>
              <span className="text-white font-bold text-2xl lg:text-3xl">
                Value Listed
              </span>
            </div>
          </Box>
        </motion.div>

        <motion.div
          initial={{ rotate: 7, y: 15 }}
          animate={{ rotate: -2, y: -15 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            type: "tween",
          }}
        >
          <Box>
            <div className="flex flex-col justify-between p-6 h-60 w-64 lg:h-60 lg:w-64">
              <span className="text-white font-light text-xl lg:text-2xl">
                <strong className="text-6xl lg:text-7xl font-black">12</strong>
              </span>
              <span className="text-white font-bold text-2xl lg:text-3xl">
                Deployers Traded
              </span>
            </div>
          </Box>
        </motion.div>

        <motion.div
          initial={{ rotate: -7, y: 15 }}
          animate={{ rotate: 2, y: -15 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            type: "tween",
          }}
        >
          <Box>
            <div className="flex flex-col justify-between p-6 h-60 w-64 lg:h-60 lg:w-64">
              <span className="text-white font-light text-xl lg:text-2xl">
                <strong className="text-6xl lg:text-7xl font-black">
                  96.4
                </strong>
                BNB
              </span>
              <span className="text-white font-bold text-2xl lg:text-3xl">
                Value Traded
              </span>
            </div>
          </Box>
        </motion.div>
      </div>
      {/* =======================third section=================== */}
      <div className="flex items-center px-10 sm:px-20 flex-col g-10 gap-10">
        <h3 className="text-5xl text-white font-bold ">
          All{" "}
          <strong
            style={{
              fontWeight: "bold",
              background:
                "linear-gradient(135deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            Plug’s
          </strong>
        </h3>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 flex-col  sm:flex-col lg:flex-row md-flex-row">
            <Box>
              <span
                style={{
                  position: "absolute",
                  fontSize: 120,
                  fontWeight: "bold",
                  alignSelf: "center",
                  color: "transparent",
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
                  filter: "blur(8px)",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                }}
              >
                SOLD
              </span>
              <div className="flex flex-col gap-4 p-4">
                <span className="uppercase text-white text-1xl font-bold">
                  SoKOLOV
                </span>
                <div className="flex items-end justify-between">
                  <span className="uppercase text-white text-2xl  font-black">
                    0.97 ETH
                  </span>
                  <span className="uppercase text-white text-1xl font-meduim">
                    SKLV / ETH
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <button
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)",
                    }}
                    className="py-2 px-2 bg-white rounded-full text-sm text-black font-bold uppercase"
                  >
                    Buy contract
                  </button>
                  <button className="py-2 px-2 bg-white rounded-full text-sm text-black font-bold uppercase">
                    View contract
                  </button>
                  <button className="py-2 px-2 bg-transparent border border-white rounded-full text-sm text-white font-bold uppercase">
                    Details
                  </button>
                </div>
                <button className="py-2 px-2 bg-white rounded-full text-sm font-bold uppercase">
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)",
                      WebkitTextFillColor: "transparent",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    WALLET instead
                  </span>
                </button>
              </div>
            </Box>
            <Box>
              <span
                style={{
                  position: "absolute",
                  fontSize: 120,
                  fontWeight: "bold",
                  alignSelf: "center",
                  color: "transparent",
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
                  filter: "blur(8px)",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                }}
              >
                SOLD
              </span>
              <div className="flex flex-col gap-4 p-4">
                <span className="uppercase text-white text-1xl font-bold">
                  SoKOLOV
                </span>
                <div className="flex items-end justify-between">
                  <span className="uppercase text-white text-3xl font-black">
                    0.97 ETH
                  </span>
                  <span className="uppercase text-white text-1xl font-meduim">
                    SKLV / ETH
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <button
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)",
                    }}
                    className="py-2 px-2 bg-white rounded-full text-sm text-black font-bold uppercase"
                  >
                    Buy contract
                  </button>
                  <button className="py-2 px-2 bg-white rounded-full text-sm text-black font-bold uppercase">
                    View contract
                  </button>
                  <button className="py-2 px-2 bg-transparent border border-white rounded-full text-sm text-white font-bold uppercase">
                    Details
                  </button>
                </div>
                <button className="py-2 px-2 bg-white rounded-full text-sm font-bold uppercase">
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)",
                      WebkitTextFillColor: "transparent",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    WALLET instead
                  </span>
                </button>
              </div>
            </Box>
          </div>
          <div className="flex items-center gap-4 flex-col  sm:flex-col lg:flex-row md-flex-row">
            <Box>
              <span
                style={{
                  position: "absolute",
                  fontSize: 120,
                  fontWeight: "bold",
                  alignSelf: "center",
                  color: "transparent",
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
                  filter: "blur(8px)",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                }}
              >
                SOLD
              </span>
              <div className="flex flex-col gap-4 p-4">
                <span className="uppercase text-white text-1xl font-bold">
                  SoKOLOV
                </span>
                <div className="flex items-end justify-between">
                  <span className="uppercase text-white text-2xl  font-black">
                    0.97 ETH
                  </span>
                  <span className="uppercase text-white text-1xl font-meduim">
                    SKLV / ETH
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <button
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)",
                    }}
                    className="py-2 px-2 bg-white rounded-full text-sm text-black font-bold uppercase"
                  >
                    Buy contract
                  </button>
                  <button className="py-2 px-2 bg-white rounded-full text-sm text-black font-bold uppercase">
                    View contract
                  </button>
                  <button className="py-2 px-2 bg-transparent border border-white rounded-full text-sm text-white font-bold uppercase">
                    Details
                  </button>
                </div>
                <button className="py-2 px-2 bg-white rounded-full text-sm font-bold uppercase">
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)",
                      WebkitTextFillColor: "transparent",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    WALLET instead
                  </span>
                </button>
              </div>
            </Box>
            <Box>
              <span
                style={{
                  position: "absolute",
                  fontSize: 120,
                  fontWeight: "bold",
                  alignSelf: "center",
                  color: "transparent",
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
                  filter: "blur(8px)",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                }}
              >
                SOLD
              </span>
              <div className="flex flex-col gap-4 p-4">
                <span className="uppercase text-white text-1xl font-bold">
                  SoKOLOV
                </span>
                <div className="flex items-end justify-between">
                  <span className="uppercase text-white text-3xl font-black">
                    0.97 ETH
                  </span>
                  <span className="uppercase text-white text-1xl font-meduim">
                    SKLV / ETH
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <button
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)",
                    }}
                    className="py-2 px-2 bg-white rounded-full text-sm text-black font-bold uppercase"
                  >
                    Buy contract
                  </button>
                  <button className="py-2 px-2 bg-white rounded-full text-sm text-black font-bold uppercase">
                    View contract
                  </button>
                  <button className="py-2 px-2 bg-transparent border border-white rounded-full text-sm text-white font-bold uppercase">
                    Details
                  </button>
                </div>
                <button className="py-2 px-2 bg-white rounded-full text-sm font-bold uppercase">
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)",
                      WebkitTextFillColor: "transparent",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    WALLET instead
                  </span>
                </button>
              </div>
            </Box>
          </div>

          <div className="flex items-center justify-center gap-16">
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full">
              <FaArrowLeftLong size={30} />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white flex items-center justify-center rounded-full" />
              <div className="w-3 h-3 bg-white flex items-center justify-center rounded-full" />
              <div className="w-3 h-3 bg-primary flex items-center justify-center rounded-full" />
              <div className="w-3 h-3 bg-white flex items-center justify-center rounded-full" />
              <div className="w-3 h-3 bg-white flex items-center justify-center rounded-full" />
            </div>
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full">
              <FaArrowRightLong size={30} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default MarketPlace;
