"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useRef,
} from "react";

import {ElectricFlowSparkles} from "@/components/Animations/ElectricFlowSparkles";
import {ElectricTrailCanvas} from "@/components/Animations/ElectricTrailCanvas";
import {ElectricTrailHeavy} from "@/components/Animations/ElectricTrailHeavy";
import {ElectricTrailWithNoise} from "@/components/Animations/ElectricTrailWithNoise";
import {ExplodingTrailCanvas} from "@/components/Animations/ExplodingTrailCanvas";
import {IconParticles} from "@/components/Animations/IconParticles";
import {IconParticles3} from "@/components/Animations/IconParticles3";
import {IconParticlesCanva} from "@/components/Animations/IconParticlesCanva";
import {SparklesCore} from "@/components/Animations/Sparkles";

export const animationComponents = [
  {name: "Flow Sparkles", Comp: ElectricFlowSparkles},
  {name: "Trail Canvas", Comp: ElectricTrailCanvas},
  {name: "Trail Heavy", Comp: ElectricTrailHeavy},
  {name: "Trail With Noise", Comp: ElectricTrailWithNoise},
  {name: "Exploding Trail", Comp: ExplodingTrailCanvas},
  {name: "Icon Particles", Comp: IconParticles},
  {name: "Icon Particles 3", Comp: IconParticles3},
  {name: "Icon Particles Canva", Comp: IconParticlesCanva},
  {name: "Sparkles Core", Comp: SparklesCore},
];

interface AnimationThemeContextType {
  animationIndex: number;
  setAnimationIndex: (index: number) => void;
  CurrentAnimation: React.ComponentType<any>;
}

const AnimationThemeContext = createContext<
  AnimationThemeContextType | undefined
>(undefined);

export const AnimationThemeProvider = ({children}: {children: ReactNode}) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const isManuallyOverridden = useRef(false);

  // Load saved animation index
  useEffect(() => {
    const stored = localStorage.getItem("animation-theme-index");
    if (stored) setAnimationIndex(parseInt(stored));
  }, []);

  // Save to storage
  useEffect(() => {
    localStorage.setItem("animation-theme-index", animationIndex.toString());
  }, [animationIndex]);

  // Auto-cycle every 10s (if not overridden)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isManuallyOverridden.current) {
        setAnimationIndex((prev) => (prev + 1) % animationComponents.length);
      }
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  // Manual selection
  const handleSetAnimationIndex = (index: number) => {
    setAnimationIndex(index);
    isManuallyOverridden.current = true;

    // Resume auto after 30s
    setTimeout(() => {
      isManuallyOverridden.current = false;
    }, 30000);
  };

  const CurrentAnimation = animationComponents[animationIndex].Comp;

  return (
    <AnimationThemeContext.Provider
      value={{
        animationIndex,
        setAnimationIndex: handleSetAnimationIndex,
        CurrentAnimation,
      }}
    >
      {children}
    </AnimationThemeContext.Provider>
  );
};

export const useAnimationTheme = () => {
  const ctx = useContext(AnimationThemeContext);
  if (!ctx)
    throw new Error(
      "useAnimationTheme must be used inside AnimationThemeProvider"
    );
  return ctx;
};
