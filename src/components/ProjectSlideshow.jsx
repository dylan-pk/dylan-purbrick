import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function ProjectSlideshow({ images, title }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  // Function to start or restart the auto-rotation timer
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  }, [images.length]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const move = (dir, e) => {
    if (e) e.preventDefault();
    // Manual Override: Move the slide and restart the timer countdown
    setCurrent((prev) => (prev + dir + images.length) % images.length);
    startTimer();
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 aspect-square w-full shadow-sm group/slideshow bg-zinc-900">
      {/* Images */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} view ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Manual Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/slideshow:opacity-100 transition-opacity z-10">
        <button 
          onClick={(e) => move(-1, e)} 
          className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-brand-orange hover:text-white transition-all transform hover:scale-110"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button 
          onClick={(e) => move(1, e)} 
          className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-brand-orange hover:text-white transition-all transform hover:scale-110"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1 rounded-full transition-all ${
              idx === current ? 'w-6 bg-brand-orange' : 'w-2 bg-white/50'
            }`} 
          />
        ))}
      </div>
    </div>
  );
}