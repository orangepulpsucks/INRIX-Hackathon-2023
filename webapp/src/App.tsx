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
      <div className="grid min-h-screen grid-cols-2">
        <div className="px-16 py-14 text-left">
          <Tether className="mb-5" />

          <div>
            <Locations />
          </div>

          <div class="my-4 border border-slate-200"></div>
        </div>
        <div>
          <Mapbox />
        </div>
      </div>
    </>
  );
}

export default App;
