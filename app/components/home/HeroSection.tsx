"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation variants for text reveal
const textVariant = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.01, // Delays the animation of each letter
    },
  },
};

const HeroSection = () => {
  const title = "Gurman Sambhi";
  const subtitle = "Software Developer";
  const description =
    "Software Developer with strong Web development skill and a solid foundation in data structures and algorithms. Proficient in Java and ReactJs, with practical experience gained through academic projects and self learning. Committed to producing high-quality, maintainable code and eager to learn new technology."; 
     return (
    <div className="px-20 py-12 max-w-4xl mx-auto">
      <div className="flex flex-col gap-5  ">
        {/* Title with typing effect */}
        <motion.div
          className="overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          <motion.h1
            className="text-5xl md:text-8xl font-bold text-accent tracking-tight"
            variants={containerVariant}
          >
            {title.split("").map((char, index) => (
              <motion.span key={index} variants={textVariant}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        {/* Subtitle */}
        <motion.p
          className="font-semibold text-lg md:text-2xl mx-2"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 50 }}
        >
          {subtitle}
        </motion.p>
        {/* Description with typing effect */}
        <motion.p
          className="font-semibold text-md md:text-xl text-accent-foreground mx-2 tracking-wide"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          {description.split("").map((char, index) => (
            <motion.span key={index} variants={textVariant}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
