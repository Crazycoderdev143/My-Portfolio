"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import {fontFamilies} from "@/components/ui/fontFamilies";

interface FontThemeContextType {
  currentFontClass: string;
  setFontThemeIndex: (index: number) => void;
  fontThemeIndex: number;
}

const FontThemeContext = createContext<FontThemeContextType | undefined>(
  undefined
);

export const FontThemeProvider = ({children}: {children: ReactNode}) => {
  const [fontThemeIndex, setFontThemeIndex] = useState(0);
  const isManuallyOverridden = useRef(false);

  useEffect(() => {
    const storedIndex = localStorage.getItem("font-theme-index");
    if (storedIndex !== null) {
      setFontThemeIndex(parseInt(storedIndex));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("font-theme-index", fontThemeIndex.toString());
  }, [fontThemeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isManuallyOverridden.current) {
        setFontThemeIndex((prev) => (prev + 1) % fontFamilies.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSetFontThemeIndex = (index: number) => {
    setFontThemeIndex(index);
    isManuallyOverridden.current = true;

    setTimeout(() => {
      isManuallyOverridden.current = false;
    }, 30000);
  };

  const value: FontThemeContextType = {
    currentFontClass: fontFamilies[fontThemeIndex],
    setFontThemeIndex: handleSetFontThemeIndex,
    fontThemeIndex,
  };

  return (
    <FontThemeContext.Provider value={value}>
      {children}
    </FontThemeContext.Provider>
  );
};

export const useFontTheme = () => {
  const context = useContext(FontThemeContext);
  if (!context) {
    throw new Error("useFontTheme must be used within a FontThemeProvider");
  }
  return context;
};
