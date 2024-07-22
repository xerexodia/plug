import React from "react";

const data = [
  { label: "Total & Fixed Supply", value: "10,000,000 DROPS (10 Million)" },
  { label: "Trading Fees", value: "5% (Tax on Buys & Sells)" },
  { label: "Transfer Tax", value: "0% (No Transfer Tax)" },
];

const feeDetails = [
  {
    title: "1% Platform Earnings:",
    description:
      "This 1% Fee is considered as platform earnings, and is distributed in accordance with the Distribution of Earnings section of this documentation.",
  },
  {
    title: "1% Liquidity Provision:",
    description:
      "In order to increase liquidity strength, a 1% fee is taken on buy & sell transactions and added to the Plug Token core liquidity pool. This minimizes price impact on trades, creating sustainability within the token and facilitating its use within the Marketplace.",
  },
  {
    title: "3% Marketing & Platform Development:",
    description:
      "In order to further both the visibility and operability of the platform, a 3% fee is taken on all buy & sell transactions. Funds collected as a result of this fee are used for a variety of purposes, which include, but are not limited to, promotional endeavours (namely via social media outlets), advertisements, listings on recognized sites & platforms and costs associated with platform expansions.",
  },
];

const page = () => {
  return (
    <div className="flex flex-col gap-6 w-3/5">
      <h1 className="text-3xl font-bold">Plug Token Economics</h1>
      <div className="flex flex-col gap-4 ">
        <span className="italic">Contract: 0x000000000000000000000000000 </span>
        <p>
          The plug Token is the core component of the plug Marketplace and
          ecosystem . It is the primary currency used within the platform to
          buy, sell and trade Deployer Wallets . It also allows for earnings to
          occur via multiple outlets.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Section Numeric Values</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-500">
                Section
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-500">
                Numeric Values
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                  {item.label}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-bold">Distribution of Trading fees</h3>
        <div className="flex flex-row items-center justify-between">
          <span className="py-6 px-4 border border-grey rounded-lg shadow-md">
            1% Platform Earnings
          </span>
          <span className="py-6 px-4 border border-grey rounded-lg shadow-md">
            1% Liquidity
          </span>
          <span className="py-6 px-4 border border-grey rounded-lg shadow-md">
            3% Marketing& Platform
          </span>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Fee Descriptions</h2>
          <ul className="space-y-4">
            {feeDetails.map((fee, index) => (
              <li key={index}>
                <h3 className="text-xl font-semibold text-gray-800 pb-2">
                  {fee.title}
                </h3>
                <p className="text-gray-700">{fee.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-bold">Supply Distribution</h3>
        <div>
          <span className="font-bold pb-4"> 86% Uniswap V2 Liquidity:</span>
          <p>
            86% of the total supply is added to the Uniswap Liquidity Pool at
            launch. This supply will be publicly available for purchase directly
            on the market.
          </p>
        </div>
        <div>
          <span className="font-bold pb-4"> 14% PLUG Reserves:</span>
          <p>
            The remaining 14% of supply will be reserved for endeavors
            associated with the expansion of the PLUG Marketplace and Token.
            These endeavors include, but are not limited to, marketing and
            promotional activities, yield & reward increases and encouragement
            of marketplace engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
