import React, { useState } from "react";

export default function BillInput({bill, setBill}) {
  // const [bill, setBill] = useState("");

  return (
    <div>
      <label>Bill Amount:</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}