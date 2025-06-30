import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <section id="home" className="bg-base-200 min-h-screen flex items-center py-12">
      <div className="container mx-auto px-4 md:max-w-7xl">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Text Section */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-medium text-gray-600 mb-2">
              Assalamu Alaikum, I'm
            </p>

            <h1 className="text-5xl font-bold text-primary">
              Minhaz Chowdhury
            </h1>

            <h2 className="text-2xl font-semibold text-secondary mt-2">
              Full Stack Web Developer
            </h2>

            <p className="py-6 text-gray-700 leading-relaxed">
              I build modern, responsive web applications focused on performance and user experience. I enjoy turning ideas into polished, functional solutions and take pride in writing scalable, maintainable code.
            </p>

            <a
              href="#"
              // href="/Minhaz_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Download Resume
              </motion.button>
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="https://i.ibb.co/RptXfyXj/portfolio.jpg"
              alt="Minhaz Chowdhury"
              className="rounded-full shadow-2xl max-w-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
