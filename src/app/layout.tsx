import "./globals.css";
import {Geist, Geist_Mono} from "next/font/google";
import {ThemeProvider} from "@/lib/context/ThemeContext";
import {BgThemeProvider} from "@/lib/context/BgThemeContext";
import {TextThemeProvider} from "@/lib/context/TextThemeContext";
import {FontThemeProvider} from "@/lib/context/FontThemeContext";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap", // 🧠 Ensures text is visible during font load
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata = {
  title: "Dileep | Developer Portfolio",
  description: "Full‑stack web & mobile developer",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} bg-[#f8fafc] dark:bg-[#0f172a] text-gray-800 dark:text-gray-100 min-h-screen overflow-auto shadow-md scroll-smooth hide-scrollbar`}
      >
        <ThemeProvider>
          <BgThemeProvider>
            <TextThemeProvider>
              <FontThemeProvider>{children}</FontThemeProvider>
            </TextThemeProvider>
          </BgThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
