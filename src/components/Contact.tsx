import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-neutral-900"
    >
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Me</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Have a project or want to work together?
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
