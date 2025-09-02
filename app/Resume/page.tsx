"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, FileText, Star, CheckCircle } from "lucide-react";
import { useCallback } from "react";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Resume() {
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/Resume-Shashank_Mishra.pdf";
    link.download = "Resume-Shashank_Mishra.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleExternal = useCallback(() => {
    window.open("https://www.linkedin.com/in/mishrashashank2106", "_blank", "noopener,noreferrer");
  }, []);

  const highlights = [
    { text: "Full-stack expertise", icon: CheckCircle },
    { text: "6+ production-ready projects", icon: CheckCircle },
    { text: "Strong DSA & problem-solving", icon: CheckCircle },
    { text: "8.9 CPI academic excellence", icon: Star },
  ];

  return (
    <div className="min-h-svh md:min-h-screen bg-background relative">
      {/* Enhanced ambient background */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none -z-10"
        animate={{
          background: [
            "radial-gradient(60% 60% at 18% 62%, rgba(59,130,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 80% 30%, rgba(139,92,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 42% 82%, rgba(59,130,246,0.12), transparent 60%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <section className="pt-8 md:pt-28 pb-16 md:pb-20 px-5 md:px-6 max-[768px]:pb-[calc(100px+env(safe-area-inset-bottom))]">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced heading */}
          <motion.div
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            
            <div className="text-center mb-6">
              <p className="text-xs md:text-sm tracking-widest font-semibold uppercase">
                Resume
              </p>
              <h2 className="mt-2 text-3xl md:text-5xl font-display font-extrabold tracking-tight">
                <span className="text-blue-500 whitespace-normal">
                  Engineer of Reliable, Efficient Applications
                </span>

              </h2>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-500 text-xs font-semibold mb-0">
              <CheckCircle className="w-4 h-4" />
              Open to internships or full time opportunities
            </div>
            
          </motion.div>


          {/* Quick highlights */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: easeOut }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-2 p-3 rounded-xl bg-accent/20 border border-border/60"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.15 + index * 0.05, ease: easeOut }}
              >
                <item.icon className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-xs md:text-sm font-medium text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced main card */}
          <motion.div
            className="
              relative rounded-2xl p-6 md:p-8
              bg-background/70 backdrop-blur-xl
              border border-border/70 ring-1 ring-white/10
              shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]
              overflow-hidden
            "
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
          >
            {/* Enhanced accent glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl" />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="hidden md:flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-500 shrink-0">
                <FileText className="w-8 h-8" />
              </div>

              <div className="w-full">
                {/* <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                    Shashank Mishra
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground">
                    I specialize in React, Next.js, Node.js, Python, Django, and cloud technologies, and I&apos;m ready to deliver clean code, scalable solutions, and measurable impact for your team&apos;s success.
                  </p>
                </div> */}

                {/* Call-to-action buttons */}
                <div className="flex flex-col sm:flex-row items-center md:justify-center gap-4">
                  {/* Download Resume Button */}
                  <button
                    onClick={handleDownload}
                    className="
      group relative inline-flex items-center justify-center gap-2
      px-6 py-3 rounded-full
      bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
      text-white font-bold text-sm md:text-base
      shadow-[0_12px_28px_-12px_rgba(59,130,246,0.6)]
      hover:shadow-[0_16px_34px_-14px_rgba(59,130,246,0.7)]
      hover:brightness-[1.05] active:brightness-[0.95]
      transition-all duration-200
      w-full sm:w-auto
      focus:outline-none focus:ring-2 focus:ring-blue-500/50
    "
                    aria-label="Download Shashank's Resume"
                  >
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Download Resume
                    <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>

                  {/* LinkedIn Button */}
                  <button
                    onClick={handleExternal}
                    className="
      group inline-flex items-center justify-center gap-2
      px-6 py-3 rounded-full
      bg-background/90 backdrop-blur
      border border-blue-300/60
      text-blue-700 font-semibold text-sm md:text-base
      hover:bg-blue-50 hover:border-blue-500/50
      hover:shadow-[0_8px_20px_-8px_rgba(59,130,246,0.3)]
      transition-all duration-200
      w-full sm:w-auto
      focus:outline-none focus:ring-2 focus:ring-blue-500/50
    "
                    aria-label="Connect with Shashank on LinkedIn"
                  >
                    <ExternalLink className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    Connect on LinkedIn
                  </button>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4, ease: easeOut }}
          >
            <p className="text-xs md:text-sm text-muted-foreground">
              💼 Open to internships or full-time opportunities
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
