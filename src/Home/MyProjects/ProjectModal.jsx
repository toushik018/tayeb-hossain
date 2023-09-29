import { motion } from "framer-motion";
import { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  const handleModalClose = () => {
    onClose();
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed z-10 inset-0 flex bg-filter bg-slate-500 bg-opacity-50 items-center justify-center overflow-x-hidden"
    >
      <div className="bg-gray-100 dark:bg-dark-modal rounded-xl p-6 lg:w-4/5 mx-auto shadow-xl overflow-y-scroll max-h-full">
        <div className="flex justify-between items-center">
          <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
            {project.title}
          </h1>
          <button
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 absolute top-2 right-2 lg:top-48 lg:right-52"
            onClick={handleModalClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="my-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={project.title}
                className="w-full rounded-lg"
              />
            ))}
          </div>
        </div>
        <p className="text-content font-light">{project.description}</p>
        <div className="flex flex-wrap items-center mt-4">
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
        <div className="text-content font-light mt-4">
          <h3 className="text-lg font-semibold">Details:</h3>
          <p>{project.details}</p>
        </div>
        <div className="flex justify-end mt-5">
          <a
            href={project.previewLink}
            target="_blank"
            rel="noreferrer noopener"
            className="underline pl-2 font-light dark:text-white"
          >
            Live Preview
          </a>

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
    </motion.div>
  );
};

export default ProjectModal;