"use client";

import { useEffect, useRef, useState } from "react";
import type { LottiePlayer } from "lottie-web";

const Animate = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animation.json",
        rendererSettings: {
          preserveAspectRatio: "xMidyMid slice",
          progressiveLoad: false,
        },
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 5700);
  }, [showAnimation]);

  if (!showAnimation) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 120,
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div ref={ref} />
    </div>
  );
};

export default Animate;
