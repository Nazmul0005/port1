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
import Image from 'next/image';

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

        {/* Research Card */}
        <div className="bg-gray-800 rounded-lg p-11 transform transition-all duration-300 hover:scale-105 hover:shadow-xl max-w-7xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-white">Privacy-Preserving Federated Learning-Based
    Intrusion Detection Technique for Cyber-Physical Systems</h3>
            <p className="text-gray-300 mb-4">
            The paper presents a Privacy-Preserving Federated Learning (FL)-Based Intrusion Detection System (IDS) for Cyber-Physical Systems (CPSs) and IoT. It addresses the privacy and data security concerns of traditional IDS by using FL, where IoT devices train local models and share only model parameters, not raw data. The Federated Averaging (FedAvg) algorithm aggregates updates, ensuring privacy. The system detects various cyberattacks like DoS, DDoS, ransomware, and more, achieving over 90% accuracy with minimal computational overhead. Secure Sockets Layer (SSL) ensures secure communication between clients and the server.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Federated Learning</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Federated Averaging</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Deep Learning</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Secure Sockets Layer</span>
            </div>
            <div className="flex gap-4">
                <a 
                    href="https://doi.org/10.3390/math12203194" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-primary/80 transition-colors"
                >
                    Read More →
                </a>
                <a 
                    href="/papers/research-paper.pdf" 
                    download
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                    <svg 
                        className="w-4 h-4 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                    </svg>
                    Download Paper
                </a>
            </div>
        </div>


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
                                <a
                                    href="https://youtu.be/6DN7wzDYloI?si=rJrdlk7out1lw-cF"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                                        <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
                                            <Image
                                                src="https://img.youtube.com/vi/6DN7wzDYloI/maxresdefault.jpg"
                                                alt="Make a chatbot using LangChain & RAG"
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                                                <FaPlay className="text-4xl text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transform transition-all duration-300" />
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-50 dark:bg-gray-700 transform transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                            <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-white">Make a chatbot using LangChain & RAG in just 10 minutes</h5>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-100">Published 2 days ago • 1K views</p>
                                        </div>
                                    </div>
                                </a>
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