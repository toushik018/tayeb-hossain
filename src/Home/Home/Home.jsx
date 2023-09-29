import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import bannerImg from '../../assets/profile2.png';
import MyProjects from '../MyProjects/MyProjects';
import Skills from '../../Pages/Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import resume from '../../../public/files/Tayeb-Resume.pdf';
const Home = () => {
  const handleDownloadResume = () => {
    window.open(resume, '_blank');
  };

  return (
    <>

      <div className='mb-24 pt-10' id='home' >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center p-10 py-10 lg:flex lg:justify-center lg:items-center mb-16"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end">
            <div className="lg:mr-24 lg:text-start">
              <h2 className="text-4xl md:text-5xl py-2 text-gray-600 font-medium dark:text-white">
                Md Tayeb
              </h2>
              <h3 className="text-2xl py-2 dark:text-white text-gray-600 md:text-3xl">
                Building the Future with React.
              </h3>
              <p className="text-lg md:text-xl py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl">
                I'm a Junior React Developer who loves creating engaging websites. I'm always eager to learn and use my skills to build meaningful solutions
              </p>
              <div className="flex items-center lg:justify-start justify-center mt-8 lg:mt-0">
                <button
                  className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 duration-200 text-gray-100 px-4 py-2 rounded-md text-sm focus:outline-none"
                  onClick={handleDownloadResume}
                >
                  <FaDownload />
                  Download Resume
                </button>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-t from-gray-200 shadow-inner rounded-full w-80 h-80 md:h-96 md:w-96 mt-20 lg:mt-0 relative overflow-hidden"
            >
              <motion.img
                src={bannerImg}
                alt="bannerImg"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
      <MyProjects></MyProjects>
      <Skills></Skills>
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
    </>
  );
};

export default Home;
