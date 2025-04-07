'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', imgSrc: '/skills/javascript.png' },
        { name: 'TypeScript', imgSrc: '/skills/typescript.png' },
        { name: 'React', imgSrc: '/skills/react.png' },
        { name: 'Node.js', imgSrc: '/skills/node.png' },
        { name: 'Next.js', imgSrc: '/skills/nextjs.png' },
        { name: 'Python', imgSrc: '/skills/python.png' },
        { name: 'MongoDB', imgSrc: '/skills/mongodb.png' },
        { name: 'SQL', imgSrc: '/skills/sql.png' },
        { name: 'AWS', imgSrc: '/skills/aws.png' },
        { name: 'Docker', imgSrc: '/skills/docker.png' },
        { name: 'Git', imgSrc: '/skills/git.png' },
        { name: 'TailwindCSS', imgSrc: '/skills/tailwind.png' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <motion.p
                    className='text-xl tracking-widest uppercase text-primary'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Skills
                </motion.p>
                <motion.h2
                    className='py-4'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    What I Can Do
                </motion.h2>
                <motion.div
                    className='grid grid-cols-2 lg:grid-cols-4 gap-8'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white dark:bg-gray-800'
                            variants={itemVariants}
                        >
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <div className='relative w-[64px] h-[64px]'>
                                        {/* Replace with actual skill icons */}
                                        <Image
                                            src={skill.imgSrc}
                                            alt={skill.name}
                                            layout='fill'
                                            className='rounded-xl'
                                            objectFit='contain'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>{skill.name}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills; 