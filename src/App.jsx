import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BillInput from "./components/exercise1/BillInput";
import TipPercentageInput from "./components/exercise1/TipPercentageInput";
import TotalDisplay from "./components/exercise1/TotalDisplay";
import USDInput from "./components/exercise2/USDInput";
import EURInput from "./components/exercise2/EURInput";
import QuestionForm from "./components/exercise3/QuestionForm";

function App() {
  // .toFixed(2) - for 2 decimal points (converts it to a string)  
  
  //Exercise 1 code
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)

  //Exercise 2 code
  const [total, setTotal] = useState(0)
  const [currency, setCurrency] = useState("e")

  const handleEuros = (value) => {
    setTotal(value)
    setCurrency("e")
  }

  const handleDollars = (value) => {
    setTotal(value)
    setCurrency("d")
  }

  return (
    <>
      {/* Exercise 1. BillInput and TipPercentageInput manage their own state. TotalDisplay cannot update correctly. Fix the code so that it can.*/}
      <div>
        <h1>Tip Calculator</h1>
        <BillInput bill={bill} setBill={setBill}/>
        <TipPercentageInput tip={tip} setTip={setTip}/>
        <TotalDisplay bill={bill} tip={tip}/>
      </div>

      {/* Exercise 2. Typing in one input does not update the other, because state is duplicated in both children.  Make it so that one one input updates, so does the other */}
      <div>
        <h1>Currency Converter</h1>
        <USDInput total={total} handleCurrencyChange={handleDollars} currency={currency}/>
        <EURInput total={total} handleCurrencyChange={handleEuros} currency={currency}/>
      </div>

      {/* Exercise 3 Each OptionRadio tracks its own selection. SelectionDisplay cannot show the selected option. Clicking buttons does not update the display correctly.  Fix it so the selected option is displayed properly.  Write your code in the QuestionForm component */}
      <div>
        <h1>Quiz Question</h1>
        <QuestionForm />
      </div>
    </>
  );
}

export default App;

//325