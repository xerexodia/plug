import React from "react";

const enhancedAdvantages = [
  "Enhanced Credibility: Associating your project with a secure and successful deployer wallet boosts its credibility.",
  "Time Savings: Utilize pre-existing, well-tested smart contracts, saving development time.",
  "Proven Security: Benefit from a wallet with a proven track record of security.",
  "Existing User Base: Inherit an existing user base, enhancing your project's reach.",
  "Cost Reduction: Lower development and testing costs with ready-made solutions.",
  "Ongoing Support: Access continuous updates and support, facilitating faster growth and success for your blockchain project.",
];

const Trade = () => {
  return (
    <div className="flex flex-col gap-6 w-full lg:w-3/5">
      <h1 className="text-3xl font-bold">Trading A Deployer Wallet</h1>
      <p>
        Trading a deployer wallet is a new way to arbitrage It boosts your
        project&apos;s credibility by associating it with a secure and
        successful wallet, saving time with pre-existing smart contracts wallet,
        It ensures security with a proven track record, inherits an existing
        user base, and reduces development and testing costs you also gain
        control over all projects and smart contracts associated with that
        wallet
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Enhanced Advantages</h2>
        <ul className="list-disc pl-5 space-y-2">
          {enhancedAdvantages.map((advantage, index) => (
            <li key={index} className="text-gray-800">
              {advantage}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trade;
