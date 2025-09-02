"use client";
import { Sun, Moon, Home, User, FileText, Code } from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(true);
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

  // Scroll logic
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (pathname === "/") {
        setShowHeader(true);
      } else {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setShowHeader(false);
        } else if (currentScrollY < lastScrollY.current) {
          setShowHeader(true);
        }
      }

      const distanceFromBottom = documentHeight - (currentScrollY + windowHeight);
      const footerThreshold = 200;

      if (distanceFromBottom <= footerThreshold) {
        setShowBottomNav(false);
      } else {
        setShowBottomNav(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navItems = useMemo(
    () => [
      { href: "/", icon: Home, label: "HOME", active: pathname === "/" },
      { href: "/projects", icon: Code, label: "PROJECTS", active: pathname === "/projects" },
      { href: "/skills", icon: User, label: "SKILLS", active: pathname === "/skills" },
      { href: "/Resume", icon: FileText, label: "RESUME", active: pathname === "/Resume" },
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
          opacity: showHeader ? 1 : 0,
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
                "radial-gradient(60% 60% at 80% 30%, rgba(59,130,246,0.12), transparent 60%)",
                "radial-gradient(60% 60% at 42% 82%, rgba(59,130,246,0.12), transparent 60%)",
              ],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />
          {/* Bar */}
          <nav className="relative bg-background/90 backdrop-blur-xl border-b border-border">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              {/* Brand */}
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
                    <span className="text-blue-500">Mishra·</span>
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
                {/* Nav */}
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
                          "relative inline-flex items-center gap-2 text-sm font-extrabold tracking-tight transition-all",
                          item.active
                            ? "text-blue-500"
                            : "text-muted-foreground hover:text-foreground",
                        ].join(" ")}
                        style={{
                          fontFamily:
                            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        }}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                        {item.active && (
                          <motion.span
                            className="pointer-events-none absolute -bottom-3 left-0 right-0 mx-auto h-0.5 
                                   bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.3, ease: easeOut }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Theme toggle */}
                <motion.button
                  onClick={toggleDarkMode}
                  className="p-2.5 rounded-full bg-accent/40 hover:bg-accent/60 backdrop-blur-sm border border-border/50 transition-all"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.45, ease: easeOut }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 12,
                    boxShadow: "0 4px 12px rgba(59,130,246,0.15)",
                  }}
                  whileTap={{ scale: 0.92 }}
                  aria-label="Toggle theme"
                  title="Toggle theme"
                >
                  {darkMode ? (
                    <Sun size={18} className="text-amber-500" />
                  ) : (
                    <Moon size={18} className="text-blue-500" />
                  )}
                </motion.button>
              </motion.div>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Small-screen top bar — always rendered */}
      <header className="md:hidden">
        <div className="w-full px-4 sm:px-5 py-2 bg-background/90 backdrop-blur-xl border-b border-border flex items-center justify-between">
          {/* Compact brand: SM. */}
          <Link href="/" className="inline-flex items-center" aria-label="Home">
            <span
              className="text-lg font-extrabold tracking-tight"
              style={{
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              }}
            >
              <h3>
                <span className="text-foreground">S</span>
                <span className="text-blue-600 dark:text-blue-500">M</span>
                <span className="text-blue-600 dark:text-blue-500">.</span>
              </h3>
            </span>
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggleDarkMode}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent/60 backdrop-blur-sm text-foreground hover:bg-accent transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {darkMode ? (
              <Sun size={18} className="text-amber-500" />
            ) : (
              <Moon size={18} className="text-blue-500" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Bottom Navigation — unchanged */}
      <motion.div
        className="md:hidden fixed bottom-3 left-0 right-0 z-[12] flex justify-center px-4"
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: showBottomNav ? 0 : 100,
          opacity: showBottomNav ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: easeOut }}
      >
        <nav
          className="
          relative rounded-2xl px-2.5 py-2
          bg-background/80 backdrop-blur-xl
          border border-border/60 ring-1 ring-white/10
          shadow-[0_12px_35px_-10px_rgba(0,0,0,0.35)]
        "
        >
          {/* Ambient gradient glow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-purple-500/10" />

          {/* Tabs row */}
          <ul className="relative flex items-center gap-1">
            {[
              { href: "/", icon: Home, label: "Home" },
              { href: "/projects", icon: Code, label: "Projects" },
              { href: "/skills", icon: User, label: "Skills" },
              { href: "/Resume", icon: FileText, label: "Resume" },
            ].map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={[
                      "relative group inline-flex items-center justify-center",
                      "size-10 rounded-xl transition-all",
                      active
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-muted-foreground hover:text-foreground",
                    ].join(" ")}
                  >
                    {/* Active background pill */}
                    {active && (
                      <span
                        className="
                        absolute inset-0 rounded-xl
                        bg-blue-500/10 border border-blue-500/20
                        shadow-[0_8px_18px_-10px_rgba(59,130,246,0.55)]
                      "
                      />
                    )}

                    {/* Icon */}
                    <Icon
                      className={[
                        "relative z-10 transition-transform duration-150",
                        active ? "scale-110" : "group-active:scale-95",
                      ].join(" ")}
                      size={20}
                    />

                    {/* Under-glow dot on active */}
                    {active && (
                      <span
                        className="
                        absolute -bottom-1 h-1.5 w-1.5 rounded-full
                        bg-gradient-to-r from-blue-500 to-indigo-500
                        shadow-[0_0_9px_2px_rgba(59,130,246,0.55)]
                      "
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Subtle top notch effect */}
          <div
            className="
            pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2
            h-2 w-20 rounded-b-2xl
            bg-gradient-to-b from-white/10 to-transparent
          "
          />
        </nav>
      </motion.div>
    </>
  );
}
