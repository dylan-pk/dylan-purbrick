import React, { useState, useEffect, useRef } from 'react';

export default function ProjectCarousel({ projects, base }) {
  // To create a true loop, we clone the last item and the first few items
  const clonedProjects = [
    projects[projects.length - 1], 
    ...projects, 
    projects[0], 
    projects[1]
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1 (the first real item)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle the seamless jump for the infinite loop
  useEffect(() => {
    if (currentIndex === 0) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(clonedProjects.length - 3);
      }, 500);
    } else if (currentIndex === clonedProjects.length - 2) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, clonedProjects.length]);

  const nextSlide = () => {
    if (!isTransitioning) setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const itemsToShow = isMobile ? 1 : 2;
  const translateValue = currentIndex * (100 / itemsToShow);

  return (
    <div className="relative group w-full overflow-hidden px-4 md:px-12">
      <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 border border-slate-200 p-3 rounded-full shadow-xl hover:bg-brand-orange hover:text-white transition-all opacity-0 group-hover:opacity-100"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg></button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 border border-slate-200 p-3 rounded-full shadow-xl hover:bg-brand-orange hover:text-white transition-all opacity-0 group-hover:opacity-100"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg></button>

      <div 
        className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
        style={{ transform: `translateX(-${translateValue}%)` }}
        onTransitionEnd={() => setIsTransitioning(true)}
      >
        {clonedProjects.map((project, idx) => (
          <a key={`${project.id}-${idx}`} href={`${base}/projects#${project.id}`} className="min-w-full md:min-w-[calc(50%-12px)] bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group/card flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-black uppercase text-industrial-black mb-2">{project.title}</h3>
              <p className="text-[10px] font-mono text-brand-purple uppercase tracking-widest mb-4">{project.category}</p>
              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.specs.slice(0, 2).map((s, i) => (
                  <li key={i} className="text-[9px] font-mono uppercase tracking-wider bg-slate-50 px-3 py-1 rounded-full text-slate-400 border border-slate-100">{s}</li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}