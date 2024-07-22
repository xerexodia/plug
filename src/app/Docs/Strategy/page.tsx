import React from "react";

const Strategy = () => {
  const strategies = [
    {
      title: "Targeted Web Placements",
      description:
        'Through strategic Search Engine Optimization (SEO), the goal is to position the platform as a top result for searches related to deployer wallets. By targeting keywords such as "smart contract deployer," "blockchain deployer," and "crypto deployer wallet," users searching for these terms will encounter the platform, placing it directly in front of its target audience—users interested in deployer wallets.',
    },
    {
      title: "Team Finance Advertisement",
      description:
        "Team Finance offers ads through push notifications, native ads, banners, and articles. As a recognized deployer wallet platform, Team Finance is ideal for promoting the Plug Marketplace.",
    },
    {
      title: "DxSale Partnership Promotion",
      description:
        "DxSale promotes projects on Twitter. Plug will integrate DxSale support and feature it on the Plug website to attract the DxSale community.",
    },
    {
      title: "Unicrypt Partnership Application",
      description:
        "Plug will apply to partner with Unicrypt to gain credibility and drive traffic by being featured on the Unicrypt website.",
    },
    {
      title: "Developer-Focused Ad Campaign",
      description:
        "Plug will target low-cap token creators with ads on their preferred websites and platforms.",
    },
    {
      title: "Dextools & Dexscreener Ads",
      description:
        "Plug will advertise on Dextools and Dexscreener, popular among token developers, for high visibility.",
    },
    {
      title: "Etherscan Ads",
      description:
        "Advertising on Etherscan will reach ERC20 token developers and provide significant exposure for the Plug Marketplace.",
    },
    {
      title: "Twitter Ads",
      description:
        "Twitter’s high traffic among crypto developers makes it an ideal platform for promoting the Plug Marketplace.",
    },
  ];
  return (
    <div className="w-full lg:w-3/5">
      <h2 className="text-2xl font-bold mb-4">
        PLUG Deployer Wallet Brand Placement Strategy
      </h2>
      <p className="mb-6">
        The PLUG Deployer Wallet Brand Placement Strategy focuses on
        strategically positioning the PLUG MARKETPLACE in and around areas where
        deployer wallets are utilized and discussed. This document outlines the
        specific measures being taken to achieve this goal.
      </p>
      {strategies.map((strategy, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{strategy.title}</h3>
          <p>{strategy.description}</p>
        </div>
      ))}
      <p className="mt-6">
        These strategies aim to position Plug prominently in key areas, driving
        traffic and building brand confidence.
      </p>
    </div>
  );
};

export default Strategy;
