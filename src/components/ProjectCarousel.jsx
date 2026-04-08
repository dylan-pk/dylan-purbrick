import React, { useState, useEffect, useRef } from 'react';

export default function ProjectCarousel({ projects, base }) {
  // To ensure smoothness in a 2-column view, we wrap the original array with buffers
  const clones = [
    ...projects.slice(-2), // Clone last 2 to the front
    ...projects,
    ...projects.slice(0, 2) // Clone first 2 to the back
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Start at original index 0
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [allowTransition, setAllowTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const move = (direction) => {
    if (isTransitioning) return; // Mechanical lock
    setIsTransitioning(true);
    setAllowTransition(true);
    setCurrentIndex((prev) => prev + direction);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // If we've hit the clones at the end, jump back to the original index instantly
    if (currentIndex >= clones.length - 2) {
      setAllowTransition(false);
      setCurrentIndex(2);
    } else if (currentIndex <= 1) {
      setAllowTransition(false);
      setCurrentIndex(clones.length - 3);
    }
  };

  const itemsToShow = isMobile ? 1 : 2;
  const translateValue = currentIndex * (100 / itemsToShow);

  return (
    <div className="relative group w-full overflow-hidden px-4 md:px-12">
      <button onClick={() => move(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/95 border border-slate-200 p-3 rounded-full shadow-2xl hover:bg-brand-orange hover:text-white transition-all"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg></button>
      <button onClick={() => move(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/95 border border-slate-200 p-3 rounded-full shadow-2xl hover:bg-brand-orange hover:text-white transition-all"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg></button>

      <div 
        className={`flex gap-6 ${allowTransition ? 'transition-transform duration-500 cubic-bezier(0.45, 0, 0.55, 1)' : ''}`}
        style={{ transform: `translateX(-${translateValue}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {clones.map((project, idx) => (
          <a key={`${project.id}-${idx}`} href={`${base}/projects#${project.id}`} className="min-w-full md:min-w-[calc(50%-12px)] bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group/card flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-black uppercase text-industrial-black mb-2">{project.title}</h3>
              <p className="text-[10px] font-mono text-brand-purple uppercase tracking-widest mb-4">{project.category}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}