'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
    const educations = [
        {
            degree: 'Master of Science in Information Technology',
            institution: 'Jahangirnagar University',
            period: '2023 - Appeared',
            location: 'Dhaka, Bangladesh',
            description: 'Specialized in Artificial Intelligence and Machine Learning. Conducted research on natural language processing and neural networks.'
        },
        {
            degree: 'Bachelor of Science in Information Technology',
            institution: 'University of Information Technology & Sciences',
            period: '2019 - 2023',
            location: 'Dhaka, Bangladesh',
            description: 'Completed coursework in machine learning, artificial intelligence, algorithms, software engineering, and database systems.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div id='education' className='w-full p-2 py-16'>
            <div className='max-w-[1240px] mx-auto'>
                <motion.p
                    className='text-2xl tracking-widest uppercase text-primary'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.p>
                <motion.h2
                    className='py-6 text-4xl font-bold'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    My Academic Background
                </motion.h2>
                <motion.div
                    className='grid gap-10'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {educations.map((edu, index) => (
                        <motion.div
                            key={index}
                            className='bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
                            variants={itemVariants}
                        >
                            <div className='flex flex-col md:flex-row justify-between items-start mb-6'>
                                <div>
                                    <div className='flex items-center gap-3 mb-3'>
                                        <FaGraduationCap className='text-primary text-2xl' />
                                        <h3 className='text-2xl font-bold'>{edu.degree}</h3>
                                    </div>
                                    <h4 className='text-primary text-xl font-semibold'>{edu.institution}</h4>
                                </div>
                                <div className='mt-4 md:mt-0 md:text-right'>
                                    <div className='flex items-center md:justify-end text-gray-600 dark:text-gray-400 mb-2 text-lg'>
                                        <FaRegCalendarAlt className='mr-3 text-xl' />
                                        <span>{edu.period}</span>
                                    </div>
                                    <div className='flex items-center md:justify-end text-gray-600 dark:text-gray-400 text-lg'>
                                        <FaMapMarkerAlt className='mr-3 text-xl' />
                                        <span>{edu.location}</span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-gray-600 dark:text-gray-400 text-lg'>{edu.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Education; 