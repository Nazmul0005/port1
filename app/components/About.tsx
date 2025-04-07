'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <motion.div
                    className='col-span-2'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className='uppercase text-xl tracking-widest text-primary'>
                        About
                    </p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600 dark:text-gray-400'>
                        I am a passionate software engineer with a strong focus on web development
                        and cloud technologies. With several years of experience in the industry,
                        I've developed a deep understanding of software architecture, design patterns,
                        and best practices.
                    </p>
                    <p className='py-2 text-gray-600 dark:text-gray-400'>
                        I started my coding journey building simple websites and quickly advanced
                        to developing complex web applications. I enjoy solving challenging problems
                        and creating efficient, scalable solutions. My approach is detail-oriented,
                        with a focus on writing clean, maintainable code.
                    </p>
                    <p className='py-2 text-gray-600 dark:text-gray-400'>
                        When I'm not coding, you'll find me exploring new technologies, reading
                        technical blogs, or contributing to open-source projects. I'm constantly
                        learning and looking for ways to improve my skills and stay updated with
                        the latest industry trends.
                    </p>
                    <a href="#projects">
                        <p className='py-2 text-gray-600 dark:text-gray-400 underline cursor-pointer'>
                            Check out some of my latest projects.
                        </p>
                    </a>
                </motion.div>
                <motion.div
                    className='w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className='relative w-full h-[300px]'>
                        {/* Replace with your profile image or a suitable placeholder */}
                        <Image
                            src='/profile.jpg'
                            alt='Profile'
                            layout='fill'
                            className='rounded-xl'
                            objectFit='cover'
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About; 