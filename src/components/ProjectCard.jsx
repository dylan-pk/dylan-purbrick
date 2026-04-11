import React from 'react';
import ProjectSlideshow from './ProjectSlideshow.jsx';

const ProjectCard = ({ title, category, images, details, github, demo, video, portfolio, base }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      
      {/* LEFT COLUMN: Visual Sub-Assembly */}
      <div className="lg:col-span-7 space-y-8">
        {/* The slideshow component handles the image array and navigation logic */}
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <ProjectSlideshow images={images} />
        </div>
        
        {/* TECHNICAL DOCUMENTATION LINKS */}
        <div className="flex flex-wrap gap-4 pt-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-order-1 text-slate-400 hover:text-brand-orange transition-colors">
              GitHub // Repo
            </a>
          )}
          {portfolio && (
            <a href={portfolio} download className="text-order-1 text-slate-400 hover:text-brand-orange transition-colors">
              Documentation // PDF
            </a>
          )}
          {video && (
            <a href={video} target="_blank" rel="noopener noreferrer" className="text-order-1 text-slate-400 hover:text-brand-orange transition-colors">
              Demonstration // Video
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-order-1 text-slate-400 hover:text-brand-orange transition-colors">
              Live Demo // External
            </a>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Technical Specifications */}
      <div className="lg:col-span-5 space-y-12">
        <header>
          {/* Order 3: Technical Metadata */}
          <p className="text-order-3 text-brand-purple mb-4">{category}</p>
          <h3 className="text-4xl font-black uppercase tracking-tighter text-industrial-black leading-none">
            {title}
          </h3>
        </header>

        <div className="space-y-10">
          {/* 01 // PURPOSE (Purple Tier) */}
          <section className="space-y-4">
            <h4 className="text-order-1 text-brand-purple">01 // Purpose</h4>
            <p className="text-order-2">{details.what}</p>
          </section>

          {/* 02 // OUTCOMES (Orange Tier) */}
          <section className="space-y-4">
            <h4 className="text-order-1 text-brand-orange">02 // Outcomes</h4>
            <p className="text-order-2">{details.results}</p>
          </section>

          {/* 03 // TECHNICAL EXECUTION (Industrial Black Tier) */}
          <section className="space-y-4">
            <h4 className="text-order-1 text-industrial-black">03 // Technical Execution</h4>
            <ul className="space-y-2">
              {details.how.map((point, i) => (
                <li key={i} className="text-order-2 flex gap-4">
                  <span className="text-brand-orange font-bold">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;