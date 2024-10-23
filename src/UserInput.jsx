export default function UserInput() {
  return (
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
  );
}
