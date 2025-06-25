import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

export default function CV() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 sm:px-6 lg:px-8 py-14 max-w-5xl mx-auto text-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-blue-700 tracking-tight">
        Curriculum Vitae
      </h2>

      {/* Responsive PDF Viewer */}
      <div className="w-full max-h-[75vh] sm:max-h-[80vh] border rounded-2xl shadow-lg overflow-hidden">
        <embed
          src="/JulioPurbaCV.pdf#toolbar=0&navpanes=0&scrollbar=0"
          type="application/pdf"
          className="w-full h-[75vh] sm:h-[80vh]"
        />
      </div>

      {/* Download Button */}
      <div className="mt-10">
        <a
          href="/JulioPurbaCV.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm sm:text-base rounded-full font-medium hover:bg-blue-700 transition"
        >
          <FileDown size={20} /> Download PDF
        </a>
      </div>
    </motion.section>
  );
}
