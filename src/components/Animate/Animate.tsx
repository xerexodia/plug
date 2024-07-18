"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Lottie from "react-lottie";
import * as animation from "../../../public/animation.json";
import { useRouter } from "next/navigation";

const Animate = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const hasShownAnimation = sessionStorage.getItem("hasShownAnimation");

    if (hasShownAnimation) {
      setShowAnimation(false);
      router.replace("/Home");
    } else {
      setTimeout(() => {
        sessionStorage.setItem("hasShownAnimation", "true");
        router.replace("/Home");
      }, 5700); // Adjusted to 5700ms to account for the duration
    }
  }, [router]);

  if (!showAnimation) return null;

  const defaultOptions = {
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-white absolute inset-0 z-50">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default Animate;
