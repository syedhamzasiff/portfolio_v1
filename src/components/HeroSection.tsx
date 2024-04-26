"use client"

import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';


export default function HeroSection() {
  return (
    <section id='home'>
        <motion.div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 md:flex-row md:space-x-4 md:text-left h-auto px-4" 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Hamza!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m an aspiring{" "}
            <span className="font-semibold text-gray-900">
              Software Engineer{" "}
            </span>
            based in Karachi. Working towards creating software that
            makes life easier and more meaningful.
          </p>
        <div className='flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        </div>
        </div>
      </motion.div>
    </section>
  )
}
