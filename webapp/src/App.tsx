import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "/tailwind.svg";
import "./App.css";
import Tether from "./components/Tether";
import "mapbox-gl/dist/mapbox-gl.css";
import Locations from "./components/Locations";
import Mapbox from "./components/Mapbox";
import RangeCalendar from "./components/RangeCalendar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="flex h-screen w-screen overflow-hidden">
        <div className="no-scrollbar w-5/12 overflow-y-auto overflow-y-auto px-16 py-14 text-left">
          <Tether className="mb-5" />

          <div>
            <Locations />
          </div>

          <div className="my-4 border border-slate-200"></div>

          <h1 className="text-left text-base font-semibold">Pick a date 📅</h1>

          <div className="flex justify-between">
            <RangeCalendar />

            <WeatherCard />
          </div>

          <div className="my-4 border border-slate-200"></div>

          <div className="mb-4 flex items-baseline justify-between">
            <h1 className="text-left text-base font-semibold">
              What's the plan? 👀
            </h1>

            <button className="m-0 border-0 border-transparent bg-transparent p-0 text-right text-sm font-bold uppercase  text-slate-400">
              + add a location
            </button>
          </div>

          <div class="container my-4 h-20 w-full rounded-lg border bg-slate-200"></div>
          <div class="container my-4 h-20 w-full rounded-lg border bg-slate-200"></div>
          <div class="container my-4 h-20 w-full rounded-lg border bg-slate-200"></div>
          <div class="container my-4 h-20 w-full rounded-lg border bg-slate-200"></div>
          <div class="container my-4 h-20 w-full rounded-lg border bg-slate-200"></div>
          <div class="container my-4 h-20 w-full rounded-lg border bg-slate-200"></div>
          <div class="container my-4 h-20 w-full rounded-lg border bg-slate-200"></div>
          <div class="container my-4 h-20 w-full rounded-lg border bg-slate-200"></div>
        </div>
        <div className="relative w-7/12">
          <Mapbox />
        </div>
      </div>
    </>
  );
}

export default App;
