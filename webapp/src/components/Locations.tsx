function Locations() {
  return (
    <div>
      <p>Hello! 👋</p>
      <h1>Where do you want to go?</h1>
      <section>
        <select name="city">
          <option value="san-francisco">San Francisco</option>
          <option value="frankfurt" disabled>
            Frankfurt
          </option>
          <option value="seattle" disabled>
            Seattle
          </option>
          <option value="portland" disabled>
            Portland
          </option>
          <option value="new-york" disabled>
            New York
          </option>
          <option value="san-frankfurt" disabled>
            San Frankfurt
          </option>
        </select>
        <p>To</p>
        <select name="city">
          <option value="san-francisco">San Francisco</option>
          <option value="frankfurt" disabled>
            Frankfurt
          </option>
          <option value="seattle" disabled>
            Seattle
          </option>
          <option value="portland" disabled>
            Portland
          </option>
          <option value="new-york" disabled>
            New York
          </option>
          <option value="san-frankfurt" disabled>
            San Frankfurt
          </option>
        </select>
      </section>
    </div>
  );
}

export default Locations;
