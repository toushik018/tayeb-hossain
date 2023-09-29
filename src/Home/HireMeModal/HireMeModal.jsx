import { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const HireMeModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form data using the 'name', 'email', and 'message' state variables
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-30 bg-filter bg-slate-500 bg-opacity-50 flex justify-center items-center"
    >
      <div className="max-w-md mx-5 xl:max-w-2xl lg:max-w-2xl md:max-w-xl w-full bg-gray-300 dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
        <div className="flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
          <h5 className="text-gray-800 dark:text-primary-light text-xl">
            Let's Work Together
          </h5>
          <button
            onClick={onClose}
            className="px-4 font-bold text-primary-dark dark:text-primary-light"
          >
            <FiX className="text-3xl text-white" />
          </button>
        </div>
        <div className="modal-body p-5 w-full h-full">
          <form onSubmit={handleSubmit} className="max-w-xl m-4 text-left">
            <div className="">
              <input
                className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                aria-label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <input
                className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                id="email"
                name="email"
                type="text"
                required
                placeholder="Email"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <textarea
                className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                id="message"
                name="message"
                cols="14"
                rows="6"
                aria-label="Details"
                placeholder="Project description"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="mt-6 pb-4 sm:pb-1">
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                aria-label="Submit Request"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
        <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border-t text-right">
          <button
            onClick={onClose}
            type="button"
            className="px-4 sm:px-6 py-2 text-white bg-red-500 hover:bg-red-600 dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
            aria-label="Close Modal"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HireMeModal;
