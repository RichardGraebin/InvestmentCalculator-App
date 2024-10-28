export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <label>
          <p>Initial Investment</p>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </label>
        <label>
          <p>Annual Investment</p>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          <p>Expected Return</p>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </label>
        <label>
          <p>Duration</p>
          <input type="number" value={userInput.duration} onChange={(e) => onChange("duration", e.target.value)} />
        </label>
      </div>
    </section>
  );
}
