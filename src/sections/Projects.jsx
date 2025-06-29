import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Hubby Hub',
    description: 'HobbyHub is a hobby-based social platform where users can discover, join, or create interest groups and events.',
    features: [
      'Browse & Join Groups',
      'Visual Showcase',
      'Countdown Timer',
      'Location-Based Organization'
    ],
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    image: 'https://i.ibb.co/TqtmjTgD/Screenshot-4.png',
    live: 'https://assignment-ten-4fa46.web.app/',
    github: 'https://github.com/minhazchy101/hobby_hub_client',
    details: '#'
  },
  {
    title: 'Project Two',
    description: 'FreshCrate is a React-based web app for subscribing to fresh, organic vegetable deliveries. Built with Firebase for authentication and hosting.',
    features: [
      'User Profile',
      'Firebase Authentication Integration',
      'Responsive Design'
    ],
    tech: ['React', 'react-router', 'Tailwind', 'Firebase'],
    image: 'https://via.placeholder.com/300x180.png?text=Project+Two',
    live: 'https://nest-crate-service-platform.web.app/',
    github: '#',
    details: '#'
  },
  {
    title: 'Flower Web',
    description: ' A simple flower shop website | | Built with HTML, CSS',
    features: [
      'Responsive design',
      'Homepage with banner and featured flowers',
      
    ],
    tech: ['HTML', 'CSS'],
    image: 'https://i.ibb.co/nq6Lhwyw/Screenshot-3.png',
    live: 'https://minhazchy101.github.io/flower-web/',
    github: 'https://github.com/minhazchy101/flower-web',
    details: '#'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-base-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-primary mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row gap-6 items-center bg-base-200 rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <motion.div
                className="flex-shrink-0 w-full lg:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={project.image} alt={project.title} className="rounded-xl w-full" />
              </motion.div>

              {/* Content */}
              <motion.div
                className="w-full lg:w-1/2 space-y-4"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-secondary">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="badge badge-outline text-sm">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-3">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm">Live</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">GitHub</a>
                  <a href={project.details} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Details</a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
