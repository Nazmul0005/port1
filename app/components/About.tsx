'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTrophy, FaGraduationCap, FaBook } from 'react-icons/fa';

const About = () => {
    const achievements = [
        {
            icon: <FaGraduationCap className="text-primary text-2xl" />,
            title: "IELTS Academic",
            score: "6.5",
            description: "Overall Band Score"
        },
        {
            icon: <FaBook className="text-primary text-2xl" />,
            title: "Research Publication",
            score: "Q1 Journal",
            description: "MDPI Journal Publication"
        }
    ];

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
                    <p className='uppercase text-3xl tracking-widest text-primary font-semibold mb-4'>
                        About
                    </p>
                    <h2 className='py-6 text-6xl font-bold mb-8'>Who I Am</h2>
                    <p className='py-4 text-xl text-gray-600 dark:text-gray-400 leading-relaxed'>
                        I am a passionate AI developer with a solid background in machine learning research and digital innovation. Currently working at SM Technology in Banasree, Dhaka, I design, develop, and deploy AI models and solutions using cutting-edge technologies such as NLP, generative AI, and deep learning.
                    </p>
                    <p className='py-4 text-xl text-gray-600 dark:text-gray-400 leading-relaxed'>
                        My journey began in web development, and I quickly evolved into building intelligent, data-driven applications that solve complex real-world challenges. I approach every project with a detail-oriented mindset, ensuring my code is clean, scalable, and maintainable according to industry best practices.
                    </p>
                    <p className='py-4 text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
                        When I'm not immersed in code, you can find me exploring the latest trends in AI, reading technical blogs, or contributing to open-source projects—always eager to learn and grow in this rapidly evolving field.
                    </p>

                    {/* Achievements Section */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 rounded-xl p-6 flex items-center gap-6 hover:scale-105 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="bg-primary/10 p-4 rounded-full">
                                    {achievement.icon}
                                </div>
                                <div>
                                    <h3 className="text-white text-2xl font-semibold mb-2">{achievement.title}</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="text-primary font-bold text-2xl">{achievement.score}</span>
                                        <span className="text-gray-400 text-lg">{achievement.description}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <a href="#projects">
                        <p className='py-4 text-xl text-gray-600 dark:text-gray-400 underline cursor-pointer hover:text-primary transition-colors'>
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
                    <div className='relative w-full aspect-[3/4] max-h-[500px]'>
                        <Image
                            src='/mypic2.jpg'
                            alt='Nazmul Profile Picture'
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className='rounded-xl object-cover object-center'
                            quality={100}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About; 