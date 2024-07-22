import Image from "next/image";
import React from "react";
import img from "../../../../public/Listing.png";
import activate from "../../../../public/activate.png";
import transfer from "../../../../public/transfer.png";
const HowToCreate = () => {
  return (
    <div className="flex flex-col gap-6 w-3/5">
      <h1 className="text-3xl font-bold">How To Create A PLUG Listing</h1>
      <p className="mb-6">
        How to sell a deployer wallet on the Plug Marketplace.
      </p>

      <h3 className="text-xl font-semibold mb-2">Selling a deployer wallet</h3>
      <p className="mb-4">
        To sell a deployer wallet through the Plug Marketplace, start by
        connecting your Web3 wallet by clicking the “Connect” button on the
        marketplace’s home page.
      </p>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">
          Step 1: Inputting Your Listing Information
        </h4>
        <div className="p-6 rounded-md shadow mb-4">
          <Image src={img} alt="" />
        </div>
        <p>
          Navigate to the “Sell Wallet” page. Enter your deployer wallet’s
          address and Lock ID. Choose the currency or currencies you wish to
          accept as payment and set the price of your listing. Click “Confirm”
          and approve the transaction in your wallet.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">
          Step 2: Transferring Your Wallet Ownership
        </h4>
        <div className="p-6 rounded-md shadow mb-4">
          <Image src={transfer} alt="" />
        </div>
        <p>
          Once you’ve entered your listing information, the “Transfer Wallet
          Ownership” section will automatically expand with the necessary
          details. Click “Confirm” and approve the transaction in your wallet to
          transfer the wallet ownership to the Plug Marketplace’s smart
          contract.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">
          Step 3: Activating Your Listing
        </h4>
        <div className="p-6 rounded-md shadow mb-4">
          <Image src={activate} alt="" />
        </div>
        <p>
          After transferring ownership, the “Activate Listing” section will
          expand with the required details. Click “Confirm” and approve the
          transaction in your wallet. Your deployer wallet is now available for
          purchase on the Plug Marketplace.
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Managing Deployer Wallet Listings
      </h3>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Withdrawing Your Listing</h4>
        <p>
          To withdraw your deployer wallet listing, paste the wallet address
          into the “Import Listing” box, click “Import,” then click “Withdraw”
          and confirm the transaction in your wallet. Your wallet ownership will
          be returned, and the listing will be removed.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Editing Your Listing</h4>
        <p>
          To edit your deployer wallet listing, paste the wallet address into
          the “Import Listing” box, click “Import,” then click “Edit” and enter
          the new price. Click “Confirm” and approve the transaction in your
          wallet.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">
          Activating Incomplete Listings
        </h4>
        <p>
          If you’ve transferred ownership but haven’t activated your listing,
          paste the wallet address into the “Import Listing” box, click
          “Import,” then click “Activate” and confirm the transaction in your
          wallet.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">
          Deactivating Incomplete Listings
        </h4>
        <p>
          If you’ve transferred ownership but haven’t activated your listing and
          wish to reclaim your wallet, paste the wallet address into the “Import
          Listing” box, click “Import,” then click “Remove” and confirm the
          transaction in your wallet. Your wallet ownership will be returned.
        </p>
      </div>
    </div>
  );
};

export default HowToCreate;
