"use client";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = useMemo(
    () => ["Full Stack Web Developer", "Backend Specialist", "DevOps Enthusiast"],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <motion.section
      id="home"
      className="
        relative overflow-hidden
        min-h-screen
        flex items-center justify-center
        px-4 md:px-6
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Animated background (subtle) */}
      <motion.div
        className="absolute inset-0 opacity-25"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.12) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(139,92,246,0.12) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(59,130,246,0.12) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.12) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
          {/* Right: Profile image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg md:blur-xl"
                animate={{ scale: [1, 1.12, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
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
                  rotate: 3,
                  boxShadow: "0 22px 44px rgba(59,130,246,0.28)",
                }}
              />
              <motion.div
                className="absolute -inset-3 md:-inset-4 rounded-full border-2 border-blue-500/25"
                animate={{ rotate: [0, 360], scale: [1, 1.08, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Left: Text content */}
          <motion.div
            className="order-2 lg:order-1 px-1 sm:px-2 md:px-0"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-muted-foreground mb-2 md:mb-4 text-xs sm:text-sm md:text-base font-medium tracking-wide">
              <span className="mr-2">{">"}</span>HI I AM
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-foreground mb-3 md:mb-5 tracking-tight leading-tight">
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [-1.5, 1.5, -1.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {"Shashank".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.6, ease: "easeOut" }}
                    whileHover={{
                      scale: 1.15,
                      color: "#3b82f6",
                      textShadow: "0 0 16px rgba(59,130,246,0.45)",
                      transition: { duration: 0.18 },
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </h1>

            <motion.div
              className="mb-4 md:mb-6 h-10 sm:h-11 md:h-16 flex items-center"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-muted-foreground min-h-[2.25rem] flex items-center">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="text-blue-500 font-display block"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </div>
            </motion.div>

            <div className="flex items-center gap-3 sm:gap-4 mb-3 md:mb-5">
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 10px 24px rgba(59,130,246,0.26)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.16 }}
              >
                <Link
                  href="/resume"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all text-sm sm:text-base inline-block"
                >
                  Resume
                </Link>
              </motion.div>

              <motion.div
                className="flex justify-start gap-2 sm:gap-3"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.1 }}
              >
                {[
                  {
                    href: "mailto:mishrashashank2106@gmail.com",
                    icon: Mail,
                    color: "bg-red-500 hover:bg-red-600",
                  },
                  {
                    href: "https://github.com/shashankmishra21",
                    icon: Github,
                    color: "bg-gray-700 hover:bg-gray-800",
                  },
                  {
                    href: "http://linkedin.com/in/mishrashashank2106",
                    icon: Linkedin,
                    color: "bg-blue-600 hover:bg-blue-700",
                  },
                  {
                    href: "https://x.com/mishrashashank_",
                    icon: Twitter,
                    color: "bg-blue-400 hover:bg-blue-500",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className={`${social.color} inline-flex items-center justify-center w-9 h-9 rounded-full text-white transition-colors`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.08, duration: 0.25 }}
                    whileHover={{ scale: 1.12, rotate: 4, transition: { duration: 0.16 } }}
                    whileTap={{ scale: 0.94 }}
                    aria-label={social.href}
                  >
                    <social.icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
