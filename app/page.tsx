"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";

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

  const projects = [
  {
    title: "Branding Services",
    description: "Logo & Brand Identity, Print Design (Brochures, etc.), Social Media Kits, Stationery & Merchandise, Google Business Optimization",
    link: "#contact",
  },
  {
    title: "Mobile App Development",
    description: "iOS & Android App Development, UI/UX Design, App Store Deployment, Maintenance & Updates",
    link: "#m",
  },
  {
    title: "Marketing Services",
    description: "Social Media Marketing, Search Engine Optimization (SEO), Paid Ads (Google, Facebook, Instagram), Campaign Strategy & Analytics",
    link: "#contat",
  },
];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
  alert("Thank you! Your message has been sent.");
  setFormData({ name: "", email: "", message: "" });
};


  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating Glass Header */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-2xl px-6 py-3 flex items-center justify-between backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 ${scrolled ? "bg-white/10" : "bg-white/5"
          }`}
      >
        <h1 className="text-2xl font-bold tracking-wide">SHOOTSIDE</h1>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-purple-400 transition">
            Features
          </a>
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </nav>
        <button className="px-4 py-2 rounded-lg  hover:bg-purple-500 transition text-sm font-semibold">
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
    className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 max-w-md md:max-w-lg"
  >
    {/* Main Heading */}
    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white leading-tight">
      SHOOTSIDE
    </h1>

    {/* Subheading / Rotating Words */}
    <div className="mt-4">
      <LayoutTextFlip
        text="We are a"
        words={["Media Agency", "Video Production", "Web Development", "Branding"]}
        
      />
    </div>

    {/* CTA Button */}
   <div className="mt-6">
  <a
    href="#contact"
    className="inline-block px-4 py-3 text-white font-bold text-lg rounded-xl border-1 border-purple-500 
               hover:bg-purple-500 hover:text-black transition-all duration-300 ease-in-out"
  >
    Contact Us
  </a>
</div>

  </motion.div>

  {/* Optional: Decorative Shapes / Background Effects */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
  </div>
</AuroraBackground>

      {/* next */}
      
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
        <div
          key={`${loopIdx}-${src}-${idx}`}
          className="h-20 w-32 flex items-center justify-center" // ✅ uniform box
        >
          <Image
  src={src}
  alt={`Client ${idx + 1}`}
  width={128}
  height={80}
  className="h-full w-full object-contain opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition"
/>
        </div>
      ))
    )}
  </motion.div>
</div>

        </div>
      </section>
{/*  */}
 <BackgroundBeamsWithCollision className="text-white">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* Left Side (Image / Illustration) */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <h2 className="text-purple-700 font-bold text-xl md:text-2xl mb-2">
        The
      </h2>
      <h2 className="font-extrabold text-white text-6xl md:text-[10rem] tracking-tight">
        SHOOT
        <br />
        SIDE!!!
      </h2>
    </motion.div>

    {/* Right Side (Text Content) */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-center md:text-left"
    >
      <h2 className="text-2xl md:text-2xl font-bold mb-1 text-purple-700">Who We Are</h2>
      <h2 className="text-5xl md:text-5xl font-extrabold mb-6 text-white">
        Empowering Brands Through Strategy, Creativity & Innovation
      </h2>

      <p className="text-sm md:text-base leading-relaxed max-w-2xl">
        We are <span className="font-semibold text-purple-700">ShootSide</span>, a creative collective driven by passion, innovation, and purpose. 
        Our journey began with a simple vision — to craft meaningful experiences that connect brands with people in powerful ways. 
        With expertise across design, technology, and storytelling, we bring bold ideas to life and transform them into solutions 
        that inspire, engage, and deliver real impact. At ShootSide, collaboration fuels our creativity, and excellence defines our work.
      </p>
    </motion.div>
  </div>
</BackgroundBeamsWithCollision>

      {/* next */}
      {/* Hover Effect Cards Section */}
      <section id="services" className="py-16 bg-grey-200 text-purple-500">
  <div className="max-w-6xl mx-auto px-4 sm:px-8">
    <h1 className="text-3xl md:text-4xl font-bold text-center">
      Our Services
    </h1>
     <div className="max-w-5xl mx-auto px-8 font-sans">
      <HoverEffect items={projects} />
    </div>
  </div>
  <p className="text-center ">click on the card to know more.</p>
</section>

<section className="relative bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Let's Collaborate
        </h2>
        <p className="text-white/70 text-lg md:text-xl">
  Got a project or idea? We&apos;d love to hear from you. Fill out the form
  below and let&apos;s create something amazing together!
</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-black/50 border border-white/10 rounded-3xl p-8 shadow-lg"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full mt-6 p-4 rounded-2xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        />

        <button
          type="submit"
          className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-3 rounded-xl hover:scale-105 transform transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>

    <footer className="py-12 bg-black text-white text-center">
  <h2 className="text-4xl md:text-5xl font-extrabold mb-4">ShootSide</h2>
  <p className="text-white/70 text-base md:text-lg">Your partner in creativity and innovation.</p>
</footer>

  </main>


  );
}

