import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import logo from '../assets/cover.png';
import { Link, animateScroll as scroll } from "react-scroll";
import HireMeModal from "../Home/HireMeModal/HireMeModal";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // dark mode logic here
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <nav className="bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mx-auto w-5/6 py-6 px-4 lg:px-0">
            {/* Logo */}
            <div>
              <Link to="home" className="flex items-center gap-1 font-bold text-gray-700 cursor-pointer">
                <img src={logo} alt="" className="w-36 h-16" />
              </Link>
            </div>
            {/* Primary menu */}
            <div className="hidden lg:flex gap-8">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer text-gray-600 hover:text-black"
                activeClass="active"
                spy={true}
              >
                My Projects
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer text-gray-600 hover:text-black"
                activeClass="active"
              >
                Skills
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer text-gray-600 hover:text-black"
                activeClass="active"
              >
                About Me
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer"
                activeClass="active"
              >
                Contact
              </Link>
            </div>
            {/* Secondary menu */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <FaMoon
                    className={`h-6 w-6 ${darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    onClick={toggleDarkMode}
                  />
                  <FaSun
                    className={`h-6 w-6 ${darkMode ? "text-gray-700" : "text-gray-300"
                      }`}
                    onClick={toggleDarkMode}
                  />
                </div>
                <div>
                  <button
                    className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100"
                    onClick={openModal}
                  >
                    Hire Me
                  </button>
                </div>
              </div>
              <div className="lg:hidden">
                {!toggleMenu ? (
                  <button
                    className="text-gray-700 focus:outline-none"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >
                    <FaBars className="h-6 w-6" />
                  </button>
                ) : (
                  <button
                    className="text-gray-700 focus:outline-none"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          {toggleMenu && (
            <div className="lg:hidden bg-white">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                activeClass="active"
                onClick={() => setToggleMenu(false)}
              >
                My Projects
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                activeClass="active"
                onClick={() => setToggleMenu(false)}
              >
                Skills
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                activeClass="active"
                onClick={() => setToggleMenu(false)}
              >
                About Me
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                activeClass="active"
                onClick={() => setToggleMenu(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
      {showModal && <HireMeModal onClose={closeModal} />}
    </div>
  );
};

export default Navbar;
