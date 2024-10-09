"use client"; // Required for Next.js client-side rendering

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import image from "../../../public/images/me.jpeg";

// Framer Motion variants for the animated typing effect
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
 
  const introText = "Hi, I'm Gurman Sambhi";

  return (
    <section className='p-8 sm:p-12 max-w-6xl mx-auto'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-12'>
        {/* Animated Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='relative bg-black rounded-xl shadow-xl overflow-hidden'
        >
          <Image 
            src={image} 
            alt="Gurman Sambhi" 
            className="rounded-xl object-cover"
            width={400} // Adjust width as per your design
            height={400} // Adjust height as per your design
          />
        </motion.div>

        {/* Text Section with Typing Animation */}
        <div className="flex flex-col text-center sm:text-left">
          <motion.h1
            className='text-4xl sm:text-6xl font-bold text-accent'
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {introText.split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description Paragraph with Delayed Animation */}
          
            
              <motion.p
                className='text-lg sm:text-xl text-accent-foreground mt-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                I turn vision into reality with code. Whether I{"'"}m working on a
                website or any digital product, I bring my commitment to design
                excellence and user-centered thinking to every project I work on.
              </motion.p>

              <motion.p
                className='text-lg sm:text-xl text-accent-foreground '
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Explore my latest{' '}
                <Link href="/project" className='underline text-accent hover:text-accent-dark'>
                  projects
                </Link>{' '}
                showcasing my expertise in Reactjs, Nextjs, Javascript, Typescript, and web development.
              </motion.p>
            
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
