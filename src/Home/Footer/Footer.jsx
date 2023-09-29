import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-gray-800 mb-2">Contact</h4>
            <div className="flex justify-center mt-6">
          <a
            href="https://www.linkedin.com/in/tayebhossain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 mr-4"
          >
            <FaLinkedin size={30}/>
          </a>
          <a
            href="https://github.com/toushik018"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
           <FaGithubSquare size={30}/>
          </a>
        </div>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 justify-center md:justify-end">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 cursor-pointer hover:text-gray-800"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 cursor-pointer hover:text-gray-800"
                >
                  My Projects
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 cursor-pointer hover:text-gray-800"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 cursor-pointer hover:text-gray-800"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-4 pt-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Tayeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
