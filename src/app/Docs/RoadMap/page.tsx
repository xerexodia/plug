import React from "react";
import { IoCheckboxOutline } from "react-icons/io5";
const phases = [
  {
    title: "Phase 1: Creating the Foundation",
    status: "Completed",
    details: [
      {
        subtitle: "PLUG Marketplace Launch (Version 1)",
        description:
          "Upon its release, the Plug Marketplace (V1) will allow for the unrestricted buying and selling of deployer wallets. Completely peer-to-peer.",
      },
      {
        subtitle: "PLUG Referral Program",
        description:
          "The Plug Referral Program is designed to incentivize the listing of deployer wallets on the platform through the redirection of a portion of brokerage fees collected to the referrer.",
      },
      {
        subtitle: "Activation of Earnings Centre: Tier 1",
        description:
          "The V1 Earnings Centre will provide users with the opportunity to stake PLUG/wETH UNI V2 LP Tokens and be rewarded in PLUG for the value and stability they bring to the token and marketplace. [Learn More]",
      },
      {
        subtitle: "Furthering of Security & Ethics Measures",
        description:
          "To uphold ethical and secure practices within the Plug Marketplace, further security scans will be implemented and preventative measures will be taken to ensure the safety of platform users. Due Note: Plug Marketplace will be safe & secure to use at V1 launch regardless of further security implementations.",
      },
      {
        subtitle: "Implementation of Pinksale Locker Support",
        description:
          "The implementation of Pinksale Locker support will allow for the unrestricted buying and selling of deployer wallets on Pinksale.",
      },
      {
        subtitle: "Activation of Tiered Earning 2 & 3",
        description:
          "With the activation of Tiers 2 & 3, holders of the PLUG token will be eligible to earn PLUG without providing liquidity. [Learn More]",
      },
    ],
  },
  {
    title: "Phase 2: Enhancing the Marketplace",
    status: "Completed",
    details: [
      {
        subtitle: "Funding of Earning Centre Tiers 2 & 3",
        description:
          "Funding the Tier 2 & 3 earning pools will allow PLUG holders to earn without having to provide & stake liquidity.",
      },
      {
        subtitle: "Complete UI Redesign & Improvements",
        description:
          "The implementation of a UI redesign and improvements will enhance the user experience on the marketplace.",
      },
      {
        subtitle: "Activation of Offer Functionality",
        description:
          "The activation of the Plug offer functionality will allow marketplace users to make purchase offers on deployer wallets listed, typically aiming for greater discounts.",
      },
      {
        subtitle: "Activation of Auction/Bidding Functionality",
        description:
          "The integration of the Plug auction functionality will allow sellers of deployer wallets to auction their pair to the highest bidder rather than setting a fixed price.",
      },
      {
        subtitle: "Creation of the Plug Treasury",
        description:
          "The Plug Treasury will consist of funds pooled with the intention of buying deployer wallets via the marketplace. Profits generated from these purchases will benefit the PLUG token & its holders as per the Plug earnings distribution.",
      },
    ],
  },
  {
    title: "Phase 3: Scaling User Base & Adoption",
    status: "Estimated Completion Time: 20-30 Days",
    details: [
      {
        subtitle: "Implementation of Lock Fractionalization",
        description:
          "The Plug Marketplace Lock Fractionalization feature allows owners of deployer wallets to list a portion of their pool for sale, rather than having to list the entire pair.",
      },
      {
        subtitle: "Implementation of Liquidity Collateralized Loans",
        description:
          "The implementation of Liquidity Collateralized Loans allows for deployer wallets to be used as collateral for permissionless loans. More Details Shortly",
      },
      {
        subtitle: "Added Support for Ethereum Layer 2 Chains",
        description:
          "Integrating support for Ethereum Layer 2 chains such as BASE and ARB allows the Plug Marketplace to target a greater market segment.",
      },
      {
        subtitle: "Integration of Stable Coin Purchases",
        description:
          "The integration of Stable Coin Purchases will enable the buying and selling of deployer wallets for stable coins such as USDT & USDC, providing greater flexibility for users.",
      },
      {
        subtitle: "Added Support for Additional Lock Platforms",
        description:
          "Support for additional lock platforms will be added to the Plug Marketplace in Phase 3, further expanding the market segment.",
      },
    ],
  },
];
const RoadMap = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-50 w-full lg:w-3/5">
      <div className="bg-white rounded-lg w-full">
        <h1 className="text-3xl font-bold mb-8">Plug Marketplace Roadmap</h1>
        {phases.map((phase, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{phase.title}</h2>
            <p
              style={{
                color: "green",
                borderRadius: 12,
                backgroundColor: "#e2ebf9",
              }}
              className="p-4 text-gray-700 mb-4 font-bold"
            >
              Phase {phase.status}
            </p>
            {phase.details.map((detail, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                  <IoCheckboxOutline color="grey" />
                  {detail.subtitle}
                </h3>
                <p className="text-textGrey p-4 border-l border-grey">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default RoadMap;
