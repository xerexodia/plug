// components/Layout.tsx

import Sidebar from "../../components/SideBar";
import plugDOCS from "../../../public/plugDOCS.png";
import Image from "next/image";
import Link from "next/link";

const Docs = () => {
  return (
    <div className="flex flex-col gap-10 w-full lg:w-3/5">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">📍An Overview of Plug</h1>
        <span className="text-xl text-lightBlack">
          Overview of the Plug Ecosystem.
        </span>
        <p>
          PLUG proposes new ways of exchanging value in DeFi, simultaneously
          allowing for the liquefaction of illiquid or locked assets while
          providing new avenues of investment. By providing a fully secure,
          decentralized, and peer-to-peer marketplace for buying and selling
          assets via deployer wallets, PLUG accelerates the velocity of DeFi
          capital.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Marketplace Features </h1>
        <span className="text-xl text-lightBlack">
          An overview of the Plug Marketplace features.
        </span>
        <div className="flex flex-col gap-6">
          <p>
            There are three main ways to take advantage of the technology
            provided by Plug&apos;s peer-to-peer locked liquidity marketplace:
          </p>
          <div className="flex flex-col underline text-blue gap-2">
            <li>
              <Link href="/docs/" className="font-bold">
                Buying Deployer Wallet
              </Link>
            </li>
            <li>
              <Link href="/docs/" className="font-bold">
                Selling Deployer Wallet
              </Link>
            </li>
            <li>
              <Link href="/docs/" className="font-bold">
                Trading Deployer Wallet
              </Link>
            </li>
          </div>
          <p>
            Sales and purchases of Deployer wallet contracts within the
            marketplace are executed primarily using the PLUG token. This
            stimulates the token&apos;s inner economy, simultaneously
            encouraging its purchase and providing it with an intrinsic
            marketplace value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Docs;
