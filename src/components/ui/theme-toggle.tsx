"use client";

import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check if user has saved preference
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark" || 
        (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      aria-label={isDarkMode ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      {isDarkMode ? (
        <SunIcon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
};
