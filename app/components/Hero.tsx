'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Hero = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400'>
                            LET&apos;S BUILD SOMETHING TOGETHER
                        </p>
                        <h1 className='py-4 text-gray-700 dark:text-gray-200'>
                            Hi, I&apos;m <span className='text-primary'>Nazmul</span>
                        </h1>
                        <h1 className='py-2 text-gray-700 dark:text-gray-200'>Software Engineer</h1>
                        <p className='py-4 text-gray-600 dark:text-gray-400 max-w-[70%] m-auto'>
                            Passionate software engineer specializing in building exceptional
                            digital experiences. Currently, I'm focused on building responsive
                            web applications while learning new technologies.
                        </p>
                    </motion.div>

                    <motion.div
                        className='flex items-center justify-between max-w-[330px] m-auto py-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <a
                            href='https://www.linkedin.com/in/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a
                            href='https://github.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>
                        <a href='mailto:nazmul@example.com'>
                            <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <MdEmail />
                            </div>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <a href="#about">
                            <button className='px-8 py-2 mt-10 mr-8 hover:scale-105 ease-in duration-300'>
                                Learn More
                            </button>
                        </a>
                        <a href="#contact">
                            <button className='px-8 py-2 mt-10 hover:scale-105 ease-in duration-300'>
                                Contact Me
                            </button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero; 