import logoPath from ".././assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logoPath} />
      <h1>Investment Calculator</h1>
    </header>
  );
}
