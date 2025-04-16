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
                        className="mb-10"
                    >
                        <p className='uppercase text-3xl tracking-widest text-gray-600 dark:text-gray-400 mb-8 font-semibold'>
                            LET&apos;S INNOVATE WITH AI
                        </p>
                        <h1 className='py-8 text-8xl font-bold text-gray-700 dark:text-gray-200 leading-tight'>
                            Hi, I&apos;m <span className='text-primary'>Nazmul</span>
                        </h1>
                        <h1 className='py-6 text-6xl font-bold text-gray-700 dark:text-gray-200'>Junior AI Developer</h1>
                        <p className='py-10 text-2xl text-gray-600 dark:text-gray-400 max-w-[90%] m-auto leading-relaxed'>
                            Passionate AI developer dedicated to crafting intelligent and data-driven solutions. Currently focused on building machine learning models, exploring generative AI, and creating impactful AI-powered applications. Always eager to learn and experiment with emerging technologies.
                        </p>
                    </motion.div>

                    <motion.div
                        className='flex items-center justify-between max-w-[380px] m-auto py-8'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <a
                            href='https://www.linkedin.com/in/nazmul-islam-634642276/'
                            target='_blank'
                            rel='noreferrer'
                            className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-8 cursor-pointer hover:scale-110 ease-in duration-300'
                        >
                            <FaLinkedinIn className="text-2xl" />
                        </a>
                        <a
                            href='https://github.com/Nazmul0005'
                            target='_blank'
                            rel='noreferrer'
                            className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-8 cursor-pointer hover:scale-110 ease-in duration-300'
                        >
                            <FaGithub className="text-2xl" />
                        </a>
                        <a
                            href='mailto:nazmulislam45213@gmail.com'
                            className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-8 cursor-pointer hover:scale-110 ease-in duration-300'
                        >
                            <MdEmail className="text-2xl" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="space-x-8"
                    >
                        <Link
                            href="/#about"
                            className='px-12 py-4 mt-12 text-xl bg-primary text-white rounded-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 inline-block font-semibold'
                            scroll={false}
                            replace
                        >
                            Learn More
                        </Link>
                        <Link
                            href="/#contact"
                            className='px-12 py-4 mt-12 text-xl bg-gray-700 text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 inline-block font-semibold'
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