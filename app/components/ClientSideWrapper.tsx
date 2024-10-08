// app/components/ClientSideWrapper.tsx
"use client"; // Use client directive for animations and client logic

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientSideWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Detect route changes

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Re-trigger animation on route change
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
