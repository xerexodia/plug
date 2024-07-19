import Box from "@/components/Box/Box";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo.png";
//@ts-ignore
import doubleIcon from "../../../../public/doubleIcon.svg?url";
import footer from "../../../../public/footer.png";
import { MdArrowOutward } from "react-icons/md";
const Footer = () => {
  return (
    <div className="relative flex flex-col lg:flex-row p-10 lg:p-20 gap-10 lg:gap-12">
      <Image
        src={footer}
        alt=""
        style={{ zIndex: -100, width: "100%" }}
        className="absolute left-0 bottom-0  opacity-40 h-64 lg:h-auto"
      />
      <div className="flex flex-1 flex-col lg:flex-row lg:w-3/5">
        <Box bgColor="rgba(23, 16, 17,0.2)">
          <div className="flex flex-col flex-1 p-6 justify-between">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <Image className="w-24 lg:w-32 z-0" src={logo} alt="Logo" />
              <span className="text-white text-center font-light lg:text-left lg:w-1/2">
                A Decentralized Deployer Wallets Marketplace.
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white font-black uppercase text-lg lg:text-3xl">
                Home
              </span>
              <span className="text-white font-black uppercase text-lg lg:text-3xl">
                Docs
              </span>
              <span className="text-white font-black uppercase text-lg lg:text-3xl">
                Marketplace
              </span>
            </div>
          </div>
        </Box>
      </div>
      <div className="flex flex-1 flex-col lg:flex-row lg:w-2/5 justify-between">
        <Box bgColor="rgba(23, 16, 17,0.3)">
          <div className="flex flex-col flex-1 p-6 justify-between">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <span className="text-white font-semibold text-lg lg:text-3xl">
                Contact Us
              </span>
              <div className="flex w-8 h-8 bg-white items-center justify-center rounded-full">
                <MdArrowOutward color="black" size={25} />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-white font-semibold text-lg lg:text-2xl">
                TEAM@PLUG.SITE
              </span>
              <Image
                src={doubleIcon}
                alt="Double Icon"
                style={{ marginTop: 4 }}
              />
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Footer;
