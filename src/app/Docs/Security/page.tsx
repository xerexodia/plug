import React from "react";

const Security = () => {
  return (
    <div className="flex flex-col gap-6 w-full lg:w-3/5">
      <h1 className="text-3xl font-bold">🔒Marketplace Security Measures</h1>
      <p>
        The plug marketplace is committed to maintaining ethical and secure
        value exchanges. For this reason, security measures have been
        implemented within the platform to mitigate the risk of malicious
        activities. The following precautions have been added.
      </p>
      <ul className="flex flex-col gap-2 text-textGrey p-4 border-l border-textGrey">
        <li>-Encryption</li>
        <li>-Contract Scans</li>
        <li>-Volume & Supply Scans</li>
        <li>-Open-Source &Audited Contracts </li>
        <li>-User Verification (KYC) </li>
        <li>-Data Backup</li>
        <li>-Incident & Response Plans</li>
      </ul>
      <p>
        These measures collectively help ensure the safety and integrity of
        transactions and user data on the marketplace.
      </p>
    </div>
  );
};

export default Security;
