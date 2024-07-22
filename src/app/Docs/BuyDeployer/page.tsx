import React from "react";

const advantages = [
  "Reputation: Gain credibility from a wallet known for secure, successful contracts.",
  "Pre-existing Infrastructure: Save time with already deployed and tested smart contracts.",
  "Time Efficiency: Skip setup and deployment stages.",
  "Security: Trust in a wallet with a history of secure deployments.",
  "User Base: Inherit existing users from popular contracts.",
  "Cost Savings: Reduce development and testing costs.",
  "Support: Benefit from ongoing updates and support from the original developers.",
];
const BuyDeployer = () => {
  return (
    <div className="flex flex-col gap-6 w-3/5">
      <h1 className="text-3xl font-bold"> Buying deployer wallet </h1>
      <p>
        Buying deployer contract is a new form of DeFi Trust in a wallet with a
        history of secure deployments investing facilitated by the PLUG
        marketplace. It entails the purchase of a Deployer wallet ownership,
      </p>

      <p>
        The intention is to give the buyer the opportunity of benefits that can
        accelerate the growth and success of your blockchain project. It boosts
        your project&apos;s credibility through association with a secure and
        successful wallet, saving time with pre-existing smart contracts. This
        ensures security with a proven track record, inherits an existing user
        base, and reduces development and testing costs. Additionally, it
        provides ongoing updates and support, accelerating your blockchain
        project&apos;s growth and success
      </p>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Advantages</h2>
        <ul className="list-disc pl-5 space-y-2">
          {advantages.map((advantage, index) => (
            <li key={index} className="text-gray-700">
              {advantage}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          These advantages can expedite your blockchain project&apos;s growth
          and success.
        </p>
      </div>
    </div>
  );
};

export default BuyDeployer;
