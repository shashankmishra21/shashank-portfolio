"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Github, Linkedin, X } from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  const socials = [
    {
      href: "mailto:mishrashashank2106@gmail.com",
      label: "Email",
      icon: Mail,
      classes:
        "bg-white hover:bg-red-50 text-[#EA4335] border-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-rose-400 dark:border-white/10",
    },
    {
      href: "https://github.com/shashankmishra21",
      label: "GitHub",
      icon: Github,
      classes:
        "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-white dark:border-white/10",
    },
    {
      href: "https://linkedin.com/in/shashankmishra2106",
      label: "LinkedIn",
      icon: Linkedin,
      classes:
        "bg-white hover:bg-blue-50 text-[#0A66C2] border-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-blue-400 dark:border-white/10",
    },
    {
      href: "https://x.com/mishrashashank_",
      label: "X",
      icon: X,
      classes:
        "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-white dark:border-white/10",
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 bg-background border-t border-border overflow-hidden">
      {/* Ambient gradient glows */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(60% 60% at 20% 60%, rgba(59,130,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 80% 30%, rgba(139,92,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 40% 80%, rgba(59,130,246,0.12), transparent 60%)",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-6 py-12 md:py-16">
        {/* Brand row */}
        <div className="flex flex-col items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2" aria-label="Home">
            <span
              className="text-2xl md:text-3xl font-extrabold tracking-tight"
              style={{
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              }}
            >
              <span className="text-foreground">Shashank </span>
              <span className="text-blue-600 dark:text-blue-500">Mishra</span>
              <span className="text-blue-600 dark:text-blue-500">·</span>
            </span>
          </Link>

        {/* Tagline with subtle gradient underline */}
          <div className="text-center">
            <p className="text-sm md:text-base text-muted-foreground">
              Full Stack Developer • Backend Engineer • DevOps Practitioner 
            </p>
            <div className="mt-2 h-px w-40 md:w-56 mx-auto bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          </div>
        </div>

        {/* Socials with premium hover */}
        <div className="mt-7 flex items-center justify-center gap-3 sm:gap-4">
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
                shadow-[0_6px_20px_-10px_rgba(59,130,246,0.35)]
              `}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.08 + i * 0.06, ease: easeOut }}
              whileHover={{
                y: -2,
                scale: 1.05,
                boxShadow: "0 16px 40px -12px rgba(59,130,246,0.45)",
                transition: { duration: 0.18, ease: easeOut },
              }}
              whileTap={{ scale: 0.96 }}
            >
              <s.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Gradient divider */}
        <div className="mt-10 mb-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom lines */}
        <div className="text-center space-y-1.5">
          <p className="text-xs md:text-sm text-foreground/90">
            Built with care and intent by Shashank
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            © {year} Shashank Mishra • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
