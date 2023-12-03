function Locations() {
  return (
    <div className="flex-row justify-end">
      <p className="my-1 text-left text-xs text-black text-opacity-40">
        Hello! 👋
      </p>
      <h1 className="text-left text-sm font-bold">Where do you want to go?</h1>
      <div className="flex items-baseline justify-between text-sm">
        <section className="align-center my-2 flex items-center text-sm">
          <select
            className="my-2 mr-2 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            name="city"
          >
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
        <div className=" flex items-center">
          <label htmlFor="show-route" className="block p-2">
            Show Route
          </label>
          <input
            className=""
            type="checkbox"
            id="show-route"
            name="show-route"
          />
        </div>
      </div>
    </div>
  );
}

export default Locations;
