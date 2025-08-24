"use client";
import { Sun, Moon, Home, User, FileText, Code, GraduationCap } from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  // Theme
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  // Scroll hide/show logic
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      
      if (pathname === '/') {
        // Always show header on home page
        setShowHeader(true);
      } else {
        // Hide/show header based on scroll direction for other pages
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scrolling down - hide header
          setShowHeader(false);
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up - show header
          setShowHeader(true);
        }
      }
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navItems = useMemo(
    () => [
      { href: "/", icon: Home, label: "HOME", active: pathname === "/" },
      { href: "/projects", icon: Code, label: "PROJECTS", active: pathname === "/projects" },
      { href: "/skills", icon: User, label: "SKILLS", active: pathname === "/skills" },
      { href: "/resume", icon: FileText, label: "RESUME", active: pathname === "/resume" },
    ],
    [pathname]
  );

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        className="hidden md:block fixed top-0 w-full z-50"
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: showHeader ? 0 : -100, 
          opacity: showHeader ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: easeOut }}
      >
        <div className="relative">
          {/* Ambient glow ribbon */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-20"
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
          {/* Bar */}
          <nav className="relative bg-background/90 backdrop-blur-xl border-b border-border">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              {/* Brand with Footer styling */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45, ease: easeOut }}
              >
                <Link href="/" className="inline-flex items-center" aria-label="Home">
                  <span 
                    className="text-xl md:text-2xl font-extrabold tracking-tight"
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
              </motion.div>

              {/* Nav + Theme */}
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
              >
                {/* Enhanced Nav with gradient active states */}
                <div className="hidden md:flex items-center gap-5">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.35, delay: 0.15 + index * 0.05, ease: easeOut }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Link
                        href={item.href}
                        className={[
                          "relative inline-flex items-center gap-2 text-sm font-semibold transition-all",
                          item.active
                            ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
                            : "text-muted-foreground hover:text-foreground",
                        ].join(" ")}
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="font-display tracking-tight">
                          {item.label}
                        </span>
                        {item.active && (
                          <motion.span 
                            className="pointer-events-none absolute -bottom-3 left-0 right-0 mx-auto h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.3, ease: easeOut }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Theme toggle */}
                <motion.button
                  onClick={toggleDarkMode}
                  className="p-2.5 rounded-full bg-accent/40 hover:bg-accent/60 backdrop-blur-sm border border-border/50 transition-all"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.45, ease: easeOut }}
                  whileHover={{ 
                    scale: 1.08, 
                    rotate: 12,
                    boxShadow: "0 4px 12px rgba(59,130,246,0.15)"
                  }}
                  whileTap={{ scale: 0.92 }}
                  aria-label="Toggle theme"
                  title="Toggle theme"
                >
                  {darkMode ? 
                    <Sun size={18} className="text-amber-500" /> : 
                    <Moon size={18} className="text-blue-500" />
                  }
                </motion.button>
              </motion.div>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Header (top) */}
      <motion.header
        className="md:hidden fixed top-0 w-full z-50"
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: showHeader ? 0 : -80, 
          opacity: showHeader ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: easeOut }}
      >
        <nav className="bg-background/90 backdrop-blur-xl border-b border-border px-4 sm:px-5 py-3 flex items-center justify-between">
          {/* Brand compact with Footer styling */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            <Link href="/" className="inline-flex items-center" aria-label="Home">
              <span
                className="text-lg sm:text-xl font-extrabold tracking-tight"
                style={{
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                }}
              >
                <span className="text-foreground">S</span>
                <span className="text-blue-600 dark:text-blue-500">M</span>
                <span className="text-blue-600 dark:text-blue-500">·</span>
              </span>
            </Link>
          </motion.div>

          {/* Enhanced Theme toggle for mobile */}
          <motion.button
            onClick={toggleDarkMode}
            className="relative inline-flex items-center justify-center h-10 w-10 sm:h-10 sm:w-10 rounded-full bg-accent/60 backdrop-blur-sm border border-border/50 text-foreground hover:bg-accent transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: easeOut }}
            whileHover={{ 
              scale: 1.08, 
              rotate: 12,
              boxShadow: "0 4px 12px rgba(59,130,246,0.15)"
            }}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle theme"
            title="Toggle theme"
            style={{ zIndex: 1 }}
          >
            <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/5 dark:ring-white/10" />
            {darkMode ? 
              <Sun size={18} className="text-amber-500" /> : 
              <Moon size={18} className="text-blue-500" />
            }
          </motion.button>
        </nav>
      </motion.header>

      {/* Enhanced Mobile Bottom Navigation */}
      <motion.nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: showHeader ? 0 : 100, 
          opacity: showHeader ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: easeOut }}
      >
        <div className="bg-background/90 backdrop-blur-xl border-t border-border">
          <div className="flex items-center justify-around py-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.1 + index * 0.05, ease: easeOut }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.92 }}
              >
                <Link
                  href={item.href}
                  className={[
                    "flex flex-col items-center gap-1 p-3 rounded-lg transition-all relative",
                    item.active
                      ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
                      : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                  aria-label={item.label}
                  title={item.label}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-[10px] font-semibold tracking-wide font-display">
                    {item.label}
                  </span>
                  {item.active && (
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-600/10 border border-blue-500/20"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, ease: easeOut }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
