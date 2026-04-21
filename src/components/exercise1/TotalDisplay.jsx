import React, { useEffect, useState } from "react";

export default function TotalDisplay({bill, tip}) {
  // Total is hardcoded / static; doesn’t know about BillInput or TipPercentageInput

  const [total, setTotal] = useState (0.00)

  useEffect(() => {
    setTotal(Number(bill) + Number(tip))
  }, [bill, tip])
  
  return (
    <div>
      <h2>Total: ${total}</h2>
    </div>
  );
}