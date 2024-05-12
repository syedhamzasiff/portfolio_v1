"use client"
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function HeroSection() {
  return (
    <section id='home'>
      <div className='min-h-screen overflow-hidden pt-40'>
        <div className="flex items-center justify-center flex-col space-x-4 text-left px-4 md:flex-row">
          <div className="md:mt-2 md:w-3/5">
            <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I'm Hamza!</h1>
            <p className="text-lg mt-4 mb-6 md:text-2xl">
              I'm an aspiring{' '}
              <span className="font-semibold text-customTeal">
                Software Engineer{' '}
              </span>
              based in Karachi. Working towards creating software that
              makes life easier and more meaningful.
            </p>
            <div className='flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
              <a
                className="group bg-customGrey px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer hover:bg-customTeal hover:text-customDarkGrey"
                href="/CV.pdf"
                download
              >
                Download CV{' '}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a>

              <a
                className="bg-customGrey p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-neutral-950 hover:bg-customTeal hover:text-customDarkGrey"
                href="https://www.linkedin.com/in/syedhamzasiff/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>

              <a
                className="bg-customGrey p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-neutral-950 hover:bg-customTeal hover:text-customDarkGrey"
                href="https://github.com/syedhamzasiff"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
