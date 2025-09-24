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
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-2xl px-6 py-3 flex items-center justify-between backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 ${scrolled ? "bg-white/10" : "bg-white/5"
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
          <h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white text-left">
            Welcome to
            <br />
            <span className="text-2xl md:text-7xl font-extrabold tracking-tight">
              SHOOTSIDE
            </span>
          </h2>

          <div>
            <motion.div className="relative mx-4 flex flex-col items-start justify-center gap-4 text-left">
              <LayoutTextFlip
                text=" "
                words={["Media agency", "Video Production", "Web Development", "Branding"]}
              />
            </motion.div>
          </div>
        </motion.div>
      </AuroraBackground>
      {/* next */}
      {/* Trusted by Clients Section */}
      {/* Trusted by Clients Section */}
      <section id="trusted" className="py-16 bg-black text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Trusted by Clients Worldwide
          </h2>

          {/* Stronger Gradient Overlays (shades on each side) */}
          <div className="absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10"></div>

          {/* Infinite Scroll Carousel */}
        <div className="relative w-full overflow-hidden">
  <motion.div
    className="flex gap-12 min-w-max items-center"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      duration: 40,
      ease: "linear",
    }}
  >
    {[...Array(2)].flatMap((_, loopIdx) =>
      [
        "/toni&guy.png",
        "/naturals.png",
        "/wattlecorp.png",
        "/vfs.png",
        "/original.jpg",
        "/myg.png",
        "/slash.png",
        "/frank.png",
        "/evana.png",
        "/la.png",
      ].map((src, idx) => (
        <img
          key={`${loopIdx}-${src}-${idx}`} // ✅ unique key
          src={src}
          alt={`Client ${idx + 1}`}
          className="h-16 w-auto object-contain opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition"
        />
      ))
    )}
  </motion.div>
</div>


        </div>
      </section>

    </main>

  );
}
