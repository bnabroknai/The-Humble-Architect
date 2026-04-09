'use client';

import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModuleProps {
  id: string;
  title: string;
  icon: LucideIcon;
  ancient: {
    title: string;
    description: string;
  };
  biological: {
    title: string;
    description: string;
  };
  synthesis: string;
  index: number;
}

export default function SynthesisModule({ id, title, icon: Icon, ancient, biological, synthesis, index }: ModuleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-6 md:p-8 group hover:border-amber-500/30 transition-colors"
      id={id}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-lg bg-amber-900/20 flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/50 transition-colors">
          <Icon className="w-6 h-6 text-amber-500" />
        </div>
        <div>
          <span className="text-[10px] font-mono text-amber-500/60 uppercase tracking-[0.2em]">Module {id.split('-')[1]}</span>
          <h3 className="text-2xl font-display text-zinc-100">{title}</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-amber-500/80">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <h4 className="text-xs font-mono uppercase tracking-widest">The Ancient Blueprint</h4>
          </div>
          <h5 className="text-lg font-display text-zinc-200">{ancient.title}</h5>
          <p className="text-sm text-zinc-400 leading-relaxed">{ancient.description}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-blue-400/80">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <h4 className="text-xs font-mono uppercase tracking-widest">The Biological Reality</h4>
          </div>
          <h5 className="text-lg font-display text-zinc-200">{biological.title}</h5>
          <p className="text-sm text-zinc-400 leading-relaxed">{biological.description}</p>
        </div>
      </div>

      <div className="pt-6 border-t border-zinc-800">
        <div className="flex items-center gap-2 mb-3">
          <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">The Isomorphism (Synthesis)</h4>
        </div>
        <p className="text-zinc-300 italic leading-relaxed font-serif">
          &quot;{synthesis}&quot;
        </p>
      </div>
    </motion.div>
  );
}
