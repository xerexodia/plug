"use client";
import React, { useState } from "react";
import Button from "../../Buttons/Button";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
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
        } items-center gap-4 absolute lg:static top-16 left-0 right-0 bg-black lg:bg-transparent p-4 lg:p-0`}
      >
        <Button text={"Home"} />
        <Button text={"Docs"} />
        <Button
          onClick={() => {
            push("/Marketplace");
          }}
          text={"MARKETPLACE"}
          bgColor="linear-gradient(0deg, rgba(204,73,153,1) 0%, rgba(247,139,52,1) 100%)"
        />
      </div>
    </div>
  );
};

export default Header;
