import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QRCodeButton from './components/QRCodeButton';
import SnakeAnimation from './components/SnakeAnimation';
import { FaYoutube, FaCode, FaGraduationCap, FaBrain, FaNetworkWired, FaPlay, FaUsers, FaEye, FaQrcode } from 'react-icons/fa';

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />

            {/* YouTube Section */}
            <section id="youtube" className="w-full py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
                <SnakeAnimation />
                <div className="max-w-[1240px] mx-auto px-8 relative z-10">
                    <div className="text-center mb-12 transform transition-all duration-500 hover:scale-105">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-primary transition-colors">My YouTube Channel</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">Content on Demand</p>

                        {/* Channel Statistics */}
                        <div className="flex justify-center gap-8 mt-8">
                            <div className="flex items-center space-x-2 hover:scale-110 transition-transform cursor-pointer">
                                <FaUsers className="text-2xl text-primary animate-pulse" />
                                <div className="text-left">
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">20K+</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Subscribers</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 hover:scale-110 transition-transform cursor-pointer">
                                <FaEye className="text-2xl text-primary animate-pulse" />
                                <div className="text-left">
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">1.5M+</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Views</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-9 mb-12">
                        {/* Left Column */}
                        <div className="flex flex-col gap-8">
                            {/* About Channel Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl flex-1">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">About My Channel</h3>
                                <p className="text-gray-1111 dark:text-gray-300 mb-6">
                                    Welcome to my YouTube channel! Here, I create educational content focused on technology, programming, Machine Learning, AI and computer science. My goal is to make complex topics accessible and engaging for everyone. Exploring AI and helping others learn along the way.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <FaYoutube className="text-red-600 text-2xl mr-3" />
                                        <span className="text-gray-700 dark:text-gray-300">Weekly uploads on programming tutorials</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaCode className="text-blue-600 text-2xl mr-3" />
                                        <span className="text-gray-700 dark:text-gray-300">Live coding sessions and project builds</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaGraduationCap className="text-green-600 text-2xl mr-3" />
                                        <span className="text-gray-700 dark:text-gray-300">Structured learning paths for all levels</span>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="https://youtube.com/@content123"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    >
                                        <FaYoutube className="mr-2 animate-pulse" />
                                        Subscribe Now
                                    </a>
                                    <QRCodeButton />
                                </div>
                            </div>

                            {/* Social Proof Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl flex-1">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">What Viewers Say</h4>
                                <div className="space-y-4">
                                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <p className="text-sm text-gray-600 dark:text-gray-300 italic">"Clear explanations and practical examples. Exactly what I needed!"</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">- John Doe, Web Developer</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <p className="text-sm text-gray-600 dark:text-gray-300 italic">"The best programming tutorials I've found on YouTube!"</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">- Jane Smith, Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-8">
                            {/* Featured Playlists Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl flex-1">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Featured Playlists</h3>
                                <div className="space-y-4">
                                    {/* Machine Learning Playlist */}
                                    <div className="group relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700">
                                            <FaBrain className="text-purple-600 text-xl mr-3 group-hover:rotate-12 transition-transform" />
                                            <div className="flex-grow">
                                                <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">Machine Learning</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">20 videos • 8 hours</p>
                                            </div>
                                            <FaPlay className="text-gray-400 group-hover:text-primary group-hover:scale-125 transition-all" />
                                        </div>
                                    </div>

                                    {/* Computer Networks Playlist */}
                                    <div className="group relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700">
                                            <FaNetworkWired className="text-blue-600 text-xl mr-3 group-hover:rotate-12 transition-transform" />
                                            <div className="flex-grow">
                                                <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">Computer Networks</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">15 videos • 6 hours</p>
                                            </div>
                                            <FaPlay className="text-gray-400 group-hover:text-primary group-hover:scale-125 transition-all" />
                                        </div>
                                    </div>

                                    {/* Web Development Playlist */}
                                    <div className="group relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700">
                                            <FaCode className="text-green-600 text-xl mr-3 group-hover:rotate-12 transition-transform" />
                                            <div className="flex-grow">
                                                <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">Web Development</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">25 videos • 10 hours</p>
                                            </div>
                                            <FaPlay className="text-gray-400 group-hover:text-primary group-hover:scale-125 transition-all" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="https://www.youtube.com/@content123/playlists"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    >
                                        View All Playlists
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@content123/community"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    >
                                        Latest Posts
                                    </a>
                                </div>
                            </div>

                            {/* Latest Video Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl flex-1">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Latest Video</h4>
                                <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                                            <FaPlay className="text-4xl text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transform transition-all duration-300" />
                                        </div>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-gray-700 transform transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                        <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-white">Make a chatbot using LangChain & RAG in just 10 minutes</h5>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-100">Published 2 days ago • 1K views</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Content */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Upcoming Content</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white group">
                                <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-white mb-2">AI Development Series</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-100">Coming next week</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white group">
                                <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-white mb-2">Cloud Computing Basics</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-100">Starting this month</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white group">
                                <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-white mb-2">Live Coding Sessions</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-100">Every Saturday</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
            <Footer />
        </main>
    );
} 