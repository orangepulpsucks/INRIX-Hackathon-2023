function Locations() {
  return (
    <div className="flex-row justify-end">
      <p className="my-2 text-left text-sm text-slate-400">Hello! 👋</p>
      <h1 className="text-left text-base font-semibold">
        Where do you want to go? 📍
      </h1>
      <div className="flex items-baseline justify-between text-sm">
        <section className="align-center my-4 flex items-center text-base">
          <div>
            <button
              type="button"
              class="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              San Francisco
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <p className="mx-4 text-xs font-bold uppercase text-gray-300">to</p>

          <div>
            <button
              type="button"
              className="pointer-events-none inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 "
              id="menu-button"
            >
              San Francisco
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </section>
        <div className=" flex items-baseline">
          <label
            htmlFor="show-route"
            className="block p-2 font-bold uppercase text-slate-400"
          >
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
