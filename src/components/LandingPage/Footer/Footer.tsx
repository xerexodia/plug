import Box from "@/components/Box/Box";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo.png";
import doubleIcon from "../../../../public/doubleIcon.png";
import { MdArrowOutward } from "react-icons/md";
const Footer = () => {
  return (
    <div className="flex p-20 gap-12">
      <div className="flex w-3/5 h-64 ">
        <Box>
          <div className="flex flex-col flex-1 p-6 justify-between">
            <div className="flex items-start justify-between">
              <Image className="w-32" src={logo} alt="" />
              <span className="text-white text-center font-light text-center w-1/2">
                A Decentralized Deployer WAllets Marketplace.
              </span>
              <div />
            </div>
            <div className="flex items-end justify-between">
              <span className="text-white font-black uppercase text-3xl">
                home
              </span>
              <span className="text-white font-black uppercase text-3xl">
                DOCS
              </span>
              <span className="text-white font-black uppercase text-3xl">
                MARKETPLACE
              </span>
            </div>
          </div>
        </Box>
      </div>
      <div className="flex w-2/5 justify-between">
        <Box>
          <div className="flex flex-col flex-1 p-6 justify-between">
            <div className="flex items-start justify-between">
              <span className="text-white font-semiBold text-3xl">
                CONTACT US
              </span>
              <div className="flex w-8 h-8 bg-white items-center justify-center rounded-full ">
                <MdArrowOutward color="black" size={25} />
              </div>
            </div>
            <div>
              <span className="text-white font-semiBold text-2xl">
                TEAM@PLUG.SITE
              </span>
              <Image src={doubleIcon} alt="" style={{ marginTop: 4 }} />
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Footer;
