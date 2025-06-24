import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Project data
const projects = [
  {
    title: 'Sleep‑Well (AI Chaining Model)',
    description: 'End‑to‑end sleep quality predictor using multi‑stage ML pipeline (R² 0.98).',
    tech: ['Python', 'Scikit‑learn', 'Streamlit', 'Docker'],
    image: require('../assets/sleepwell.png'),
    demo: 'https://capstone-file.vercel.app/',
    repo: 'https://github.com/apriarami789/Capstone_file',
  },
  {
    title: 'Personal Finance Tracker',
    description: 'Full‑stack web app to manage personal finance.',
    tech: ['React', 'Node', 'MongoDB', 'Tailwind'],
    image: require('../assets/finance.png'),
    demo: 'https://personal-finance-tracker-two-iota.vercel.app',
    repo: 'https://github.com/julioaldprb/PersonalFinanceTracker',
  },
  {
    title: 'Save The Sea',
    description: 'A game made using Unity to teach players how to save the ocean from trash.',
    tech: ['Unity', 'C#', 'Game Design'],
    image: require('../assets/savethesea.png'),
    demo: '',
    repo: 'https://drive.google.com/file/d/1UURXhCNnTNV0LEV1xozWilDqsWe68I3G/view?usp=sharing',
  },
];

const containerVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};
const cardVar = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
const hoverCard = {
  scale: 1.05,
  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
};

export function Projects() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={containerVar}
      className="px-4 py-14 max-w-6xl mx-auto"
    >
      {/* Highlighted heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-blue-700 tracking-tight">
        Projects
      </h2>

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVar}
            whileHover={hoverCard}
            className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col transition-transform duration-300"
          >
            {/* Bigger image */}
            <img src={p.image} alt={p.title} className="h-56 w-full object-cover" />

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-gray-600 text-sm flex-1 leading-relaxed">
                {p.description}
              </p>

              {/* Tech stack chips */}
              <div className="flex flex-wrap gap-2 mt-4 text-xs">
                {p.tech.map((t) => (
                  <span key={t} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-6 text-blue-600 font-medium">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <Github size={18} /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
