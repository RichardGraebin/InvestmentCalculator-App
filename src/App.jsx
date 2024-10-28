import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const DEFAULT_INVESTMENT = {
  initialInvestment: 10000,
  annualInvestment: 12000,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(DEFAULT_INVESTMENT);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInputs) => {
      return { ...prevInputs, [inputIdentifier]: +newValue }; // + forces to sum even if it is a string
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
