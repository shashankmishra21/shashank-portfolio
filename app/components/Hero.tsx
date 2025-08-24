"use client";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
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
      className="
        relative
        max-[767px]:overflow-visible md:overflow-hidden
        min-h-svh md:min-h-screen
        flex items-start md:items-center justify-center
        px-4 md:px-6
        pt-0
        max-[768px]:pb-[calc(100px+env(safe-area-inset-bottom))]
      "
      // If svh unsupported, replace min-h-svh with min-h-screen.
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      {/* Mobile helpers */}
      <style jsx>{`
        @media (max-width: 425px) {
          .hero-tight { padding-top: 0 !important; }
          .row-tight { margin-top: 0 !important; }
          .image-tight { margin-top: 0 !important; }
          .row-tight > *:first-child { margin-top: 0 !important; }
        }
        @media (min-width: 426px) and (max-width: 768px) {
          .grid-426-768-2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>

      {/* Ambient glows */}
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

      <div className="max-w-6xl mx-auto relative z-10 w-full hero-tight">
        <div className="grid grid-cols-1 grid-426-768-2 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-12 items-center row-tight">
          {/* Right: Profile image */}
          <motion.div
            className="
              order-1 lg:order-2 flex justify-center items-center
              image-tight overflow-visible
              max-[480px]:mt-3 sm:mt-2
            "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <div className="relative overflow-visible">
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
                  md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-[26rem] 2xl:h-[26rem]
                  object-cover rounded-full shadow-2xl relative z-10 border-4 border-white/15
                  max-w-full
                "
                whileHover={{ scale: 1.04, rotate: 2, boxShadow: '0 25px 50px -12px rgba(59,130,246,0.35)' }}
                transition={{ duration: 0.25, ease: easeOut }}
              />
              <motion.div
                className="absolute -inset-3 md:-inset-4 rounded-full border-2 border-blue-500/25"
                animate={{ rotate: [0, 360], scale: [1, 1.08, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Left: Text content */}
          <motion.div
            className="order-2 lg:order-1 flex flex-col items-start text-left px-1 sm:px-2 md:px-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            {/* Available for hire badge */}
            <motion.div
              className="mb-2 sm:mb-3"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: easeOut }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[12px] sm:text-xs font-semibold">
                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full" />
                Available for hire
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="text-muted-foreground mb-1 sm:mb-2 text-[13px] sm:text-sm md:text-base font-medium tracking-wide"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.35, ease: easeOut }}
            >
              <span className="mr-2 text-blue-500">{">"}</span>HI, I AM
            </motion.p>

            {/* Name – increased size on mobile */}
            <h1 className="text-[32px] leading-[1.1] xs:text-[34px] sm:text-[38px] md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-display font-black mb-2 tracking-tight self-start">
              <motion.div animate={{ y: [-6, 6, -6], rotate: [-1.2, 1.2, -1.2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
                <span className="text-blue-600 dark:text-blue-500 transition-all">
                  {"Shashank".split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 30, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.55, ease: easeOut }}
                      whileHover={{
                        scale: 1.14,
                        textShadow: "0 0 16px rgba(59,130,246,0.6)",
                        filter: "drop-shadow(0 0 8px rgba(59,130,246,0.45))",
                      }}
                      className="inline-block cursor-pointer transition-all duration-300"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </motion.div>
            </h1>

            {/* Roles – a notch larger */}
            <motion.div
              className="mb-2 min-h-[2.5rem] sm:min-h-[2.6rem] md:min-h-[3.25rem] flex items-center w-full"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: easeOut }}
            >
              <h2 className="text-[18px] xs:text-[19px] sm:text-[21px] md:text-2xl lg:text-3xl xl:text-4xl font-display font-extrabold tracking-tight text-black dark:text-white self-start">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 22, scale: 0.94, rotateX: -90, filter: "blur(1.5px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -18, scale: 0.98, rotateX: 90, filter: "blur(1.5px)" }}
                    transition={{ duration: 0.35, ease: easeOut }}
                    className="inline-block"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </h2>
            </motion.div>

            {/* Resume + Socials – slightly bigger buttons */}
            <motion.div
              className="flex flex-row flex-nowrap items-center gap-x-2.5 sm:gap-x-3.5 md:gap-x-4 w-full"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.14, ease: easeOut }}>
                <Link
                  href="/resume"
                  className="inline-flex items-center border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-3.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full font-semibold transition-all text-[13px] sm:text-sm md:text-[15px] lg:text-base whitespace-nowrap shadow-sm hover:shadow"
                >
                  Resume
                </Link>
              </motion.div>

              {[
                { href: "mailto:mishrashashank2106@gmail.com", icon: Mail, color: "bg-red-500 hover:bg-red-600", label: "Email" },
                { href: "https://github.com/shashankmishra21", icon: Github, color: "bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700", label: "GitHub" },
                { href: "http://linkedin.com/in/mishrashashank2106", icon: Linkedin, color: "bg-blue-600 hover:bg-blue-700", label: "LinkedIn" },
                { href: "https://x.com/mishrashashank_", icon: Twitter, color: "bg-blue-400 hover:bg-blue-500", label: "Twitter" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className={`${social.color} inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-[3.25rem] xl:h-[3.25rem] rounded-full text-white transition-all shadow-lg hover:shadow-xl flex-shrink-0`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.06 + index * 0.06, duration: 0.22, ease: easeOut }}
                  whileHover={{ scale: 1.08, rotate: 3, y: -1, transition: { duration: 0.12, ease: easeOut } }}
                  whileTap={{ scale: 0.94 }}
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="w-[18px] h-[18px] sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
