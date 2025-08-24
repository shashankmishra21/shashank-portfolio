"use client";
import { Mail, Github, Linkedin, Twitter, Download, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = useMemo(
    () => ["Full Stack Web Developer", "Backend Engineer", "DevOps Practitioner"],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <motion.section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 md:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      {/* Enhanced ambient background glows */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(60% 60% at 18% 62%, rgba(59,130,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 80% 30%, rgba(139,92,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 42% 82%, rgba(59,130,246,0.12), transparent 60%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Right: Enhanced Profile image with glow/ring */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg md:blur-xl"
                animate={{ scale: [1, 1.12, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.img
                src="/profile-image.png"
                alt="Shashank Profile"
                className="
                  w-40 h-40
                  xs:w-44 xs:h-44
                  sm:w-52 sm:h-52
                  md:w-72 md:h-72
                  lg:w-80 lg:h-80
                  xl:w-96 xl:h-96
                  object-cover rounded-full shadow-2xl relative z-10 border-4 border-white/15
                "
                whileHover={{
                  scale: 1.04,
                  rotate: 2,
                  boxShadow: "0 25px 50px -12px rgba(59,130,246,0.35)",
                }}
                transition={{ duration: 0.25, ease: easeOut }}
              />
              <motion.div
                className="absolute -inset-3 md:-inset-4 rounded-full border-2 border-blue-500/25"
                animate={{ rotate: [0, 360], scale: [1, 1.08, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Left: Enhanced Text content - Centered on mobile */}
          <motion.div
            className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left px-1 sm:px-2 md:px-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            {/* Greeting */}
            <motion.p 
              className="text-muted-foreground mb-3 md:mb-4 text-xs sm:text-sm md:text-base font-medium tracking-wide"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: easeOut }}
            >
              <span className="mr-2 text-blue-500">{">"}</span>HI, I AM
            </motion.p>

            {/* Main Name - Shashank in blue with hover glow effect */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black mb-3 md:mb-5 tracking-tight leading-tight">
              <motion.div
                animate={{ y: [-6, 6, -6], rotate: [-1.2, 1.2, -1.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-blue-600 dark:text-blue-500 transition-all">
                  {"Shashank".split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 30, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.55, ease: easeOut }}
                      whileHover={{
                        scale: 1.14,
                        textShadow: "0 0 20px rgba(59,130,246,0.8)",
                        filter: "drop-shadow(0 0 10px rgba(59,130,246,0.5))",
                      }}
                      className="inline-block cursor-pointer transition-all duration-300"
                      style={{ display: "inline-block" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </motion.div>
            </h1>

            {/* Enhanced Dynamic role display - Fixed visibility issue */}
            <motion.div
              className="mb-8 md:mb-10 h-12 sm:h-14 md:h-20 flex items-center justify-center lg:justify-start"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: easeOut }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-extrabold tracking-tight text-black dark:text-white">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ 
                      opacity: 0, 
                      y: 30, 
                      scale: 0.8,
                      rotateX: -90,
                      filter: "blur(4px)"
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      rotateX: 0,
                      filter: "blur(0px)"
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -30, 
                      scale: 0.8,
                      rotateX: 90,
                      filter: "blur(4px)"
                    }}
                    transition={{ 
                      duration: 0.6, 
                      ease: easeOut,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
                    className="inline-block font-display"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </h2>
            </motion.div>

            {/* Resume Button + Social Icons - One Line on Small/Medium Screens */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 w-full"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.08, ease: easeOut }}
            >
              {/* Resume Button */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.18, ease: easeOut }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3, ease: easeOut }}
              >
                <Link
                  href="/resume"
                  className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all text-sm sm:text-base inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </Link>
              </motion.div>

              {/* Social Icons */}
              {[
                {
                  href: "mailto:mishrashashank2106@gmail.com",
                  icon: Mail,
                  color: "bg-red-500 hover:bg-red-600",
                  label: "Email",
                },
                {
                  href: "https://github.com/shashankmishra21",
                  icon: Github,
                  color: "bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700",
                  label: "GitHub",
                },
                {
                  href: "http://linkedin.com/in/mishrashashank2106",
                  icon: Linkedin,
                  color: "bg-blue-600 hover:bg-blue-700",
                  label: "LinkedIn",
                },
                {
                  href: "https://x.com/mishrashashank_",
                  icon: Twitter,
                  color: "bg-blue-400 hover:bg-blue-500",
                  label: "Twitter",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className={`${social.color} inline-flex items-center justify-center w-11 h-11 rounded-full text-white transition-all shadow-lg hover:shadow-xl`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.08, duration: 0.25, ease: easeOut }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 4, 
                    y: -2,
                    transition: { duration: 0.16, ease: easeOut } 
                  }}
                  whileTap={{ scale: 0.94 }}
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon size={20} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Location & Contact Info */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5, ease: easeOut }}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Open to remote opportunities</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5, ease: easeOut }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center cursor-pointer hover:border-blue-500/80 transition-colors"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-blue-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
