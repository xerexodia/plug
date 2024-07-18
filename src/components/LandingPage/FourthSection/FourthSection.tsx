"use client";
import Button from "@/components/Buttons/Button";
import React from "react";
import img from "../../../../public/btn.svg";
import bg from "../../../../public/bg.png";
import diamond from "../../../../public/diamond.svg";
import wave from "../../../../public/wave.png";
import Image from "next/image";
import Box from "@/components/Box/Box";
import { motion } from "framer-motion";

const FourthSection = () => {
  return (
    <div className="relative">
      <Image
        src={wave}
        alt=""
        className="absolute left-0 top-20 lg:top-48 opacity-50 h-96 lg:h-[600px]"
      />
      <div className="flex flex-col gap-6 px-4 lg:px-44">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ ease: "easeInOut" }}
          className="flex flex-col lg:flex-row gap-6"
        >
          <Box>
            <div className="flex flex-col items-start gap-5 p-5 lg:p-8">
              <h3 className="text-2xl sm:text-4xl lg:text-5xl text-white font-bold">
                Decentralized
              </h3>
              <span className="text-base sm:text-lg lg:text-xl text-white font-light">
                Utilizing a secure smart contract to handle the transfer and
                sale of deployers.
              </span>
              <div>
                <Image src={img} alt="" className="w-full" />
              </div>
            </div>
          </Box>
          <Box>
            <div className="flex flex-col items-start gap-5 p-5 lg:p-8">
              <h3 className="text-2xl sm:text-4xl lg:text-5xl text-white font-bold">
                Trustless
              </h3>
              <span className="text-base sm:text-lg lg:text-xl text-white font-light">
                Security measures will mitigate the risk of malicious actors.
              </span>
              <div>
                <Image src={img} alt="" className="w-full" />
              </div>
            </div>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ ease: "easeInOut" }}
        >
          <Box>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bg.src})` }}
            />
            <div className="relative z-10 h-72 p-5 lg:p-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl">
              <div className="flex flex-col h-full justify-between">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl text-white font-bold">
                  Chain Supported
                </h3>
                <div className="flex items-center gap-4">
                  <Image
                    src={diamond}
                    alt=""
                    className="opacity-30 filter grayscale w-8 sm:w-12 lg:w-16"
                  />
                  <span className="text-xl sm:text-2xl lg:text-5xl text-white">
                    Ethereum
                  </span>
                </div>
              </div>
            </div>
          </Box>
        </motion.div>
      </div>
    </div>
  );
};

export default FourthSection;
