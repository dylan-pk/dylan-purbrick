import React, { useState, useEffect, useRef } from 'react';

export default function ProjectCarousel({ projects, base }) {
  // Triple-buffering the clones for a truly seamless loop
  const clones = [...projects.slice(-2), ...projects, ...projects.slice(0, 2)];
  
  const [currentIndex, setCurrentIndex] = useState(2); // Start at the first real project
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [useAnimation, setUseAnimation] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const transitionTimeout = useRef(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const move = (direction) => {
    if (isTransitioning) return; // Prevent rapid-fire clicking stutter
    setIsTransitioning(true);
    setUseAnimation(true);
    setCurrentIndex(prev => prev + direction);
  };

  const onTransitionEnd = () => {
    setIsTransitioning(false);
    
    // Check if we need to jump instantly back to the original index
    if (currentIndex <= 1) {
      setUseAnimation(false);
      setCurrentIndex(clones.length - 3);
    } else if (currentIndex >= clones.length - 2) {
      setUseAnimation(false);
      setCurrentIndex(2);
    }
  };

  const itemsToShow = isMobile ? 1 : 2;
  const translateValue = currentIndex * (100 / itemsToShow);

  return (
    <div className="relative group w-full overflow-hidden px-4 md:px-12 py-10">
      {/* Navigation Controls */}
      <button onClick={() => move(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/95 border border-slate-200 p-4 rounded-full shadow-2xl hover:bg-brand-orange hover:text-white transition-all active:scale-90"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg></button>
      <button onClick={() => move(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/95 border border-slate-200 p-4 rounded-full shadow-2xl hover:bg-brand-orange hover:text-white transition-all active:scale-90"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg></button>

      <div 
        className={`flex gap-6 ${useAnimation ? 'transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)' : 'transition-none'}`}
        style={{ transform: `translateX(-${translateValue}%)` }}
        onTransitionEnd={onTransitionEnd}
      >
        {clones.map((project, idx) => (
          <a key={`${project.id}-${idx}`} href={`${base}/projects#${project.id}`} className="min-w-full md:min-w-[calc(50%-12px)] bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group/card">
            <div className="h-64 overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-black uppercase text-industrial-black mb-2">{project.title}</h3>
              <p className="text-[10px] font-mono text-brand-purple uppercase tracking-[0.3em]">{project.category}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}