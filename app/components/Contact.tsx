'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import Link from 'next/link';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !message) {
            setError('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);
        setError('');

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');

            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <motion.p
                    className='text-xl tracking-widest uppercase text-primary'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Contact
                </motion.p>
                <motion.h2
                    className='py-4'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <motion.div
                        className='col-span-3 lg:col-span-2 bg-white dark:bg-gray-800 shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl p-4'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className='lg:p-4 h-full'>
                            <div>
                                <h2 className='py-2 text-2xl'>Nazmul Islam</h2>
                                <p className='py-2 text-gray-600 dark:text-gray-400'>AI Developer</p>
                                <p className='py-2 text-gray-600 dark:text-gray-400'>
                                    I am available for freelance or full-time positions. Contact
                                    me and let&apos;s talk.
                                </p>
                            </div>
                            <div>
                                <p className='uppercase pt-8 text-primary'>Connect With Me</p>
                                <div className='flex items-center gap-6 py-4'>
                                    <a
                                        href='https://www.linkedin.com/in/nazmul-islam-634642276/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaLinkedinIn className='text-primary' size={20} />
                                        </div>
                                    </a>
                                    <a
                                        href='https://github.com/Nazmul0005'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaGithub className='text-primary' size={20} />
                                        </div>
                                    </a>
                                    <a
                                        href='https://mail.google.com/mail/?view=cm&fs=1&to=nazmulislam45213@gmail.com&su=Portfolio Contact'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <MdEmail className='text-primary' size={20} />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='pt-4'>
                                <div className='flex items-center gap-4 py-2'>
                                    <MdEmail className='text-primary' size={20} />
                                    <a
                                        href='https://mail.google.com/mail/?view=cm&fs=1&to=nazmulislam45213@gmail.com&su=Portfolio Contact'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors'
                                    >
                                        nazmulislam45213@gmail.com
                                    </a>
                                </div>
                                <div className='flex items-center gap-4 py-2'>
                                    <MdPhone className='text-primary' size={20} />
                                    <p className='text-gray-600 dark:text-gray-400'>+8801879547960</p>
                                </div>
                                <div className='flex items-center gap-4 py-2'>
                                    <MdLocationOn className='text-primary' size={20} />
                                    <p className='text-gray-600 dark:text-gray-400'>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* right */}
                    <motion.div
                        className='col-span-3 bg-white dark:bg-gray-800 shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl lg:p-4'
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className='p-4'>
                            <form onSubmit={handleSubmit}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2 text-gray-600 dark:text-gray-400'>Name <span className="text-red-500">*</span></label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900'
                                            type='text'
                                            name='name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2 text-gray-600 dark:text-gray-400'>
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900'
                                            type='email'
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-gray-600 dark:text-gray-400'>Subject</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900'
                                        type='text'
                                        name='subject'
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-gray-600 dark:text-gray-400'>
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900'
                                        rows={10}
                                        name='message'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                {error && (
                                    <p className='text-red-500 mb-4'>{error}</p>
                                )}
                                {isSubmitted && (
                                    <p className='text-green-500 mb-4'>Your message has been sent successfully!</p>
                                )}
                                <button
                                    className='w-full p-4 mt-4'
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                                className='text-primary'
                                size={30}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact; 