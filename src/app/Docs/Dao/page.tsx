import React from "react";

const Dao = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-3/5">
      <h1 className="text-3xl font-bold mb-4">Plug DAO</h1>
      <p className="mb-6">
        <strong>
          PLUG DAO Shifts from Decentralized Governance: Your Stake, Your
          Influence
        </strong>
      </p>

      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p className="mb-6">
        The $PLUG Decentralized Autonomous Organization (DAO) offers a
        decentralized governance model where $PLUG token holders can propose and
        vote on decisions related to the PLUG token and its marketplace.
      </p>
      <p className="mb-6">
        Voting power within the DAO is proportional to the amount of $PLUG
        tokens held by each participant, with specific quorum requirements for
        proposals to be considered, voted on, and approved.
      </p>

      <h2 className="text-2xl font-bold mb-4">Proposals</h2>
      <p className="mb-6">
        Participants in the DAO can submit proposals they believe will advance
        the growth of PLUG. To submit a proposal, a minimum holding of 150,000
        PLUG (1.5% of the total supply) is required. When a proposal is made,
        150,000 PLUG are transferred from the proposal wallet to the PLUG DAO
        contract. These tokens are held by the DAO contract until the proposal
        is either accepted or rejected, at which point they are returned to the
        proposer. This process ensures that proposals are made with serious
        intent.
      </p>

      <h2 className="text-2xl font-bold mb-4">Voting</h2>
      <p className="mb-6">
        All $PLUG token holders can vote on proposals, with voting power based
        on the proportion of the total $PLUG supply they hold. Tokens can be
        used to vote on multiple proposals at the same time.
      </p>

      <h2 className="text-2xl font-bold mb-4">Proposal Outcomes</h2>
      <p className="mb-6">
        To pass, a proposal must receive votes amounting to at least 15% of the
        total supply and secure a majority vote. If a proposal fails to meet the
        15% quorum or does not achieve a majority of “yes” votes, it will not be
        implemented. Approved proposals will be enacted if they achieve both the
        quorum and majority vote. Failed proposals can be resubmitted at any
        time.
      </p>
    </div>
  );
};

export default Dao;
