"use client";
import Button from "@/components/Buttons/Button";
import React from "react";
import img from "../../../../public/btn.svg";
import bg from "../../../../public/bg.png";
import diamond from "../../../../public/diamond.svg";
import Image from "next/image";
import Box from "@/components/Box/Box";
import { motion } from "framer-motion";

const FourthSection = () => {
  return (
    <div className="flex flex-col gap-2 px-44">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          margin: "-200px",
        }}
        transition={{ ease: "easeInOut" }}
        className="flex  gap-2"
      >
        <Box style={{ width: "50%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: 20,
              padding: 20,
            }}
          >
            <h3 className="text-5xl text-white font-bold">Decentralized</h3>
            <span className="text-xl text-white font-light">
              Utilizing a secure smart contract to handle the transfer and
              sale of deployers.
            </span>
            <div>
              <Image src={img} alt="" />
            </div>
          </div>
        </Box>
        <Box style={{ width: "50%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: 20,
              padding: 20,
            }}
          >
            <h3 className="text-5xl text-white font-bold">Trustless</h3>
            <span className="text-xl text-white font-light">
              Security measures will mitigate the risk of malisious actors.
            </span>
            <div>
              <Image src={img} alt="" />
            </div>
          </div>
        </Box>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          margin: "-200px",
        }}
        transition={{ ease: "easeInOut" }}
      >
        <Box>
          <div
            style={{
              height: 300,
              backgroundImage: "url(" + bg + ")",
              position: "relative",
            }}
          >
            <Image src={bg} alt="" style={{ height: "100%" }} />
            <div
              style={{
                position: "absolute",
                zIndex: 100,
                height: "100%",
                top: 0,
                left: 0,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <h3 className="text-5xl text-white font-bold">Chain Supported</h3>
              <div className="flex flex-row items-center">
                <Image
                  src={diamond}
                  alt=""
                  style={{
                    opacity: 0.3,
                    filter: "grayscale(100%)",
                  }}
                />
                <span className="text-white text-5xl">Ethereum</span>
              </div>
            </div>
          </div>
        </Box>
      </motion.div>
    </div>
  );
};

export default FourthSection;
