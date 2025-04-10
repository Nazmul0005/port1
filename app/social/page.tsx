'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaArrowLeft } from 'react-icons/fa';

const SocialMediaPage = () => {
    const socialLinks = [
        {
            platform: 'YouTube',
            name: 'Content on Demand',
            url: 'https://youtube.com/@contentondemand',
            icon: <FaYoutube className="w-16 h-16 text-red-600" />,
            description: 'Subscribe to our channel for the latest content on technology, programming, and AI.',
            stats: '1K+ Subscribers • 50+ Videos',
            color: 'hover:bg-red-50 dark:hover:bg-red-900/10'
        },
        {
            platform: 'Facebook',
            name: 'Content on Demand',
            url: 'https://facebook.com/contentondemand',
            icon: <FaFacebook className="w-16 h-16 text-blue-600" />,
            description: 'Follow our Facebook page for daily updates and community discussions.',
            stats: '5K+ Followers • Daily Updates',
            color: 'hover:bg-blue-50 dark:hover:bg-blue-900/10'
        },
        {
            platform: 'Twitter',
            name: 'Content on Demand',
            url: 'https://twitter.com/contentondemand',
            icon: <FaTwitter className="w-16 h-16 text-sky-500" />,
            description: 'Join the conversation and stay updated with our latest tweets.',
            stats: '2K+ Followers • Active Daily',
            color: 'hover:bg-sky-50 dark:hover:bg-sky-900/10'
        },
        {
            platform: 'Instagram',
            name: 'Content on Demand',
            url: 'https://instagram.com/contentondemand',
            icon: <FaInstagram className="w-16 h-16 text-pink-600" />,
            description: 'Follow us on Instagram for behind-the-scenes content and visual updates.',
            stats: '3K+ Followers • Regular Stories',
            color: 'hover:bg-pink-50 dark:hover:bg-pink-900/10'
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold mb-4">Content on Demand</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Welcome to our multi-platform content hub! Join our community across various social media platforms
                        and stay updated with the latest in technology, programming, and AI.
                    </p>
                </motion.div>

                <div className="grid gap-6">
                    {socialLinks.map((platform, index) => (
                        <motion.div
                            key={platform.platform}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 ${platform.color} transition-all duration-300 transform hover:scale-[1.02]`}
                        >
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="flex-shrink-0">
                                    {platform.icon}
                                </div>
                                <div className="flex-grow text-center md:text-left">
                                    <h2 className="text-2xl font-bold mb-2">{platform.platform}</h2>
                                    <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-3">{platform.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-3">{platform.description}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{platform.stats}</p>
                                    <a
                                        href={platform.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                                    >
                                        Follow on {platform.platform}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-center"
                >
                    <h2 className="text-2xl font-bold mb-4">Join Our Community!</h2>
                    <p className="text-lg mb-6">
                        Subscribe and follow us across all platforms to never miss an update.
                        We're constantly creating valuable content for our growing community!
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default SocialMediaPage; 