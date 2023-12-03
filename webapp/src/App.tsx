import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "/tailwind.svg";
import "./App.css";
import Tether from "./components/Tether";
import "mapbox-gl/dist/mapbox-gl.css";
import Locations from "./components/Locations";
import Mapbox from "./components/Mapbox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="grid min-h-screen grid-cols-2">
        <div class="p-5 text-left">
          <Tether className="mb-5" />
          <p className="text-zinc-500">
            Click on the Vite, React, and Tailwind logos to learn more
          </p>

          <div>
            <Locations />
          </div>
        </div>

        <div class="bg-slate-100"></div>
      </div>

      <div>
        <Mapbox />
      </div>
    </>
  );
}

export default App;
