import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="bg-white py-10 px-6 sm:px-10 md:px-16 text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        I believe in the magic of words
      </h2>

      <p className="mb-4 text-base md:text-lg leading-relaxed">
        Words have the power to create and destroy — be it your reality or your place in this world.
      </p>

      <p className="mb-6 text-base md:text-lg leading-relaxed">
        With over 5 years of professional experience in content writing, I have helped brands grow in the digital space and gain recognition among their competitors. With the right content and marketing strategies, you could be the next big thing in your industry!
      </p>

      <a
        href="https://www.linkedin.com/in/anushasree/" // replace with actual URL
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
      >
        <LinkedInIcon />
        <span className="font-medium">Connect on LinkedIn</span>
      </a>
    </motion.section>
  );
}
