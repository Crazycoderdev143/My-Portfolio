import "./globals.css";
import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";
import {ThemeProvider} from "@/lib/context/ThemeContext";
import {BgThemeProvider} from "@/lib/context/BgThemeContext";
import {TextThemeProvider} from "@/lib/context/TextThemeContext";
import {FontThemeProvider} from "@/lib/context/FontThemeContext";


export const metadata = {
  title: "Dileep | Developer Portfolio",
  description: "Full‑stack web & mobile developer",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} bg-[#f8fafc] dark:bg-[#0f172a] text-gray-800 dark:text-gray-100 min-h-screen overflow-auto shadow-md scroll-smooth hide-scrollbar`}
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
