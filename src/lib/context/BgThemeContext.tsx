"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useRef,
} from "react";
import {animatedGradientBackgrounds} from "@/components/ui/animatedGradientBackgrounds";

interface BgThemeContextType {
  currentBgClass: string;
  setThemeIndex: (index: number) => void;
  themeIndex: number;
}

const BgThemeContext = createContext<BgThemeContextType | undefined>(undefined);

export const BgThemeProvider = ({children}: {children: ReactNode}) => {
  const [themeIndex, setThemeIndex] = useState(0);
  const isManuallyOverridden = useRef(false);

  // Load from localStorage initially
  useEffect(() => {
    const storedIndex = localStorage.getItem("bg-theme-index");
    if (storedIndex !== null) {
      setThemeIndex(parseInt(storedIndex));
    }
  }, []);

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bg-theme-index", themeIndex.toString());
  }, [themeIndex]);

  // Auto-switch every 8 seconds (if not manually overridden recently)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isManuallyOverridden.current) {
        setThemeIndex(
          (prev) => (prev + 1) % animatedGradientBackgrounds.length
        );
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Manual override resets the auto timer
  const handleSetThemeIndex = (index: number) => {
    setThemeIndex(index);
    isManuallyOverridden.current = true;

    // Resume auto-rotate after 30 seconds
    setTimeout(() => {
      isManuallyOverridden.current = false;
    }, 30000);
  };

  return (
    <BgThemeContext.Provider
      value={{
        currentBgClass: animatedGradientBackgrounds[themeIndex],
        setThemeIndex: handleSetThemeIndex,
        themeIndex,
      }}
    >
      {children}
    </BgThemeContext.Provider>
  );
};

export const useBgTheme = () => {
  const context = useContext(BgThemeContext);
  if (!context) {
    throw new Error("useBgTheme must be used within a BgThemeProvider");
  }
  return context;
};
