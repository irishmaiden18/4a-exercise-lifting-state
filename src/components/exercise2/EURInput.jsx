import React, { useState } from "react";

export default function EURInput({total, handleCurrencyChange, currency}) {
  // const [eur, setEur] = useState("");

  const euros = currency === "e" ? total : total * 0.85

  return (
    <div>
      <label>EUR:</label>
      <input
        type="number"
        value={euros}
        onChange={(e) => handleCurrencyChange(e.target.value)}
      />
    </div>
  );
}