import { motion } from 'motion/react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and Stripe integration. Features real-time inventory and a custom admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#"
  },
  {
    title: "AI Writing Assistant",
    description: "An AI-powered text editor that helps writers overcome block. Uses OpenAI's GPT models to suggest continuations and improve phrasing.",
    tech: ["TypeScript", "Next.js", "OpenAI API", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "A high-performance dashboard for visualizing large datasets in real-time. Built with WebSockets and WebGL for smooth rendering.",
    tech: ["Vue.js", "D3.js", "WebSockets", "Express"],
    github: "#",
    live: "#"
  },
  {
    title: "Developer CLI Tool",
    description: "A command-line interface for scaffolding new projects with sensible defaults and automated CI/CD setup.",
    tech: ["Rust", "CLI", "GitHub Actions"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111] border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="w-10 h-10 text-blue-400" />
                <div className="flex gap-3 text-gray-400">
                  <a href={project.github} className="hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-3 font-mono text-xs text-gray-500">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
