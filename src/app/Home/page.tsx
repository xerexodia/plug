import Header from "@/components/Header/Header";
import FirstSection from "@/components/LandingPage/FirstSection/FirstSection";
import Footer from "@/components/LandingPage/Footer/Footer";
import FourthSection from "@/components/LandingPage/FourthSection/FourthSection";
import SecondSection from "@/components/LandingPage/SecondSection/SecondSection";
import StageSection from "@/components/LandingPage/StageSection/StageSection";
import ThirdSection from "@/components/LandingPage/ThirdSection/ThirdSection";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col gap-20">
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
