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
      <p className="mb-3">
        Currently pursuing my Degree in{" "}
        <span className="font-medium">Computer Science</span>. This world of coding and the endless possibilities you can achieve through this one skill will never cease to amaze me— the problems you can solve, the creative expression you can showcase.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. 
        </p>
        <p>
        Currently in a phase of exploration, trying out different tools to craft my journey. From enhancing my problem-solving skills in core Java, to building some fun apps using Flutter, to now currently exploring the world of web-development using NextJs and Full stack frameworks.
        </p>
        <p>
        In the future, I would love to explore web 3.0 and the vast world of AI and ML.
        </p>
    </motion.section>
  );
}
