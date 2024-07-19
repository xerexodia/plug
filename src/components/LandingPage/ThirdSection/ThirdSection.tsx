"use client";
import React from "react";
import img from "../../../../public/etheruim.png";
import Image from "next/image";
import { motion } from "framer-motion";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center px-4 lg:px-20">
      <Image
        src={img}
        alt=""
        className="absolute filter grayscale opacity-70 -top-20 lg:-top-48 right-2 lg:right-10 z-[-100]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-200px" }}
        transition={{ ease: "easeInOut" }}
        className="flex flex-col items-center gap-2"
      >
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Trust Through
        </h3>
        <h3
          className="text-3xl sm:text-4xl lg:text-5xl"
          style={{
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
