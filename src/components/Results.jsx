import { calculateInvestmentResults, formatter } from "../util/investment.js";

function calculateTotalInterest(singleResult, userInput) {
  return singleResult.valueEndOfYear - singleResult.annualInvestment * singleResult.year - userInput.initialInvestment;
}

export default function Results({ userInput }) {
  const result = calculateInvestmentResults(userInput);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((singleResult) => {
          const totalInterest = calculateTotalInterest(singleResult, userInput);
          const investedCapital = singleResult.valueEndOfYear - totalInterest;

          return (
            <tr key={singleResult.year}>
              <th>{singleResult.year}</th>
              <td>{formatter.format(singleResult.valueEndOfYear)}</td>
              <td>{formatter.format(singleResult.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
