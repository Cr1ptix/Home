import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-6 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-mono mb-6 border border-blue-500/20">
            <Terminal className="w-4 h-4" />
            <span>Hello, World!</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            I build digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              experiences.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/5 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors border border-white/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
