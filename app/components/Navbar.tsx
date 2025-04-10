'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);

        // Check user's preferred color scheme
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }

        return () => {
            window.removeEventListener('scroll', handleShadow);
        };
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <div
            className={
                shadow
                    ? 'fixed w-full h-20 shadow-xl z-[100] bg-light dark:bg-dark transition-all duration-300'
                    : 'fixed w-full h-20 z-[100] bg-light dark:bg-dark transition-all duration-300'
            }
        >
            <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
                <Link href='/'>
                    <h1 className='text-primary text-3xl font-bold'>Nazmul<span className='text-secondary'>.Islam</span></h1>
                </Link>
                <div>
                    <ul className='hidden md:flex gap-8'>
                        <li className='text-sm uppercase hover:text-primary'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='text-sm uppercase hover:text-primary'>
                            <Link href='/#about'>About</Link>
                        </li>
                        <li className='text-sm uppercase hover:text-primary'>
                            <Link href='/#skills'>Skills</Link>
                        </li>
                        <li className='text-sm uppercase hover:text-primary'>
                            <Link href='/#projects'>Projects</Link>
                        </li>
                        <li className='text-sm uppercase hover:text-primary'>
                            <Link href='/#experience'>Experience</Link>
                        </li>
                        <li className='text-sm uppercase hover:text-primary'>
                            <Link href='/social'>Social Media</Link>
                        </li>
                        <li className='text-sm uppercase hover:text-primary'>
                            <Link href='/#contact'>Contact</Link>
                        </li>
                        <li>
                            <button
                                onClick={toggleDarkMode}
                                className='bg-transparent shadow-none text-xl'
                            >
                                {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                            </button>
                        </li>
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer'>
                        <FaBars size={25} />
                    </div>
                </div>
            </div>

            <div
                className={
                    nav
                        ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
                        : ''
                }
            >
                <div
                    className={
                        nav
                            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-light dark:bg-dark p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <h1 className='text-primary text-3xl font-bold'>Nazmul<span className='text-secondary'>.Islam</span></h1>
                            </Link>
                            <div
                                onClick={handleNav}
                                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                            >
                                <FaTimes />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                Let's build something amazing together
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Home
                                </li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    About
                                </li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Skills
                                </li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Projects
                                </li>
                            </Link>
                            <Link href='/#experience'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Experience
                                </li>
                            </Link>
                            <Link href='/social'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Social Media
                                </li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className='pt-10'>
                            <p className='uppercase tracking-widest text-primary'>
                                Let's Connect
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <a
                                    href='https://www.linkedin.com/in/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href='https://github.com/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </a>
                                <button
                                    onClick={toggleDarkMode}
                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-transparent'
                                >
                                    {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar; 