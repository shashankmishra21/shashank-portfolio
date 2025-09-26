"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;

// Clean X Logo Component (without internal lines)
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

export default function Footer() {
  const socials = [
    {
      href: "mailto:mishrashashank2106@gmail.com",
      label: "Email",
      icon: Mail,
      classes:
        "bg-white hover:bg-red-50 text-[#EA4335] border-red-200/50 hover:border-red-300/80 hover:shadow-red-200/30 dark:bg-neutral-800 dark:hover:bg-red-950/30 dark:text-red-400 dark:border-red-500/20 dark:hover:border-red-400/40",
    },
    {
      href: "https://github.com/shashankmishra21",
      label: "GitHub",
      icon: Github,
      classes:
        "bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200/50 hover:border-neutral-300/80 hover:shadow-neutral-200/30 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:border-neutral-600/30 dark:hover:border-neutral-500/50",
    },
    {
      href: "https://linkedin.com/in/shashankmishra2106",
      label: "LinkedIn",
      icon: Linkedin,
      classes:
        "bg-white hover:bg-blue-50 text-[#0A66C2] border-blue-200/50 hover:border-blue-300/80 hover:shadow-blue-200/30 dark:bg-neutral-800 dark:hover:bg-blue-950/30 dark:text-blue-400 dark:border-blue-500/20 dark:hover:border-blue-400/40",
    },
    {
      href: "https://x.com/mishrashashank_",
      label: "X",
      icon: XLogo, // Clean X logo without internal lines
      classes:
        "bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200/50 hover:border-neutral-300/80 hover:shadow-neutral-200/30 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:border-neutral-600/30 dark:hover:border-neutral-500/50",
    },
  ];

  return (
    <footer id="site-footer" className="relative mt-16 bg-background border-t border-border/50 overflow-hidden">
      {/* Enhanced ambient gradient glows */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-15"
        animate={{
          background: [
            "radial-gradient(70% 70% at 20% 60%, rgba(59,130,246,0.15), transparent 70%)",
            "radial-gradient(70% 70% at 80% 30%, rgba(139,92,246,0.15), transparent 70%)",
            "radial-gradient(70% 70% at 40% 80%, rgba(168,85,247,0.15), transparent 70%)",
          ],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      {/* Subtle grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-6 py-12 md:py-14">
        {/* Main footer content */}
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="space-y-3"
          >
            <Link href="/" className="inline-flex items-center gap-2 group" aria-label="Home">
              <span
                className="text-2xl md:text-3xl font-extrabold tracking-tight"
                style={{
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                }}
              >
                <span className="text-foreground group-hover:text-foreground/80 transition-colors">Shashank </span>
                <span className="text-blue-500">
                  Mishra·
                </span>
              </span>
            </Link>
            
            {/* Updated tagline */}
            <p className="text-sm md:text-base text-muted-foreground">
              {/* Full Stack Developer  • Backend Engineer • DevOps Practitioner  */}
            </p>
          </motion.div>

          {/* Social links with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
            className="flex flex-wrap justify-center gap-3"
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className={`
                  w-11 h-11 rounded-xl grid place-items-center
                  border transition-all duration-200 ${social.classes}
                  shadow-sm hover:shadow-lg
                `}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05, ease: easeOut }}
                whileHover={{
                  y: -3,
                  scale: 1.08,
                  transition: { duration: 0.2, ease: easeOut },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.p
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3, ease: easeOut }}
          >
            Always open to interesting conversations and collaboration opportunities.
          </motion.p>
        </div>

        {/* Divider with enhanced styling */}
        <motion.div
          className="mt-10 mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>

        {/* Bottom section with requested content */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5, ease: easeOut }}
        >
          <p className="text-xs md:text-sm text-foreground/90">
            Built with care and intent by Shashank
          </p>
          
          <p className="text-xs text-muted-foreground">
            © 2025 Shashank Mishra • All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
