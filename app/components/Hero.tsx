"use client";
import { Mail, Github, Linkedin, Terminal, Cpu, Database, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

const easeOut = [0.16, 1, 0.3, 1] as const;

// Official X Logo Component
const XLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = useMemo(
    () => ["Backend & Systems Engineer", "AI & RAG Systems Architect", "High-Throughput APIs"],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        min-h-[90vh] lg:min-h-svh flex items-center justify-center
        px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24
        py-20 lg:py-0
      "
    >
      {/* Immersive Deep-Atmosphere Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography, Dynamic Title, & Actions (Span 7) */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            {/* Status Pill */}
            <motion.div
              className="mb-6 inline-flex"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Hire • 0-Day Notice
              </div>
            </motion.div>

            {/* Greeting */}
            <p className="text-muted-foreground font-mono text-sm sm:text-base mb-3 flex items-center gap-2">
              <span className="text-blue-500 font-bold">&gt;</span> 
              <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/90">Software Engineer – Backend & AI</span>
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight mb-4 text-foreground leading-[1.05]">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 drop-shadow-sm">
                Shashank Mishra
              </span>
            </h1>

            {/* Animated Dynamic Role Changer */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-lg sm:text-xl font-display font-medium text-muted-foreground mr-2.5">
                Focusing on
              </span>
              <div className="text-lg sm:text-xl font-display font-bold text-foreground">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.25, ease: easeOut }}
                    className="inline-block text-blue-500 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-8"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Professional Summary Description */}
            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl leading-relaxed font-normal">
              Designing scalable backend services, optimizing query execution speed, and building robust enterprise RAG systems with a bias for performance and system reliability.
            </p>

            {/* Action Buttons & Social Row */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/Resume"
                  className="
                    inline-flex items-center gap-2.5
                    bg-blue-600 hover:bg-blue-700
                    text-white font-medium
                    px-7 py-3.5
                    rounded-xl text-sm sm:text-base
                    shadow-lg shadow-blue-500/20
                    transition-all duration-200
                  "
                >
                  <Terminal className="w-4 h-4" />
                  View Resume & Experience
                  <ArrowRight className="w-4 h-4 ml-0.5 opacity-80" />
                </Link>
              </motion.div>

              {/* Social Links Group */}
              <div className="flex items-center gap-2 ml-0 sm:ml-2">
                {[
                  { href: "mailto:mishrashashank2106@gmail.com", icon: Mail, label: "Email" },
                  { href: "https://github.com/shashankmishra21", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/mishrashashank2106", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://x.com/mishrashashank_", icon: XLogo, label: "X" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={social.label}
                    className="
                      w-11 h-11 rounded-xl bg-card border border-border/70 hover:border-blue-500/50
                      flex items-center justify-center text-muted-foreground hover:text-foreground
                      transition-all duration-200 shadow-sm
                    "
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Profile Card & Floating Technical Tags (Span 5) */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 xl:w-96 xl:h-96 flex items-center justify-center">
              
              {/* Subtle Ambient Backlight */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-2xl" />

              {/* Clean Outer Geometric Ring */}
              <div className="absolute -inset-2 rounded-full border border-blue-500/20 dark:border-blue-500/10" />

              {/* Profile Image Frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border border-border/80 bg-muted shadow-2xl z-10">
                <img
                  src="/profile-image.png"
                  alt="Shashank Mishra"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tech Badge: Backend */}
              <motion.div
                className="absolute top-2 right-0 sm:right-2 z-20 px-3.5 py-2 rounded-xl bg-card/90 border border-border/90 backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-medium"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Cpu className="w-3.5 h-3.5 text-blue-500" />
                <span>Node.js / TS</span>
              </motion.div>

              {/* Floating Tech Badge: Databases & AI */}
              <motion.div
                className="absolute bottom-4 left-0 sm:left-2 z-20 px-3.5 py-2 rounded-xl bg-card/90 border border-border/90 backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-medium"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Database className="w-3.5 h-3.5 text-indigo-500" />
                <span>Database & RAG</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}