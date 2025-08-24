"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const DURATION_MS = 3200; // total loading time (ms)
const EXIT_FADE_MS = 600; // fade-out after complete
const easeOut = [0.16, 1, 0.3, 1] as const;

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  // Professional dev messages with more impact
  const messages = useMemo(
    () => [
      "Initializing systems...",
      "Compiling components...",
      "Loading databases...",
      "Establishing connections...",
      "Optimizing performance...",
      "Ready to deploy...",
    ],
    []
  );

  useEffect(() => {
    // Progress animation (time-based, smooth)
    const start = performance.now();
    let rafId = 0;

    const tick = (t: number) => {
      const elapsed = t - start;
      const pct = Math.min(100, Math.floor((elapsed / DURATION_MS) * 100));
      setProgress(pct);
      if (pct < 100) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    // Messages rotation
    const step = Math.max(700, Math.floor(DURATION_MS / messages.length));
    const timers: number[] = [];
    for (let i = 1; i < messages.length; i++) {
      timers.push(window.setTimeout(() => setMessageIndex(i), i * step));
    }

    // Complete sequence
    const completeTimer = window.setTimeout(() => {
      setIsVisible(false);
      window.setTimeout(onLoadingComplete, EXIT_FADE_MS);
    }, DURATION_MS + 50);

    return () => {
      cancelAnimationFrame(rafId);
      timers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [messages.length, onLoadingComplete]);

  // Exit fade
  if (!isVisible) {
    return (
      <motion.div
        className="fixed inset-0 z-[9999] bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: EXIT_FADE_MS / 1000, ease: easeOut }}
        aria-hidden
      />
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-label="Loading screen"
      role="dialog"
      aria-modal="true"
    >
      {/* Matrix-style animated background */}
      <div className="absolute inset-0">
        {/* Animated grid lines */}
        <motion.div
          className="absolute inset-0 opacity-[0.15]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(0deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(45deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px, 60px 60px, 40px 40px",
          }}
        />

        {/* Scanning lines effect */}
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(180deg, 
                transparent 0%, 
                rgba(0, 255, 255, 0.1) 2%, 
                rgba(0, 255, 255, 0.3) 3%, 
                rgba(0, 255, 255, 0.1) 4%, 
                transparent 6%
              )
            `,
            backgroundSize: "100% 200px",
          }}
        />
      </div>

      {/* Floating code elements (deterministic) */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400/30 font-mono text-xs select-none"
          style={{
            left: `${(i * 127) % 90 + 5}%`,
            top: `${(i * 89) % 80 + 10}%`,
            transform: `rotate(${(i * 23) % 360}deg)`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            rotate: [(i * 23) % 360, ((i * 23) % 360) + 360],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: easeOut,
            delay: i * 0.2,
          }}
          aria-hidden="true"
        >
          {["{ }", "< />", "[ ]", "()", "=>", "&&", "||", "!="][i % 8]}
        </motion.div>
      ))}

      {/* Central terminal panel */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <motion.div
          className="
            relative w-[min(95vw,1000px)] 
            bg-gradient-to-br from-gray-900 via-black to-gray-900
            border-2 border-cyan-400/30
            rounded-2xl
            shadow-[0_0_60px_rgba(6,182,212,0.4)]
            backdrop-blur-sm
            overflow-hidden
          "
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          {/* Terminal header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-400/20 bg-gray-800/50">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-gray-300 font-mono text-sm">~/shashank-portfolio</span>
            </div>
            <div className="text-cyan-400 font-mono text-sm">
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              >
                LOADING...
              </motion.span>
            </div>
          </div>

          {/* Main content */}
          <div className="px-6 sm:px-10 py-8 sm:py-12">
            {/* ASCII Art Logo */}
            <motion.div
              className="text-center font-mono text-cyan-400 text-xs sm:text-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
            >
              <div className="whitespace-pre-line">
{`  _____ _   _          _____ _   _          _   _ _  __
 / ____| | | |   /\\   / ____| | | |   /\\   | \\ | | |/ /
| (___ | |_| |  /  \\ | (___ | |_| |  /  \\  |  \\| | ' / 
 \\___ \\|  _  | / /\\ \\ \\___ \\|  _  | / /\\ \\ | . \` |  <  
 ____) | | | |/ ____ \\____) | | | |/ ____ \\| |\\  | . \\ 
|_____/|_| |_/_/    \\_\\_____/|_| |_/_/    \\_\\_| \\_|_|\\_\\`}
              </div>
            </motion.div>

            {/* Developer title with glitch effect */}
            <motion.h1
              className="text-center text-2xl sm:text-4xl md:text-5xl font-bold mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
            >
              <motion.span
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 100%" }}
              >
                FULL STACK DEVELOPER
              </motion.span>

              {/* Glitch effect overlay */}
              <motion.span
                className="absolute inset-0 text-red-500 mix-blend-multiply opacity-0"
                animate={{ opacity: [0, 0.7, 0], x: [-2, 2, -1, 1, 0] }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: 3,
                  times: [0, 0.1, 0.2, 0.3, 1],
                  ease: easeOut,
                }}
                aria-hidden="true"
              >
                FULL STACK DEVELOPER
              </motion.span>
            </motion.h1>

            {/* Large progress display */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: easeOut }}
            >
              <motion.div
                className="text-8xl sm:text-9xl font-mono font-black mb-4"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(6,182,212,0.5)",
                    "0 0 40px rgba(6,182,212,0.8)",
                    "0 0 20px rgba(6,182,212,0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {progress}
                </span>
                <span className="text-cyan-400">%</span>
              </motion.div>
            </motion.div>

            {/* Advanced progress bar */}
            <motion.div
              className="mb-8 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: easeOut }}
            >
              <div className="flex justify-between text-sm font-mono text-gray-400">
                <span>Loading Progress</span>
                <span>{progress}/100</span>
              </div>

              <div className="relative h-4 bg-gray-800 rounded-full border border-gray-700 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20" />

                {/* Progress fill */}
                <motion.div
                  className="h-full rounded-full relative overflow-hidden"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  style={{
                    background: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)",
                    boxShadow: "0 0 20px rgba(6,182,212,0.6)",
                  }}
                >
                  {/* Animated shimmer effect */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                      width: "50%",
                    }}
                  />
                </motion.div>

                {/* Progress indicator dots */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 rounded-full bg-cyan-300/50"
                      animate={{
                        scale: progress > i * 10 ? [1, 1.5, 1] : 1,
                        opacity: progress > i * 10 ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.3, delay: i * 0.05, ease: easeOut }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Status message with typewriter cursor */}
            <motion.div
              className="text-center mb-6"
              key={messageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easeOut }}
            >
              <p className="text-lg font-mono text-gray-300">
                <span className="text-cyan-400">$</span> {messages[messageIndex]}
                <motion.span
                  className="inline-block ml-2 w-3 h-6 bg-cyan-400"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </p>
            </motion.div>

            {/* Loading dots */}
            <motion.div
              className="flex justify-center space-x-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, ease: easeOut }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
                />
              ))}
            </motion.div>
          </div>

          {/* Tech stack ticker - enhanced */}
          <div className="border-t border-cyan-400/20 bg-gray-900/50 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap py-3"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Python",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "AWS",
                "Kubernetes",
                "GraphQL",
                "Next.js",
                "Express",
                "Redis",
                "Elasticsearch",
                "Microservices",
              ]
                .concat([
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "Docker",
                  "AWS",
                  "Kubernetes",
                  "GraphQL",
                  "Next.js",
                  "Express",
                  "Redis",
                  "Elasticsearch",
                  "Microservices",
                ])
                .map((tech, i) => (
                  <span key={i} className="mx-8 text-sm font-mono font-semibold">
                    <span className="text-cyan-400">[</span>
                    <span className="text-gray-300">{tech}</span>
                    <span className="text-cyan-400">]</span>
                  </span>
                ))}
            </motion.div>
          </div>

          {/* Corner accent lights */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-full blur-xl" />
        </motion.div>
      </div>

      {/* Accessibility and reduced motion */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default LoadingScreen;
