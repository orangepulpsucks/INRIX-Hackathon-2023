import "flowbite";

function CompanyCard() {
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 rounded-t-xl border border-b-0 border-gray-200 p-3 font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rtl:text-right dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <p className="px-2">Resturant</p>
          <div className="flex items-center ">
            <p className="px-4">⭐⭐⭐⭐⭐</p>
            <svg
              data-accordion-icon
              className="h-3 w-3 shrink-0 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </div>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className="hidden"
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="border border-b-0 border-gray-200 p-5 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            orci massa, tempor vel lorem sed, condimentum hendrerit odio. In
            suscipit at ante nec pharetra. Aliquam in elit ipsum. Vivamus vitae.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            <a
              href="https://www.yelp.com/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            ></a>
            <button>Add</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
