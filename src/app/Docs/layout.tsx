// components/Layout.tsx
"use client";
import { useState } from "react";
import Sidebar from "../../components/SideBar";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex flex-col md:flex-row md:overflow-hidden bg-white">
      <div className="fixed flex-1 w-full t-0 bg-white border-b border-grey h-20 z-10 ">
        <button
          onClick={toggleSidebar}
          className="md:hidden absolute top-4 left-4 bg-gray-800 text-3xl text-black p-2 rounded"
        >
          ☰
        </button>
        <div className="flex items-center h-full pl-20 gap-6">
          <Image src={logo} alt="" width={80} />
          <span className="text-xl text-black font-bold">Documentations</span>
        </div>
      </div>
      <div className="w-full flex-none md:w-64 pt-20">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto relative mt-20">
        {children}
      </div>
    </div>
  );
}
