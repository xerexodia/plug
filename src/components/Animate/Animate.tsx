"use client";
import { useEffect, useRef, useState } from "react";
import type { LottiePlayer } from "lottie-web";
import { useRouter } from "next/navigation";

const Animation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);
  const router = useRouter();
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
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  useEffect(() => {
    const hasShownAnimation = sessionStorage.getItem("hasShownAnimation");

    if (hasShownAnimation) {
      setShowAnimation(false);
      router.replace("/Home");
    } else {
      setTimeout(() => {
        sessionStorage.setItem("hasShownAnimation", "true");
        router.replace("/Home");
      }, 5700);
    }
  }, [router]);

  return <div className="w-full h-full bg-white" ref={ref} />;
};

export default Animation;
