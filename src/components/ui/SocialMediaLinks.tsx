// // // components/SocialMediaLinks.tsx
// // "use client";

// // import React from "react";
// // import {motion} from "framer-motion";
// // import "boxicons/css/boxicons.min.css";

// // interface SocialLink {
// //   href: string;
// //   icon: string;
// //   animation: string;
// //   delay: number;
// //   className: string;
// // }

// // const links: SocialLink[] = [
// //   {
// //     href: "https://www.linkedin.com/in/dileep-nishad-61b559308",
// //     icon: "bxl-linkedin",
// //     animation: "slide-down",
// //     delay: 11,
// //     className: "in",
// //   },
// //   {
// //     href: "https://www.instagram.com/dileep_nishad01",
// //     icon: "bxl-instagram",
// //     animation: "slide-up",
// //     delay: 12,
// //     className: "insta",
// //   },
// //   {
// //     href: "http://www.youtube.com/@dileepofficialtechtube",
// //     icon: "bxl-youtube",
// //     animation: "slide-left",
// //     delay: 13,
// //     className: "yt",
// //   },
// //   {
// //     href: "https://www.facebook.com/profile.php?id=61561259831318",
// //     icon: "bxl-facebook",
// //     animation: "slide-right",
// //     delay: 14,
// //     className: "fb",
// //   },
// //   {
// //     href: "https://github.com/dileep143184",
// //     icon: "bxl-github",
// //     animation: "slide-down",
// //     delay: 15,
// //     className: "tw",
// //   },
// // ];

// // export const SocialMediaLinks = () => {
// //   return (
// //     <div className="relative my-5 w-[230px] flex justify-between">
// //       Click Here
// //       <a className="animate-slide-up">Test</a>
// //       {links.map((link, i) => (
// //         <a
// //           key={i}
// //           href={link.href}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           //   className={`relative w-10 h-10 border-2 border-lime-400 rounded-full flex justify-center items-center text-xl text-white shadow-[0_0_10px_cyan] transition duration-500 opacity-0 animate-${link.animation}`}
// //           className="relative w-10 h-10 border-2 border-lime-400 rounded-full flex justify-center items-center text-xl text-white shadow-[0_0_10px_cyan] transition duration-500 animate-slide-up"
// //           style={{
// //             animationDelay: `${0.2 * link.delay}s`,
// //             animationFillMode: "forwards",
// //           }}
// //         >
// //           <i
// //             className={`bx ${link.icon}`}
// //             style={{
// //               animation: `icon-${link.animation} 1s ease forwards`,
// //               animationDelay: `${0.2 * (link.delay + 5)}s`,
// //               opacity: 0,
// //             }}
// //           />
// //         </a>
// //       ))}
// //     </div>
// //   );
// // };


// // components/SocialMediaLinks.tsx
// "use client";

// import React from "react";
// import "boxicons/css/boxicons.min.css";

// interface SocialLink {
//   href: string;
//   icon: string;
//   animation: string;
//   delay: number;
// }

// const links: SocialLink[] = [
//   {
//     href: "https://www.linkedin.com/in/dileep-nishad-61b559308",
//     icon: "bxl-linkedin",
//     animation: "animate-slide-down",
//     delay: 0.2,
//   },
//   {
//     href: "https://www.instagram.com/dileep_nishad01",
//     icon: "bxl-instagram",
//     animation: "animate-slide-up",
//     delay: 0.4,
//   },
//   {
//     href: "http://www.youtube.com/@dileepofficialtechtube",
//     icon: "bxl-youtube",
//     animation: "animate-slide-left",
//     delay: 0.6,
//   },
//   {
//     href: "https://www.facebook.com/profile.php?id=61561259831318",
//     icon: "bxl-facebook",
//     animation: "animate-slide-right",
//     delay: 0.8,
//   },
//   {
//     href: "https://github.com/dileep143184",
//     icon: "bxl-github",
//     animation: "animate-slide-down",
//     delay: 1.0,
//   },
// ];

// export const SocialMediaLinks = () => {
//   return (
//     <div className="flex gap-4 flex-wrap w-[230px] my-6 justify-between">
//       {links.map((link, i) => (
//         <a
//           key={i}
//           href={link.href}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`w-10 h-10 border-2 border-lime-400 rounded-full flex justify-center items-center text-xl text-white shadow-[0_0_10px_cyan] transition duration-500 hover:border-cyan-400 hover:bg-cyan-400 hover:shadow-[0_0_5px_cyan,0_0_25px_cyan,0_0_50px_cyan,0_0_100px_cyan] ${link.animation}`}
//           style={{
//             animationDelay: `${link.delay}s`,
//             animationFillMode: "forwards",
//             opacity: 0,
//           }}
//         >
//           <i className={`bx ${link.icon}`} />
//         </a>
//       ))}
//     </div>
//   );
// };


// components/SocialMediaLinks.tsx
"use client";

import React from "react";
import "boxicons/css/boxicons.min.css";

interface SocialLink {
  href: string;
  icon: string;
  containerAnimation: string;
  iconAnimation: string;
  delay: number;
}

const links: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/dileep-nishad-61b559308",
    icon: "bxl-linkedin",
    containerAnimation: "animate-slide-down",
    iconAnimation: "animate-icon-slide-up",
    delay: 0.2,
  },
  {
    href: "https://www.instagram.com/dileep_nishad01",
    icon: "bxl-instagram",
    containerAnimation: "animate-slide-up",
    iconAnimation: "animate-icon-slide-down",
    delay: 0.4,
  },
  {
    href: "http://www.youtube.com/@dileepofficialtechtube",
    icon: "bxl-youtube",
    containerAnimation: "animate-slide-left",
    iconAnimation: "animate-icon-slide-right",
    delay: 0.6,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61561259831318",
    icon: "bxl-facebook",
    containerAnimation: "animate-slide-right",
    iconAnimation: "animate-icon-slide-left",
    delay: 0.8,
  },
  {
    href: "https://github.com/dileep143184",
    icon: "bxl-github",
    containerAnimation: "animate-slide-down",
    iconAnimation: "animate-icon-slide-up",
    delay: 1.0,
  },
];

export const SocialMediaLinks = () => {
  return (
    <div className="flex gap-4 flex-wrap w-[230px] my-6 justify-between">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 border-2 border-lime-400 rounded-full flex justify-center items-center text-xl text-white shadow-[0_0_10px_cyan] transition duration-500 hover:border-cyan-400 hover:bg-cyan-400 hover:shadow-[0_0_5px_cyan,0_0_25px_cyan,0_0_50px_cyan,0_0_100px_cyan] ${link.containerAnimation}`}
          style={{
            animationDelay: `${link.delay}s`,
            animationFillMode: "forwards",
            opacity: 0,
          }}
        >
          <i
            className={`bx ${link.icon} ${link.iconAnimation}`}
            style={{
              animationDelay: `${link.delay + 0.1}s`,
              animationFillMode: "forwards",
              opacity: 0,
            }}
          />
        </a>
      ))}
    </div>
  );
};
