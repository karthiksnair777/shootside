"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-2xl px-6 py-3 flex items-center justify-between backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 ${
          scrolled ? "bg-white/10" : "bg-white/5"
        }`}
      >
        <h1 className="text-2xl font-bold tracking-wide">SHOOTSIDE</h1>

        {/* Desktop nav */}
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

        {/* Contact Us button for desktop */}
        <a
          href="#contact"
          className="hidden md:inline-block px-4 py-2 rounded-lg hover:bg-purple-600 transition text-sm font-semibold text-white"
        >
          Contact Us
        </a>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90%] bg-black/90 rounded-xl shadow-lg flex flex-col items-center py-4 gap-4 md:hidden">
            <a href="#features" className="hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <a href="#about" className="hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#contact" className="hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition text-white font-semibold w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        )}
      </header>
      <AuroraBackground className="h-[500px] md:h-[800px]">
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
    href="tel:+917306166866" // Direct call link
    className="inline-block px-4 py-3 text-white font-bold text-lg rounded-xl border border-purple-500 
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
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black via-black/30 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black via-black/30 to-transparent pointer-events-none z-10"></div>

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
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Side (Image / Illustration) */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="order-1 md:order-1 flex justify-center"
    >
      <div>
        <h2 className="text-purple-700 font-bold text-xl md:text-2xl mb-2 text-center md:text-left">
          The
        </h2>
        <h2 className="font-extrabold text-white text-6xl sm:text-7xl md:text-[10rem] tracking-tight text-center md:text-left">
          SHOOT
          <br />
          SIDE!!!
        </h2>
      </div>
    </motion.div>

    {/* Right Side (Text Content) */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="order-2 md:order-2 text-center md:text-left"
    >
      <div>
        <h2 className="text-2xl md:text-2xl font-bold mb-1 text-purple-700">Who We Are</h2>
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-extrabold mb-6 text-white">
          Empowering Brands Through Strategy, Creativity & Innovation
        </h2>

        <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
          We are <span className="font-semibold text-purple-700">ShootSide</span>, a creative collective driven by passion, innovation, and purpose. 
          Our journey began with a simple vision — to craft meaningful experiences that connect brands with people in powerful ways. 
          With expertise across design, technology, and storytelling, we bring bold ideas to life and transform them into solutions 
          that inspire, engage, and deliver real impact. At ShootSide, collaboration fuels our creativity, and excellence defines our work.
        </p>
      </div>
    </motion.div>
  </div>
</BackgroundBeamsWithCollision>


<section className="relative bg-black py-24 px-6">
  {/* Heading */}
  <div className="max-w-5xl mx-auto text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700 mb-4 animate-gradient-x">
      Let's Collaborate
    </h2>
 <p className="text-white/70 text-base md:text-base max-w-2xl mx-auto">
  Got a project or idea? We'd love to hear from you. Fill out the form below and let's create something amazing together!
</p>

  </div>

  {/* Form */}
  <form
    onSubmit={handleSubmit}
    className="max-w-3xl mx-auto bg-purple-900/30 backdrop-blur-md border border-purple-700/40 rounded-3xl p-10 shadow-2xl hover:shadow-purple-700/50 transition-shadow duration-500"
  >
    <div className="grid gap-6 md:grid-cols-2">
      {/* Floating Label Input */}
      <div className="relative">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="peer p-5 rounded-xl bg-purple-800/50 text-white placeholder-transparent border border-purple-600/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full transition"
        />
        <label className="absolute left-5 top-5 text-purple-200/70 text-sm md:text-base transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-purple-400/50 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-purple-300 peer-focus:text-sm">
          Your Name
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="peer p-5 rounded-xl bg-purple-800/50 text-white placeholder-transparent border border-purple-600/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full transition"
        />
        <label className="absolute left-5 top-5 text-purple-200/70 text-sm md:text-base transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-purple-400/50 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-purple-300 peer-focus:text-sm">
          Your Email
        </label>
      </div>
    </div>

    {/* Textarea with Floating Label */}
    <div className="relative mt-6">
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={6}
        className="peer w-full p-5 rounded-2xl bg-purple-800/50 text-white placeholder-transparent border border-purple-600/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
      />
      <label className="absolute left-5 top-5 text-purple-200/70 text-sm md:text-base transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-purple-400/50 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-purple-300 peer-focus:text-sm">
        Your Message
      </label>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="mt-8 w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold py-4 rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-600/50"
    >
      Send Message
    </button>
  </form>

  {/* Subtle Purple Background Glows */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-purple-500/20 rounded-full filter blur-2xl animate-pulse-slow"></div>
  </div>
</section>



      {/* Footer */}

  <footer className="bg-purple-800 text-white rounded-3xl py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Drop us a line</h2>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-1 focus:ring-white/40 w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-white/20 hover:bg-white/30 transition text-sm font-medium"
            >
              Contact
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex flex-col text-right justify-between">
          <p className="text-sm text-white/80 mb-4">
            Book a meeting or leave a request. We’re ready to 
            embark on this journey with you. Are you?
          </p>
          <div className="flex flex-wrap gap-4 text-xs justify-end">
            <a href="#" className="hover:text-purple-200">[ INSTAGRAM ]</a>
            <a href="#" className="hover:text-purple-200">[ FACEBOOK ]</a>
            <a href="#" className="hover:text-purple-200">[ LINKEDIN ]</a>
            <a href="#" className="hover:text-purple-200">[ BEHANCE ]</a>
          </div>
        </div>
      </div>

      {/* Bottom Brand Section */}
     <div className="mt-16 text-center">
  <h1 className="text-[12rem] md:text-[16rem] font-extrabold text-white opacity-30 leading-none">
    SHOOTSIDE
  </h1>
</div>


      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center px-6 text-xs text-white/70">
        <p>© 2024. All rights reserved</p>
        <div className="flex gap-6 mt-2 sm:mt-0">
          <a href="#" className="hover:text-purple-200">Terms of Service</a>
          <a href="#" className="hover:text-purple-200">Privacy Policy</a>
        </div>
      </div>
    </footer>

        

{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/917306166866" // Replace with your WhatsApp number including country code
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 w-16 h-16 bg-purple-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg z-50 transition transform hover:scale-110"
>
  <FaWhatsapp className="w-8 h-8 text-white" />
</a>



  </main>


  );
}

