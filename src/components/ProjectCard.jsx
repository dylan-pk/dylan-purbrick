import React from 'react';

/**
 * ProjectCard Component
 * Renders an industrial-styled archive card with support for images, 
 * GitHub repositories, Live Demos, and Portfolio downloads.
 */
export default function ProjectCard({ title, category, specs, image, github, demo, portfolio, video }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
      {/* Visual Thumbnail */}
      <div className="h-64 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
          <p className="text-white text-xs font-mono uppercase tracking-widest">{category}</p>
        </div>
      </div>
      
      {/* Project Details */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-xl font-black uppercase mb-4 text-industrial-black">{title}</h3>
        
        {/* Technical Specification Tags */}
        <ul className="flex flex-wrap gap-2 mb-8">
          {specs.map((s, i) => (
            <li 
              key={i} 
              className="text-[9px] font-mono uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full text-slate-500 border border-slate-200"
            >
              {s}
            </li>
          ))}
        </ul>

        {/* Action Button Grid */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          {/* Primary Action: Watch Video or View Live Demo */}
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="col-span-2 text-center bg-brand-orange text-white py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-brand-purple transition-colors mb-2"
            >
              View Live Site
            </a>
          )}

          {/* Secondary Actions: GitHub Source and Portfolio PDF */}
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-center border-2 border-slate-200 py-2 rounded-lg text-[9px] font-bold uppercase tracking-widest hover:border-brand-purple transition-colors ${!portfolio ? 'col-span-2' : ''}`}
            >
              Source Code
            </a>
          )}
          
          {portfolio && (
            <a 
              href={portfolio} 
              download 
              className={`text-center border-2 border-industrial-black py-2 rounded-lg text-[9px] font-bold uppercase tracking-widest hover:bg-industrial-black hover:text-white transition-all ${!github ? 'col-span-2' : ''}`}
            >
              Portfolio
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
