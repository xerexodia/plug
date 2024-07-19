"use client";
import Button from "@/components/Buttons/Button";
import React from "react";
import { motion } from "framer-motion";
const SecondSection = () => {
  return (
    <div className="flex flex-col gap-6 px-4 lg:px-20">
      <div className="flex flex-col gap-6 items-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px" }}
          transition={{ ease: "easeInOut" }}
          className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center capitalize w-full lg:w-1/2"
        >
          Trade The Previously Untradable In{" "}
          <strong
            style={{
              background:
                "linear-gradient(0deg, rgba(204,73,153,1) 0%, rgba(247,139,52,1) 100%)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            DeFi
          </strong>
        </motion.h2>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ ease: "easeInOut" }}
          className="text-white uppercase text-center w-full lg:w-1/2 font-light text-sm sm:text-base lg:text-xl"
        >
          Use PLUG to buy, sell, and trade Token Deployer Wallets through our
          peer-to-peer decentralized marketplace.
        </motion.span>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ ease: "easeInOut" }}
        className="flex flex-col lg:flex-row gap-6 px-2 lg:px-24"
      >
        <div
          className="w-full lg:w-1/2 rounded-2xl"
          style={{
            padding: 1,
            backgroundImage:
              "linear-gradient(0deg, rgba(204,73,153,1) 0%, rgba(247,139,52,1) 100%)",
          }}
        >
          <div className="bg-[#171011] p-4 lg:p-8 rounded-2xl flex flex-col gap-4">
            <h3 className="text-xl sm:text-2xl lg:text-5xl text-white font-bold">
              Invest Today, Secure Tomorrow
            </h3>
            <span className="text-base sm:text-lg lg:text-xl text-white font-light">
              Leverage the trust and success associated with established
              deployers.
            </span>
            <Button
              style={{ width: "50%" }}
              text="BUY DEPLOYER"
              bgColor="linear-gradient(0deg, rgba(204,73,153,1) 0%, rgba(247,139,52,1) 100%)"
            />
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 p-1 rounded-2xl"
          style={{
            padding: 1,
            backgroundImage:
              "linear-gradient(0deg, rgba(204,73,153,1) 0%, rgba(247,139,52,1) 100%)",
          }}
        >
          <div className="bg-[#171011] p-4 lg:p-8 rounded-2xl flex flex-col gap-4 justify-between h-full">
            <h3 className="text-xl sm:text-2xl lg:text-5xl text-white font-bold">
              Skip The Wait, Get Paid Today
            </h3>
            <span className="text-base sm:text-lg lg:text-xl text-white font-light">
              Enhance your chances of success and reliability.
            </span>
            <Button
              style={{ width: "50%" }}
              text="SELL DEPLOYER"
              bgColor="linear-gradient(0deg, rgba(204,73,153,1) 0%, rgba(247,139,52,1) 100%)"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SecondSection;
