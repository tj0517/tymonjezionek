"use client";
import { useState } from "react";

export default function OpinnieSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { title: "Pierwszy slajd" },
    { title: "Drugi slajd" },
    { title: "Trzeci slajd" },
  ];

  const next = () => setCurrentIndex((i) => (i + 1) % slides.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="w-full mx-auto mt-20 flex flex-col items-center">
      {/* Główny kontener flexowy */}
      <div className="w-full flex flex-row items-center justify-between">
        {/* Strzałka lewa — tylko od md */}
        <button
          onClick={prev}
          className="hidden lg:flex border-white border-4 font-bold text-white hover:border-blue-400 hover:text-blue-400 w-14 h-14 rounded-full items-center justify-center text-3xl z-20 transition-all">
          ‹
        </button>

        {/* Kontener slajdu */}
        <div className="flex-1 mx-0 sm:mx-10 lg:mx-20 xl:mx-30 aspect-video bg-stone-800 rounded-3xl overflow-hidden flex items-center justify-center relative">
          <div className="absolute bottom-6 bg-black/60 text-white px-4 py-2 rounded-xl text-lg backdrop-blur-sm">
            {slides[currentIndex].title}
          </div>
        </div>

        {/* Strzałka prawa — tylko od md */}
        <button
          onClick={next}
          className="hidden lg:flex border-white border-4 font-bold text-white hover:border-blue-400 hover:text-blue-400 w-14 h-14 rounded-full items-center justify-center text-3xl z-20 transition-all">
          ›
        </button>
      </div>

      {/* Kropki — widoczne zawsze */}
      <div className="mt-6 flex lg:hidden gap-3 justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-blue-400 scale-125"
                : "bg-white/50 hover:bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
