'use client';

import { motion } from 'motion/react';
import { 
  Zap, 
  Waves, 
  Wind, 
  Layers, 
  Cpu, 
  Activity, 
  BookOpen, 
  ChevronDown,
  Brain,
  Dna,
  Network,
  Stethoscope
} from 'lucide-react';
import SynthesisModule from '@/components/SynthesisModule';
import ArchitectChat from '@/components/ArchitectChat';

const modules = [
  {
    id: 'module-01',
    title: 'The Space Between',
    icon: Layers,
    ancient: {
      title: 'Tzimtzum',
      description: 'The divine contraction where the Infinite withdrew its light to create a "vacant space" (Chalal) in which creation could exist.'
    },
    biological: {
      title: 'The Interstitium',
      description: 'A contiguous, fluid-filled network of macroscopic "spaces" within the connective tissue, previously dismissed as "filler."'
    },
    synthesis: 'Creation requires a void. The Interstitium is the biological "vacant space"—the fluidic medium that allows for cellular signaling and shock absorption. It is the necessary gap that makes the structural whole functional.'
  },
  {
    id: 'module-02',
    title: 'The Filter of Light',
    icon: Cpu,
    ancient: {
      title: 'Yesod (The Foundation)',
      description: 'The filter that "steps down" the blinding intensity of the Ein Sof (Infinite Light) so the physical vessel is not incinerated by the influx.'
    },
    biological: {
      title: 'The Reticular Activating System (RAS)',
      description: 'The neural gateway in the brainstem that filters 11 million bits of sensory data per second down to roughly 40-50 bits.'
    },
    synthesis: 'Presence is defined by what we ignore. The RAS is the biological Yesod; it protects the conscious mind from the "shattering" of information overload, curating reality into a digestible stream.'
  },
  {
    id: 'module-03',
    title: 'The Triple Reactor',
    icon: Activity,
    ancient: {
      title: 'The Three Mothers',
      description: 'Shin (Fire), Aleph (Air), and Mem (Water)—the elemental foundations of the world.'
    },
    biological: {
      title: 'The Three Great Cavities',
      description: 'The Cranial (Electrical/Fire), the Thoracic (Pneumatic/Air), and the Abdominal (Fluidic/Water).'
    },
    synthesis: 'The body is a thermodynamic engine. The Cranial cavity burns with 20W of neural electricity (Fire); the Thoracic mediates pressure and rhythm (Air); the Abdominal processes the fluidic "ocean" of nutrients (Water).'
  },
  {
    id: 'module-04',
    title: 'The Epigenetic Seal',
    icon: Dna,
    ancient: {
      title: 'Shem HaMephorash',
      description: 'The 72-part Name of God—the hidden, mathematical code that sustains the structure of the universe.'
    },
    biological: {
      title: 'The Nucleosome',
      description: 'The structural unit of DNA consisting of 64 triplet codons (the software) wrapped around 8 Histone proteins (the hardware).'
    },
    synthesis: 'The architectural code is 64 + 8 = 72. The Histone octamer serves as the epigenetic "switches" that allow the 64-codon code to manifest. The "Name" is the physical mechanism of gene expression.'
  },
  {
    id: 'module-05',
    title: 'The 12-Path Interface',
    icon: Network,
    ancient: {
      title: 'The 12 Simple Letters',
      description: 'Paths within the Sefer Yetzirah that govern the primary sensory and motor experiences of human existence.'
    },
    biological: {
      title: 'Cranial Nerves I-XII',
      description: 'The 12 pairs of nerves emerging directly from the brain, bypassing the spinal cord to interface with the world.'
    },
    synthesis: 'The "paths" are the Cranial Nerves. CN I (Olfactory) links smell directly to thought; CN XII (Hypoglossal) mediates speech; CN X (Vagus) acts as the "Brake of Grace," modulating anger with parasympathetic peace.'
  },
  {
    id: 'module-06',
    title: 'The 7 Gates',
    icon: Brain,
    ancient: {
      title: 'The 7 Double Letters',
      description: 'Letters with dual sounds representing states of existence (Life/Death, Peace/War, Wisdom/Folly).'
    },
    biological: {
      title: 'The Primary Endocrine Glands',
      description: 'The seven hubs of the hormonal system: Pineal, Pituitary, Thyroid, Thymus, Pancreas, Adrenals, and Gonads.'
    },
    synthesis: 'Each "gate" governs a state of being. The Pineal mediates the "light" of sleep; the Thymus is the architect of immunity (Life); the Adrenals dictate the binary of Peace or War through cortisol and adrenaline.'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/20 border border-amber-500/30 text-amber-500 text-[10px] font-mono uppercase tracking-widest mb-4">
            <Zap className="w-3 h-3" />
            Structural Synthesis Engine
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-zinc-100 leading-tight">
            The Humbled <span className="text-amber-500">Architect</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            A bridge between Lurianic Kabbalah and modern neuro-anatomy. 
            Mapping the geometry of the soul to the architecture of the biological vessel.
          </p>
          
          <div className="pt-10 flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('synthesis-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-500 transition-all shadow-lg mystic-glow"
            >
              Explore the Synthesis
            </button>
            <button 
              onClick={() => document.getElementById('ledger')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-zinc-900 text-zinc-300 rounded-full font-medium border border-zinc-800 hover:bg-zinc-800 transition-all"
            >
              View Architect&apos;s Ledger
            </button>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-zinc-900">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Brain className="w-64 h-64" />
          </div>
          <h2 className="text-3xl font-display mb-8 text-amber-500">Module 00: The Humbled Architect</h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
              We stand before a cathedral of flesh and bone, often blinded by the arrogance of the present. We speak of &quot;discoveries&quot; as if the human vessel were a new land, yet as we peel back the layers of the dermis and the dendrite, we find the ink of ancient cartographers already drying on the bedrock.
            </p>
            <p>
              Chronological arrogance suggests that those who lived three millennia ago were simple; that their &quot;mysticism&quot; was merely a lack of microscopes. But as an architect, I look at the blueprints they left behind—the Sefer Yetzirah and the Zohar—and I see not myths, but biological schematics.
            </p>
            <p>
              They were not imagining a spirit world; they were documenting the underlying geometry of the biological interface. We are not discovering the soul; we are finally learning how to read the maps our ancestors drafted in the dark.
            </p>
          </div>
        </div>
      </section>

      {/* Synthesis Grid */}
      <section id="synthesis-grid" className="max-w-6xl mx-auto px-6 py-24 space-y-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display mb-4">The Structural Isomorphisms</h2>
          <p className="text-zinc-500">Mapping the Sefirot and Elemental Mothers to Physiological Systems</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {modules.map((mod, i) => (
            <SynthesisModule key={mod.id} {...mod} index={i} />
          ))}
        </div>
      </section>

      {/* Architect's Ledger */}
      <section id="ledger" className="max-w-4xl mx-auto px-6 py-24">
        <div className="glass-card p-8 md:p-12 border-amber-900/20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-amber-500" />
            <h2 className="text-3xl font-display">The Architect&apos;s Ledger</h2>
          </div>
          <p className="text-zinc-400 mb-10 italic">
            Primary Sources &amp; Verification Data for the geometry of our shared temple.
          </p>
          
          <div className="grid gap-6">
            {[
              { title: 'The Interstitium', source: 'Benias et al. (2018), "Structure and Distribution of an Unrecognized Interstitium in Human Tissues," Scientific Reports.' },
              { title: 'The Esoteric Structure', source: 'Aryeh Kaplan (1997), Sefer Yetzirah: The Book of Creation.' },
              { title: 'The 11 Million Bit Filter', source: 'Timothy D. Wilson (2002), Strangers to Ourselves: Discovering the Adaptive Unconscious.' },
              { title: 'The Brain\'s Energy Budget (Fire)', source: 'Raichle &amp; Gusnard (2002), "Appraising the brain\'s energy budget," PNAS.' },
              { title: 'The Histone Octamer (64+8)', source: 'Alberts et al., Molecular Biology of the Cell, "The Structure of DNA and Chromosomes."' },
              { title: 'The Vagus Brake (CN X)', source: 'Stephen Porges (2011), The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, and Self-regulation.' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-zinc-950/50 border border-zinc-800 flex gap-4 items-start">
                <div className="mt-1">
                  <Stethoscope className="w-4 h-4 text-amber-500/50" />
                </div>
                <div>
                  <h4 className="text-zinc-200 font-medium mb-1">{item.title}</h4>
                  <p className="text-xs text-zinc-500 font-mono">{item.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <ArchitectChat />

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 text-sm font-mono uppercase tracking-widest">
          Drafted in the Dark • Manifested in the Light
        </p>
      </footer>
    </main>
  );
}
