import React from 'react';
import ProjectSlideshow from './ProjectSlideshow';

export default function ProjectCard({ title, category, images, github, demo, video, portfolio, details }) {
  return (
    <div className="group flex flex-col lg:flex-row gap-12 items-stretch">
      <div className="w-full lg:w-1/3 flex flex-col">
        <ProjectSlideshow images={images} title={title} />
      </div>

      <div className="flex-1 space-y-8 py-4">
        <header className="flex flex-col sm:flex-row justify-between items-start gap-6">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-industrial-black mb-2">{title}</h2>
            <p className="text-brand-purple font-mono text-[10px] uppercase tracking-widest">{category}</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {/* GitHub Button */}
            {github && (
              <a href={github} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-brand-purple text-white rounded-md text-[10px] font-black uppercase tracking-widest hover:bg-brand-orange transition-all shadow-md">
                GitHub
              </a>
            )}

            {/* View Project Webpage (Live Demo) */}
            {demo && (
              <a href={demo} target="_blank" className="flex items-center gap-2 px-4 py-2 border-2 border-brand-purple text-brand-purple rounded-md text-[10px] font-black uppercase tracking-widest hover:bg-brand-purple hover:text-white transition-all">
                View Project Webpage
              </a>
            )}

            {/* View Video Portfolio (LinkedIn/Video) */}
            {video && (
              <a href={video} target="_blank" className="flex items-center gap-2 px-4 py-2 border-2 border-brand-orange text-brand-orange rounded-md text-[10px] font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all">
                View Video Portfolio
              </a>
            )}
            
            {/* Download Portfolio (PDF) */}
            {portfolio && (
              <a href={portfolio} download className="flex items-center gap-2 px-4 py-2 border-2 border-industrial-black text-industrial-black rounded-md text-[10px] font-black uppercase tracking-widest hover:bg-industrial-black hover:text-white transition-all">
                Download Portfolio
              </a>
            )}
          </div>
        </header>

        {/* What/How/Results Grid remains the same... */}
      </div>
    </div>
  );
}