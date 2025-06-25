import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import ProfilePic from '../assets/profile.jpg';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center space-y-6 px-4 sm:px-6 lg:px-8 pt-8"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Avatar */}
      <motion.img
        variants={item}
        src={ProfilePic}
        alt="Julio Purba"
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
      />

      {/* Name & Title */}
      <motion.h1
        variants={item}
        className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-gray-800"
      >
        Julio Aldrin Purba
      </motion.h1>
      <motion.p
        variants={item}
        className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md sm:max-w-lg"
      >
        Machine Learning Engineer (Laskar AI) · Web & UI/UX Enthusiast (GDGoC USU) · Educator. Editor. Junior Programmer
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={item}
        className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
      >
        <a
          href="https://drive.google.com/file/d/11njhIo-E52CBLRHtCjkOdpN3NpYzV9Jk/view?usp=sharing"
          className="px-5 py-2 text-sm sm:text-base rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Download CV
        </a>
        <a
          href="https://wa.me/6281397870827"
          className="px-5 py-2 text-sm sm:text-base rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        variants={item}
        className="flex items-center gap-6 pt-3 text-gray-600 text-lg sm:text-xl"
      >
        <a href="https://github.com/julioaldprb" target="_blank" rel="noreferrer" className="hover:text-blue-600">
          <Github size={26} />
        </a>
        <a href="https://www.linkedin.com/in/juliopurba/" target="_blank" rel="noreferrer" className="hover:text-blue-600">
          <Linkedin size={26} />
        </a>
        <a
          href="mailto:juliopurba647@mhs.unimed.ac.id?subject=Hello%20Julio"
          className="hover:text-blue-600"
          title="Email Julio"
        >
          <Mail size={26} />
        </a>
      </motion.div>

      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[60rem] h-[60rem] rounded-full bg-blue-200/40 blur-3xl" />
      </div>
    </motion.section>
  );
}
