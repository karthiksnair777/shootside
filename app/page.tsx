"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";

import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Floating Glass Header */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-2xl px-6 py-3 flex items-center justify-between backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 ${
          scrolled ? "bg-white/10" : "bg-white/5"
        }`}
      >
        <h1 className="text-2xl font-bold tracking-wide">SHOOTSIDE</h1>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-blue-400 transition">
            Features
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </nav>
        <button className="px-4 py-2 rounded-lg  hover:bg-blue-500 transition text-sm font-semibold">
          Get Started
        </button>
      </header>
 <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
         <h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white items-center text-center">
          Welcome to 
          <br />
          <span className=" text-2xl md:text-7xl font-extrabold tracking-tight ">SHOOTSIDE</span>
        </h2>
         <div>
      <motion.div className="relative mx-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text=" "
          words={["Media agency", "Video Production", "Web Development"," Branding"]}
        />
      </motion.div>
      
    </div>
      </motion.div>
    </AuroraBackground>
      
    </main>
  );
}
