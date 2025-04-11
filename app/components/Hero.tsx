'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

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
                            LET&apos;S Innovate with AI
                        </p>
                        <h1 className='py-4 text-gray-700 dark:text-gray-200'>
                            Hi, I&apos;m <span className='text-primary'>Nazmul</span>
                        </h1>
                        <h1 className='py-2 text-gray-700 dark:text-gray-200'>Junior AI Developer</h1>
                        <p className='py-4 text-gray-600 dark:text-gray-400 max-w-[70%] m-auto'>
                            Passionate AI developer dedicated to crafting intelligent and data-driven solutions. Currently focused on building machine learning models, exploring generative AI, and creating impactful AI-powered applications. Always eager to learn and experiment with emerging technologies.
                        </p>
                    </motion.div>

                    <motion.div
                        className='flex items-center justify-between max-w-[330px] m-auto py-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <a
                            href='https://www.linkedin.com/in/nazmul-islam-634642276/'
                            target='_blank'
                            rel='noreferrer'
                            className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href='https://github.com/Nazmul0005'
                            target='_blank'
                            rel='noreferrer'
                            className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                        >
                            <FaGithub />
                        </a>
                        <a
                            href='mailto:nazmulislam45213@gmail.com'
                            className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                        >
                            <MdEmail />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="space-x-4"
                    >
                        <Link
                            href="/#about"
                            className='px-8 py-2 mt-10 bg-primary text-white rounded-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 inline-block'
                            scroll={false}
                            replace
                        >
                            Learn More
                        </Link>
                        <Link
                            href="/#contact"
                            className='px-8 py-2 mt-10 bg-gray-700 text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 inline-block'
                            scroll={false}
                            replace
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero; 