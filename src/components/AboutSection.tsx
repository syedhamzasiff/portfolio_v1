"use client"
import React from 'react'
import SectionHeading from './SectionHeading'

export default function AboutSection() {
  return (
    <section className='bg-slate-400 min-h-screen overflow-hidden pt-40'>
      <div className='mx-4 md:m-8'>
        <SectionHeading>
          About Me
        </SectionHeading>
        <p className='text-center'>
        "Passionate about leveraging technology to solve real-world problems, I'm a dedicated software engineer based in [Location]. With a focus on [Specific Technology/Domain], I strive to create impactful solutions that enhance user experiences and drive innovation. Let's build something amazing together!"

        Feel free to customize it further to match your personal style and specific interests!
        </p>

      </div>


    </section>
  )
}
