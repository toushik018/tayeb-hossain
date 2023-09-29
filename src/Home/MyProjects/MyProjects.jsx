import { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "../../data/ProjectData.json";
import { FaRegEye } from "react-icons/fa";
import ProjectModal from "../MyProjects/ProjectModal";


const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="mx-auto w-full px-2 lg:px-0 md:w-4/5 lg:w-4/5" id="projects">
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2 }}
          className="border-1 border-black mt-24 mb-20"
        />
        <h2 className="text-3xl font-bold mb-14 text-center text-gray-700 mt-10 uppercase">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((project, index) => (
            <motion.article
              key={index}
              className="rounded-xl overflow-hidden  border border-1 hover:border hover:border-black duration-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={project.images[0]} alt={project.title} loading="lazy" />
              <div className="dark:bg-dark-card p-4">
                <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
                  {project.title}
                </h1>
                <p className="text-content pt-4 font-light">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex flex-wrap items-center">
                    <span className="text-sm font-medium mr-2">Technologies:</span>
                    {project.technologies.map((technology, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm font-semibold mr-2 mb-2"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div>
                    <motion.button
                      className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100"
                      onClick={() => openModal(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaRegEye />
                    </motion.button>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-5">
                  <div className="flex items-center">
                    <svg
                      className="stroke-dark-heading dark:stroke-white inline-block min-w-fit"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Path content */}
                    </svg>
                    <a
                      href={project.previewLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline pl-2 font-light dark:text-white"
                    >
                      Live Preview
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="dark:fill-light-heading fill-dark-heading inline-block min-w-fit"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Path content */}
                    </svg>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline pl-2 font-light dark:text-white"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </>
  );
};

export default MyProjects;
