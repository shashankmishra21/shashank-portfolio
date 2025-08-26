"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const DURATION_MS = 2800; // total loading time
const EXIT_FADE_MS = 500;
const easeOut = [0.16, 1, 0.3, 1] as const;

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);

  const messages = useMemo(
    () => [
      "Bootstrapping runtime…",
      "Warming APIs…",
      "Hydrating UI…",
      "Linking services…",
      "Optimizing bundles…",
      "Almost there…",
    ],
    []
  );

  useEffect(() => {
    const start = performance.now();
    let rafId = 0;

    const tick = (t: number) => {
      const pct = Math.min(100, Math.floor(((t - start) / DURATION_MS) * 100));
      setProgress(pct);
      if (pct < 100) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const step = Math.max(500, Math.floor(DURATION_MS / messages.length));
    const timers: number[] = [];
    for (let i = 1; i < messages.length; i++) {
      timers.push(window.setTimeout(() => setMsgIdx(i), i * step));
    }

    const complete = window.setTimeout(() => {
      setVisible(false);
      window.setTimeout(onLoadingComplete, EXIT_FADE_MS);
    }, DURATION_MS + 50);

    return () => {
      cancelAnimationFrame(rafId);
      timers.forEach(clearTimeout);
      clearTimeout(complete);
    };
  }, [messages.length, onLoadingComplete]);

  // Exit animation
  if (!visible) {
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
      role="dialog"
      aria-modal="true"
      aria-label="Loading screen"
    >
      {/* Ambient layers: grid + vertical scan */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59,130,246,0.18) 1px, transparent 1px),
              linear-gradient(0deg, rgba(37,99,235,0.14) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 50px 50px",
          }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(180deg,
                transparent 0%,
                rgba(59,130,246,0.08) 2%,
                rgba(37,99,235,0.22) 3%,
                rgba(59,130,246,0.08) 4%,
                transparent 6%
              )
            `,
            backgroundSize: "100% 220px",
            opacity: 0.6,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Center panel */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <motion.div
          className="
            relative w-[min(96vw,980px)]
            rounded-2xl overflow-hidden
            bg-gradient-to-br from-gray-900 via-black to-gray-900
            border border-blue-500/25
            shadow-[0_0_60px_rgba(59,130,246,0.35)]
            backdrop-blur-md
          "
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-blue-500/20 bg-gray-800/40">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/90" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/90" />
              </div>
              <span className="font-mono text-xs sm:text-sm text-gray-300">~/shashank-portfolio</span>
            </div>
            <div className="font-mono text-xs sm:text-sm text-blue-400">
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              >
                LOADING
              </motion.span>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 sm:px-8 py-8 sm:py-10">
            {/* Title with gradient motion */}
            <motion.h1
              className="text-center text-2xl sm:text-4xl md:text-5xl font-bold mb-6"
             
style={{
  fontFamily: "'JetBrains Mono', monospace",
  fontWeight: "300"
}}
            >
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 100%" }}
              >
                initializing your session
              </motion.span>
            </motion.h1>

            {/* Progress stack: ring + bar */}
            <div className="flex flex-col items-center gap-8 mb-6">
              {/* Ring */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
              >
                <svg width="140" height="140" viewBox="0 0 120 120">
                  <defs>
                    <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="50%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#0EA5E9" />
                    </linearGradient>
                  </defs>
                  <circle cx="60" cy="60" r="52" stroke="rgba(59,130,246,0.2)" strokeWidth="10" fill="none" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="52"
                    stroke="url(#ring)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={Math.PI * 2 * 52}
                    strokeDashoffset={Math.PI * 2 * 52 * (1 - progress / 100)}
                    animate={{ strokeDashoffset: Math.PI * 2 * 52 * (1 - progress / 100) }}
                    transition={{ duration: 0.3, ease: easeOut }}
                    style={{ filter: "drop-shadow(0 0 10px rgba(59,130,246,0.6))" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-mono text-3xl sm:text-4xl font-black">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {progress}
                    </span>
                    <span className="text-blue-400">%</span>
                  </div>
                </div>
              </motion.div>

              {/* Bar */}
              <motion.div
                className="w-full max-w-[520px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15, ease: easeOut }}
              >
                <div className="flex justify-between text-[12px] sm:text-sm font-mono text-gray-400 mb-2">
                  <span>Progress</span>
                  <span>{progress}/100</span>
                </div>
                <div className="relative h-3.5 rounded-full bg-gray-800 border border-gray-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-800/20" />
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: easeOut }}
                    style={{
                      background: "linear-gradient(90deg,#0ea5e9,#3b82f6,#2563eb)",
                      boxShadow: "0 0 18px rgba(59,130,246,0.6)",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      animate={{ x: ["-60%", "140%"] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
                        width: "45%",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Status message */}
            <motion.p
              key={msgIdx}
              className="text-center text-sm sm:text-base font-mono text-gray-300 mb-8"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: easeOut }}
            >
              <span className="text-blue-400">$</span> {messages[msgIdx]}
              <motion.span
                className="inline-block ml-2 w-2.5 h-5 bg-blue-400 align-[-2px]"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.p>

            {/* Tech ticker */}
            <div className="border-t border-blue-500/20 bg-gray-900/40 overflow-hidden">
              <motion.div
                className="flex whitespace-nowrap py-3"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
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
                    <span key={i} className="mx-8 text-[13px] sm:text-sm font-mono font-semibold">
                      <span className="text-blue-400">[</span>
                      <span className="text-gray-300">{tech}</span>
                      <span className="text-blue-400">]</span>
                    </span>
                  ))}
              </motion.div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-full blur-xl" />
          </div>
        </motion.div>
      </div>

      {/* Reduced motion accessibility */}
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
