'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            company: 'SM Technology.',
            position: 'Junior AI Developer',
            period: 'Mar 2025 - Present',
            location: 'Banasree, Dhaka, Bangladesh',
            description: [
                'Design, develop, and deploy AI models and solutions.',
                'Preprocess and analyze data for training and evaluating AI models.',
                'Optimize and Fine-tune AI models for enhanced accuracy and performance.',
                'Apply cutting-edge AI techniques, including: Machine Learning, NLP, LLMs, Generative AI & Deep Learning.'
            ]
        },
        {
            company: 'Department of IT, University of Information Technology & Sciences',
            position: 'Research Assistant',
            period: 'Oct 2023 - Oct 2024',
            location: 'Vatara, Dhaka-1212, Bangladesh',
            description: [
                'Conducted literature reviews, contributing to a peer-reviewed publication.',
                'Analyzed data for a Federated Learning-based intrusion detection system.',
                'Collaborated with supervisor on project meetings, manuscript prep, and presentations.',
                'Optimized system performance with cross-functional teams.',
                'Achievement: Research paper publication in Q1 journal (MDPI)'
            ]
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
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div id='experience' className='w-full p-2 py-16'>
            <div className='max-w-[1240px] mx-auto'>
                <motion.p
                    className='text-2xl tracking-widest uppercase text-primary'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.p>
                <motion.h2
                    className='py-6 text-4xl font-bold'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Where I&apos;ve Worked
                </motion.h2>
                <motion.div
                    className='grid gap-10'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className='bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
                            variants={itemVariants}
                        >
                            <div className='flex flex-col md:flex-row justify-between mb-6'>
                                <div>
                                    <h3 className='text-2xl font-bold mb-2'>{exp.position}</h3>
                                    <h4 className='text-primary text-xl font-semibold'>{exp.company}</h4>
                                </div>
                                <div className='mt-4 md:mt-0 md:text-right'>
                                    <div className='flex items-center md:justify-end text-gray-600 dark:text-gray-400 mb-2 text-lg'>
                                        <FaRegCalendarAlt className='mr-3 text-xl' />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className='flex items-center md:justify-end text-gray-600 dark:text-gray-400 text-lg'>
                                        <FaMapMarkerAlt className='mr-3 text-xl' />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>
                            <ul className='ml-8 list-disc text-gray-600 dark:text-gray-400 text-lg space-y-2'>
                                {exp.description.map((item, itemIndex) => (
                                    <li key={itemIndex} className='mb-2'>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Experience; 