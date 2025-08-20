"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, X } from "lucide-react";

export default function Footer() {
  // Brand-colored social icon styles (tune to match your Hero exactly if needed)
  const socials = [
    {
      href: "mailto:mishrashashank2106@gmail.com",
      label: "Email",
      icon: Mail,
      // Gmail-like red
      classes:
        "bg-white hover:bg-red-50 text-[#EA4335] border-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-rose-400 dark:border-white/10",
    },
    {
      href: "https://github.com/shashankmishra21",
      label: "GitHub",
      icon: Github,
      // GitHub black/white
      classes:
        "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-white dark:border-white/10",
    },
    {
      href: "https://linkedin.com/in/shashankmishra2106",
      label: "LinkedIn",
      icon: Linkedin,
      // LinkedIn blue
      classes:
        "bg-white hover:bg-blue-50 text-[#0A66C2] border-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-blue-400 dark:border-white/10",
    },
    {
      href: "https://x.com/mishrashashank_",
      label: "X",
      icon: X,
      // X black/white
      classes:
        "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-white dark:border-white/10",
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-neutral-200 dark:border-white/10 bg-background">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-10 md:py-12">
        {/* Brand row */}
        <div className="flex flex-col items-center gap-4">
          <a href="/" className="inline-flex items-center gap-2" aria-label="Home">
            <span 
              className="text-xl md:text-2xl font-extrabold tracking-tight" 
              style={{ 
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', 
              }}
            >
              <span className="text-foreground">Shashank </span>
              <span className="text-blue-600 dark:text-blue-500">Mishra</span>
              <span className="text-blue-600 dark:text-blue-500">·</span>
            </span>
          </a>

          {/* Tagline */}
          <p className="text-sm md:text-base text-muted-foreground text-center">
            Full Stack Developer • Backend Engineer • DevOps Practitioner
          </p>
        </div>

        {/* Socials */}
        <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={s.label}
              className={`
                w-10 h-10 sm:w-11 sm:h-11 rounded-md grid place-items-center
                border transition-colors ${s.classes}
              `}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.08 + i * 0.06 }}
              whileTap={{ scale: 0.95 }}
            >
              <s.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-8 mb-6 border-t border-neutral-200 dark:border-white/10" />

        {/* Bottom lines */}
        <div className="text-center space-y-2">
          <p className="text-xs md:text-sm text-neutral-700 dark:text-white/90">
            Built with love by Shashank
          </p>
          <p className="text-xs md:text-sm text-neutral-600 dark:text-white/80">
            © {year} Shashank Mishra • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
