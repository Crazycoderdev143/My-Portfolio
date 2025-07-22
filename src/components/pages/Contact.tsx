// import React from "react";
// import { IconParticles2 } from "../Animations/IconParticlesCanva";

// const Contact: React.FC = () => {
//   return (
//     <section
//       id="contact"
//       className="py-20 bg-white dark:bg-neutral-900"
//     >
//       <IconParticles2 />

//       <div className="max-w-xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Me</h2>
//         <p className="mb-6 text-gray-700 dark:text-gray-300">
//           Have a project or want to work together?
//         </p>
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600"
//           />
//           <textarea
//             placeholder="Message"
//             rows={4}
//             className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600"
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

"use client";

import React, {useState} from "react";
import {motion} from "framer-motion";
import dynamic from "next/dynamic";
import {IconParticles3} from "../Animations/IconParticles3";
import {FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({name: "", email: "", message: ""});
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-blue-50 via-cyan-100 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 overflow-hidden"
    >
      {/* <IconParticles3 /> */}

      <div className="relative z-10 max-w-xl mx-auto px-4 text-center">
        <motion.h2
          initial={{opacity: 0, y: -30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, ease: "easeOut"}}
          viewport={{once: true}}
          className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-cyan-400 mb-6"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{opacity: 0, y: 10}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          viewport={{once: true}}
          className="mb-6 text-gray-700 dark:text-gray-300"
        >
          Have a project or want to work together?
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.3}}
          viewport={{once: true}}
          className="space-y-6 text-left"
        >
          {[
            {label: "Name", name: "name", type: "text"},
            {label: "Email", name: "email", type: "email"},
          ].map(({label, name, type}) => (
            <div
              key={name}
              className="relative"
            >
              <input
                type={type}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                required
                className="peer w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-transparent"
                placeholder={label}
              />
              <label
                htmlFor={name}
                className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-cyan-600"
              >
                {label}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              required
              className="peer w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-transparent"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-cyan-600"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-cyan-600 text-white py-3 rounded-xl font-semibold hover:bg-cyan-700 transition-all duration-300 disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        <motion.div
          className="flex justify-center gap-6 mt-10 text-xl text-cyan-600 dark:text-cyan-400"
          initial={{opacity: 0, y: 10}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.4}}
          viewport={{once: true}}
        >
          <a
            href="mailto:your.email@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="hover:text-cyan-800 transition" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-cyan-800 transition" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-cyan-800 transition" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
