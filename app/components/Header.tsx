"use client";
import { Sun, Moon, Home, User, FileText, Code, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const navItems = [
    { href: "/", icon: Home, label: "HOME", active: pathname === "/" },
    { href: "/projects", icon: Code, label: "PROJECTS", active: pathname === "/projects" },
    { href: "/skills", icon: User, label: "SKILLS", active: pathname === "/skills" },
    { href: "/resume", icon: FileText, label: "RESUME", active: pathname === "/resume" },
    { href: "/certifications", icon: GraduationCap, label: "CERTIFICATIONS", active: pathname === "/certifications" },
  ];

  // Match footer font
  const brandStyle: React.CSSProperties = {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        className="hidden md:block fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Brand: Shashank + Mishra(blue) + midline dot(blue), no space before dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
          >
            <Link href="/" className="inline-flex items-center" aria-label="Home">
              <span className="text-xl font-extrabold tracking-tight" style={brandStyle}>
                <span className="text-foreground">Shashank </span>
                <span className="text-blue-600 dark:text-blue-500">Mishra</span>
                <span className="text-blue-600 dark:text-blue-500">·</span>
              </span>
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 ${
                    item.active
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-muted-foreground hover:text-foreground"
                  } transition-colors font-medium`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-accent rounded-full transition-colors"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </motion.div>
        </nav>
      </motion.header>

      {/* Mobile Header */}
      <motion.header
        className="md:hidden fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="px-6 py-4 flex items-center justify-between">
          {/* Brand: S + M(blue) + midline dot(blue), no space before dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
          >
            <Link href="/" className="inline-flex items-center" aria-label="Home">
              <span className="text-xl font-extrabold tracking-tight" style={brandStyle}>
                <span className="text-foreground">S</span>
                <span className="text-blue-600 dark:text-blue-500">M</span>
                <span className="text-blue-600 dark:text-blue-500">·</span>
              </span>
            </Link>
          </motion.div>

          <motion.button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-accent rounded-full transition-colors"
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Bottom Navigation (icons only) */}
      <motion.nav
        className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="flex items-center justify-around py-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-1 p-3 ${
                  item.active
                    ? "text-blue-500 hover:text-blue-600"
                    : "text-muted-foreground hover:text-foreground"
                } transition-colors`}
                aria-label={item.label}
                title={item.label}
              >
                <item.icon className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </>
  );
}
