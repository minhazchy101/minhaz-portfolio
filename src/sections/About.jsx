import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-base-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-base-content text-lg leading-relaxed"
        >
          <p>
            I'm <span className="text-secondary font-medium">Minhaz</span> from <span className="text-secondary font-medium">Sylhet, Bangladesh</span> — a passionate learner who enjoys building websites that live on the internet.
            My curiosity about how code works led me to learn <span className="text-primary font-medium">HTML</span> and <span className="text-primary font-medium">CSS</span>, which opened the door to the exciting world of web development.
          </p>

          <p>
            I initially enjoyed styling pages, but diving into <span className="text-primary font-medium">JavaScript</span> and its core concepts challenged me. Those challenges pushed me to grow stronger, stay focused, and build problem-solving skills that now shape my development journey.
          </p>

          <p>
            Beyond the screen, I enjoy <span className="text-secondary font-medium">reading books</span> and <span className="text-secondary font-medium">traveling</span>. Whether diving into novels or exploring new places, these activities help me recharge and stay connected with loved ones.
          </p>

          <p>
            Today, I'm spending my time between <span className="text-primary font-medium">code lines and book pages</span>. From a book lover to a code learner — I'm truly enjoying this journey, by the grace of Allah.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
