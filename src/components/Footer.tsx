import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="flex gap-6 mb-6 text-gray-500">
          <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
        </div>
        <p className="text-sm text-gray-600 font-mono">
          Designed & Built by Developer
        </p>
      </div>
    </footer>
  );
}
