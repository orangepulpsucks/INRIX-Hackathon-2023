import Markdown from "react-markdown";
import { useState, useEffect, useRef } from "react";
import { getRandomValues } from "crypto";

const markdown = "# Hi, *Pluto*!";

export const GenerateItinerary = () => {
  const [startGeneration, setStartGeneration] = useState(false);
  const [generatedText, setGeneratedText] = useState(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!startGeneration) return;
    const generate = async () => {
      const response = await fetch("/api/ai/generate");
      const body = await response.json();
      if (spanRef.current) {
        spanRef.current.innerHTML = body["message"];
        setGeneratedText(body["message"]);
      }
    };

    generate();
  }, [startGeneration]);

  return (
    <div>
      <button
        type="button"
        className="mb-10 mt-5 inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-sky-200 hover:bg-blue-600"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setStartGeneration(true)}
      >
        {!startGeneration && !generatedText
          ? "Generate Itinerary"
          : startGeneration && generatedText
            ? "Generate Itinerary"
            : "Loading..."}
      </button>
      <span ref={spanRef} />
      {/* <Markdown>{markdown}</Markdown>; */}
    </div>
  );
};
