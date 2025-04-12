'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Suicide Ideation Detection System',
            description: 'A comprehensive AI-powered system for detecting suicidal ideation in tweets using Machine Learning, Deep Learning, and BERT-based NLP models.',
            image: '/sentiment_wide.jpg',
            technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'BERT','XLNet', 'Python', 'scikit-learn'],
            github: 'https://github.com/Nazmul0005/Twitter-Based-Suicide-Ideation-Detection-System',
            demo: 'https://example.com'
        },
        {
            title: 'Movie Review Sentiment Analysis',
            description: 'A sentiment classification system for movie reviews using Machine Learning and Hugging Face’s generative AI models to identify positive or negative opinions in text.',
            image: '/movie_sentiment_wide.jpg',
            technologies: ['Python', 'scikit-learn', 'TensorFlow & Keras', 'NLP', 'NLTK', 'Gensim','Torch', 'Hugging Face Transformers'],
            github: 'https://github.com/Nazmul0005/MovieReview_SentimentAnalysis_Using_ML_-_HuggingFace_PretrainedModel',
            demo: 'https://example.com'
        },
        {
            title: 'Style Stream',
            description: 'A real-time artistic style transfer system for images, webcam feeds, and videos using Deep Learning, OpenCV, and Python to blend visual content with artistic styles.',
            image: '/deep_neural_wide.jpg',
            technologies: ['Python', 'OpenCV', 'TensorFlow', 'Numpy', 'Matplotlib', 'PyTorch', 'Streamlit', 'VGG19'],
            github: 'https://github.com/Nazmul0005/Deep-Neural-Style-Transfer',
            demo: 'https://example.com'
        },
        {
            title: 'Custom AI Chatbot for Any Company',
            description: 'Custom AI Chatbot for Enterprises using RAG & LangChain to deliver accurate and context-aware responses.',
            image: '/chat_wide.jpg',
            technologies: ['Python', 'LangChain', 'RAG', 'OpenAI', 'Hugging Face', 'Streamlit', 'PyPDF2','FAISS'],
            github: 'https://github.com/Nazmul0005/sm_technology_chatbot',
            demo: 'https://example.com'
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
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    };

    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <motion.p
                    className='text-xl tracking-widest uppercase text-primary'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.p>
                <motion.h2
                    className='py-4'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    What I&apos;ve Built
                </motion.h2>
                <motion.div
                    className='grid md:grid-cols-2 gap-8'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className='relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl bg-white dark:bg-gray-800'
                            variants={itemVariants}
                        >
                            <div className='relative h-48 md:h-56'>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout='fill'
                                    objectFit='cover'
                                />
                            </div>
                            <div className='p-6'>
                                <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
                                <p className='text-gray-600 dark:text-gray-400 mb-4'>{project.description}</p>
                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className='bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex justify-between'>
                                    <a
                                        href={project.github}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='flex items-center gap-2 text-primary hover:underline'
                                    >
                                        <FaGithub /> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='flex items-center gap-2 text-primary hover:underline'
                                    >
                                        <FaExternalLinkAlt /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <div className='flex justify-center mt-12'>
                    <Link href='/projects'>
                        <button className='px-8 py-2 hover:scale-105 ease-in duration-300'>
                            View All Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects; 