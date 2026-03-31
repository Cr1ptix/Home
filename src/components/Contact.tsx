import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
