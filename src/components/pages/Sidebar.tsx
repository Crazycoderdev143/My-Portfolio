"use client";

import {motion} from "framer-motion";
import {useState, useEffect, useRef} from "react";
import {useThemeContext} from "@/lib/context/ThemeContext";
import {useBgTheme} from "@/lib/context/BgThemeContext";
import {useTextTheme} from "@/lib/context/TextThemeContext";
import {Sun, Moon, Monitor, Snowflake, Cog, Zap} from "lucide-react";
import {animatedGradientBackgrounds} from "@/components/ui/animatedGradientBackgrounds";
import {animatedGradientTextColors} from "@/components/ui/animatedGradientTextColors";

export default function Sidebar() {
  const {themeIndex, setThemeIndex} = useBgTheme();
  const {textThemeIndex, setTextThemeIndex} = useTextTheme();

  const [open, setOpen] = useState(false);
  const {theme, setTheme} = useThemeContext();
  const panelRef = useRef<HTMLDivElement>(null);
  const [sidebarWidth, setSidebarWidth] = useState(320);

  // 📏 Measure sidebar width
  useEffect(() => {
    const updateWidth = () => {
      if (panelRef.current) {
        setSidebarWidth(panelRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // ❌ Close sidebar on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        open &&
        panelRef.current &&
        !panelRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    if (open) window.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <>
      <motion.aside
        ref={panelRef}
        initial={false}
        animate={{x: open ? 0 : -sidebarWidth}}
        transition={{type: "spring", stiffness: 260, damping: 25}}
        className="fixed inset-y-0 left-0 z-40 w-72 sm:w-80 border-r border-white/10
          bg-[#0f172a]/90 backdrop-blur-lg shadow-2xl text-white"
      >
        <div className="space-y-6 p-4">
          <Section title="Colors">
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              {animatedGradientTextColors.map((txt, idx) => (
                <button
                  key={idx}
                  onClick={() => setTextThemeIndex(idx)}
                  className={`flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-white/20 hover:scale-110 transition-transform duration-300 shadow-lg ${
                    idx === textThemeIndex ? "ring-4 ring-white" : ""
                  }`}
                  aria-label={`Text Theme ${idx + 1}`}
                >
                  <span className={`text-sm font-semibold ${txt}`}>Aa</span>
                </button>
              ))}
            </div>
          </Section>

          <Section title="Bg-Colors">
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              {animatedGradientBackgrounds.map((bg, idx) => (
                <button
                  key={idx}
                  onClick={() => setThemeIndex(idx)}
                  className={`h-6 w-6 rounded-full ring-2 ring-white/20 hover:scale-110 transition-transform duration-300 shadow-lg ${bg} ${
                    idx === themeIndex ? "ring-4 ring-white" : ""
                  }`}
                  aria-label={`Theme ${idx + 1}`}
                />
              ))}
            </div>
          </Section>
          <Section title="Switch Theme">
            <ButtonRow
              icon={<Moon size={20} />}
              label="Dark"
              active={theme === "dark"}
              onClick={() => setTheme("dark")}
            />
            <ButtonRow
              icon={<Sun size={20} />}
              label="Light"
              active={theme === "light"}
              onClick={() => setTheme("light")}
            />
            <ButtonRow
              icon={<Monitor size={20} />}
              label="Device"
              active={theme === "device"}
              onClick={() => setTheme("device")}
            />
          </Section>

          <Section title="Advanced Theme">
            <ButtonRow
              icon={<Zap size={20} />}
              label="Random"
            />
            <ButtonRow
              icon={<Snowflake size={20} />}
              label="Winter"
            />
            <ButtonRow
              icon={<Cog size={20} />}
              label="Skills"
            />
            <ButtonRow
              icon={<Cog size={20} />}
              label="Simple"
            />
          </Section>
        </div>
      </motion.aside>

      {/* TOGGLE BUTTON */}
      <motion.button
        aria-label="Toggle theme drawer"
        onClick={() => setOpen(!open)}
        initial={false}
        animate={{x: open ? sidebarWidth : 0}}
        transition={{type: "spring", stiffness: 260, damping: 20}}
        className="fixed top-1/2 left-0 -translate-y-1/2 z-50 p-3 rounded-full
          bg-gradient-to-br from-pink-500 to-indigo-500 text-white shadow-2xl
          ring-2 ring-white/30 backdrop-blur-md hover:scale-110 active:scale-95
          transition-all duration-300 ease-in-out"
      >
        <motion.svg
          initial={false}
          animate={{rotate: open ? 180 : 0, x: open ? 6 : 0}}
          transition={{type: "spring", stiffness: 300, damping: 20}}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M4 12h16m-7-7 7 7-7 7" />
        </motion.svg>
      </motion.button>
    </>
  );
}

// ─── Section Component ───
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3 rounded-lg border border-white/10 p-4">
      <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
        {title}
      </h3>
      {children}
    </div>
  );
}

// ─── Button Row Component ───
function ButtonRow({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ReactElement;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between w-full py-1 text-left transition ${
        active ? "text-pink-400 font-semibold" : "hover:text-pink-400"
      }`}
    >
      <span className="pl-1">{label}</span>
      {icon}
    </button>
  );
}
