// components/Sidebar.tsx
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 z-50 transform bg-white ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:h-full md:z-auto bg-gray-800 text-white`}
    >
      <div className="flex justify-between items-center p-4 md:hidden">
        <button onClick={toggleSidebar} className="text-black">
          ✕
        </button>
      </div>
      <nav className="flex flex-col space-y-1 p-4">
        <Link
          onClick={toggleSidebar}
          href="/Docs/"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/Docs" ? "bg-grey text-black font-bold" : "text-black"
          }`}
        >
          OverView
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/Docs/BuyDeployer"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/Docs/BuyDeployer"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Buying Deployer Wallet
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/Docs/SellDeployer"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/Docs/SellDeployer"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Selling Deployer Wallet
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/Docs/Trade"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/Docs/Trade"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Trading Deployer Wallet
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/Docs/Security"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/Docs/Security"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Ethics & Security protocols
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/Docs/Token"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/Docs/Token"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Plug TokenEconomics
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/Docs/Dao"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/Docs/Dao"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Plug Dao
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/Docs/RoadMap"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/Docs/RoadMap"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Plug Roadmap
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/Docs/Strategy"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/Docs/Strategy"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Drops Brand Placement Strategy
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/Docs/HowToBuy"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/Docs/HowToBuy"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          How to Buy A Deployer Wallet
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/Docs/HowToCreate"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/Docs/HowToCreate"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          How To Create A Plug
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/Docs/DyorGuide"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/Docs/DyorGuide"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Marketplace DYOR Guide
        </Link>
        <Link
          onClick={toggleSidebar}
          href="/Docs/Disclaimer"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/Docs/Disclaimer"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Legal Disclaimer
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
