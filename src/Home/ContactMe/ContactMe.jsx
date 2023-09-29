import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import animationData from '../../assets/84584-contact-us.json';
import { BsSendFill } from "react-icons/bs";
import Footer from '../Footer/Footer';
const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can access the form data using the 'name', 'email', and 'message' state variables
    };





    return (
        <>
            <div className="lg:flex lg:w-4/5 mx-auto mt-20 justify-between items-center" id='contact'>
                <div className="lg:w-2/5 lg:hidden block">
                    <Lottie animationData={animationData} loop={true} />
                </div>
                <div className="lg:w-2/4 w-full">
                    <motion.hr
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                        className="lg:border-1 mb-10 sm:hidden hidden lg:block"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-gray-600 lg:text-start text-center">Contact Me</h3>
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-xl m-4 text-left"
                    >

                        <div className="">
                            <input
                                className="w-full px-5 py-2 border rounded-md text-md"
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
                                className="w-full px-5 py-2 border rounded-md text-md"
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
                                className="w-full px-5 py-2 border rounded-md text-md"
                                id="message"
                                name="message"
                                cols="14"
                                rows="6"
                                aria-label="Details"
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="mt-6 pb-4">
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-gray-600 hover:bg-gray-700 duration-200 rounded-md flex jus items-center gap-2"
                                aria-label="Send Request"
                            >
                                Send   <BsSendFill />
                            </button>

                        </div>
                    </motion.form>
                </div>
                <div className="lg:w-2/5 hidden lg:block">
                    <Lottie animationData={animationData} loop={true} />
                </div>
            </div>

            
        </>
    );
};

export default ContactMe;
