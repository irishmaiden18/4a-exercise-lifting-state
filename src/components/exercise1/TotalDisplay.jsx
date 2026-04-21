import React, { useEffect, useState } from "react";

export default function TotalDisplay({bill, tip}) {
  // Total is hardcoded / static; doesn’t know about BillInput or TipPercentageInput

  // const [total, setTotal] = useState (0.00)

  // useEffect(() => {
  //   setTotal(Number(bill) + (Number(bill) * (Number(tip) * .01)))
  // }, [bill, tip])

  // total doesn't need to be a state variable
  // tip should be a percentage of the bill not flat number
  const total = Number(bill) + (Number(bill) * (Number(tip) * .01))
  
  return (
    <div>
      <h2>Total: ${total}</h2>
    </div>
  );
}