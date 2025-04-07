'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            company: 'Tech Innovators Inc.',
            position: 'Senior Software Engineer',
            period: 'Jan 2022 - Present',
            location: 'San Francisco, CA',
            description: [
                'Led the development of a high-traffic e-commerce platform, improving performance by 40%',
                'Implemented microservices architecture using Node.js and Docker',
                'Mentored junior developers and conducted code reviews',
                'Collaborated with product managers to define technical requirements'
            ]
        },
        {
            company: 'Digital Solutions LLC',
            position: 'Full Stack Developer',
            period: 'Mar 2020 - Dec 2021',
            location: 'New York, NY',
            description: [
                'Developed responsive web applications using React and Express',
                'Implemented CI/CD pipelines using GitHub Actions',
                'Optimized database queries, resulting in 30% faster load times',
                'Participated in agile development processes and sprint planning'
            ]
        },
        {
            company: 'Web Creators Co.',
            position: 'Frontend Developer',
            period: 'Jun 2018 - Feb 2020',
            location: 'Boston, MA',
            description: [
                'Created UI components using React and styled-components',
                'Implemented state management with Redux',
                'Collaborated with designers to ensure pixel-perfect implementation',
                'Integrated third-party APIs and services into web applications'
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
        <div id='experience' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <motion.p
                    className='text-xl tracking-widest uppercase text-primary'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.p>
                <motion.h2
                    className='py-4'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Where I&apos;ve Worked
                </motion.h2>
                <motion.div
                    className='grid gap-8'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
                            variants={itemVariants}
                        >
                            <div className='flex flex-col md:flex-row justify-between mb-4'>
                                <div>
                                    <h3 className='text-xl font-bold'>{exp.position}</h3>
                                    <h4 className='text-primary font-semibold'>{exp.company}</h4>
                                </div>
                                <div className='mt-2 md:mt-0 md:text-right'>
                                    <div className='flex items-center md:justify-end text-gray-600 dark:text-gray-400 mb-1'>
                                        <FaRegCalendarAlt className='mr-2' />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className='flex items-center md:justify-end text-gray-600 dark:text-gray-400'>
                                        <FaMapMarkerAlt className='mr-2' />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>
                            <ul className='ml-6 list-disc text-gray-600 dark:text-gray-400'>
                                {exp.description.map((item, itemIndex) => (
                                    <li key={itemIndex} className='mb-1'>{item}</li>
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