import React from 'react';
import ProjectSlideshow from './ProjectSlideshow';

export default function ProjectCard({ title, category, images, github, demo, video, portfolio, details }) {
  return (
    <div className="group flex flex-col lg:flex-row gap-12 items-stretch">
      {/* Visual Side: Auto-rotating Slideshow */}
      <div className="w-full lg:w-1/3 flex flex-col">
      // cropping layer
        <div className="aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-800 shadow-lg">
          <ProjectSlideshow images={images} title={title} />
        </div>
      </div>

      {/* Content Side */}
      <div className="flex-1 space-y-8 py-4">
        <header className="flex flex-col xl:flex-row justify-between items-start gap-6">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-industrial-black mb-2">{title}</h2>
            <p className="text-brand-purple font-mono text-[10px] uppercase tracking-widest font-bold">{category}</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {github && (
              <a href={github} target="_blank" className="flex items-center gap-2 px-3 py-1.5 bg-brand-purple text-white rounded text-[9px] font-black uppercase tracking-widest hover:bg-brand-orange transition-all">
                GitHub
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" className="flex items-center gap-2 px-3 py-1.5 border-2 border-brand-purple text-brand-purple rounded text-[9px] font-black uppercase tracking-widest hover:bg-brand-purple hover:text-white transition-all">
                Webpage
              </a>
            )}
            {video && (
              <a href={video} target="_blank" className="flex items-center gap-2 px-3 py-1.5 border-2 border-brand-orange text-brand-orange rounded text-[9px] font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all">
                Video Portfolio
              </a>
            )}
            {portfolio && (
              <a 
                href={portfolio} 
                download 
                className="flex items-center gap-2 px-4 py-2 border-2 border-industrial-black text-industrial-black rounded-md text-[10px] font-black uppercase tracking-widest hover:bg-industrial-black hover:text-white transition-all"
              >
                {/* Download Icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z"/>
                </svg>
                
                Download Portfolio
              </a>
            )}
          </div>
        </header>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="space-y-4">
            <h3 className="text-brand-purple font-black uppercase text-[10px] tracking-widest border-b border-brand-purple/20 pb-2">01 // Purpose</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{details.what}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-brand-orange font-black uppercase text-[10px] tracking-widest border-b border-brand-orange/20 pb-2">02 // Outcomes</h3>
            <p className="text-sm text-slate-700 font-bold leading-relaxed">{details.results}</p>
          </div>

          <div className="md:col-span-2 space-y-4 bg-slate-50 p-8 rounded-xl border border-slate-100">
            <h3 className="text-industrial-black font-black uppercase text-[10px] tracking-widest mb-6">03 // Technical Execution</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              {details.how.map((step, i) => (
                <li key={i} className="flex gap-4 text-xs text-slate-500 leading-relaxed">
                  <span className="text-brand-orange font-bold italic">{String(i + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}