import logoPath from "./assets/investment-calculator-logo.png";

function App() {
  return (
    <>
      <header id="header">
        <img src={logoPath} />
        <h1>Investment Calculator</h1>
      </header>
      <section id="user-input">
        <div className="input-group">
          <label>
            <p>Initial Investment</p>
            <input type="number" />
          </label>
          <label>
            <p>Annual Investment</p>
            <input type="number" />
          </label>
        </div>
        <div className="input-group">
          <label>
            <p>Expected Return</p>
            <input type="number" />
          </label>
          <label>
            <p>Duration</p>
            <input type="number" />
          </label>
        </div>
      </section>
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
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
