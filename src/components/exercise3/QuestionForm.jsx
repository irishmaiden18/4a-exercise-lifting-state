import React, { useState } from "react";
import OptionRadio from "./OptionRadio";
import SelectionDisplay from "./SelectionDisplay";

export default function QuestionForm() {
  const options = ["A", "B", "C"];

   //Exercise 3 code
   const [selected, setSelected] = useState("B")
  
  const handleChange = (event) => {
    setSelected(event.target.value)
    console.log(selected)
  }

  return (
    <form>
      {options.map((opt) => (
        <OptionRadio key={opt} selected={selected} option={opt} handleChange={handleChange}/>
      ))}
      <SelectionDisplay selected={selected}/>
    </form>
  );
}
