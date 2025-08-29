"use client";

import {motion} from "framer-motion";
import {useState} from "react";
import Tilt from "react-parallax-tilt";

type FormFields = "name" | "email" | "mobile" | "message";

const fields: FormFields[] = ["name", "email", "mobile"];

const errorMessages: Record<FormFields, string> = {
  name: "Please enter your full name.",
  email: "Please enter a valid email.",
  mobile: "Please enter a 10-digit phone number.",
  message: "Please provide a message.",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<FormFields | "message", string>>
  >({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    const sanitizedValue = name === "mobile" ? value.replace(/\D/g, "") : value;

    setFormData((prev) => ({...prev, [name]: sanitizedValue}));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => {
        const copy = {...prev};
        delete copy[name as keyof typeof errors];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) newErrors.name = errorMessages.name;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = errorMessages.email;
    if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = errorMessages.mobile;
    if (!formData.message.trim()) newErrors.message = errorMessages.message;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.errors || {});
        setStatus("Validation failed");
      } else {
        setStatus("Your message has been sent successfully!");
        setFormData({name: "", email: "", mobile: "", message: ""});
        setErrors({});
      }
    } catch {
      setStatus("Error sending message, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-br from-white to-gray-100 dark:from-neutral-900 dark:to-black overflow-hidden"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{opacity: 0, y: 60}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.8}}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 animate-gradient">
          Contact Me
        </h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Have a project or want to work together?
        </p>

        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          glareEnable
          glareMaxOpacity={0.15}
          scale={1.02}
          transitionSpeed={1500}
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{opacity: 0, scale: 0.95}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{delay: 0.3, duration: 0.6}}
            className="bg-white/20 dark:bg-white/5 p-6 sm:p-8 rounded-xl shadow-xl backdrop-blur-sm border border-white/20 dark:border-white/10 space-y-6 text-left"
            noValidate
          >
            {fields.map((field, idx) => (
              <motion.div
                key={field}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.4 + idx * 0.1}}
                className="flex flex-col"
              >
                <label
                  htmlFor={field}
                  className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  id={field}
                  type={
                    field === "email"
                      ? "email"
                      : field === "mobile"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  maxLength={field === "mobile" ? 10 : undefined}
                  pattern={field === "mobile" ? "\\d{10}" : undefined}
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                  aria-invalid={!!errors[field]}
                  aria-describedby={`${field}-error`}
                  className={`w-full px-4 py-2 rounded bg-gray-100 dark:bg-neutral-800 border ${
                    errors[field]
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-neutral-600 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2 transition-transform duration-200 hover:scale-[1.02]`}
                />
                {errors[field] && (
                  <motion.span
                    id={`${field}-error`}
                    initial={{opacity: 0, y: -5}}
                    animate={{opacity: 1, y: 0}}
                    className="text-red-500 text-sm mt-1"
                    role="alert"
                  >
                    {errors[field]}
                  </motion.span>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay: 0.7}}
              className="flex flex-col"
            >
              <label
                htmlFor="message"
                className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or message"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
                className={`w-full px-4 py-2 rounded bg-gray-100 dark:bg-neutral-800 border ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-neutral-600 focus:ring-blue-500"
                } focus:outline-none focus:ring-2 transition-transform duration-200 hover:scale-[1.02] resize-none`}
              />
              {errors.message && (
                <motion.span
                  id="message-error"
                  initial={{opacity: 0, y: -5}}
                  animate={{opacity: 1, y: 0}}
                  className="text-red-500 text-sm mt-1"
                  role="alert"
                >
                  {errors.message}
                </motion.span>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{scale: 1.03}}
              whileTap={{scale: 0.95}}
              className={`w-full py-2 rounded text-white transition ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
              aria-busy={loading}
            >
              {loading ? "Sending Message..." : "Send Meassage"}
            </motion.button>

            {status && (
              <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                className={`mt-4 text-center ${
                  status.toLowerCase().includes("error")
                    ? "text-red-500"
                    : "text-green-600 dark:text-green-400"
                }`}
                role="status"
              >
                {status}
              </motion.p>
            )}
          </motion.form>
        </Tilt>
      </motion.div>
    </section>
  );
}
