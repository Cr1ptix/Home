import { motion } from 'motion/react';

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js",
  "Express", "PostgreSQL", "MongoDB", "GraphQL", "Tailwind CSS",
  "Git", "Docker", "AWS", "Figma"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg font-mono text-sm text-gray-300 hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
