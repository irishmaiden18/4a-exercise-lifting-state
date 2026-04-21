import React, { useState } from "react";

export default function OptionRadio({ option, handleChange, selected }) {
  // const [selected, setSelected] = useState(false);

  return (
    <div>
      <input
        type="radio"
        value={option}
        checked={selected === option}
        onChange={handleChange}
      />
      <label>{option}</label>
    </div>
  );
}