import React from "react";
import Button from "../Buttons/Button";
import logo from "../../../public/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-6 px-20 ">
      <Image src={logo} alt="" className="w-24" />
      <div className="flex gap-4">
        <Button text={"Home"} />
        <Button text={"Docs"} />
        <Button
          text={"MARKETPLACE"}
          bgColor="linear-gradient(0deg, rgba(204,73,153,1) 0%, rgba(247,139,52,1) 100%)"
        />
      </div>
    </div>
  );
};

export default Header;
