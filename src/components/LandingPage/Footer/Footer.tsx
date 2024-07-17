import Box from "@/components/Box/Box";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo.png";
import doubleIcon from "../../../../public/doubleIcon.png";
import footer from "../../../../public/footer.png";
import { MdArrowOutward } from "react-icons/md";
const Footer = () => {
  return (
    <div className="relative flex p-20 gap-12">
      <Image
        src={footer}
        alt=""
        style={{
          position: "absolute",
          zIndex: -100,
          bottom: 0,
          left: 0,
          opacity: 0.4,
        }}
      />
      <div className="flex w-3/5 h-64 ">
        <Box bgColor="rgba(23, 16, 17,0.2)">
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
        <Box bgColor="rgba(23, 16, 17,0.3)">
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
