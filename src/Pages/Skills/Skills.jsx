import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import { skillsData } from '../Skills/SkillsData';
import { skillsImage } from '../Skills/SkillsImages';
import '../../Pages/Skills/Skills.css';

const Skills = () => {
  const skillBoxStyle = {
    // Add your custom style for skill boxes if needed
  };

  const marqueeVariants = {
    initial: { x: '100%' },
    animate: { x: 0 },
  };

  return (
    <div className="mx-auto mt-10"  id="skills">
      <div className="skills">
        <div className="skillsHeader">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-700 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>
        </div>
        <div className="skillsContainer">
          <div className="skill--scroll">
            <motion.div
              variants={marqueeVariants}
              initial="initial"
              animate="animate"
              className="marquee-container"
            >
              <Marquee
                gradient={false}
                speed={100}
                pauseOnHover={false}
                pauseOnClick={true}
                delay={0}
                direction="right"
              >
                {skillsData.map((skill, id) => (
                  <motion.div
                    key={id}
                    className="skill--box"
                    style={skillBoxStyle}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.07 }}
                  >
                    <img src={skillsImage(skill)} alt={skill} />
                    <h3>{skill}</h3>
                  </motion.div>
                ))}
              </Marquee>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
