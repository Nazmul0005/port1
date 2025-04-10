'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

const ProjectsPage = () => {
    const projects = [
        {
            title: 'Suicide Ideation Detection System',
            description: 'A comprehensive AI-powered system for detecting suicidal ideation in tweets.',
            longDescription: 'An AI-powered system that uses Machine Learning, Deep Learning, and BERT-based NLP models to detect suicidal ideation in tweets. This system helps in early intervention and prevention.',
            image: '/sentiment.jpg',
            technologies: ['Python', 'Machine Learning', 'NLP', 'BERT', 'Deep Learning', 'TensorFlow'],
            github: 'https://github.com/Nazmul0005/Twitter-Based-Suicide-Ideation-Detection-System',
            demo: 'https://example.com',
            features: [
                'Tweet analysis using BERT models',
                'Real-time detection system',
                'High accuracy prediction',
                'Multi-class classification',
                'Sentiment analysis',
                'Early intervention alerts'
            ]
        },
        {
            title: 'Movie Review Sentiment Analysis',
            description: 'A sentiment classification system for movie reviews using Machine Learning and Hugging Face’s generative AI models to identify positive or negative opinions in text.',
            longDescription: 'Built with React, Node.js, and MongoDB, this e-commerce platform features user authentication, product catalog management, shopping cart functionality, secure payment processing with Stripe, order management, and an admin dashboard.',
            image: '/sentiment.jpg',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux', 'JWT', 'Tailwind CSS'],
            github: 'https://github.com',
            demo: 'https://example.com',
            features: [
                'User authentication and authorization',
                'Product catalog with search and filtering',
                'Shopping cart and wishlist',
                'Secure payment processing',
                'Order tracking and history',
                'Admin dashboard for product management'
            ]
        },
        {
            title: 'Task Management App',
            description: 'A productivity app for managing tasks, setting priorities, and tracking progress on projects.',
            longDescription: 'A comprehensive task management application that helps users organize their work, collaborate with team members, and track project progress. Features include drag-and-drop task organization, real-time updates, and detailed analytics.',
            image: '/projects/taskmanager.jpg',
            technologies: ['React', 'Redux', 'Firebase', 'Material-UI', 'Chart.js'],
            github: 'https://github.com',
            demo: 'https://example.com',
            features: [
                'Drag-and-drop task organization',
                'Real-time collaboration',
                'Project progress tracking',
                'Task prioritization',
                'Due date reminders',
                'Performance analytics'
            ]
        },
        {
            title: 'Weather Dashboard',
            description: 'A weather application that provides real-time weather data and forecasts for locations worldwide.',
            longDescription: 'An intuitive weather dashboard that delivers real-time weather information and forecasts using the OpenWeather API. Features include location search, detailed weather metrics, and interactive weather maps.',
            image: '/projects/weather.jpg',
            technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'HTML5', 'CSS3'],
            github: 'https://github.com',
            demo: 'https://example.com',
            features: [
                'Real-time weather updates',
                'Location-based forecasting',
                'Interactive weather maps',
                'Historical weather data',
                '7-day forecast',
                'Weather alerts'
            ]
        },
        {
            title: 'Social Media Platform',
            description: 'A social networking application with user authentication, profiles, posts, and real-time messaging.',
            longDescription: 'A feature-rich social media platform built with modern web technologies. Includes real-time messaging, news feed with infinite scroll, user profiles, and post engagement features.',
            image: '/projects/social.jpg',
            technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'AWS S3'],
            github: 'https://github.com',
            demo: 'https://example.com',
            features: [
                'Real-time messaging',
                'News feed with infinite scroll',
                'User profiles and connections',
                'Post creation and engagement',
                'Image and video sharing',
                'Notifications system'
            ]
        }
    ];

    return (
        <div className="w-full min-h-screen p-2 pt-20">
            <div className="max-w-[1240px] mx-auto">
                <div className="flex items-center mb-8">
                    <Link href="/" className="flex items-center text-primary hover:text-secondary transition-colors">
                        <FaArrowLeft className="mr-2" />
                        Back to Home
                    </Link>
                </div>

                <motion.h1
                    className="text-4xl font-bold mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    All Projects
                </motion.h1>

                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="relative min-h-[300px] md:h-full w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        priority={index === 0}
                                        className="rounded-l-xl object-cover object-center"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {project.longDescription}
                                    </p>

                                    <div className="mb-4">
                                        <h3 className="font-semibold mb-2">Key Features:</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                                            {project.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="font-semibold mb-2">Technologies Used:</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
                                        >
                                            <FaGithub /> View Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage; 