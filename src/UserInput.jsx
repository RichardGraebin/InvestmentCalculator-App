import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInputs) => {
      return { ...prevInputs, [inputIdentifier]: newValue };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <label>
          <p>Initial Investment</p>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
          />
        </label>
        <label>
          <p>Annual Investment</p>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          <p>Expected Return</p>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
          />
        </label>
        <label>
          <p>Duration</p>
          <input type="number" value={userInput.duration} onChange={(e) => handleChange("duration", e.target.value)} />
        </label>
      </div>
    </section>
  );
}
