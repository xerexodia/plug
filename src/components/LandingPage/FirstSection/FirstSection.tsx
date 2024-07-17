import Image from "next/image";
import React from "react";
import doubleIcon from "../../../../public/doubleIcon.png";
import hero from "../../../../public/hero.png";
import Button from "@/components/Buttons/Button";

const FirstSection = () => {
  return (
    <div className="flex gap-10 justify-between px-20">
      <div className="flex flex-col gap-6 items-start justify-center">
        <Image src={doubleIcon} alt="" />
        <div className="flex flex-col gap-3 ">
          <h1 className="text-7xl font-bold text-white">Unlock Assets,</h1>
          <h1 className="text-7xl font-bold text-white">Trade Token</h1>
          <h1 className="text-7xl font-bold text-primary">Deployer Wallets</h1>
          <h3 className="text-2xl font-light text-white uppercase">
            Buy & Sell , Deployer WAllets
          </h3>
        </div>
        <div className="flex flex-col gap-3 ">
          <Button
            color="black"
            bgColor="white"
            text="Buy"
            style={{ width: "40%" }}
          />
          <span className="py-3 px-10 text-white border rounded-full">
            xfghsdghsdghcvbsdfhdfgdfgjdfgjdfjgdfghjdfgjd
          </span>
        </div>
      </div>
      <div>
        <Image src={hero} alt="" />
      </div>
    </div>
  );
};

export default FirstSection;
