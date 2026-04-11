import React from 'react';
import ProjectSlideshow from './ProjectSlideshow.jsx';

const ProjectCard = ({ title, category, images, details, github, demo, video, portfolio }) => {
  if (!details) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      
      <div className="lg:col-span-5 space-y-8">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          {/* CRITICAL: Passing 'images' array to slideshow */}
          <ProjectSlideshow images={images} title={title} />
        </div>
        
        <div className="flex flex-wrap gap-3 pt-4">
          {github && (
            <a href={github} target="_blank" className="bg-industrial-black text-white px-6 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-brand-orange transition-all shadow-lg">GitHub Repo</a>
          )}
          {/* Wallbug specific reintroduction */}
          {video && (
            <a href={video} target="_blank" className="bg-brand-purple text-white px-6 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-brand-orange transition-all shadow-lg">Video Demo</a>
          )}
          {demo && (
            <a href={demo} target="_blank" className="bg-slate-200 text-slate-700 px-6 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-brand-purple hover:text-white transition-all shadow-md">Live Site</a>
          )}
          {portfolio && (
            <a href={portfolio} download className="bg-slate-200 text-slate-700 px-6 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-brand-purple hover:text-white transition-all shadow-md">Documentation</a>
          )}
        </div>
      </div>

      <div className="lg:col-span-7 space-y-12">
        <header>
          <h3 className="text-4xl font-black uppercase tracking-tighter text-industrial-black leading-none">{title}</h3>
          <p className="text-order-3 text-brand-purple mb-4 font-bold">{category}</p>
        </header>

        <div className="space-y-10">
          <section className="space-y-4">
            <h4 className="text-order-1 text-brand-purple">01 // Purpose</h4>
            <p className="text-order-2">{details.what}</p>
          </section>
          <section className="space-y-4">
            <h4 className="text-order-1 text-brand-orange">02 // Outcomes</h4>
            <p className="text-order-2">{details.results}</p>
          </section>
          <section className="space-y-4">
            <h4 className="text-order-1 text-industrial-black">03 // Technical Execution</h4>
            <ul className="space-y-2">
              {details.how && details.how.map((point, i) => (
                <li key={i} className="text-order-2 flex gap-4"><span className="text-brand-orange font-bold">•</span>{point}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;