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
      <div className="grid min-h-screen grid-cols-2">
        <div className="px-16 py-14 text-left">
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

          <h1 className="text-left text-base font-semibold">
            What do you want to see? 👀
          </h1>
        </div>
        <div>
          <Mapbox />
        </div>
      </div>
    </>
  );
}

export default App;
