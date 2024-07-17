"use client";
import React from "react";
import img from "../../../../public/etheruim.png";
import Image from "next/image";
import { motion } from "framer-motion";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center">
      <Image
        src={img}
        alt=""
        style={{
          filter: "grayscale(100%)",
          opacity: 0.7,
          position: "absolute",
          right: 10,
          top: -200,
          zIndex: -100,
        }}
      />
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
        <h3 style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>
          Trust Through{" "}
        </h3>
        <h3
          style={{
            fontSize: 50,
            fontWeight: "bold",
            background:
              "linear-gradient(135deg, rgba(247,139,52,1) 0%, rgba(204,73,153,1) 100%)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          Decentralization
        </h3>
      </motion.div>
    </div>
  );
};

export default ThirdSection;
