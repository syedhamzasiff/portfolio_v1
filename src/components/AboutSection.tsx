"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        Ever since I tapped into the power of code, I've been captivated by its potential to shape the world around us. What excites me the most is the fusion of creativity and problem-solving that comes with each line written.
        <br />
        Currently, I'm crafting excellence with a variety of tools. I wield languages like <span className='font-bold'>Java, JavaScript, HTML, CSS, and Python</span>, bringing ideas to life. And I'm not stopping there; I'm also diving deep into <span className="font-bold">ReactJS, and NextJS</span>, constantly expanding my toolkit.
        <br />
        Beyond the screen and syntax, what really drives me is the opportunity to create impact. I'm passionate about leveraging technology to solve real-world problems and make a positive difference in people's lives.

      </p>

    </motion.section>
  );
}
