"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Fix: Use useCallback to stabilize the applyTheme function
  const applyTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
    if (mounted) {
      localStorage.setItem("theme", newTheme);
    }
  }, [mounted]); // Add mounted as dependency since it's used inside

  useEffect(() => {
    setMounted(true);
    
    // Only access localStorage after mounting
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, [applyTheme]); // Now applyTheme is stable and can be safely included

  const handleSetTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  }, [applyTheme]); // Include applyTheme dependency

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    handleSetTheme(newTheme);
  }, [theme, handleSetTheme]); // Include all dependencies

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
