import { motion } from "framer-motion";

export default function ProjectCard({ title, category, specs, image, id }) {
  return (
    <motion.a 
      href={`/dylan-purbrick/projects#${id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative block h-96 w-full cursor-pointer overflow-hidden rounded-sm border border-gray-200 bg-white"
    >
      {/* Front Label */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 bg-gradient-to-t from-industrial-black/80 to-transparent">
        <p className="font-mono text-[10px] uppercase tracking-widest text-brand-purple">{category}</p>
        <h3 className="text-2xl font-black uppercase text-white group-hover:text-brand-orange transition-colors">{title}</h3>
      </div>
      
      {/* Image Placeholder */}
      <div className="absolute inset-0 bg-gray-200">
        <img src={image} alt={title} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
      </div>

      {/* Slide-up Details */}
      <div className="absolute inset-0 z-20 translate-y-full bg-industrial-black p-8 transition-transform duration-500 group-hover:translate-y-0">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-brand-purple">// Technical Core</p>
        <ul className="space-y-2 font-mono text-xs text-white/70">
          {specs.map((s) => (
            <li key={s} className="flex items-start gap-2">
              <span className="text-brand-purple">+</span> {s}
            </li>
          ))}
        </ul>
        <span className="mt-8 block border-b-2 border-brand-orange text-[10px] font-bold uppercase tracking-widest text-brand-orange w-fit">
          View Detailed Project →
        </span>
      </div>
    </motion.a>
  );
}