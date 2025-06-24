// File: src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4 sm:px-6 lg:px-8 py-14 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center text-blue-700">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Contact Info */}
        <div className="space-y-6 text-base sm:text-lg">
          <p className="text-gray-700">
            I'm open to opportunities, collaborations, or just a friendly chat. Feel free to reach out!
          </p>

          <div className="space-y-4 text-gray-800">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <a href="mailto:juliopurba647@mhs.unimed.ac.id" className="hover:underline">
                juliopurba647@mhs.unimed.ac.id
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="text-blue-600" />
              <a
                href="https://www.linkedin.com/in/julio-purba-6761ab171/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/julio-purba
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="text-blue-600" />
              <a
                href="https://github.com/julioaldprb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/julioaldprb
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form (optional) */}
        <form
          action="https://formspree.io/f/mvgrvpjw"
          method="POST"
          className="space-y-4 bg-white shadow-md rounded-2xl p-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
