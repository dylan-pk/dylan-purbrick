import React from 'react';

export default function ProjectCard({ title, category, specs, image, github, portfolio }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
      <div className="h-64 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
          <p className="text-white text-xs font-mono uppercase tracking-widest">{category}</p>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-black uppercase mb-4 text-industrial-black">{title}</h3>
        <ul className="flex flex-wrap gap-2 mb-8">
          {specs.map((s, i) => (
            <li key={i} className="text-[9px] font-mono uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full text-slate-500 border border-slate-200">{s}</li>
          ))}
        </ul>

        <div className="flex gap-3 mt-auto">
          {github && (
            <a href={github} target="_blank" className="flex-1 text-center bg-brand-purple text-white py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-brand-orange transition-colors">
              GitHub
            </a>
          )}
          {portfolio && (
            <a href={portfolio} download className="flex-1 text-center border-2 border-industrial-black py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-industrial-black hover:text-white transition-all">
              Portfolio
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
