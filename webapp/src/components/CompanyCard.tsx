import "flowbite";
import React, { useEffect, useState } from "react";

interface CCProps {
  id: string;
  name: string;
  stars: number;
  desc: string;
  img: string;
  url: string;
  expanded: boolean;
}

function CompanyCard({ id, name, stars, desc, img, expanded, url }: CCProps) {
  let path = `./public/images/yelp-stars/regular_${stars}.png`;
  return (
    <div
      id={`accordion-collapse-${id}`}
      data-accordion="collapse"
      className="mb-4"
    >
      <h2 id={`accordion-collapse-heading-${id}`}>
        <button
          type="button"
          className="font-base flex w-full items-center justify-between gap-3 rounded-t-xl border  border-gray-200 p-3 text-gray-500  focus:ring-gray-200 rtl:text-right dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
          data-accordion-target={`#accordion-collapse-body-${id}`}
          aria-expanded={expanded}
          aria-controls={`accordion-collapse-body-${id}`}
        >
          <p className="px-2">{name}</p>
          <div className="flex items-center ">
            <img className="px-2" src={path}></img>
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
        id={`accordion-collapse-body-${id}`}
        className="hidden"
        aria-labelledby={`accordion-collapse-heading-${id}`}
      >
        <div className="mt-2 rounded-lg border border-gray-200 p-5 dark:border-gray-700 dark:bg-gray-900">
          <div className="flex w-full">
            <p className="mb-2 w-3/5 pr-6  text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              orci massa, tempor vel lorem sed, condimentum hendrerit odio. In
              suscipit at ante nec pharetra. Aliquam in elit ipsum. Vivamus
              vitae.
            </p>
            <img src={img} className="h-auto w-2/5 rounded-lg" />
          </div>
          <div className="my-4 border border-slate-200"></div>
          <div className="flex items-baseline justify-between">
            <button className="inline-flex w-fit justify-center gap-x-1.5 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Add
            </button>
            <p className="text-gray-500 dark:text-gray-400">
              <a target="_blank" href={url}>
                External Link 🔗
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
