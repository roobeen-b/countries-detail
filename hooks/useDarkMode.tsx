import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);

      if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme);
      }
    }
  }, [theme]);

  return [colorTheme, setTheme] as const;
};
