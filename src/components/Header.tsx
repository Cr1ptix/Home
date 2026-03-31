import { motion } from 'motion/react';
import { Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-mono font-bold text-xl tracking-tighter"
        >
          dev<span className="text-blue-500">.</span>portfolio
        </motion.div>
        <motion.nav 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6 text-sm font-medium text-gray-400"
        >
          <a href="#about" className="hover:text-white transition-colors hidden sm:block">About</a>
          <a href="#projects" className="hover:text-white transition-colors hidden sm:block">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors hidden sm:block">Skills</a>
          <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </motion.nav>
      </div>
    </header>
  );
}
