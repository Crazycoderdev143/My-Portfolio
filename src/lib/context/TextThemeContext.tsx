"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import {animatedGradientTextColors} from "@/components/ui/animatedGradientTextColors"; // adjust path if needed

interface TextThemeContextType {
  currentTextClass: string;
  setTextThemeIndex: (index: number) => void;
  textThemeIndex: number;
}

const TextThemeContext = createContext<TextThemeContextType | undefined>(
  undefined
);

export const TextThemeProvider = ({children}: {children: ReactNode}) => {
  const [textThemeIndex, setTextThemeIndex] = useState(0);
  const isManuallyOverridden = useRef(false);

  // Load initial value from localStorage
  useEffect(() => {
    const storedIndex = localStorage.getItem("text-theme-index");
    if (storedIndex !== null) {
      setTextThemeIndex(parseInt(storedIndex));
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("text-theme-index", textThemeIndex.toString());
  }, [textThemeIndex]);

  // Auto-rotate every 8 seconds unless overridden
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isManuallyOverridden.current) {
        setTextThemeIndex(
          (prev) => (prev + 1) % animatedGradientTextColors.length
        );
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Manual override with delay reset
  const handleSetTextThemeIndex = (index: number) => {
    setTextThemeIndex(index);
    isManuallyOverridden.current = true;

    // Resume auto-switch after 30 seconds
    setTimeout(() => {
      isManuallyOverridden.current = false;
    }, 30000);
  };

  const value: TextThemeContextType = {
    currentTextClass: animatedGradientTextColors[textThemeIndex],
    setTextThemeIndex: handleSetTextThemeIndex,
    textThemeIndex,
  };

  return (
    <TextThemeContext.Provider value={value}>
      {children}
    </TextThemeContext.Provider>
  );
};

export const useTextTheme = () => {
  const context = useContext(TextThemeContext);
  if (!context) {
    throw new Error("useTextTheme must be used within a TextThemeProvider");
  }
  return context;
};
