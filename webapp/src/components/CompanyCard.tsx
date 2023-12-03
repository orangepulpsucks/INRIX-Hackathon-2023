import "flowbite";

interface CCProps {
  added: boolean;
  id: number;
}

function CompanyCard() {
  return (
    <div id="accordion-collapse" data-accordion="collapse" class="mb-4">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="font-base flex w-full items-center justify-between gap-3 rounded-t-xl border  border-gray-200 p-3 text-gray-500  focus:ring-gray-200 rtl:text-right dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
          data-accordion-target= '#accordion-collapse-body-${id}`
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <p className="px-2">Resturant</p>
          <div className="flex items-center ">
            <p className="px-4">⭐⭐⭐⭐⭐</p>
            <svg
              data-accordion-icon
              className="mr-2 h-3 w-3 shrink-0 rotate-180"
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
        <div className="mt-2 rounded-lg border border-gray-200 p-5 dark:border-gray-700 dark:bg-gray-900">
          <div className="flex w-full">
            <p className="mb-2 w-3/5 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              orci massa, tempor vel lorem sed, condimentum hendrerit odio. In
              suscipit at ante nec pharetra. Aliquam in elit ipsum. Vivamus
              vitae.
            </p>
            <img
              src="https://picsum.photos/200/300"
              class="h-auto w-2/5 rounded-lg"
            />
          </div>
          <div className="my-4 border border-slate-200"></div>
          <div className="flex items-baseline justify-between">
            <button class="inline-flex w-fit justify-center gap-x-1.5 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Add
            </button>
            <p className="text-gray-500 dark:text-gray-400">
              <a href="https://www.yelp.com/">External Link 🔗</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
