"use client";
import { Mail, Github, Linkedin } from "lucide-react";
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
      className="
        relative overflow-hidden
        min-h-svh flex items-center justify-center
        px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
        py-8 sm:py-12 md:py-0
        max-[768px]:pb-[calc(100px+env(safe-area-inset-bottom))]
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      {/* Enhanced ambient background */}
      <motion.div
        className="absolute inset-0 opacity-15 md:opacity-20"
        animate={{
          background: [
            "radial-gradient(70% 70% at 20% 50%, rgba(59,130,246,0.12), transparent 70%)",
            "radial-gradient(70% 70% at 80% 40%, rgba(139,92,246,0.12), transparent 70%)",
            "radial-gradient(70% 70% at 50% 60%, rgba(59,130,246,0.12), transparent 70%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      {/* Balanced container */}
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Mobile and small tablet layout (stacked, centered) */}
        <div className="block lg:hidden">
          <div className="flex flex-col items-center text-center space-y-8">
            
            {/* Profile image first on mobile */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: easeOut }}
            >
              <div className="relative">
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 opacity-25 blur-2xl"
                  animate={{ 
                    scale: [1, 1.15, 1], 
                    rotate: [0, 180, 360] 
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                
                {/* Profile image */}
                <motion.img
                  src="/profile-image.png"
                  alt="Shashank Mishra - Full Stack Developer"
                  className="
                    w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64
                    object-cover rounded-full shadow-2xl relative z-10 
                    border-4 border-white/20 dark:border-white/10
                    ring-2 ring-blue-500/20
                  "
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 3, 
                    boxShadow: '0 25px 50px -12px rgba(59,130,246,0.4)' 
                  }}
                  transition={{ duration: 0.3, ease: easeOut }}
                />
                
                {/* Animated border ring */}
                <motion.div
                  className="absolute -inset-4 rounded-full border-2 border-blue-500/30"
                  animate={{ 
                    rotate: [0, 360], 
                    scale: [1, 1.05, 1] 
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
              </div>
            </motion.div>

            {/* Text content centered below image */}
            <motion.div
              className="flex flex-col items-center text-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {/* Status badge */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold backdrop-blur-sm">
                  <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Available for hire
                </span>
              </motion.div>

              {/* Greeting */}
              <motion.p
                className="text-muted-foreground mb-4 text-sm sm:text-base md:text-lg font-medium tracking-wide"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5, ease: easeOut }}
              >
                <span className="mr-3 text-blue-500 font-mono">{">"}</span>
                <span className="uppercase tracking-wider">Hi, I am</span>
              </motion.p>

              {/* Name - Centered and responsive */}
              <h1 className="
                text-4xl sm:text-5xl md:text-6xl
                font-display font-black mb-6 tracking-tight 
                leading-[0.9] text-center
              ">
                <motion.div 
                  animate={{ 
                    y: [-3, 3, -3], 
                    rotate: [-0.5, 0.5, -0.5] 
                  }} 
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <span className="text-blue-600 dark:text-blue-500 transition-colors duration-300">
                    {"Shashank".split("").map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 40, rotateX: -90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ 
                          delay: i * 0.08, 
                          duration: 0.6, 
                          ease: easeOut 
                        }}
                        whileHover={{
                          scale: 1.1,
                          textShadow: "0 0 20px rgba(59,130,246,0.6)",
                          filter: "drop-shadow(0 0 10px rgba(59,130,246,0.4))",
                          transition: { duration: 0.2 }
                        }}
                        className="inline-block cursor-pointer transition-all duration-300"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </motion.div>
              </h1>

              {/* Dynamic roles - Centered */}
              <motion.div
                className="
                  mb-8 
                  min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]
                  flex items-center justify-center w-full
                "
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
              >
                <h2 className="
                  text-lg sm:text-xl md:text-2xl
                  font-display font-extrabold tracking-tight text-foreground text-center
                ">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRoleIndex}
                      initial={{ 
                        opacity: 0, 
                        y: 25, 
                        scale: 0.95, 
                        rotateX: -90, 
                        filter: "blur(2px)" 
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
                        y: -20, 
                        scale: 0.98, 
                        rotateX: 90, 
                        filter: "blur(2px)" 
                      }}
                      transition={{ duration: 0.4, ease: easeOut }}
                      className="inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
                    >
                      {roles[currentRoleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </h2>
              </motion.div>

              {/* CTA buttons - Centered layout */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
              >
                {/* Resume button */}
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.98 }} 
                  transition={{ duration: 0.2, ease: easeOut }}
                >
                  <Link
                    href="/resume"
                    className="
                      inline-flex items-center justify-center
                      bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
                      text-white font-semibold
                      px-8 py-4
                      rounded-full text-base
                      shadow-lg hover:shadow-xl hover:shadow-blue-500/25
                      transition-all duration-300
                      border border-blue-500/50
                      backdrop-blur-sm
                      min-w-[140px]
                    "
                  >
                    View Resume
                  </Link>
                </motion.div>

                {/* Social icons */}
                <div className="flex items-center gap-4">
                  {[
                    { 
                      href: "mailto:mishrashashank2106@gmail.com", 
                      icon: Mail, 
                      color: "bg-red-500 hover:bg-red-600", 
                      label: "Email" 
                    },
                    { 
                      href: "https://github.com/shashankmishra21", 
                      icon: Github, 
                      color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800", 
                      label: "GitHub" 
                    },
                    { 
                      href: "https://linkedin.com/in/mishrashashank2106", 
                      icon: Linkedin, 
                      color: "bg-blue-600 hover:bg-blue-700", 
                      label: "LinkedIn" 
                    },
                    { 
                      href: "https://x.com/mishrashashank_", 
                      icon: XLogo, 
                      color: "bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900", 
                      label: "X" 
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className={`
                        ${social.color} 
                        inline-flex items-center justify-center 
                        w-14 h-14
                        rounded-full text-white 
                        transition-all duration-300 
                        shadow-lg hover:shadow-xl
                        border border-white/10
                        backdrop-blur-sm
                      `}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: 0.4 + index * 0.1, 
                        duration: 0.4, 
                        ease: easeOut,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5, 
                        y: -2,
                        transition: { duration: 0.2, ease: easeOut } 
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Large screen layout - BALANCED GRID */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-center min-h-[70vh] xl:min-h-[60vh]">
          
          {/* Text content - Properly sized */}
          <motion.div
            className="flex flex-col items-start text-left justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            {/* Status badge */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-sm font-semibold backdrop-blur-sm">
                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Available for hire
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="text-muted-foreground mb-4 text-lg font-medium tracking-wide"
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: easeOut }}
            >
              <span className="mr-3 text-blue-500 font-mono">{">"}</span>
              <span className="uppercase tracking-wider">Hi, I am</span>
            </motion.p>

            {/* Name - Maintained original size */}
            <h1 className="text-6xl xl:text-7xl 2xl:text-8xl font-display font-black mb-6 tracking-tight leading-[0.85]">
              <motion.div 
                animate={{ 
                  y: [-3, 3, -3], 
                  rotate: [-0.5, 0.5, -0.5] 
                }} 
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <span className="text-blue-600 dark:text-blue-500 transition-colors duration-300">
                  {"Shashank".split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 40, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ 
                        delay: i * 0.08, 
                        duration: 0.6, 
                        ease: easeOut 
                      }}
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0 0 20px rgba(59,130,246,0.6)",
                        filter: "drop-shadow(0 0 10px rgba(59,130,246,0.4))",
                        transition: { duration: 0.2 }
                      }}
                      className="inline-block cursor-pointer transition-all duration-300"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </motion.div>
            </h1>

            {/* Dynamic roles - Maintained size */}
            <motion.div
              className="mb-8 min-h-[3.5rem] xl:min-h-[4rem] flex items-center w-full"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
            >
              <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-display font-extrabold tracking-tight text-foreground">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ 
                      opacity: 0, 
                      y: 25, 
                      scale: 0.95, 
                      rotateX: -90, 
                      filter: "blur(2px)" 
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
                      y: -20, 
                      scale: 0.98, 
                      rotateX: 90, 
                      filter: "blur(2px)" 
                    }}
                    transition={{ duration: 0.4, ease: easeOut }}
                    className="inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </h2>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-row items-center gap-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
            >
              {/* Resume button */}
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.98 }} 
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <Link
                  href="/resume"
                  className="
                    inline-flex items-center justify-center
                    bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
                    text-white font-semibold
                    px-8 py-4
                    rounded-full text-base
                    shadow-lg hover:shadow-xl hover:shadow-blue-500/25
                    transition-all duration-300
                    border border-blue-500/50
                    backdrop-blur-sm
                  "
                >
                  View Resume
                </Link>
              </motion.div>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                {[
                  { 
                    href: "mailto:mishrashashank2106@gmail.com", 
                    icon: Mail, 
                    color: "bg-red-500 hover:bg-red-600", 
                    label: "Email" 
                  },
                  { 
                    href: "https://github.com/shashankmishra21", 
                    icon: Github, 
                    color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800", 
                    label: "GitHub" 
                  },
                  { 
                    href: "https://linkedin.com/in/mishrashashank2106", 
                    icon: Linkedin, 
                    color: "bg-blue-600 hover:bg-blue-700", 
                    label: "LinkedIn" 
                  },
                  { 
                    href: "https://x.com/mishrashashank_", 
                    icon: XLogo, 
                    color: "bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900", 
                    label: "X" 
                  },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className={`
                      ${social.color} 
                      inline-flex items-center justify-center 
                      w-14 h-14
                      rounded-full text-white 
                      transition-all duration-300 
                      shadow-lg hover:shadow-xl
                      border border-white/10
                      backdrop-blur-sm
                    `}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      delay: 0.4 + index * 0.1, 
                      duration: 0.4, 
                      ease: easeOut,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5, 
                      y: -2,
                      transition: { duration: 0.2, ease: easeOut } 
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile image - Same size, better positioning */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <div className="relative">
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 opacity-25 blur-2xl"
                animate={{ 
                  scale: [1, 1.15, 1], 
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
              
              {/* Profile image - Maintained original size */}
              <motion.img
                src="/profile-image.png"
                alt="Shashank Mishra - Full Stack Developer"
                className="
                  w-64 h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80
                  object-cover rounded-full shadow-2xl relative z-10 
                  border-4 border-white/20 dark:border-white/10
                  ring-2 ring-blue-500/20
                "
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 3, 
                  boxShadow: '0 25px 50px -12px rgba(59,130,246,0.4)' 
                }}
                transition={{ duration: 0.3, ease: easeOut }}
              />
              
              {/* Animated border ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-blue-500/30"
                animate={{ 
                  rotate: [0, 360], 
                  scale: [1, 1.05, 1] 
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
