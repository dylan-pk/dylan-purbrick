import React, { useState, useEffect, useCallback } from 'react';

export default function ProjectCarousel({ projects, base }) {
  // Triple-buffering logic to ensure the infinite jump is invisible 
  const clones = [
    ...projects.slice(-2), 
    ...projects, 
    ...projects.slice(0, 2)
  ];
  
  const [currentIndex, setCurrentIndex] = useState(2); 
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [useAnimation, setUseAnimation] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const move = (direction) => {
    if (isTransitioning) return; 
    setIsTransitioning(true);
    setUseAnimation(true);
    setCurrentIndex(prev => prev + direction);
  };

  const onTransitionEnd = () => {
    setIsTransitioning(false);
    
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
    <div className="relative group w-full">
      
      {/* THE VIEWPORT: px-12/20 creates the gutters where arrows will live */}
      <div className="overflow-hidden px-12 md:px-20 py-10">
        <div 
          className={`flex ${useAnimation ? 'transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)' : 'transition-none'}`}
          style={{ transform: `translateX(-${translateValue}%)` }}
          onTransitionEnd={onTransitionEnd}
        >
          {clones.map((project, idx) => (
            <div key={`${project.id}-${idx}`} className="min-w-full md:min-w-[50%] px-3">
              <a href={`${base}/projects#${project.id}`} className="block bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group/card h-full">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-industrial-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white px-6 py-2 rounded-full text-order-1 text-industrial-black">Analyze Build</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black uppercase text-industrial-black mb-2">{project.title}</h3>
                  <p className="text-order-3 text-brand-purple">{project.category}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION CONTROLS: Positioned in the gutters created by the padding above */}
      <button 
        onClick={() => move(-1)} 
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/95 border border-slate-200 p-3 md:p-4 rounded-full shadow-xl hover:bg-brand-orange hover:text-white transition-all active:scale-90"
        aria-label="Previous Project"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <button 
        onClick={() => move(1)} 
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/95 border border-slate-200 p-3 md:p-4 rounded-full shadow-xl hover:bg-brand-orange hover:text-white transition-all active:scale-90"
        aria-label="Next Project"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

    </div>
  );
}