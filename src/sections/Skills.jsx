import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase,
  SiGit, SiGithub, SiVite
} from 'react-icons/si';

const SkillItem = ({ icon, name }) => (
  <motion.div
    className="flex items-center gap-3 text-gray-700 hover:text-secondary transition-all"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    {icon}
    <span>{name}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-base-200 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-primary mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technologies I use to bring ideas to life
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <motion.div
            className="bg-base-100 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-secondary mb-4">Frontend</h3>
            <div className="space-y-3 text-left">
              <SkillItem icon={<SiHtml5 className="text-orange-500" />} name="HTML5" />
              <SkillItem icon={<SiCss3 className="text-blue-600" />} name="CSS3" />
              <SkillItem icon={<SiTailwindcss className="text-cyan-500" />} name="Tailwind CSS" />
              <SkillItem icon={<SiJavascript className="text-yellow-400" />} name="JavaScript (ES6+)" />
              <SkillItem icon={<SiReact className="text-blue-400" />} name="React.js" />
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="bg-base-100 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-secondary mb-4">Backend</h3>
            <div className="space-y-3 text-left">
              <SkillItem icon={<SiNodedotjs className="text-green-600" />} name="Node.js" />
              <SkillItem icon={<SiExpress className="text-gray-700" />} name="Express.js" />
              <SkillItem icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
              <SkillItem icon={<SiFirebase className="text-yellow-500" />} name="Firebase Auth" />
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="bg-base-100 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-secondary mb-4">Tools & Workflow</h3>
            <div className="space-y-3 text-left">
              <SkillItem icon={<SiGit className="text-red-500" />} name="Git" />
              <SkillItem icon={<SiGithub className="text-black" />} name="GitHub" />
              <SkillItem icon={<SiVite className="text-purple-500" />} name="Vite" />
              <SkillItem icon={<SiFirebase className="text-yellow-400" />} name="Firebase Hosting" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
