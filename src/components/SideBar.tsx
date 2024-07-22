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
      className={`fixed inset-0 z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:h-full md:z-auto bg-gray-800 text-white`}
    >
      <div className="flex justify-between items-center p-4 md:hidden">
        <button onClick={toggleSidebar} className="text-white">
          ✕
        </button>
      </div>
      <nav className="flex flex-col space-y-1 p-4">
        <Link
          href="/docs/"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/docs" ? "bg-grey text-black font-bold" : "text-black"
          }`}
        >
          OverView
        </Link>
        <Link
          href="/docs/BuyDeployer"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/docs/BuyDeployer"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Buying Deployer Wallet
        </Link>
        <Link
          href="/docs/SellDeployer"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/docs/SellDeployer"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Selling Deployer Wallet
        </Link>
        <Link
          href="/docs/Trade"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/docs/Trade"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Trade Deployer Wallet
        </Link>
        <Link
          href="/docs/Security"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/docs/Security"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Ethics & Security protocols
        </Link>
        <Link
          href="/docs/Token"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/docs/Token"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Plug TokenEconomics
        </Link>
        <Link
          href="/docs/Dao"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/docs/Dao"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Plug Dao
        </Link>
        <Link
          href="/docs/RoadMap"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/docs/RoadMap"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Plug Roadmap
        </Link>
        <Link
          href="/docs/Strategy"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/docs/Strategy"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Drops Brand Placement Strategy
        </Link>
        <Link
          href="/docs/HowToBuy"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/docs/HowToBuy"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          How to Buy A Deployer Wallet
        </Link>
        <Link
          href="/docs/HowToCreate"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/docs/HowToCreate"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          How To Create A Plug
        </Link>
        <Link
          href="/docs/DyorGuide"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/docs/DyorGuide"
              ? "bg-grey text-black font-bold"
              : "text-black"
          }`}
        >
          Marketplace DYOR Guide
        </Link>
        <Link
          href="/docs/Disclaimer"
          className={`py-2 px-4 rounded text-sm ${
            pathname === "/docs/Disclaimer"
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
