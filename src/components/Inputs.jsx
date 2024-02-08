import { useState } from "react";

const Inputs = ({ amount, setAmount }) => {
  return (
    <>
      <div className="input">
        <h2 className="py-4">Enter Amount</h2>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="py-3 pl-1 outline-none rounded-sm w-full border bg-transparent"
        />
      </div>
    </>
  );
};

export { Inputs };
