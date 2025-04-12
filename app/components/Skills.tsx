'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    SiPython, SiC, SiCplusplus,
    SiTensorflow, SiPytorch, SiKeras,
    SiScikitlearn, SiNumpy, SiPandas,
    SiMysql, SiStreamlit,
    SiFastapi, SiGithub, SiOpenai,
    SiHuggingface
} from 'react-icons/si';
import { FaRobot, FaBrain, FaDatabase, FaRocket, FaChartBar } from 'react-icons/fa';
import { BsCodeSlash, BsGear } from 'react-icons/bs';
import { IconCloud } from '../registry/magicui/icon-cloud';

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming & Development",
            icon: <BsCodeSlash className="w-8 h-8 text-violet-500" />,
            skills: [
                { name: 'Python', icon: <SiPython className="w-16 h-16 text-blue-500" /> },
                { name: 'C', icon: <SiC className="w-16 h-16 text-blue-600" /> },
                { name: 'C++', icon: <SiCplusplus className="w-16 h-16 text-blue-700" /> },
                { name: 'OOP', icon: <BsGear className="w-16 h-16 text-gray-600" /> },
                { name: 'DSA', icon: <FaBrain className="w-16 h-16 text-purple-500" /> },
            ]
        },
        {
            title: "AI & Machine Learning",
            icon: <FaRobot className="w-8 h-8 text-blue-500" />,
            skills: [
                { name: 'TensorFlow', icon: <SiTensorflow className="w-16 h-16 text-orange-500" /> },
                { name: 'PyTorch', icon: <SiPytorch className="w-16 h-16 text-red-500" /> },
                { name: 'Keras', icon: <SiKeras className="w-16 h-16 text-red-600" /> },
                { name: 'Scikit-Learn', icon: <SiScikitlearn className="w-16 h-16 text-orange-600" /> },
                { name: 'Hugging Face', icon: <SiHuggingface className="w-16 h-16 text-yellow-500" /> },
                { name: 'OpenAI', icon: <SiOpenai className="w-16 h-16 text-green-500" /> },
            ]
        },
        {
            title: "Data Handling & Analysis",
            icon: <FaDatabase className="w-8 h-8 text-green-500" />,
            skills: [
                { name: 'NumPy', icon: <SiNumpy className="w-16 h-16 text-blue-500" /> },
                { name: 'Pandas', icon: <SiPandas className="w-16 h-16 text-purple-600" /> },
                { name: 'SQL', icon: <SiMysql className="w-16 h-16 text-blue-400" /> },
                { name: 'Power BI', icon: <FaChartBar className="w-16 h-16 text-yellow-600" /> },
            ]
        },
        {
            title: "Model Deployment & Development",
            icon: <FaRocket className="w-8 h-8 text-red-500" />,
            skills: [
                { name: 'Streamlit', icon: <SiStreamlit className="w-16 h-16 text-red-500" /> },
                { name: 'FastAPI', icon: <SiFastapi className="w-16 h-16 text-teal-500" /> },
                { name: 'GitHub', icon: <SiGithub className="w-16 h-16 dark:text-white text-black" /> },
            ]
        }
    ];

    return (
        <div id='skills' className='w-full min-h-screen p-2 py-16'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center'>
                <p className='text-xl tracking-widest uppercase text-primary'>
                    Skills
                </p>
                <h2 className='py-4'>What I Can Do</h2>

                {/* Add spacing */}
                <div className="h-8"></div>

                {/* Icon Cloud Component */}
                <div className="w-full flex justify-center items-center mb-12">
                    <div className="w-[900px] h-[700px] flex items-center justify-center bg-gradient-to-br from-gray-900/90 to-gray-800/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm rounded-xl shadow-xl p-4">
                        <IconCloud
                            images={slugs.map(slug => `https://cdn.simpleicons.org/${slug}/${slug}`)}
                        />
                    </div>
                </div>

                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            {category.icon}
                            <h3 className="text-2xl font-bold dark:text-white">{category.title}</h3>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-800'
                                >
                                    <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
                                        <div className='flex justify-center items-center'>
                                            {skill.icon}
                                        </div>
                                        <div className='flex flex-col items-center justify-center'>
                                            <h3 className='text-lg font-bold dark:text-white'>{skill.name}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills; 