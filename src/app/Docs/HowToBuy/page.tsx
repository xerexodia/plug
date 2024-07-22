import Image from "next/image";
import React from "react";
import img from "../../../../public/AllPlugs.png";
const HowToBuy = () => {
  return (
    <div className="flex flex-col gap-6 w-3/5">
      <h1 className="text-3xl font-bold">How To Buy A Deployer Wallet</h1>
      <p className="mb-6">
        How to buy a deployer wallet on the Plug Marketplace.
      </p>

      <h3 className="text-xl font-semibold mb-2">Buying a deployer wallet</h3>
      <p className="mb-4">
        To buy a deployer wallet through the Plug Marketplace, start by
        connecting your Web3 wallet by clicking the “Connect” button on the
        marketplace’s home page.
      </p>

      <div className="mb-6 my-4">
        <h4 className="text-lg font-semibold mb-2">
          Step 1: Browse the listings
        </h4>
        <div className="p-6 rounded-md shadow">
          <Image src={img} alt="" />
        </div>
        <p>
          Visit the Plug Marketplace home page and navigate to the listings
          section by scrolling down.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">
          Step 2: Viewing a deployer wallet
        </h4>
        <p>
          When you find a listing you’re interested in, click the “View Wallet”
          button. This will expand the listing and provide more details about
          the deployer wallet you are considering.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">
          Step 3: Purchasing a listing
        </h4>
        <p>
          To purchase a listing, click on the button displaying the price in
          either PLUG or ETH. Confirm the transaction in your wallet, and the
          deployer wallet ownership is yours!
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Claiming your deployer wallet
      </h3>
      <p className="mb-4">
        After purchasing a deployer wallet, you can view and manage your wallet
        by following these steps:
      </p>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">
          Step 4: Viewing & Claiming your deployer wallet
        </h4>
        <p>
          Navigate to the “Edit/Withdraw” page of the relevant platform. Connect
          the wallet you used to purchase the deployer wallet and select your
          newly acquired wallet to view and manage it.
        </p>
      </div>
    </div>
  );
};

export default HowToBuy;
