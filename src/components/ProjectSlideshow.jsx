import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function ProjectSlideshow({ images, title }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

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
    if (e) { e.preventDefault(); e.stopPropagation(); }
    setCurrent((prev) => (prev + dir + images.length) % images.length);
    startTimer();
  };

  return (
    <div className="relative px-12 group/slideshow">
      <div className="relative overflow-hidden rounded-xl aspect-square w-full bg-zinc-900 touch-pan-y">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} view ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <div key={idx} className={`h-1 rounded-full transition-all ${idx === current ? 'w-6 bg-brand-orange' : 'w-2 bg-white/50'}`} />
          ))}
        </div>
      </div>

      <button onClick={(e) => move(-1, e)} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-brand-orange transition-colors">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button onClick={(e) => move(1, e)} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-brand-orange transition-colors">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
}