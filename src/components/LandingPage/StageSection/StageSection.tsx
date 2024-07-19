"use client";
import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
import check from "../../../../public/check.svg";
const data = [
  {
    title: "Plug contract deployment",
  },
  {
    title: "Finalize the business plan and market analysis",
  },
  {
    title: "Define key features and functionalities of the platform",
  },
  {
    title: "Design and develop the core marketplace platform",
  },
  {
    title: "Establish social media channels and a community forum",
  },
  {
    title: "Market Place Launch V1",
  },
  {
    title: "Referral program",
  },
  {
    title: "Complete UI redesign & Improvements",
  },
];

const Card = ({
  title,
  data,
  index,
}: {
  index: number;
  title: string;
  data: { title: string }[];
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0 * index,
        translateX: 100,
      }}
      whileInView={{
        opacity: 1 * index,
        translateX: 0,
      }}
      viewport={{
        margin: "-200px",
      }}
      transition={{ ease: "easeInOut", duration: 0.5 * index }}
      style={{ padding: 1 }}
      className="flex flex-1 bg-gradient-to-b from-secondary to-primary rounded-md overflow-hidden"
    >
      <div
        className="flex flex-1 flex-col rounded-md py-10 px-4 gap-2"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(140deg, #000000 20%,#000000 40%, rgba(73,20,76,1)70%,rgba(73,20,76,1)90%,rgba(73,20,76,1) 100%)",
        }}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-3xl text-white font-meduim">{title}</span>
          <div className="flex w-8 h-8 bg-white items-center justify-center rounded-full ">
            <MdArrowOutward color="black" size={25} />
          </div>
        </div>
        <ul className="flex flex-col gap-6">
          {data?.map((el) => (
            <li
              key={el.title}
              className="text-white text-xs border-b relative pb-2"
            >
              <div
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "auto",
                  paddingRight: 30,
                }}
              >
                &#x2022; {el?.title}
                <Image
                  src={check}
                  alt=""
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const StageSection = () => {
  const [selectedCard, setSelectedCard] = useState<number>(1);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  return (
    <div className="flex flex-col px-4 md:px-20 gap-10">
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-secondary text-5xl font-bold">Roadmap</h3>
        <span className="text-white text-3xl text-center font-bold">
          A Decentralized Deployer Wallets Marketplace.
        </span>
        <span className="text-white text-center w-full lg:w-1/2 font-light text-sm sm:text-base lg:text-xl">
          Join Any Of Our Three Tiers Today To Start Earning PLUG. Pool
          Contributors Receive 80% Of The Market-Purchased PLUG, While The
          Remaining 20% Are Permanently Burned.
        </span>
      </div>
      <div className="flex flex-1 flex-col md:flex-row gap-2 items-center md:items-start">
        {[1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className={`overflow-hidden w-full md:w-${
              selectedCard === index ? "3/5" : "1/5"
            } h-1/3 md:h-${isMobile ? "1/4" : "full"}`}
            style={{
              filter:
                selectedCard !== null && selectedCard !== index
                  ? "blur(0.3px)"
                  : "none",
              opacity:
                selectedCard !== null && selectedCard !== index ? 0.5 : 1,
            }}
            animate={{
              width: !isMobile
                ? selectedCard === index
                  ? "60%"
                  : "20%"
                : "100%",
              height: isMobile
                ? selectedCard === index
                  ? "60%"
                  : "20%"
                : "auto",
              filter:
                selectedCard !== null && selectedCard !== index
                  ? "blur(0.3px)"
                  : "none",
              opacity:
                selectedCard !== null && selectedCard !== index ? 0.5 : 1,
            }}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
          >
            <Card index={index} title={"Stage 0" + index} data={data} />
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .md\\:flex-row {
            flex-direction: column;
          }
          .md\\:items-start {
            align-items: center;
          }
          .md\\:w-3\\/5,
          .md\\:w-1\\/5 {
            width: 100%;
          }
          .md\\:h-full {
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default StageSection;
