import React from "react";

const DyorGuide = () => {
  return (
    <div className="flex flex-col gap-6 w-3/5">
      <h1 className="text-3xl font-bold">How To Buy A Deployer Wallet</h1>
      <h2 className="text-2xl font-bold mb-4">
        Marketplace DYOR Guide for Deployer Wallets
      </h2>
      <p className="mb-6">
        The following guide provides essential tips for practicing due diligence
        when purchasing deployer wallets on the Plug Marketplace:
      </p>

      <ol className="list-decimal  space-y-4">
        <li>
          <h3 className="text-lg font-semibold">
            Check if the Listing is Verified
          </h3>
          <p>
            Verified listings on the Plug Marketplace have a verification badge,
            indicating high security and reliability. Look for the blue check
            mark.
            <br />
            <strong>Note:</strong> Unverified listings can also be secure.
            Always conduct your own research to make an informed decision.
          </p>
        </li>

        <li>
          <h3 className="text-lg font-semibold">Verify Wallet Creation Date</h3>
          <p>
            Deployer wallets created several months or years ago typically have
            more stability than recently created ones. Check the creation date
            by using a blockchain explorer and pasting the deployer wallet
            address.
          </p>
        </li>

        <li>
          <h3 className="text-lg font-semibold">Assess Wallet Activity</h3>
          <p>
            Review the activity of the deployer wallet to ensure it aligns with
            expected usage patterns. Check transaction history and usage trends
            for stability and reliability.
          </p>
        </li>

        <li>
          <h3 className="text-lg font-semibold">
            Verify Ownership Distribution
          </h3>
          <p>
            Ensure no single entity holds a substantial portion of the deployer
            wallet’s assets, which could pose a risk. Examine ownership
            distribution by checking the top holders and their percentages.
          </p>
        </li>

        <li>
          <h3 className="text-lg font-semibold">Check Contract Security</h3>
          <p>
            Review the smart contract associated with the deployer wallet for
            any malicious functions. Look out for risky functions such as Mint
            functions and Dust functions. Use contract scanners or review the
            source code for security verification.
            <br />
            <strong>Note:</strong> Proprietary contract scanners are being
            integrated for easier access.
          </p>
        </li>

        <li>
          <h3 className="text-lg font-semibold">Consult Support if Needed</h3>
          <p>
            For any questions or issues, reach out to the official support chat
            linked below for assistance.
          </p>
        </li>
      </ol>

      <p className="mt-6 italic text-textGrey">
        By following these steps, you can make informed decisions and ensure a
        secure transaction on the Plug Marketplace.
      </p>
    </div>
  );
};

export default DyorGuide;
