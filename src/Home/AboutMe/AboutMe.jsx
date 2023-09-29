import { motion } from 'framer-motion';
import profileImage from "../../assets/profilee.jpg";

const AboutMe = () => {
    return (
        <div className="container mx-auto px-4 py-10" id='about'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={profileImage}
          alt="Profile"
          className="rounded-xl object-cover w-full lg:w-96 lg:h-96 mx-auto mb-6 filter grayscale hover:filter-none bg-gray-200"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="flex justify-center mt-6">
          <a
            href="https://www.linkedin.com/in/tayebhossain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 mr-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/toushik018"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            GitHub
          </a>
        </div>
      </motion.div>
                <div>
                    <h3 className="text-2xl font-bold mb-4 space-y-4">About Me</h3>
                    <p className="text-gray-700">
                        Hello! I'm Tayeb, a passionate MERN Stack Developer with a strong focus on creating dynamic and interactive web applications. I enjoy turning ideas into reality through code and building seamless user experiences. With a background in Computer Science and several years of professional experience, I bring a strong technical skill set to every project I work on.
                    </p>
                    <p className="text-gray-700 mt-4">
                        My approach to development is centered around clean and modular code, leveraging the latest technologies and best practices. I believe in continuous learning and always staying up-to-date with emerging trends in the industry. I thrive in collaborative environments and enjoy working in cross-functional teams to deliver innovative solutions.
                    </p>
                    <div className="mt-6">
                        <h3 className="text-2xl font-bold mb-4">Education</h3>
                        <p className="text-gray-700">
                            Bachelor of Science in Computer Science<br />
                            Khwaja Yunus Ali University, Sirajganj, Bangladesh<br />
                        </p>
                        <motion.hr
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5 }}
                            className="border-1 mt-6"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;