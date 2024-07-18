"use client";
import Animate from "@/components/Animate/Animate";
import Header from "@/components/Header/Header";
import FirstSection from "@/components/LandingPage/FirstSection/FirstSection";
import Footer from "@/components/LandingPage/Footer/Footer";
import FourthSection from "@/components/LandingPage/FourthSection/FourthSection";
import SecondSection from "@/components/LandingPage/SecondSection/SecondSection";
import StageSection from "@/components/LandingPage/StageSection/StageSection";
import ThirdSection from "@/components/LandingPage/ThirdSection/ThirdSection";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const hasShownAnimation = sessionStorage.getItem("hasShownAnimation");

    if (hasShownAnimation) {
      setShowAnimation(false);
    } else {
      setTimeout(() => {
        sessionStorage.setItem("hasShownAnimation", "true");
      }, 5700);
    }
  }, [showAnimation]);

  if (showAnimation) return <Animate />;
  return (
    <main className="flex flex-col gap-20 mt-10">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <StageSection />
      <Footer />
    </main>
  );
}
