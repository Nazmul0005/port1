'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='bg-light dark:bg-dark text-gray-700 dark:text-gray-300'>
            <div className='max-w-[1240px] mx-auto py-12 px-4'>
                <div className='grid md:grid-cols-3 gap-8'>
                    <div>
                        <h3 className='text-2xl font-bold mb-4'>Nazmul Islam</h3>
                        <p className='mb-4'>AI Developer Passionate about blending artificial intelligence with intuitive design to craft smart, engaging, and human-centric digital experiences.</p>
                        <div className='flex space-x-4'>
                            <a
                                href='https://www.linkedin.com/in/nazmul-islam-634642276/'
                                target='_blank'
                                rel='noreferrer'
                                aria-label='LinkedIn'
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn className='text-primary' />
                                </div>
                            </a>
                            <a
                                href='https://github.com/Nazmul0005'
                                target='_blank'
                                rel='noreferrer'
                                aria-label='GitHub'
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub className='text-primary' />
                                </div>
                            </a>
                            <a
                                href='mailto:nazmulislam45213@gmail.com'
                                aria-label='Email'
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <MdEmail className='text-primary' />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link href='/' className='hover:text-primary transition-colors'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href='/#about' className='hover:text-primary transition-colors'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href='/#skills' className='hover:text-primary transition-colors'>
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href='/#projects' className='hover:text-primary transition-colors'>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href='/#contact' className='hover:text-primary transition-colors'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold mb-4'>Contact Info</h3>
                        <ul className='space-y-2'>
                            <li>San Francisco, CA</li>
                            <li>
                                <a href='mailto:nazmulislam45213@gmail.com.com' className='hover:text-primary transition-colors'>
                                    nazmulislam45213@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href='tel:+8801879547960' className='hover:text-primary transition-colors'>
                                    +8801879547960
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center'>
                    <p>&copy; {year} Nazmul Islam. All rights reserved.</p>
                    <p className='mt-2 text-sm'>
                        Built with Next.js, Tailwind CSS, and ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 