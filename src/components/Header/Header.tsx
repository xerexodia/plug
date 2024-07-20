"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Button from "../Buttons/Button";
import { IoChevronBackOutline } from "react-icons/io5";
import DiamondEth from "../../../public/diamodEth.svg";
import logo from "../../../public/logo.png";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useRouter();

  return (
    <div className="flex items-center justify-between py-6 px-4 lg:px-20">
      <Image
        src={logo}
        alt=""
        className="w-24"
        style={{ cursor: "pointer" }}
        onClick={() => push("/")}
      />
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-white text-2xl" />
        </button>
      </div>
      <div
        className={`flex-col lg:flex-row lg:flex ${
          isOpen ? "flex" : "hidden"
        } items-center gap-4 absolute lg:static top-16 left-0 right-0 bg-black lg:bg-transparent p-4 lg:p-0 z-10`}
      >
        <Button text={"VIEW LISTINGS"} />
        <Button text={"BUY DEVELOPPER"} />
        <Button
          text={"MY LISTINGS"}
          onClick={() => {
            push("/Listing");
          }}
        />
        <div className="flex flex-row gap-0.25 items-center rounded-full bg-lightBlack">
          <IoChevronBackOutline color="grey" size={22} />
          <DiamondEth />
        </div>
        <Button
          text={"CONNECT"}
          bgColor="linear-gradient(0deg, rgba(204,73,153,1) 0%, rgba(247,139,52,1) 100%)"
        />
      </div>
    </div>
  );
};

export default Header;
