import Animate from "@/components/Animate/Animate";
import FirstSection from "@/components/LandingPage/FirstSection/FirstSection";
import Footer from "@/components/Footer/Footer";
import FourthSection from "@/components/LandingPage/FourthSection/FourthSection";
import SecondSection from "@/components/LandingPage/SecondSection/SecondSection";
import StageSection from "@/components/LandingPage/StageSection/StageSection";
import ThirdSection from "@/components/LandingPage/ThirdSection/ThirdSection";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import React from "react";
import Header from "@/components/LandingPage/Header/Header";

const Home = () => {
  return (
    <main className="flex flex-col gap-20">
      <SplashScreen />
      {/* <Animate /> */}
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <StageSection />
      <Footer />
    </main>
  );
};

export default Home;
