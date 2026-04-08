import React, { useState } from 'react';

export default function ProjectCarousel({ projects, base }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;

  // Calculates how many items to show based on window size 
  // (In a real implementation, you'd use a resize listener, but Tailwind handles the CSS)
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  return (
    <div className="relative group w-full overflow-hidden px-4 md:px-12">
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 border border-slate-200 p-3 rounded-full shadow-lg hover:bg-brand-orange hover:text-white transition-all opacity-0 group-hover:opacity-100"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 border border-slate-200 p-3 rounded-full shadow-lg hover:bg-brand-orange hover:text-white transition-all opacity-0 group-hover:opacity-100"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
      </button>

      {/* Sliding Track */}
      <div 
        className="flex transition-transform duration-500 ease-out gap-6"
        style={{ transform: `translateX(-${currentIndex * (100 / (window?.innerWidth < 768 ? 1 : 2))}%)` }}
      >
        {projects.map((project) => (
          <a 
            key={project.id}
            href={`${base}/projects#${project.id}`}
            className="min-w-full md:min-w-[calc(50%-12px)] bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group/card flex flex-col"
          >
            <div className="h-64 overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-industrial-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-industrial-black">View Project Details</span>
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-black uppercase text-industrial-black">{project.title}</h3>
                <span className="text-[9px] font-mono text-brand-purple border border-brand-purple/20 px-2 py-0.5 rounded italic">#{project.id}</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">{project.category}</p>
              
              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.specs.slice(0, 2).map((s, i) => (
                  <li key={i} className="text-[9px] font-mono uppercase tracking-wider bg-slate-50 px-3 py-1 rounded-full text-slate-400 border border-slate-100">{s}</li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center gap-2 mt-12">
        {projects.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 transition-all rounded-full ${currentIndex === i ? 'w-8 bg-brand-orange' : 'w-2 bg-slate-300'}`}
          />
        ))}
      </div>
    </div>
  );
}
