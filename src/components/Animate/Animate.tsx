"use client";
import React, { useEffect, useRef, useState } from "react";
import svg from "../../../public/femalPlug.svg";
import Image from "next/image";
//@ts-ignore
import Lottie from "react-lottie";
import animation from "../../../public/animation.json";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

const Animate = () => {
  const defaultOptions = {
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-white absolute z-10000">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />;
    </div>
  );
};

export default Animate;
