"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import AnimatedLogo from '../animation/animated-logo';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { BsList } from 'react-icons/bs';
import MobileMenu from './MoblieMenu';

export type NavbarRoute = {
  title: string;
  href: string;
};

export type NavbarRoutes = NavbarRoute[];

export interface NavbarProps {
  routes: NavbarRoutes;
}

const Navbar = (props: NavbarProps) => {
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(prev => !prev);

  return (
    <header className="sticky top-0 z-50 mt-2 px-6 py-8 sm:mt-8 sm:px-14 md:px-20">
      <div className="mx-auto flex items-center justify-between lg:max-w-7xl">
        <Link
          href="/"
          className="drop-shadow-teralight flex items-center justify-center"
          aria-label="Return to home page"
        >
          <div className="relative h-20 w-20 sm:h-28 sm:w-28 bg-transparent"> {/* Increased size here */}
    <AnimatedLogo />
  </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 rounded-full px-2 py-2 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-accent/50">
          <ul className="flex gap-2 text-sm font-medium">
            {props.routes.map((link, index) => (
              <li key={index} className="my-3 transition-transform duration-100 hover:scale-[1.1]">
                <Link
                  href={link.href}
                  className={`group relative mx-3 rounded-full px-3 py-2 transition-colors duration-200 ${
                    pathName === link.href
                      ? "font-semibold text-background dark:hover:text-foreground"
                      : "text-foreground"
                  }`}
                >
                  {pathName === link.href && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-accent group-hover:bg-accent/80"
                      animate={{
                        transition: {
                          x: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          },
                        },
                      }}
                    />
                  )}
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="inline md:hidden p-2 rounded-full bg-[#802dd2] backdrop-blur-xl">
          <BsList className="text-white text-xl font-bold" onClick={toggleModal} />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu routes={props.routes} openMenu={isModalOpen} setOpenMenu={setIsModalOpen} />
    </header>
  );
};

export default Navbar;
