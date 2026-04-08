import React from 'react';

export default function ProjectCard({ title, category, image, github, demo, portfolio, details }) {
  return (
    <div className="group flex flex-col lg:flex-row gap-12 items-stretch">
      {/* Visual Side */}
      <div className="w-full lg:w-1/3 flex flex-col">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 aspect-square lg:aspect-auto lg:h-full shadow-sm">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/60 to-transparent p-8 flex flex-col justify-end">
             <p className="text-white/70 font-mono text-[9px] uppercase tracking-widest mb-1">Classification</p>
             <p className="text-white font-black uppercase text-sm">{category}</p>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="flex-1 space-y-8 py-4">
        <header className="flex justify-between items-start gap-4">
          <h2 className="text-3xl font-black uppercase tracking-tight text-industrial-black">{title}</h2>
          <div className="flex gap-2">
            {github && <a href={github} target="_blank" className="p-2 bg-slate-100 rounded-md hover:bg-brand-purple hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/></svg></a>}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {/* WHAT SECTION */}
          <div className="space-y-4">
            <h3 className="text-brand-purple font-black uppercase text-[10px] tracking-widest border-b border-brand-purple/20 pb-2">01 // Purpose</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{details.what}</p>
          </div>

          {/* RESULTS SECTION */}
          <div className="space-y-4">
            <h3 className="text-brand-orange font-black uppercase text-[10px] tracking-widest border-b border-brand-orange/20 pb-2">02 // Outcomes</h3>
            <p className="text-sm text-slate-700 font-bold leading-relaxed">{details.results}</p>
          </div>

          {/* HOW SECTION - Full width spanning 2 columns */}
          <div className="md:col-span-2 space-y-4 bg-slate-50 p-8 rounded-xl border border-slate-100">
            <h3 className="text-industrial-black font-black uppercase text-[10px] tracking-widest mb-6">03 // Technical Execution</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              {details.how.map((step, i) => (
                <li key={i} className="flex gap-4 text-xs text-slate-500 leading-relaxed">
                  <span className="text-brand-orange font-bold">{String(i + 1).padStart(2, '0')}</span>
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