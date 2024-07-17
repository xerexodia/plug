"use client";
import Button from "@/components/Buttons/Button";
import React from "react";
import { motion } from "framer-motion";
const SecondSection = () => {
  return (
    <div className="flex flex-col gap-6 px-20">
      <div className="flex flex-col gap-6 items-center">
        <motion.h2
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
          style={{ width: "50%" }}
          className="text-white text-4xl font-bold text-center capatilize"
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
          className="text-white uppercase text-center w-1/2 font-light text-xl"
        >
          Use PLUG to buy,sell, and trade Token Deployer Wallets through our
          peer to peer decentralized marketplace.
        </motion.span>
      </div>
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
        className="flex gap-2 px-24"
      >
        <div
          style={{
            width: "50%",
            padding: 1,
            borderRadius: 12,
            backgroundImage:
              "linear-gradient(0deg, rgba(204,73,153,1) 0%, rgba(247,139,52,1) 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              backgroundColor: "#171011",
              padding: 20,
              borderRadius: 12,
              flexDirection: "column",
              gap: 20,
            }}
          >
            <h3 className="text-5xl text-white font-bold">
              Invest Today, Secure Tomorrow
            </h3>
            <span className="text-xl text-white font-light">
              Leverage the trust and success associated with established
              deployers.
            </span>
            <Button
              text="BUY DEPLOYER"
              bgColor="linear-gradient(0deg, rgba(204,73,153,1) 0%, rgba(247,139,52,1) 100%)"
            />
          </div>
        </div>
        <div
          style={{
            padding: 1,
            borderRadius: 12,
            width: "50%",

            backgroundImage:
              "linear-gradient(0deg, rgba(204,73,153,1) 0%, rgba(247,139,52,1) 100%)",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "flex-start",
              backgroundColor: "#171011",
              padding: 20,
              borderRadius: 12,
              flexDirection: "column",
              gap: 20,
              justifyContent: "space-between",
            }}
          >
            <h3 className="text-5xl text-white font-bold">
              Skip The Wait, Get Paid Today
            </h3>
            <span className="text-xl text-white font-light">
              Enhance you chances of success and reliability.
            </span>
            <Button
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
