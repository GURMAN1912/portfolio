"use client";
import { Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  // Define animation variants for the path
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)", // Start with no fill
    },
    visible: {
      pathLength: 1,
      fill: "#000", // Visible color (adjust according to your theme)
    },
  };

  return (
    <motion.svg
      fill="#000000"
      viewBox="-6.08 -6.08 44.16 44.16"
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(-1, 0, 0, -1, 0, 0) rotate(90)"
      className=" fill-black stroke-black"
    >
      <motion.path
        d="M27.39,13.82H16.21v4.63h6.44c-.6,2.95-3.11,4.64-6.44,4.64a7.09,7.09,0,0,1,0-14.18,7,7,0,0,1,4.42,1.58L24.12,7a12,12,0,1,0-7.91,21c6,0,11.45-4.36,11.45-12A9.56,9.56,0,0,0,27.39,13.82Z"
        strokeWidth="2"
        stroke="#802dd3" // Adjust stroke color based on your theme
        variants={iconVariant} // Apply the animation variants
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 3, ease: "easeInOut" },
          fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  );
}
