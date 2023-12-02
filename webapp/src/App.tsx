import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "/tailwind.svg";
import "./App.css";
import Tether from "./components/Tether";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-around">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-[6em] p-[1.5em] transition-filter ease-in-out hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.67)]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-[6em] p-[1.5em] transition-filter ease-in-out hover:drop-shadow-[0_0_2em_rgba(97,218,251,0.67)]"
            alt="React logo"
          />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img
            src={tailwindLogo}
            className="h-[6em] p-[1.5em] transition-filter ease-in-out hover:drop-shadow-[0_0_2em_rgba(64,188,252,0.67)]"
            alt="Tailwind CSS Logo"
          />
        </a>
      </div>
      <h1>Vite + React + Tailwind</h1>
      <div className="p-[2em]">
        <button className="mb-5" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Tether className="mb-5" />
      <p className="text-zinc-500">
        Click on the Vite, React, and Tailwind logos to learn more
      </p>
    </>
  );
}

export default App;
