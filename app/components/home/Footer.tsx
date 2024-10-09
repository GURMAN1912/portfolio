"use client";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/app/utils/icons";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../Form";

interface SiteMetaData {
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
}

export default function Footer() {
    const [showForm, setShowForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const formRef = useRef<HTMLDivElement>(null); // Reference for the form container

    const siteMetadata: SiteMetaData = {
        email: "gurmansambhi1912@gmail.com",
        github: "https://github.com/GURMAN1912",
        linkedin: "https://www.linkedin.com/in/gurman-singh-sambhi/",
        twitter: "https://x.com/",
    };

    

    // Close the form if clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                setShowForm(false);
            }
        };

        if (showForm) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showForm]);

    return (
        <footer className="bottom-0 relative flex w-full flex-col items-center gap-20 z-100 px-6 py-8 sm:px-14 md:px-20">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-accent p-8 text-accent-foreground/80 sm:p-12 md:gap-12 lg:p-20">
                <div className="text-center">
                    <span className="inline-block rounded-full bg-background px-5 py-3 text-xs font-semibold uppercase text-accent-foreground md:text-sm lg:text-base">
                        Get in touch
                    </span>
                </div>
                <div className="text-center">
                    
                <a
                    href={`mailto:${siteMetadata.email}`}
                    target="_blank"
                    className="mb-6 cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-4xl"
                    aria-label="Email Gurman Sambhi"
                    >
                    <span>gurmansambhi1912@</span>
                    <br />
                    <span>gmail.com</span>
                </a>
                    </div>
                <div className="flex justify-center">
                    <button onClick={() => setShowForm(!showForm)} className="bg-background px-4 py-3 rounded-xl text-xl">
                        {formSubmitted ? "Thank You!" : "Send a message"}
                    </button>
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-8 text-center md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
                <span className="text-foreground">©2024 Gurman Sambhi</span>
                <div className="flex gap-8">
                    <a
                        href={siteMetadata.github}
                        target="_blank"
                        className="h-6 w-6"
                        aria-label="Link to GitHub"
                    >
                        <GithubIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
                    </a>
                    <a
                        href={siteMetadata.twitter}
                        target="_blank"
                        className="h-6 w-6"
                        aria-label="Link to Twitter"
                    >
                        <TwitterIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
                    </a>
                    <a
                        href={siteMetadata.linkedin}
                        target="_blank"
                        className="h-6 w-6"
                        aria-label="Link to LinkedIn"
                    >
                        <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
                    </a>
                </div>
            </div>

            {/* Form Animation */}
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        ref={formRef}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="absolute backdrop-blur-md mx-auto flex w-full  max-w-4xl flex-col gap-6 rounded-2xl  p-6 text-accent-foreground/80 sm:p-8 md:gap-6 lg:p-10"
                    >
                        <ContactForm/>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
}
