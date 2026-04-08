import { motion } from "framer-motion";

export default function ProjectCard({ title, category, specs, image, id }) {
  const base = '/dylan-purbrick';

  return (
    <motion.a 
      href={`${base}/projects#${id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative block h-96 w-full cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 shadow-sm transition-all hover:shadow-xl"
    >
      {/* Front Label: Industrial Slate Gradient */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange mb-2">
          {category}
        </p>
        <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-brand-orange transition-colors duration-300">
          {title}
        </h3>
      </div>
      
      {/* Visual Data: Grayscale to Color */}
      <div className="absolute inset-0 bg-slate-200">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" 
        />
      </div>

      {/* Technical Annex: Slide-up Details */}
      <div className="absolute inset-0 z-20 translate-y-full bg-slate-900 p-10 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-brand-purple"></div>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-purple italic">
            Technical Specification
          </p>
        </div>

        <ul className="space-y-4 font-mono text-[11px] uppercase tracking-wider text-slate-300">
          {specs.map((s) => (
            <li key={s} className="flex items-start gap-3">
              <span className="text-brand-orange font-bold">+</span>
              <span className="leading-relaxed">{s}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 pt-8 border-t border-white/10">
          <span className="inline-flex items-center gap-4 text-brand-orange font-black uppercase text-[10px] tracking-widest group-hover:gap-6 transition-all">
            Review Full Dossier <span>→</span>
          </span>
        </div>
      </div>
    </motion.a>
  );
}
