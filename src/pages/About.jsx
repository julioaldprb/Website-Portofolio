// File: src/pages/About.jsx
import React, { useState } from 'react';
import { GraduationCap, Briefcase, X } from 'lucide-react';
import { motion } from 'framer-motion';

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
const itemVariant = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};
const cardHover = {
  scale: 1.05,
  boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
};

const timeline = [
  {
    year: 'Aug 2021 – Present',
    icon: GraduationCap,
    title: 'S.Pd. Informatics & Computer Tech Education',
    subtitle: 'Universitas Negeri Medan',
    details: 'GPA 3.93 · Active in research on IoT sign‑language gloves & multiple student orgs.',
  },
  {
    year: 'Aug 2023 – Dec 2023',
    icon: Briefcase,
    title: 'Teacher Assistant Intern',
    subtitle: 'Kampus Merdeka',
    details: 'Led class activities & decorated classrooms under the Kampus Merdeka program.',
  },
  {
    year: 'Jan 2024 – Mar 2024',
    icon: Briefcase,
    title: 'Video Editor Intern',
    subtitle: 'Tribun Group',
    details: 'Edited & animated news segments using Canva and Premiere‑style workflows.',
  },
  {
    year: 'Aug 2024 – Dec 2024',
    icon: Briefcase,
    title: 'Teacher Assistant Intern',
    subtitle: 'SMKN 1 Percut Sei Tuan',
    details: 'Assisted ICT teaching, managed extracurriculars, and supported curriculum design.',
  },
  {
    year: 'Jan 2025 – Present',
    icon: Briefcase,
    title: 'UI/UX & Web Developer Intern',
    subtitle: 'Google Developer Group USU',
    details: 'Ran UI/UX workshops and built React/Next.js projects.',
  },
  {
    year: 'Feb 2025 – Present',
    icon: Briefcase,
    title: 'Machine Learning Engineer (Seasonal)',
    subtitle: 'Laskar AI',
    details: 'Developed Sleep‑Well ML pipeline, NLP solutions, and mentored peers.',
  },
];

const certificates = [
  { src: require('../assets/Sertifikat Short Movie 1st Runner Up.jpg'), alt: '1st Runner Up Short Movie' },
  { src: require('../assets/Sertifikat LIDM 2024 - Julio Aldrin Purba.jpg'), alt: 'Finalist LIDM 2024' },
  { src: require('../assets/Sertifikat UI_UX Julio Aldrin Purba.jpg'), alt: 'UI/UX Certificate' },
  { src: require('../assets/Sertifikat KM 6.jpg'), alt: 'Kampus Mengajar Batch 6' },
  { src: require('../assets/Sertifikat KM 6(2).jpg'), alt: 'Transkrip Nilai Kampus Mengajar Batch 6' },
  { src: require('../assets/SERTIFIKAT TRIBUN - JULIO.jpeg'), alt: 'Tribun Certificate' },
  { src: require('../assets/Sertifikat Nilai TRIBUN - JULIO.jpeg'), alt: 'Tribun Score Certificate' },
  { src: require('../assets/Web_Certificate_Julio Aldrin Purba.jpg'), alt: 'Web Developer Certificate' },
  { src: require('../assets/Sertifikat Kompre Julio Purba.jpg'), alt: 'UNIMED Comprehensive Certificate' },
  { src: require('../assets/Transkrip Laskar Sementara.jpg'), alt: 'Laskar AI Transcript' },
  { src: require('../assets/Samsung Stage 1.jpg'), alt: 'Samsung Stage 1 Certificate' },
];

export default function About() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariant}
      transition={{ duration: 0.5 }}
      className="pt-20 space-y-8 px-4 sm:px-6 lg:px-8"
    >
      <motion.section variants={sectionVariant} transition={{ delay: 0.2 }}>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-blue-700 tracking-tight">
          About Me
        </h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          I’m a multidisciplinary professional combining education, design, development, and media production. 
          With experience as a teacher assistant in both Kampus Mengajar and SMKN 1 Percut Sei Tuan, I thrive in collaborative environments. 
          I’ve crafted intuitive UI/UX and web solutions with GDGoC USU, and built end-to-end AI/ML pipelines at Laskar AI. 
          My video editing work for Tribun Group sharpened my storytelling and attention to detail. I love solving real-world challenges, 
          mentoring peers, and continuously expanding my skill set.
        </p>
      </motion.section>

      <motion.section variants={sectionVariant} transition={{ delay: 0.35 }}>
        <h3 className="text-2xl font-semibold mb-4">Timeline & Experience</h3>
        <div className="border-l-2 border-blue-200 ml-4">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative pl-8 mb-5"
              variants={itemVariant}
              transition={{ delay: 0.4 + idx * 0.1 }}
            >
              <item.icon className="absolute -left-5 top-1 text-blue-500 w-6 h-6" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">{item.title}</h4>
                <span className="text-sm md:text-base font-medium text-blue-600 mt-1 md:mt-0">{item.year}</span>
              </div>
              <p className="text-gray-500 italic text-sm sm:text-base mb-0.5">{item.subtitle}</p>
              <p className="text-gray-700 text-sm sm:text-base md:text-base">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={sectionVariant} transition={{ delay: 0.55 }}>
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {[ 'Python','Machine Learning','NLP','React','Docker','Streamlit','Data Analysis','MLOps','UI/UX','Video Editing','Web Development','Git','Canva','Figma','Next.js','HTML/CSS', ].map((skill, i) => (
            <motion.span
              key={skill}
              variants={itemVariant}
              transition={{ delay: 0.55 + i * 0.04 }}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm text-center"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <motion.section variants={sectionVariant} transition={{ delay: 0.75 }}>
        <h3 className="text-2xl font-semibold mb-4">Certificates & Honors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
              whileHover={cardHover}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCert(cert)}
              variants={itemVariant}
              transition={{ delay: 0.75 + idx * 0.05 }}
            >
              <img src={cert.src} alt={cert.alt} className="w-full h-48 object-cover" />
              <p className="p-2 text-center text-sm font-medium truncate px-4">{cert.alt}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {selectedCert && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            className="relative p-2 sm:p-4 max-w-screen-md w-full"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
          >
            <X className="absolute top-2 right-2 text-white w-6 h-6 cursor-pointer" onClick={() => setSelectedCert(null)} />
            <img src={selectedCert.src} alt={selectedCert.alt} className="max-w-full max-h-screen rounded-lg shadow-xl" />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
