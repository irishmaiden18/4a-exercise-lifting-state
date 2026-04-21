import React, {useState} from "react";

export default function USDInput({total, handleCurrencyChange, currency}) {
  // const [usd, setUsd] = useState("");

  const dollars = currency === "d" ? total : total * 1.17

  return (
    <div>
      <label>USD:</label>
      <input
        type="number"
        value={dollars}
        onChange={(e) => handleCurrencyChange(e.target.value)}
      />
    </div>
  );
}